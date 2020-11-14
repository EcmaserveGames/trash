export function blobToBuffer(blob: Blob) {
  return new Promise<ArrayBuffer>((resolve, reject) => {
    try {
      const reader = new FileReader()
      reader.addEventListener(
        'loadend',
        () => {
          if (reader.result && typeof reader.result !== 'string') {
            resolve(reader.result)
            return
          }
          reject(new Error('Blob could not be converted'))
        },
        false
      )
      reader.readAsArrayBuffer(blob)
    } catch (e) {
      reject(new Error('could not read blob'))
      console.error(blob)
    }
  })
}
