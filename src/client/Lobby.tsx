import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { GameContext } from './GameContext'
import { ProvideName } from './TempIdentityProvider/ProvideName'

export function Lobby() {
  const context = useContext(GameContext)
  const identity = context.getIdentity()
  return (
    <div>
      <h1>Welcome To Trash!</h1>
      <p>Don't be left holding all the trash.</p>
      {!identity && <ProvideName />}
      {identity && <p>Welcome {identity.name}. </p>}
      {identity && (
        <button onClick={context.openANewGameSession}>Start A Game</button>
      )}
    </div>
  )
}
