import { h } from 'preact'
import { RoutableProps } from 'preact-router'
import { useIdentity } from '../../Identity/Context'
import { Dialog } from '../../Shared/Dialog'
import { Surface } from '../../Shared/Surface'
import { ProvideName } from './ProvideName'
import { StartAGame } from './StartAGame'

export function App(_: RoutableProps) {
  const identity = useIdentity()
  const requiresAName = identity.canChange && !identity.identified()
  return (
    <Surface>
      <Dialog>
        <h1 id="title">
          Trash <br />
          <small>by Ecmaserve Games</small>
        </h1>
        <p>Don't be left holding all the trash!</p>
        {requiresAName ? <ProvideName /> : <StartAGame />}
        <h2 id="instructions">How To Play</h2>
        <p>Each round you want to flip up all your cards.</p>
        <p>
          To replace a card you the spot number must match the face value of the
          card from Ace to Ten.
        </p>
      </Dialog>
    </Surface>
  )
}
