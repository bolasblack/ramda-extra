import R from 'ramda'

// :: String | Number -> a -> {k: v} | [a] -> {k: v} | [a]
export default R.curry((prop, val, obj) => {
  if (R.is(Number, prop)) {
    let snapshot
    if (obj && typeof obj.slice === 'function') {
      snapshot = obj.slice(0)
    } else {
      snapshot = []
    }
    snapshot[prop] = val
    return snapshot
  } else {
    return R.assoc(prop, val, obj)
  }
})
