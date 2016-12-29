import reduceObjIndexed from '../reduce_obj_indexed'

describe('reduceObjIndexed', () => {
  it('reduce obj with value and key', () => {
    const fn = reduceObjIndexed((memo, value, key) => memo.concat([[value, key]]), [])
    expect(fn({a: 1, b: 2, c: 3})).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ])
    expect(fn(['a', 'b', 'c'])).toEqual([
      ['a', 0],
      ['b', 1],
      ['c', 2],
    ])
  })
})
