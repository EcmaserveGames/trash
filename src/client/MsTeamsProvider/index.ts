import { createContext } from 'preact'
import * as msteams from '@microsoft/teams-js'
import { IContext as StylesContext } from 'msteams-ui-styles-core'

msteams.initialize()

interface MsTeamsContext {
  ctx: msteams.Context
  idToken?: string
  styleContext?: StylesContext
}

export const MsTeamsContext = createContext<MsTeamsContext>({
  ctx: {
    entityId: '',
    locale: '',
  },
})
