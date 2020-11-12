import { createContext } from 'preact'
import * as msteams from '@microsoft/teams-js'

msteams.initialize()

interface MsTeamsContext {
  ctx: msteams.Context
  idToken?: string
}

export const MsTeamsContext = createContext<MsTeamsContext>({
  ctx: {
    entityId: '',
    locale: '',
  },
})
