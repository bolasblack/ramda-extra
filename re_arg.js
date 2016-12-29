import R from 'ramda'

// :: [Number] -> (a, b, c, *... -> d) -> (a, *..., c, b -> d)
export default R.curry((argOrder, fn) => {
  return R.nAry(argOrder.length, (...args) => {
    const newArgs = argOrder.reduce((newArgs, targetPos, sourcePos) => {
      newArgs[targetPos] = args[sourcePos]
      return newArgs
    }, [])
    return fn(...newArgs)
  })
})
