import path from 'path'
import nodeExternals from 'webpack-node-externals'

const rules = [
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

const nodeConfig = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: path.join(__dirname, './src/'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: { rules }
}

export default [nodeConfig]
