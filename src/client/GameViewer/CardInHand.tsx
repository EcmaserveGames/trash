import { h } from 'preact'
import * as Proto from '../../proto/types'
import { RenderCard } from './RenderCard'
interface Props {
  card: Proto.ecmaserve.trash.ICard
}
export function CardInHand(props: Props) {
  return <RenderCard card={props.card} />
}
