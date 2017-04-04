import path from 'path'
import nodeExternals from 'webpack-node-externals'

const config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    'index': './test/index.js'
  },
  output: {
    path: path.join(__dirname, 'test'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: { loader: 'ignore-loader' }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                'targets': {
                  'node': 'current'
                }
              }]
            ]
          }
        }
      }
    ]
  }
}

export default [config]
