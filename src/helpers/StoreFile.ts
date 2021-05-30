function storeFile(file: Blob, storageName: string): void {
  const reader = new FileReader()
  
  reader.onload = () => {
    const fileText = reader.result as string
    localStorage.setItem(storageName, fileText)
  }
  
  reader.readAsText(file)
}

export { storeFile }
