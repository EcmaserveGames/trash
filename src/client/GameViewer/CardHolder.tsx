import { ComponentChildren, h } from 'preact'

interface Props {
  children?: ComponentChildren
}

const style = {
  minWidth: '6rem',
  minHeight: '8rem',
  display: 'flex',
  justifyContent: 'center',
}

export function CardHolder(props: Props) {
  return <div style={style}>{props.children}</div>
}
