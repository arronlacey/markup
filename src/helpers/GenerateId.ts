function generateId(length: number = 7): string {
  return Math
    .random()
    .toString(36)
    .substring(length)
}

export { generateId }
