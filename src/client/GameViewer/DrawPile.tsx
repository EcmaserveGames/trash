import { h } from 'preact'
import { useContext } from 'preact/hooks'
import * as Proto from '../../proto/types'
import { GameContext } from '../GameContext'
import { RenderCard } from './RenderCard'

interface Props {
  pile: Proto.ecmaserve.trash.IDrawPile
}

export function DrawPile({ pile }: Props) {
  const context = useContext(GameContext)
  if (!pile.cards) return null

  const card = pile.cards.shift()
  if (!card) {
    return <div>Draw Empty</div>
  }
  const blur = Math.floor(pile.cards.length / 10 / 2) + 3
  const height = Math.floor(pile.cards.length / 5 / 2) + 1
  return (
    <div>
      <div style={{ textAlign: 'center' }}>Draw</div>
      <RenderCard
        faceDown
        style={{
          boxShadow: `${height}px ${height}px ${blur}px 1px #CCC`,
        }}
        card={card}
        onClick={() => context.gameClient?.drawFromDrawPile()}
      />
    </div>
  )
}
