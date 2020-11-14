import { h } from 'preact'
import { route } from 'preact-router'
import { useIdentity } from '../../Identity/Context'
import { Anchor } from '../../Shared/Anchor'
import { CompoundButton } from '../../Shared/Button'
import { useGameContext } from '../../useGameContext'
import { getRoutePath } from '../getRouteBase'

export function StartAGame() {
  const identity = useIdentity()
  const context = useGameContext()
  const onClickHandler = async () => {
    try {
      const id = await context.openANewGameSession()
      if (!id) throw new Error('Could not start a game session')
      route(getRoutePath('game/' + id))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <p>
        Welcome back {identity.name}{' '}
        {identity.canChange && (
          <Anchor
            href=""
            onClick={(evt) => {
              identity.setIdentity({
                name: undefined,
                authentication: undefined,
              })
              evt.preventDefault()
              evt.stopPropagation()
            }}
          >
            change
          </Anchor>
        )}
      </p>
      <p>
        <CompoundButton
          onClick={onClickHandler}
          primaryText="Start A Game"
          secondaryText="Others will be able to join you."
        />
      </p>
    </div>
  )
}
