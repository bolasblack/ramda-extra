import R from 'ramda'

// :: {k, v} | [a] -> [k] | [Number]
export default obj => {
  return Array.isArray(obj) ? R.range(0, obj.length) : R.keys(obj)
}
