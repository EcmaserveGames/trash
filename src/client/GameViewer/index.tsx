import { h } from 'preact'
import * as Proto from '../../proto/types'
import { DiscardPile } from './DiscardPile'
import { DrawPile } from './DrawPile'
import { PlayerTableau } from './PlayerTableau'

interface Props {
  gameState: Proto.ecmaserve.trash.IState
}

export function GameViewer({ gameState }: Props) {
  return (
    <div>
      <div style={{ display: 'flex', width: '100%' }}>
        {gameState.discardPile && <DiscardPile pile={gameState.discardPile} />}
        {gameState.drawPile && <DrawPile pile={gameState.drawPile} />}
      </div>
      {gameState.tableaus &&
        gameState.tableaus.map((t) => (
          <PlayerTableau key={`tableau-for-${t.playerId}`} tableau={t} />
        ))}
    </div>
  )
}
