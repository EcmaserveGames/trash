import { h } from 'preact'
import { useContext, useEffect, useState } from 'preact/hooks'
import { GameContext } from '../GameContext'
import { MsTeamsContext } from '../MsTeamsProvider'

export function CreateGame() {
  const context = useContext(GameContext)
  const msContext = useContext(MsTeamsContext)
  useEffect(() => {
    const myId = context.getAuthentication()
    if (myId && msContext.idToken && myId !== `Bearer ${msContext.idToken}`) {
      context.setAuthentication(`Bearer ${msContext.idToken}`)
    }
  }, [context, msContext])
  if (!context.getAuthentication()) {
    return <div>Authenticating ... </div>
  }
  const onClick = () => {
    context.openANewGameSession()
  }
  return <button onClick={onClick}>Create A Game</button>
}
