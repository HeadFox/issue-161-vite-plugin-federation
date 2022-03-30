const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies: deps } = require('./package.json');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'swc-loader',
          options: {
            env: {
              targets: '> 0.2%, not dead, not IE 11, not op_mini all',
            },
            minify: true,
          },
        },
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'myHostApp',
      remotes: {
        'myApp': 'myApp@http://localhost:3001/remoteEntry.js',
      },
      shared: [{
        ...deps,
      }],
    }),
  ],
};
