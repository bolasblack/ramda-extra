import R from 'ramda'
import assoc from './assoc'

// :: [String | Number] -> a -> {k: v} | [a] -> {k: v} | [a]
const assocPath = R.curry((path, val, obj) => {
  if (path.length === 0) return obj
  if (path.length === 1) return assoc(path, val, obj)
  const key = path[0]
  const container = obj == null ? (R.is(Number, key) ? [] : {}) : obj
  return assoc(key, assocPath(path.slice(1), val, container[key]), container)
})

export default assocPath
