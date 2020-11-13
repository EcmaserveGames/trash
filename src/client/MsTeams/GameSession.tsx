import { primaryButton } from 'msteams-ui-styles-core'
import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { GameContext } from '../GameContext'
import { GameViewer } from '../GameViewer'
import { PrimaryButton } from './Button'
import { Panel } from './Panel'
import { Surface } from './Surface'

export function GameSession() {
  const context = useContext(GameContext)
  if (!context.gameState?.gameStarted) {
    return (
      <Surface>
        <Panel
          header="Game Session Has Started"
          footer={
            <PrimaryButton onClick={() => context.gameClient?.startPlaying()}>
              Start Game
            </PrimaryButton>
          }
        >
          <p>Waiting for players to join.</p>
          <ul>
            {context.gameState?.tableaus?.map((t) => (
              <li key={`player-${t.playerId}`}>{t.playerName}</li>
            ))}
          </ul>
        </Panel>
      </Surface>
    )
  }
  return <GameViewer gameState={context.gameState} />
}
