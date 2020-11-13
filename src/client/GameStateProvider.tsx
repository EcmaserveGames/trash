import { h, Component } from 'preact'
import { IState } from '../server/types'
import { GameContext, Identity } from './GameContext'
import { GameResponse } from '@ecmaservegames/host'
import { GameClient } from './Client'
import { ProvideName } from './TempIdentityProvider/ProvideName'

interface Props {
  gameId?: string
}

interface State {
  gameId?: string
  gameState?: IState
  gameClient?: GameClient
  identity?: Identity
}

export class GameStateProvider extends Component<Props, State> {
  constructor() {
    super()
    const identityStr = localStorage.getItem('identity')
    this.state = {
      identity: (identityStr && JSON.parse(identityStr)) || undefined,
    }
  }

  render() {
    const notIdentified = this.props.gameId && !this.state.identity
    return (
      <GameContext.Provider
        value={{
          gameId: this.state.gameId,
          openANewGameSession: this.openANewGameSession,
          setIdentity: this.setIdentityToken,
          getIdentity: () => this.state.identity,
          gameState: this.state.gameState,
          gameClient: this.state.gameClient,
        }}
      >
        <div>{notIdentified ? <ProvideName /> : this.props.children}</div>
      </GameContext.Provider>
    )
  }

  async componentDidMount() {
    if (this.props.gameId && this.state.identity) {
      this.tryConnectToGameById(this.props.gameId)
    }
  }

  componentDidUpdate(_: Props, prevState: State) {
    if (this.props.gameId && !prevState.identity && this.state.identity) {
      this.tryConnectToGameById(this.props.gameId)
    }
  }

  componentWillUnmount() {
    this.state.gameClient?.destroy()
  }

  async tryConnectToGameById(gameId: string) {
    try {
      const response = await fetch(`/games/${gameId}`, {
        method: 'GET',
      })
      const game: GameResponse = await response.json()
      this.connectToGame(game)
    } catch (error) {
      console.error(error)
    }
  }

  setIdentityToken = (token: Identity) => {
    console.log('identified as ', token)
    localStorage.setItem('identity', JSON.stringify(token))
    this.setState({ identity: token })
  }

  openANewGameSession = async () => {
    try {
      const response = await fetch('/games', { method: 'POST' })
      const game = await response.json()
      this.connectToGame(game)
    } catch (error) {
      console.error(error)
    }
  }

  connectToGame(game: GameResponse) {
    if (this.state.gameClient) {
      this.state.gameClient.destroy()
    }
    const idToken = this.state.identity?.idToken
    const authorization = idToken
      ? `Bearer ${idToken}`
      : `Anon ${this.state.identity?.sub}`
    const client = GameClient.create(game, authorization)

    window.document.title = 'Trash | ' + game.id
    location.hash = '#' + game.id

    client.onStateUpdate((gameState) => {
      this.setState({ gameState }, () => {
        console.log('State Updated: ', this.state)
      })
    })
    client.joinGame()
    this.setState({
      gameId: game.id,
      gameClient: client,
    })
  }
}
