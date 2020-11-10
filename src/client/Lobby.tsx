import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { GameContext } from './GameContext'
import { ProvideName } from './TempIdentityProvider/ProvideName'

export function Lobby() {
  const context = useContext(GameContext)
  const identity = context.getIdentityToken()
  return (
    <div>
      <h1>Welcome To Trash</h1>
      {!identity && <ProvideName />}
      {identity && <p>Welcome {identity}. </p>}
      {identity && (
        <button onClick={context.openANewGameSession}>Start A Game</button>
      )}
    </div>
  )
}
