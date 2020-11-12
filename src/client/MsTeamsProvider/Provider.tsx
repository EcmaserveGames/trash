import { h, Component } from 'preact'
import { MsTeamsContext } from './index'
import { getContext, Context, authentication } from '@microsoft/teams-js'

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
  idToken: string
}

export class MsTeamsContextProvider extends Component<{}, State> {
  state: State = {
    ctx: { locale: '', entityId: '' },
    idToken: '',
  }

  render() {
    return (
      <MsTeamsContext.Provider value={this.state}>
        {this.props.children}
      </MsTeamsContext.Provider>
    )
  }

  componentDidMount() {
    getContext((ctx) =>
      this.setState(
        {
          ctx,
        },
        () => console.log('tab context', this.state)
      )
    )
  }

  async componentDidUpdate(_: {}, prevState: State) {
    if (prevState.ctx.tid || !this.state.ctx.tid) return

    const inLogin = location.hash.match(/\#login/)
    const aadState = localStorage.getItem('aad_state')
    const completeLogin = aadState && location.hash.includes(aadState)
    if (inLogin) {
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
    } else if (completeLogin) {
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
    } else {
      const silentWay = new Promise<string>((resolve, reject) => {
        authentication.getAuthToken({
          successCallback: resolve,
          failureCallback: reject,
        })
      })
      try {
        const idToken = await silentWay
        console.log('i have an id token', idToken)
        this.setState({ idToken })
      } catch (_) {
        authentication.authenticate({
          url: location.origin + '#login',
          successCallback: (response: any) => {
            const { idToken } = response as { idToken: string }
            this.setState({ idToken })
          },
          failureCallback: console.log,
        })
      }
    }
  }
}
