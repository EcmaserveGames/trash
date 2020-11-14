import { anchor } from 'msteams-ui-styles-core'
import { h } from 'preact'
import { JSXInternal } from 'preact/src/jsx'
import { useTheme } from './useTheme'

export function Anchor(props: JSXInternal.HTMLAttributes<HTMLAnchorElement>) {
  const theme = useTheme()
  const styles = anchor(theme)
  return (
    <a role="link" className={styles} {...props}>
      {props.children}
    </a>
  )
}
