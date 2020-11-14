import { dropdown } from 'msteams-ui-styles-core'
import { h } from 'preact'
import { useRef } from 'preact/hooks'
import { useTheme } from './useTheme'

export interface IDropdownItemProps
  extends preact.JSX.HTMLAttributes<HTMLButtonElement> {
  text?: string
  render?: () => string | preact.JSX.Element
}

export function DropdownItem(props: IDropdownItemProps) {
  const theme = useTheme()
  const ref = useRef<HTMLButtonElement>()
  const { text, render, ...rest } = props
  const styles = dropdown(theme)

  return (
    <button tabIndex={-1} className={styles.item} ref={ref} {...rest}>
      {text ? text : null}
      {render ? render() : null}
    </button>
  )
}
