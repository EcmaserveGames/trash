import { h } from 'preact'
import { GameViewer } from '../../GameViewer'
import { PrimaryButton } from '../../Shared/Button'
import { Dialog } from '../../Shared/Dialog'
import { Input } from '../../Shared/Input'
import { useGameContext } from '../../useGameContext'

interface Props {
  gameId: string
}

export function GameSession(props: Props) {
  const context = useGameContext()
  const onClickHandler = async () => {
    context.gameClient?.startPlaying()
  }
  if (!context.gameState?.gameStarted) {
    return (
      <Dialog>
        <h1>Game Session {props.gameId} Open</h1>
        <p>Waiting for players to join</p>
        <ul>
          {context.gameState?.tableaus?.map((t) => (
            <li>{t.playerName}</li>
          ))}
        </ul>
        <p>The game is ready for others to join</p>
        <p>
          <Input disabled label="Share Link" value={location.href} />
        </p>
        <PrimaryButton onClick={onClickHandler}>Start Playing</PrimaryButton>
      </Dialog>
    )
  }
  return <GameViewer gameState={context.gameState} />
}
