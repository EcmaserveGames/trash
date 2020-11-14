import { h } from 'preact'
import { JSXInternal } from 'preact/src/jsx'
import { style } from 'typestyle'
import { useTheme } from './useTheme'

export function Dialog(props: JSXInternal.HTMLAttributes<HTMLDivElement>) {
  const theme = useTheme()
  theme.spacing
  const className = style({
    width: '480px',
    margin: `${theme.spacing.xLarge} auto`,
  })
  return <div className={className}>{props.children}</div>
}
