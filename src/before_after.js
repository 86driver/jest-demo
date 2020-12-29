let count = 0

export const initializeCountDatabase = () => {
  count = 100
}

export const clearCountDatabase = () => {
  count = 0
}

export const setCount = () => {
  return count
}
