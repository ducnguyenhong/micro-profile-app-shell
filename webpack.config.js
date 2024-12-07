const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 4000,
    historyApiFallback: true
  },
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        reactApp: 'reactApp@http://localhost:4001/remoteEntry.js',
        vueApp: 'vueApp@http://localhost:4002/remoteEntry.js',
        angularApp: 'angularApp@http://localhost:4003/remoteEntry.js'
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, eager: true, requiredVersion: '^18.0.0' }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
};
