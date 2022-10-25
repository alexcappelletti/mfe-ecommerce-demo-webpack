import HtmlWebpackPlugin from 'html-webpack-plugin'
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js'

export default {
  mode: 'development',
  devServer: {
    port: 8082
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartInfo': './src/index'
      },
      shared: {
        '@faker-js/faker': {
          singleton: true
        }
      }
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
