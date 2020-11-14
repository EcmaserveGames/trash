import { ThemeStyle } from 'msteams-ui-styles-core'
import { ComponentChildren, h } from 'preact'
import { useContext } from 'preact/hooks'
import { ThemeContextProvider } from '../Shared/ThemeContext'
import { MsTeamsContext } from './Context'

function themeToThemeStyle(value?: string): ThemeStyle {
  if (value === 'contrast') {
    return ThemeStyle.HighContrast
  }
  if (value === 'dark') {
    return ThemeStyle.Dark
  }
  return ThemeStyle.Light
}

export function ThemeAdapter(props: { children?: ComponentChildren }) {
  const context = useContext(MsTeamsContext)
  const styles = themeToThemeStyle(context.theme)
  // TODO hook to theme updates
  return (
    <ThemeContextProvider styles={styles}>
      {props.children}
    </ThemeContextProvider>
  )
}
