import call from '../call'

describe('call', () => {
  it('return a function proxy all arguments to the first argument', () => {
    const fn = call(function(a, b, c, ...args) { return [this].concat([a, b, c].concat(args)) })
    const result = fn(1, 2, 3, 4)
    expect(typeof fn).toBe('function')
    expect(fn).toHaveLength(3)
    expect(result).toEqual([null, 1, 2, 3, 4])
  })

  it('return function call result if received 2 or more arguments', () => {
    const result = call(function(...args) { return [this].concat(args) }, 1, 2, 3)
    expect(result).toEqual([null, 1, 2, 3])
  })
})
