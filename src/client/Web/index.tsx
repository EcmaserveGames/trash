import 'whatwg-fetch'
import { h, render } from 'preact'
import { ThemeContextProvider } from '../Shared/ThemeContext'
import { Router } from 'preact-router'
import { App } from './App'
import { IdentityContextProvider } from './AnonIdentityProvider'
import { Surface } from '../Shared/Surface'
import { ThemeStyle } from 'msteams-ui-styles-core'
import { GameLobby } from './GameLobby'
import { GameStateProvider } from '../GameStateProvider'

render(
  <ThemeContextProvider styles={ThemeStyle.Light}>
    <IdentityContextProvider>
      <GameStateProvider>
        <Surface
          style={{ minWidth: '100vw', minHeight: '100vh', padding: '16px' }}
        >
          <Router>
            <App path="/app/" />
            <GameLobby path="/app/game/:gameId" />
          </Router>
        </Surface>
      </GameStateProvider>
    </IdentityContextProvider>
  </ThemeContextProvider>,
  document.body
)

if (module.hot) module.hot.accept()
