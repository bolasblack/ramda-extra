import R from 'ramda'
import fs from 'fs'
import path from 'path'
import assoc from './assoc'

const babelrc = JSON.parse(fs.readFileSync('./.babelrc'))
const disableModuleFunction = R.map(R.when(R.equals('es2015'), R.always(['es2015', {modules: false}])))

export default {
  context: path.resolve('.'),
  entry: ['./index.js'],
  resolveLoader: {
    modules: ['node_modules'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [path.resolve(__dirname, 'node_modules')],
      loader: 'babel-loader',
      query: R.compose(
        assoc('presets', disableModuleFunction(babelrc.presets)),
        assoc('babelrc', false),
      )(babelrc),
    }],
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: '[name].js',
    library: 'ramda-extra',
    libraryTarget: 'umd',
  },
  externals: 'ramda',
  devtool: 'source-map',
}
