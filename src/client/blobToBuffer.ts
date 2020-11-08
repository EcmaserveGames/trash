export function blobToBuffer(blob: Blob) {
  return new Promise<ArrayBuffer>((resolve, reject) => {
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
  })
}
