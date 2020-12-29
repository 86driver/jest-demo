export const fetchCall = (callBack) => {
  let data = ''
  // 模拟获取异步获取数据然后回调
  setTimeout(() => {
    data = 'jest'
    callBack(data)
  }, 2000)
}


export const fetchPromise = () => {
  let data = ''
  return new Promise((resolve) => {
    setTimeout(() => {
      data = 'promise'
      resolve(data)
    }, 0)
  })
}

export async function fetchAsync() {
  let data = ''
  function dataChange() {
    data = 'async'
    return data
  }
  return await dataChange(data)
}