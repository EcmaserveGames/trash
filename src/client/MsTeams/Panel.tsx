import { ComponentChildren, h } from 'preact'
import { panel } from 'msteams-ui-styles-core'
import { useTheme } from './useTheme'

interface Props {
  children?: ComponentChildren
  header?: ComponentChildren
  footer?: ComponentChildren
}

export function Panel(props: Props) {
  const theme = useTheme()
  const styles = panel(theme)
  return (
    <div className={styles.container}>
      {props.header && <div className={styles.header}>{props.header}</div>}
      <div className={styles.body}>{props.children}</div>
      {props.footer && <div className={styles.footer}>{props.footer}</div>}
    </div>
  )
}
