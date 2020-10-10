const library = require('../library')

test('exports an object', () => {
  expect(library).toBeDefined()
  expect(typeof library).toBe('object')
  expect(Array.isArray(library)).toBe(false)
})

test('exported object contains only rules', () => {
  const keys = Object.keys(library)
  expect(keys).toHaveLength(1)
  expect(keys[0]).toBe('rules')
})

test('exported object rules are objects', () => {
  Object.values(library).forEach(v => {
    expect(v).toBeDefined()
    expect(typeof v).toBe('object')
    expect(Array.isArray(v)).toBe(false)
  })
})
