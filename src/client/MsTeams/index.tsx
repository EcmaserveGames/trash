import 'whatwg-fetch'
import { h, render } from 'preact'
import { MicrosoftTeamsApp } from './App'
import { GameStateProvider } from '../GameStateProvider'
import { MsTeamsContextProvider } from './Provider'
import { ThemeAdapter } from './ThemeAdapter'

render(
  <MsTeamsContextProvider>
    <ThemeAdapter>
      <GameStateProvider>
        <MicrosoftTeamsApp />
      </GameStateProvider>
    </ThemeAdapter>
  </MsTeamsContextProvider>,
  document.body
)
if (module.hot) module.hot.accept()
