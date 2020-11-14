import { h, Component, ComponentChildren } from 'preact'
import { IState } from '../server/types'
import { GameContext } from './GameContext'
import { GameResponse } from '@ecmaservegames/host'
import { GameClient } from './Client'
import { useIdentity } from './Identity/Context'

interface Props {
  authorizationHeader?: string
}

interface State {
  gameState?: IState
  gameClient?: GameClient
}

export class InnerGameStateProvider extends Component<Props, State> {
  render() {
    return (
      <GameContext.Provider
        value={{
          openANewGameSession: this.openANewGameSession,
          connectToGame: this.connectToGame,
          gameState: this.state.gameState,
          gameClient: this.state.gameClient,
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    )
  }

  componentWillUnmount() {
    this.state.gameClient?.destroy()
  }

  private openANewGameSession = async () => {
    try {
      const response = await fetch('/games', { method: 'POST' })
      const game: GameResponse = await response.json()
      return game.id
    } catch (error) {
      console.error(error)
      return
    }
  }

  private connectToGame = async (gameId: string) => {
    if (this.state.gameClient) {
      this.state.gameClient.destroy()
    }
    const game = await this.lookupGame(gameId)
    if (!game) throw new Error('Could not connect to game')

    const client = GameClient.create(game, this.props.authorizationHeader)

    client.onStateUpdate((gameState) => {
      this.setState({ gameState }, () => {
        console.log('State Updated: ', this.state)
      })
    })

    this.setState({
      gameClient: client,
    })

    client.joinGame()
  }

  private async lookupGame(gameId: string) {
    try {
      const response = await fetch(`/games/${gameId}`, {
        method: 'GET',
      })
      const game: GameResponse = await response.json()
      return game
    } catch (error) {
      console.error(error)
      Promise.resolve(undefined)
    }
  }
}

export const GameStateProvider = ({
  children,
}: {
  children?: ComponentChildren
}) => {
  const identity = useIdentity()
  return (
    <InnerGameStateProvider authorizationHeader={identity.authentication}>
      {children}
    </InnerGameStateProvider>
  )
}
