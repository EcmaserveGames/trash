import {
  compoundButton,
  primaryButton,
  secondaryButton,
} from 'msteams-ui-styles-core'
import { ComponentChild, h } from 'preact'
import { JSXInternal } from 'preact/src/jsx'
import { useTheme } from './useTheme'

export function PrimaryButton(
  props: JSXInternal.HTMLAttributes<HTMLButtonElement>
) {
  const theme = useTheme()
  const className = primaryButton(theme)
  return <button className={className} {...props} />
}

export function SecondaryButton(
  props: JSXInternal.HTMLAttributes<HTMLButtonElement>
) {
  const theme = useTheme()
  const className = secondaryButton(theme)
  return <button className={className} {...props} />
}

export function CompoundButton(
  props: JSXInternal.HTMLAttributes<HTMLButtonElement> & {
    disabled?: boolean
    icon?: () => ComponentChild
    primaryText?: string
    secondaryText?: string
  }
) {
  const { disabled, icon, primaryText, secondaryText, ...rest } = props

  const theme = useTheme()
  const styles = compoundButton(theme)
  return (
    <button role="button" className={styles.container} {...rest}>
      {props.icon ? <div className={styles.icon}>{props.icon()}</div> : null}
      <div>
        <div className={styles.primaryText}>{props.primaryText}</div>
        <div className={styles.secondaryText}>{props.secondaryText}</div>
      </div>
      {props.children}
    </button>
  )
}
