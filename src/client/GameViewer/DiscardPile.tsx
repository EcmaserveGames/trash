import { h } from 'preact'
import * as Proto from '../../proto/types'
import { RenderCard } from './RenderCard'

interface Props {
  pile: Proto.ecmaserve.trash.IDiscardPile
}

export function DiscardPile({ pile }: Props) {
  if (!pile.cards) return null

  const card = pile.cards.shift()
  if (!card) {
    return <div>Discard Empty</div>
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
      />
    </div>
  )
}
