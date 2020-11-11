import { h } from 'preact'
import * as Proto from '../../proto/types'
import { ConnectionInfo } from './ConnectionInfo'
import { DiscardPile } from './DiscardPile'
import { DrawPile } from './DrawPile'
import { OtherPlayerTableaus } from './OtherPlayersTableaus'
import { PlayerTableau } from './PlayerTableau'
import { PlayerTableauViewer } from './PlayerTableauViewer'

interface Props {
  gameState: Proto.ecmaserve.trash.IState
}

export function GameViewer({ gameState }: Props) {
  return (
    <div class="app">
      <ConnectionInfo />
      <div style={{ display: 'flex', marginBottom: '10vh' }}>
        {gameState.discardPile && <DiscardPile pile={gameState.discardPile} />}
        {gameState.drawPile && <DrawPile pile={gameState.drawPile} />}
      </div>
      <OtherPlayerTableaus />
      <PlayerTableau />
    </div>
  )
}
