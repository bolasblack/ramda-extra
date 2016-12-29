import assocPath from '../assoc_path'

describe('assocPath', () => {
  it('works', () => {
    expect(assocPath(['a', 1, 'b'], 2, undefined)).toEqual({a: [undefined, {b: 2}]})
    expect(assocPath(['a', 1, 'b'], 2, null)).toEqual({a: [undefined, {b: 2}]})
    expect(assocPath(['a', 1, 'b'], 2, {})).toEqual({a: [undefined, {b: 2}]})
    expect(assocPath(['a', 1, 'b'], 2, {a: null})).toEqual({a: [undefined, {b: 2}]})
    expect(assocPath(['a', 1, 'b'], 2, {a: [1]})).toEqual({a: [1, {b: 2}]})
    expect(assocPath(['a', 1, 'b'], 2, {a: [1, 2]})).toEqual({a: [1, {b: 2}]})
    expect(assocPath(['a', 1, 'b'], 2, {a: [1, {}]})).toEqual({a: [1, {b: 2}]})
    expect(assocPath(['a', 1, 'b'], 2, {a: [1, {b: null}]})).toEqual({a: [1, {b: 2}]})
    expect(assocPath(['a', 1, 'b'], 2, {a: [1, {b: 3}]})).toEqual({a: [1, {b: 2}]})
  })
})
