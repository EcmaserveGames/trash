import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { GameContext } from '../GameContext'
import { GameViewer } from '../GameViewer'

export function GameSession() {
  const context = useContext(GameContext)
  if (!context.gameState?.gameStarted) {
    return (
      <div>
        <h1>Open Game Session</h1>
        <ul>
          {context.gameState?.tableaus?.map((t) => (
            <li>{t.playerName}</li>
          ))}
        </ul>
        <p>The game is ready for others to join</p>
        <p>
          <input value={location.href + '#' + context.gameId} />
        </p>
        <button onClick={() => context.gameClient?.startPlaying()}>
          Start Playing
        </button>
      </div>
    )
  }
  return <GameViewer gameState={context.gameState} />
}
