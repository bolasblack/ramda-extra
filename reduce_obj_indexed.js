import R from 'ramda'
import indexes from './indexes'

// :: ((a, v, k) -> a) -> a -> {k: v} -> a
export default  R.curry((iteratee, initial, data) => {
  return R.reduce((memo, key) => iteratee(memo, data[key], key), initial, indexes(data))
})
