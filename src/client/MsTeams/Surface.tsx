import { surface } from 'msteams-ui-styles-core'
import { h } from 'preact'
import { JSXInternal } from 'preact/src/jsx'
import { useTheme } from './useTheme'

export function Surface(props: JSXInternal.DOMAttributes<HTMLDivElement>) {
  const theme = useTheme()
  const className = surface(theme)
  return <div className={className} {...props} />
}
