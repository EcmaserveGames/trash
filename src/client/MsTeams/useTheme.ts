import { getContext, ThemeStyle } from 'msteams-ui-styles-core'
import { useContext } from 'preact/hooks'
import { MsTeamsContext } from '../MsTeamsProvider'

export function useTheme() {
  const msContext = useContext(MsTeamsContext)
  return (
    msContext.styleContext ||
    getContext({ baseFontSize: 16, style: ThemeStyle.Light })
  )
}
