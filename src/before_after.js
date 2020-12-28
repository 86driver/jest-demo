let count = 0

export const initializeCityDatabase = () => {
  count = 100
}

export const clearCityDatabase = () => {
  count = 0
}

export const setCount = (val) => {
  return count
}
