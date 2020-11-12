import 'whatwg-fetch'
import { h, render } from 'preact'
import { MicrosoftTeamsApp } from './MsTeams/App'
import { GameStateProvider } from './GameStateProvider'
import { MsTeamsContextProvider } from './MsTeamsProvider/Provider'

render(
  <GameStateProvider gameId={location.hash.substr(1) || undefined}>
    <MsTeamsContextProvider>
      <MicrosoftTeamsApp />
    </MsTeamsContextProvider>
  </GameStateProvider>,
  document.body
)
if (module.hot) module.hot.accept()
