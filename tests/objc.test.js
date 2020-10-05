const objc = require('../objc')

test('exports an object', () => {
  expect(objc).toBeDefined
  expect(typeof objc).toBe('object')
})

test('exported object contains only rules', () => {
  let keys = Object.keys(objc)
  expect(keys.length).toBe(1)
  expect(keys[0]).toBe('rules')
})

test('exported object rules are objects', () => {
  Object.values(objc).forEach(v => {
    expect(v).toBeDefined
    expect(typeof v).toBe('object')
  })
})
