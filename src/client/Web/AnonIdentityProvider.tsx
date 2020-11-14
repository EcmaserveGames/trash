import { h, Component } from 'preact'
import { Identity, IdentityContext } from '../Identity/Context'

type State = Identity<string>

export class IdentityContextProvider extends Component<{}, State> {
  private storageKey = 'ANON_IDENTITY'

  constructor(props: {}) {
    super(props)
    this.state = this.getInitialStateFromStorage()
  }

  render() {
    return (
      <IdentityContext.Provider
        value={{
          canChange: true,
          ...this.state,
          identified: this.identified,
          setIdentity: this.setIdentity,
        }}
      >
        {this.props.children}
      </IdentityContext.Provider>
    )
  }

  private getInitialStateFromStorage = () => {
    const stored = localStorage.getItem(this.storageKey)
    if (!stored) return {}

    const parsed: State = JSON.parse(stored)
    if (!parsed.name || !parsed.sub) {
      return {}
    }
    return parsed
  }

  private identified = () => !!this.state.name && !!this.state.authentication

  private setIdentity = (identity: Identity<any>) =>
    this.setState(identity, this.persistStateToStorage)

  private persistStateToStorage = () => {
    localStorage.setItem(this.storageKey, JSON.stringify(this.state))
  }
}
