import { route } from 'preact-router'
import { useIdentity } from '../../Identity/Context'

export function ensureIdentity(component: preact.JSX.Element) {
  const identity = useIdentity()
  if (!identity.identified()) {
    route('/app/', true)
    return null
  }
  return component
}
