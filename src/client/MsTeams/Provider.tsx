import { h, Component } from 'preact'
import { MsTeamsContext } from './Context'
import { getContext, Context, authentication } from '@microsoft/teams-js'
import { Identity, IdentityContext } from '../Identity/Context'
import jwtDecode from 'jwt-decode'

function randomString(length: number) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

interface State {
  ctx: Context
  identity: Identity<string>
}

export class MsTeamsContextProvider extends Component<{}, State> {
  state: State
  constructor(props: {}) {
    super(props)
    this.state = {
      ctx: { locale: '', entityId: '' },
      identity: {},
    }
  }

  render() {
    return (
      <MsTeamsContext.Provider value={this.state.ctx}>
        <IdentityContext.Provider
          value={{
            ...this.state.identity,
            identified: this.identified,
            setIdentity: () => {},
            canChange: false,
          }}
        >
          {!this.identified() ? 'SSO in progress...' : this.props.children}
        </IdentityContext.Provider>
      </MsTeamsContext.Provider>
    )
  }

  componentDidMount() {
    getContext((ctx) =>
      this.setState({
        ctx,
      })
    )
  }

  componentDidUpdate(_: {}, prevState: State) {
    if (prevState.ctx.tid || !this.state.ctx.tid) return

    this.onTeamsContext()
  }

  private onTeamsContext() {
    this.handleAuthentication()
  }

  private async handleAuthentication() {
    const inLogin = location.hash.match(/\#login/)
    const aadState = localStorage.getItem('aad_state')
    const completeLogin = aadState && location.hash.includes(aadState)
    if (inLogin) {
      this.initiateLogin()
      return
    } else if (completeLogin) {
      this.finalizeLogin()
    } else {
      let identityToken: string
      try {
        identityToken = await this.silentAuth()
      } catch (_) {
        identityToken = await this.popupAuth()
      }
      if (identityToken) {
        const claims =
          ((await jwtDecode(identityToken)) as
            | Record<string, string>
            | undefined) || {}

        this.setState({
          identity: {
            authentication: `Bearer ${identityToken}`,
            ...claims,
          },
        })
      }
    }
  }

  private initiateLogin = () => {
    const nonce = Math.ceil(Date.now() * Math.random())
    const state = randomString(32)
    localStorage.setItem('aad_state', state)
    const queryParams = {
      client_id: '378bfcce-7889-4c75-91d2-a725cd7965bc',
      response_type: 'id_token token',
      response_mode: 'fragment',
      scope: 'https://graph.microsoft.com/User.Read openid',
      redirect_uri: window.location.origin + '/app/',
      nonce,
      state,
      login_hint: this.context.loginHint,
    }
    let authorizeEndpoint =
      'https://login.microsoftonline.com/' +
      this.state.ctx.tid +
      '/oauth2/v2.0/authorize?' +
      Object.entries(queryParams)
        .map((entry) => entry.join('='))
        .join('&')
    window.location.assign(authorizeEndpoint)
    return
  }

  private finalizeLogin = () => {
    const params = location.hash
      .substring(1)
      .split('&')
      .map((pair) => pair.split('='))
      .reduce<Record<string, string>>((params, pair) => {
        params[pair[0]] = pair[1]
        return params
      }, {})
    authentication.notifySuccess({
      idToken: params['id_token'],
      accessToken: params['access_token'],
      tokenType: params['token_type'],
      expiresIn: params['expires_in'],
    } as any)
    return
  }

  private silentAuth = () =>
    new Promise<string>((resolve, reject) => {
      authentication.getAuthToken({
        successCallback: resolve,
        failureCallback: reject,
      })
    })
  private popupAuth = () =>
    new Promise<string>((resolve, reject) => {
      authentication.authenticate({
        url: location.origin + '#login',
        successCallback: (response: any) => {
          const { idToken } = response as { idToken: string }
          resolve(idToken)
        },
        failureCallback: reject,
      })
    })

  private identified = () => {
    console.log('am identified ', this.state.identity)
    return !!(this.state.identity.authentication && this.state.identity.sub)
  }
}
