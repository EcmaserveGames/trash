import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { GameContext } from './GameContext'

export function Lobby() {
  const context = useContext(GameContext)
  return (
    <div>
      <h1>Welcome To Trash</h1>
      <button onClick={context.openANewGameSession}>Start A Game</button>
    </div>
  )
}
