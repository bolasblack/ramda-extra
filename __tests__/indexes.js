import indexes from '../indexes'

describe('indexes', () => {
  it('return array of number if argument is array', () => {
    expect(indexes('abc'.split(''))).toEqual([0, 1, 2])
  })

  it('return array of string if argument is object', () => {
    expect(indexes({a: 1, b: 2, c: 3})).toEqual(['a', 'b', 'c'])
  })
})
