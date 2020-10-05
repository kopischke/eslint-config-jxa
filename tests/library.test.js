const library = require('../library')

test('exports an object', () => {
  expect(library).toBeDefined
  expect(typeof library).toBe('object')
})

test('exported object contains only rules', () => {
  let keys = Object.keys(library)
  expect(keys.length).toBe(1)
  expect(keys[0]).toBe('rules')
})

test('exported object rules are objects', () => {
  Object.values(library).forEach(v => {
    expect(v).toBeDefined
    expect(typeof v).toBe('object')
  })
})
