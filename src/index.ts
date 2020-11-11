import { createGame } from './server/game'

const runtimePort = (process.env.PORT && Number(process.env.PORT)) || 4443

createGame(runtimePort).run()
