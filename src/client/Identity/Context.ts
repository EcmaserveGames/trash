import { createContext } from 'preact'
import { useContext } from 'preact/hooks'

export interface Identity<T> {
  authentication?: T
  sub?: string
  name?: string
  email?: string
}

export interface IdentityContext<T = any> extends Identity<T> {
  canChange: boolean
  identified(): boolean
  setIdentity(identity: Identity<T>): void
}

export const IdentityContext = createContext<IdentityContext<string>>({
  canChange: true,
  identified: () => false,
  setIdentity: () => {},
})

export function useIdentity() {
  return useContext(IdentityContext)
}
