export enum SocketStatus {
  Unknown = 1,
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

export type ReconnectingCallback = (timeLeft: number) => void
export type MessageCallback<T = Blob> = (event: MessageEvent<T>) => void

export class GameSocket {
  private location: string
  private socket?: WebSocket
  private reconnectIn: number = 3000
  private waitable: Promise<void> = Promise.resolve()
  private onMessagesHook?: MessageCallback<any>
  private onConnectHook?: () => void
  private onReconnectingHook?: ReconnectingCallback
  private onCloseHook?: () => void
  private reconnectTimer?: number

  constructor(location: string) {
    this.location = location
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
}
