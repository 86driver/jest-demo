import {
  initializeCityDatabase,
  clearCityDatabase,
  setCount,
} from '../src/before_after'

beforeEach(() => {
  console.log('生命周期，-- beforeEach --在每个测试用例执行之前执行')
  initializeCityDatabase()
})

afterEach(() => {
  console.log('生命周期，-- faterEach --在每个测试用例执行之后执行')
  clearCityDatabase()
})

test('测试jest beforeEach&afterEach生命周期 ', () => {
  let count = setCount()
  expect(count).toBe(100)
})
