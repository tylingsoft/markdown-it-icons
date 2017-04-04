import path from 'path'
import nodeExternals from 'webpack-node-externals'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const rules = [
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
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

const config = {
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
  module: { rules },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css')
  ]
}

export default [config]
