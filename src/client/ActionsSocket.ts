import { GameSocket } from './GameSocket'
import { Writer, Reader } from 'protobufjs'
import * as Proto from '@ecmaservegames/host/proto'
import { blobToBuffer } from './blobToBuffer'

interface ProtocolBufferType<T> {
  verify(message: { [k: string]: any }): string | null
  create(data?: T): T
  encode(message: T, writer?: Writer): Writer
  decode(value: Reader | Uint8Array): T
}

interface ActionRejection extends Error {
  reasons?: Proto.ecmaservegames.host.IRuleResult[]
}

interface PendingAction {
  action: Uint8Array
  rejectionError: ActionRejection
  timer: number
  resolve(response: Proto.ecmaservegames.host.ActionResponse): void
  reject(error: ActionRejection): void
}

export class ActionsSocket<T> extends GameSocket {
  private definition: ProtocolBufferType<T>
  private actionsInFlight: PendingAction[] = []

  constructor(location: string, definition: ProtocolBufferType<T>) {
    super(location)
    this.definition = definition
    this.onMessage((evt) => this.__handleActionResponse(evt.data))
  }

  act(data: T) {
    const verification = this.definition.verify(data)
    if (verification) {
      const verificationError = new Error('Action was not verified')
      verificationError.name = 'ActionVerificationError'
      return Promise.reject(verificationError)
    }
    const message = this.definition.create(data)
    const buffer = this.definition.encode(message).finish()
    // Better stack tracing
    const rejectionError = new Error('Action was rejected')
    const actionTimeoutError = new Error('Action timed out')
    rejectionError.name = 'ActionRejection'
    // Action
    this.send(buffer)
    return new Promise<Proto.ecmaservegames.host.ActionResponse>(
      (resolve, reject) => {
        const timer = window.setTimeout(() => {
          actionTimeoutError.name = 'ActionTimeout'
          // Remove the reference
          const index = this.actionsInFlight.findIndex(
            (p) => p.action === buffer
          )
          this.actionsInFlight.slice(index, 1)
          reject(actionTimeoutError)
        }, 1000)
        this.actionsInFlight.push({
          action: buffer,
          rejectionError,
          timer,
          resolve,
          reject,
        })
      }
    )
  }

  private async __handleActionResponse(blob: Blob) {
    const buffer = await blobToBuffer(blob)
    const binary = new Uint8Array(buffer)
    const response = Proto.ecmaservegames.host.ActionResponse.decode(binary)

    const inQueue = this.actionsInFlight.find(
      (x) =>
        response.action?.value &&
        this.__buffersAreEqual(x.action, response.action?.value)
    )
    if (!inQueue) return

    if (response.accepted) {
      inQueue.resolve(response)
    } else {
      inQueue.rejectionError.reasons = response.ruleResults
      inQueue.reject(inQueue.rejectionError)
    }
    // Clean out timer
    window.clearTimeout(inQueue.timer)
    // Remove the reference in queue
    const currentIndex = this.actionsInFlight.indexOf(inQueue)
    this.actionsInFlight.splice(currentIndex, 1)
  }

  private __buffersAreEqual(buf1: Uint8Array, buf2: Uint8Array) {
    if (buf1.byteLength != buf2.byteLength) return false
    var dv1 = new Int8Array(buf1)
    var dv2 = new Int8Array(buf2)
    for (var i = 0; i != buf1.byteLength; i++) {
      if (dv1[i] != dv2[i]) return false
    }
    return true
  }
}
