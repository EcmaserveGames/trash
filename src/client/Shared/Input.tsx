import { input } from 'msteams-ui-styles-core'
import { h } from 'preact'
import { JSXInternal } from 'preact/src/jsx'
import { useTheme } from './useTheme'

type CurriedInputProps = Pick<
  JSXInternal.HTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'onInput' | 'disabled'
>

interface Props extends CurriedInputProps {
  label?: string
  id?: string
}

export function Input(props: Props) {
  const theme = useTheme()
  const styles = input(theme)
  return (
    <div className={styles.container}>
      <label className={styles.label} for={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
      />
    </div>
  )
}
