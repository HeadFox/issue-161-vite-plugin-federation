const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies: deps } = require('./package.json');
const path = require('path');

module.exports = {
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
    new ModuleFederationPlugin({
      name: 'myApp',
      filename: 'remoteEntry.js',
      exposes: {
        './MfeApp': './src/MfeEntry',
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      ],
    }),
  ],
};
