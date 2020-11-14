import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { GameContext } from '../GameContext'
import { useIdentity } from '../Identity/Context'
import { PlayerTableauViewer } from './PlayerTableauViewer'

export function OtherPlayerTableaus() {
  const context = useContext(GameContext)
  const id = useIdentity().sub
  const otherTableaus =
    context.gameState?.tableaus?.filter((x) => x.playerId !== id) || []
  return (
    <div className="tableaus">
      {otherTableaus.map((t) => (
        <PlayerTableauViewer key={`tableau-for-${t.playerId}`} tableau={t} />
      ))}
    </div>
  )
}
