import R from 'ramda'

// :: (*... -> a) -> *... -> a
export default (fn, ...args) => {
  return args.length > 0 ?
         fn.apply(null, args) :
         R.nAry(fn.length, (...args) => fn.apply(null, args))
}
