function fetchData(callBack) {
  let data = ''
  // 模拟获取异步获取数据然后回调
  setTimeout(() => {
    data = 'jest'
    callBack(data)
  }, 2000)
}

export default fetchData
