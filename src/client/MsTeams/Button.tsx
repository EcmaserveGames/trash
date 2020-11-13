import { primaryButton } from 'msteams-ui-styles-core'
import { h } from 'preact'
import { JSXInternal } from 'preact/src/jsx'
import { useTheme } from './useTheme'

export function PrimaryButton(
  props: JSXInternal.DOMAttributes<HTMLButtonElement>
) {
  const theme = useTheme()
  const className = primaryButton(theme)
  return <button className={className} {...props} />
}
