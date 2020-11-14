import { createContext } from 'preact'
import * as msteams from '@microsoft/teams-js'

msteams.initialize()

export const MsTeamsContext = createContext<msteams.Context>({
  entityId: '',
  locale: '',
})
