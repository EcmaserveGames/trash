import { h, Component } from 'preact'
import { GameContext } from './GameContext'

export class GameStateProvider extends Component {
  render() {
    return (
      <GameContext.Provider
        value={{
          gameState: {},
        }}
      >
        <div>{this.props.children}</div>
      </GameContext.Provider>
    )
  }
}
