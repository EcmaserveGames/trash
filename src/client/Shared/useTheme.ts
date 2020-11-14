import { useContext } from 'preact/hooks'
import { ThemeContext } from './ThemeContext'

export function useTheme() {
  return useContext(ThemeContext).styles
}
