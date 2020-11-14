import { Component, h } from 'preact'
import { RoutableProps } from 'preact-router'
import { GameContext } from '../../GameContext'
import { Dialog } from '../../Shared/Dialog'
import { useGameContext } from '../../useGameContext'
import { ensureIdentity } from './EnsureIdentity'
import { GameSession } from './GameSession'

interface State {
  loadingGame?: boolean
}

type Props = RoutableProps & {
  context: GameContext
  gameId?: string
}

class RoutedGameLobby extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.tryJoinGame()
  }

  render() {
    if (!this.props.gameId) {
      return <Dialog>Unable to retreive game</Dialog>
    }
    if (!this.props.context.gameClient) {
      return <Dialog>Connecting ... </Dialog>
    }
    return <GameSession gameId={this.props.gameId} />
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.gameId !== prevProps.gameId) {
      this.tryJoinGame()
    }
  }

  tryJoinGame = () => {
    this.props.gameId && this.props.context.connectToGame(this.props.gameId)
  }
}

export const GameLobby = (props: RoutableProps) => {
  const context = useGameContext()
  return ensureIdentity(<RoutedGameLobby {...{ context, ...props }} />)
}
