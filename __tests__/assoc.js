import assoc from '../assoc'

describe('assoc', () => {
  it('receive String as key', () => {
    expect(assoc('a', 2, {})).toEqual({a: 2})
  })

  it('receive Number as key', () => {
    expect(assoc(1, 2, [])).toEqual([undefined, 2])
  })

  it('transform unvalid object', () => {
    expect(assoc('a', 2, undefined)).toEqual({a: 2})
    expect(assoc(1, 2, undefined)).toEqual([undefined, 2])
    expect(assoc('a', 2, null)).toEqual({a: 2})
    expect(assoc(1, 2, null)).toEqual([undefined, 2])
    expect(assoc('a', 2, new Date)).toEqual({a: 2})
    expect(assoc(1, 2, new Date)).toEqual([undefined, 2])
  })
})
