import reArg from '../re_arg'

describe('reArg', () => {
  const returnArguments = (...args) => args

  it('reorder arguments', () => {
    const fn = reArg([2, 1, 0, 3], returnArguments)
    expect(fn).toHaveLength(4)
    expect(fn('a', 'b', 'c', 'd', 'e')).toEqual(['c', 'b', 'a', 'd'])
    expect(fn('a', 'b', 'c')).toEqual(['c', 'b', 'a', undefined])
    expect(fn('a', 'b', undefined, 'd')).toEqual([undefined, 'b', 'a', 'd'])
  })
})
