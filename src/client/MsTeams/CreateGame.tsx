import { h } from 'preact'

import { useContext, useEffect } from 'preact/hooks'
import { GameContext } from '../GameContext'
import { MsTeamsContext } from '../MsTeamsProvider'
import jwtDecode from 'jwt-decode'
import { PrimaryButton } from './Button'
import { Surface } from './Surface'

export function CreateGame() {
  const context = useContext(GameContext)
  const msContext = useContext(MsTeamsContext)
  useEffect(() => {
    const myId = context.getIdentity()
    if (msContext.idToken && msContext.idToken !== myId?.idToken) {
      const claims = jwtDecode(msContext.idToken) as Record<string, string>

      // Decrypt Identity Token
      context.setIdentity({
        idToken: msContext.idToken,
        name: 'Unknown',
        sub: 'Unknown',
        ...claims,
      })
    }
  }, [context, msContext])

  if (!context.getIdentity() || !msContext.styleContext) {
    return <div>Loading ... </div>
  }

  return (
    <Surface>
      <PrimaryButton onClick={() => context.openANewGameSession()}>
        Create A Game
      </PrimaryButton>
    </Surface>
  )
}
