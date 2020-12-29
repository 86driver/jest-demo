import { fetchCall, fetchPromise, fetchAsync } from '../src/fetchData'


//callback test
test('the data is jest', (done) => {
  function callback(data) {
    // 正常情况下jest在执行过程中不会等待异步代码的执行结果，
    // 当执行逻辑走到最后一行没有异常jest就会返回测试成功。
    // 传入一个done参数，并在test方法内异步执行的代码中调用这个done方法，这样，test方法会等到done所在的代码块内容执行完毕后才返回测试结果
    done()
    expect(data).toBe('jest')
  }

  fetchCall(callback)
})

//Promise test
test('the data is promise', (done) => {
  return fetchPromise().then(data => {
    expect(data).toBe('promise')
    done()
  })
})

// async/await test
test('the data is async', async () => {
  await expect(fetchAsync()).resolves.toBe('async')
})
