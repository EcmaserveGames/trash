import { h, Component } from 'preact'
import { IState } from '../server/types'
import { GameContext } from './GameContext'
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
  identityToken?: string
}

export class GameStateProvider extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      identityToken: localStorage.getItem('identity') || undefined,
    }
  }

  render() {
    const notIdentified = this.props.gameId && !this.state.identityToken
    return (
      <GameContext.Provider
        value={{
          gameId: this.state.gameId,
          openANewGameSession: this.openANewGameSession,
          setIdentityToken: this.setIdentityToken,
          getIdentityToken: () => this.state.identityToken,
          gameState: this.state.gameState,
          gameClient: this.state.gameClient,
        }}
      >
        <div>{notIdentified ? <ProvideName /> : this.props.children}</div>
      </GameContext.Provider>
    )
  }

  async componentDidMount() {
    if (this.props.gameId && this.state.identityToken) {
      this.tryConnectToGameById(this.props.gameId)
    }
  }

  componentDidUpdate(_: Props, prevState: State) {
    if (
      this.props.gameId &&
      !prevState.identityToken &&
      this.state.identityToken
    ) {
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

  setIdentityToken = (token: string) => {
    console.log('identified as ', token)
    localStorage.setItem('identity', token)
    this.setState({ identityToken: token })
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
    const client = GameClient.create(game, this.state.identityToken)

    window.document.title = 'Trash | ' + game.id
    location.href = '#' + game.id
    history.pushState({ identity: this.state.identityToken }, 'Game-' + game.id)

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
