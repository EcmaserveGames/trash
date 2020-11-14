import { h } from 'preact'
import * as Proto from '../../proto/types'
import { RenderCard, cardStyle } from './RenderCard'
import { useActivePlayer } from './useActivePlayer'
import { useGameClient } from './useGameClient'
import { useMyTableau } from './useMyTableau'

interface Props {
  pile: Proto.ecmaserve.trash.IDrawPile
}

export function DrawPile({ pile }: Props) {
  const gameClient = useGameClient()
  const activePlayer = useActivePlayer()
  const myTableau = useMyTableau()

  if (!pile.cards) return null

  const hintDraw = activePlayer.isMe && !myTableau?.cardInHand

  const card = pile.cards.shift()
  const blur = Math.floor(pile.cards.length / 10 / 2) + 3
  const height = Math.floor(pile.cards.length / 5 / 2) + 1
  const style = hintDraw
    ? {
        cursor: 'pointer',
        boxShadow: `0 0 2rem 0 rgba(0, 255, 255, .9), ${height}px ${height}px ${blur}px 1px rgba(0,0,0,.5)`,
      }
    : {
        boxShadow: `${height}px ${height}px ${blur}px 1px rgba(0,0,0,.5)`,
      }
  return (
    <div>
      <div style={{ textAlign: 'center' }}>Draw</div>
      <RenderCard
        faceDown
        style={style}
        card={card}
        onClick={() => gameClient?.drawFromDrawPile()}
      />
    </div>
  )
}
