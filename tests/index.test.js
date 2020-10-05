const index = require('../index')
const valid = require('./valid-keys')

test('exports an object', () => {
  expect(index).toBeDefined
  expect(typeof index).toBe('object')
})

test('exported object is not empty', () => {
  expect(Object.keys(index).length).toBeGreaterThan(0)
})

test('exported object keys are valid', () => {
  Object.keys(index).forEach(k => {
    expect(valid).toContain(k)
  })
})

test('exported object values are objects', () => {
  Object.values(index).forEach(v => {
    expect(v).toBeDefined
    expect(typeof v).toBe('object')
  })
})
