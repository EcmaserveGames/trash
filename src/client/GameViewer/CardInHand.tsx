import { h } from 'preact'
import * as Proto from '../../proto/types'
import { RenderCard } from './RenderCard'
interface Props {
  card: Proto.ecmaserve.trash.ICard
}
export function CardInHand(props: Props) {
  return (
    <RenderCard
      card={props.card}
      style={{
        fontSize: '1.25em',
        width: '10.75vh',
        height: '15vh',
      }}
    />
  )
}
