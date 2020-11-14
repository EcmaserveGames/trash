import { route } from 'preact-router'

let routeBase = '/app/'

export function getRoutePath(path: string) {
  return routeBase + path
}

export function setRouteBase(base: string) {
  routeBase = base
}
