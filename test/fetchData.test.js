import fetchData from '../src/featchData'

test('the data is jest', (done) => {
  function callback(data) {
    done()
    expect(data).toBe('jest')
  }

  fetchData(callback)
})
