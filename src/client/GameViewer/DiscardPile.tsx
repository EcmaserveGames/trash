import { h } from 'preact'
import { useContext } from 'preact/hooks'
import * as Proto from '../../proto/types'
import { GameContext } from '../GameContext'
import { RenderCard } from './RenderCard'

interface Props {
  pile: Proto.ecmaserve.trash.IDiscardPile
}

export function DiscardPile({ pile }: Props) {
  const context = useContext(GameContext)
  if (!pile.cards) return null

  const activePlayerTableau = context.gameState?.tableaus?.find(
    (x) => x.playerId === context.gameState?.currentPlayerId
  )
  const hasCardInHand = activePlayerTableau && activePlayerTableau.cardInHand
  const onClick = hasCardInHand
    ? () => context.gameClient?.discard()
    : () => context.gameClient?.drawFromDiscard()

  const card = pile.cards.shift()
  if (!card) {
    return <div onClick={() => hasCardInHand && onClick()}>Discard Empty</div>
  }

  const blur = Math.floor(pile.cards.length / 10 / 2) + 3
  const height = Math.floor(pile.cards.length / 5 / 2) + 1
  return (
    <div>
      <div style={{ textAlign: 'center' }}>Discard</div>
      <RenderCard
        style={{
          boxShadow: `${height}px ${height}px ${blur}px 1px #CCC`,
        }}
        card={card}
        onClick={onClick}
      />
    </div>
  )
}
