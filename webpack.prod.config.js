const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 4000,
    historyApiFallback: true // Hỗ trợ React Router
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
        reactApp: 'reactApp@https://react-child-profile.vercel.app/remoteEntry.js',
        vueApp: 'vueApp@https://vue-child-profile.vercel.app/remoteEntry.js',
        angularApp: 'angularApp@https://angular-child-profile.vercel.app/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
