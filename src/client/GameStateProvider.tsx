import { h, Component } from 'preact'
import { IState } from '../server/types'
import { GameContext } from './GameContext'
import { GameResponse } from '@ecmaservegames/host'
import { GameClient } from './Client'

interface Props {
  gameId?: string
}

interface State {
  gameId?: string
  gameState?: IState
  gameClient?: GameClient
}

export class GameStateProvider extends Component<Props, State> {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <GameContext.Provider
        value={{
          gameId: this.state.gameId,
          openANewGameSession: this.openANewGameSession,
          gameState: this.state.gameState,
          gameClient: this.state.gameClient,
        }}
      >
        <div>{this.props.children}</div>
      </GameContext.Provider>
    )
  }

  async componentDidMount() {
    if (this.props.gameId) {
      try {
        const response = await fetch(`/games/${this.props.gameId}`, {
          method: 'GET',
        })
        const game: GameResponse = await response.json()
        this.connectToGame(game)
      } catch (error) {
        console.error(error)
      }
    }
  }

  componentWillUnmount() {
    this.state.gameClient?.destroy()
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
    const client = GameClient.create(game)
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
