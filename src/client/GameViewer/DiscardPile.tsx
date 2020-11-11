import { h } from 'preact'
import * as Proto from '../../proto/types'
import { RenderCard } from './RenderCard'
import { useActivePlayer } from './useActivePlayer'
import { useGameClient } from './useGameClient'
import { useMyTableau } from './useMyTableau'

interface Props {
  pile: Proto.ecmaserve.trash.IDiscardPile
}

export function DiscardPile({ pile }: Props) {
  const gameClient = useGameClient()
  const activePlayer = useActivePlayer()
  const myTableau = useMyTableau()

  if (!pile.cards) return null

  const hasCardInHand = !!myTableau?.cardInHand
  const hintDraw = activePlayer.isMe && hasCardInHand

  const onClick = hasCardInHand
    ? () => gameClient?.discard()
    : () => gameClient?.drawFromDiscard()

  const card = pile.cards.shift()
  if (!card) {
    return <div onClick={() => hasCardInHand && onClick()}>Discard Empty</div>
  }

  const blur = Math.floor(pile.cards.length / 10 / 2) + 3
  const height = Math.floor(pile.cards.length / 5 / 2) + 1
  const style = hintDraw
    ? {
        cursor: 'pointer',
        boxShadow: `0 0 2rem 0 rgba(0, 255, 255, .9), ${height}px ${height}px ${blur}px 1px rgba(0,0,0,.5)`,
      }
    : {
        cursor: activePlayer.isMe ? 'pointer' : 'inherit',
        boxShadow: `${height}px ${height}px ${blur}px 1px rgba(0,0,0,.5)`,
      }
  return (
    <div>
      <div style={{ textAlign: 'center' }}>Discard</div>
      <RenderCard style={style} card={card} onClick={onClick} />
    </div>
  )
}
