export enum SocketStatus {
  Unknown = 1,
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

export type ReconnectingCallback = (timeLeft: number) => void
export type MessageCallback<T = Blob> = (event: MessageEvent<T>) => void
export type SocketMessage = string | ArrayBufferLike | Blob | ArrayBufferView
export type IsInitializationResponse = (message: SocketMessage) => boolean

export interface GameSocketOptions {
  initializationMessage?: SocketMessage
  isInitializedCallback?: IsInitializationResponse
}

export class GameSocket {
  private location: string
  private socket?: WebSocket
  private reconnectIn: number = 3000
  private waitable: Promise<void> = Promise.resolve()
  private waitOnInitialized: Promise<void> = Promise.resolve()
  private onMessagesHook?: MessageCallback<any>
  private onConnectHook?: () => void
  private onReconnectingHook?: ReconnectingCallback
  private onCloseHook?: () => void
  private reconnectTimer?: number
  private initializationMessage?: SocketMessage
  private isInitializedCallback?: IsInitializationResponse

  constructor(location: string, options: GameSocketOptions = {}) {
    this.location = location
    this.initializationMessage = options.initializationMessage
    this.isInitializedCallback = options.isInitializedCallback
    this.waitable = this.__connect(location)
  }

  get status() {
    if (!this.socket) return SocketStatus.Unknown
    const { readyState } = this.socket
    if (readyState === WebSocket.CONNECTING) return SocketStatus.Connecting
    if (readyState === WebSocket.OPEN) return SocketStatus.Open
    if (readyState === WebSocket.CLOSING) return SocketStatus.Closing
    if (readyState === WebSocket.CLOSED) return SocketStatus.Closed
    return SocketStatus.Unknown
  }

  onConnect(callback: () => void) {
    this.onConnectHook = callback
  }

  onReconnectUpdate(callback: ReconnectingCallback) {
    this.onReconnectingHook = callback
  }

  onClose(callback: () => void) {
    this.onCloseHook = callback
  }

  onMessage<TMessage = Blob>(callback: MessageCallback<TMessage>) {
    this.onMessagesHook = callback
  }

  public async send(message: Uint8Array | string) {
    await this.waitable
    await this.waitOnInitialized
    this.socket?.send(message)
  }

  public async close() {
    await this.waitable
    if (this.socket) {
      this.socket.close()
    }
  }

  public open() {
    if (this.status !== SocketStatus.Closed) return
    if (this.reconnectTimer) {
      window.clearTimeout(this.reconnectTimer)
    }
    this.__connect(this.location)
  }

  private onCloseHandler = () => {
    this.onCloseHook && this.onCloseHook()
    this.waitable = this.__waitForReconnect()
  }
  private onMessageHandler = (evt: MessageEvent<any>) => {
    this.onMessagesHook && this.onMessagesHook(evt)
  }

  private async __connect(location: string) {
    // Cleanup
    if (this.socket) {
      this.socket.removeEventListener('close', this.onCloseHandler)
      this.socket.addEventListener('message', this.onMessageHandler)
    }
    // Setup
    this.socket = new WebSocket(location)
    await GameSocket.waitForConnection(this.socket)
    this.onConnectHook && this.onConnectHook()
    this.socket.addEventListener('close', this.onCloseHandler)
    this.socket.addEventListener('message', this.onMessageHandler)
    // Check if there is an initialization step
    if (this.initializationMessage && this.isInitializedCallback) {
      this.waitOnInitialized = GameSocket.waitForInitialized(
        this.socket,
        this.initializationMessage,
        this.isInitializedCallback
      )
    }
  }

  private __waitForReconnect(waitInterval: number = 3000) {
    const publishReconnecting = (left: number) =>
      this.onReconnectingHook && this.onReconnectingHook(left)
    return new Promise<void>((resolve) => {
      this.reconnectIn = waitInterval
      publishReconnecting(waitInterval)
      const onIncrement = () => {
        this.reconnectIn = this.reconnectIn - 1000
        publishReconnecting(this.reconnectIn)
        if (this.reconnectIn === 0) {
          resolve(
            this.__connect(this.location).catch(() => {
              return this.__waitForReconnect(waitInterval * 2)
            })
          )
        } else if (this.reconnectIn > 0) {
          this.reconnectTimer = window.setTimeout(onIncrement, 1000)
        }
      }
      this.reconnectTimer = window.setTimeout(onIncrement, 1000)
    })
  }

  static waitForConnection(socket: WebSocket) {
    const socketError = new Error('Could not connect to socket.')
    return new Promise<void>((resolve, reject) => {
      const onOpen = () => {
        resolve()
        socket.removeEventListener('error', onError)
      }
      const onError = () => {
        socketError.name = 'GameSocketError'
        socket.removeEventListener('open', onOpen)
        reject(socketError)
      }

      socket.addEventListener('open', onOpen, { once: true })
      socket.addEventListener('error', onError, { once: true })
    })
  }

  static waitForInitialized(
    socket: WebSocket,
    initializationMessage: SocketMessage,
    isInitializedCallback: IsInitializationResponse
  ) {
    const socketError = new Error(
      'Connected to socket but could not initialize communication.'
    )
    return new Promise<void>((resolve, reject) => {
      let timer: number
      const onMessage = (evt: MessageEvent<SocketMessage>) => {
        if (isInitializedCallback(evt.data)) {
          resolve()
        }
        socket.removeEventListener('close', onClose)
        window.clearTimeout(timer)
      }
      const onClose = () => {
        socketError.name = 'SocketInitializationClosed'
        socket.removeEventListener('message', onMessage)
        reject(socketError)
        window.clearTimeout(timer)
      }

      socket.addEventListener('message', onMessage)
      socket.addEventListener('close', onClose, { once: true })

      socket.send(initializationMessage)
      timer = window.setTimeout(() => {
        socketError.name = 'SocketInitializationTimeout'
        reject(socketError)
        socket.removeEventListener('close', onClose)
        socket.removeEventListener('message', onMessage)
      }, 3000)
    })
  }
}
