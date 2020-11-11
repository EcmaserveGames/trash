import { h, Component } from 'preact'
import { useContext } from 'preact/hooks'
import { GameContext } from '../GameContext'
import { GameSocket, SocketStatus } from '../GameSocket'

interface Props {
  name: string
  socket: GameSocket
}

interface State {
  reconnectIn: number
}

export class SocketConnectionInfo extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const status = props.socket.status
    this.state = {
      reconnectIn: 0,
    }
    props.socket.onReconnectUpdate((waitLeft) => {
      this.setState({
        reconnectIn: waitLeft,
      })
    })
  }

  render() {
    return !!this.state.reconnectIn ? (
      <div>
        Reconnecting to {this.props.name} in {this.state.reconnectIn / 1000}{' '}
        seconds...{' '}
        <a href={window.location.hash} onClick={this.onConnectNow}>
          Connect Now
        </a>
      </div>
    ) : null
  }

  private onConnectNow = (evt: MouseEvent) => {
    this.props.socket.open()
    evt.preventDefault()
    evt.stopPropagation
  }
}

export function ConnectionInfo() {
  const context = useContext(GameContext)
  return (
    <div style={{ position: 'absolute', top: '5px', left: '5px', zIndex: 10 }}>
      {context.gameClient?.actionSocket && (
        <SocketConnectionInfo
          name="Actions Channel"
          socket={context.gameClient?.actionSocket}
        />
      )}
      {context.gameClient?.stateSocket && (
        <SocketConnectionInfo
          name="Game Viewer"
          socket={context.gameClient?.stateSocket}
        />
      )}
    </div>
  )
}
