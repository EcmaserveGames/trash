import { h, Component } from 'preact'
import { IState } from '../server/types'
import { GameContext } from './GameContext'
import * as Proto from '../proto/types'
import { blobToBuffer } from './blobToBuffer'

interface Props {
  stateSocketUrl?: string
}

interface State {
  gameState?: IState
}

export class GameStateProvider extends Component<{}, State> {
  actionSocket?: WebSocket
  stateSocket?: WebSocket

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <GameContext.Provider
        value={{
          startAGame: this.startAGame,
          gameState: this.state.gameState,
        }}
      >
        <div>{this.props.children}</div>
      </GameContext.Provider>
    )
  }

  startAGame = async () => {
    try {
      const response = await fetch('/games', { method: 'POST' })
      const game = await response.json()
      this.actionSocket = new WebSocket(
        `ws://${location.host}${game['relativePathActionsSocket']}`
      )

      this.stateSocket = new WebSocket(
        `ws://${location.host}${game['relativePathStateSocket']}`
      )
      console.log(this.stateSocket)

      this.stateSocket.addEventListener('open', (event) => {
        console.log('opened', event)
        this.stateSocket?.send('Hello?')
      })

      this.stateSocket.addEventListener('message', async (event) => {
        if (event.data instanceof Blob) {
          const buffer = await blobToBuffer(event.data)
          const gameState = Proto.ecmaserve.trash.State.decode(
            new Uint8Array(buffer)
          )
          this.setState({
            gameState,
          })
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
}
