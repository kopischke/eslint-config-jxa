const injection = require('../injection')

test('exports an object', () => {
  expect(injection).toBeDefined
  expect(typeof injection).toBe('object')
})

test('exported object contains only rules', () => {
  let keys = Object.keys(injection)
  expect(keys.length).toBe(1)
  expect(keys[0]).toBe('rules')
})

test('exported object rules are objects', () => {
  Object.values(injection).forEach(v => {
    expect(v).toBeDefined
    expect(typeof v).toBe('object')
  })
})
