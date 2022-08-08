const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
    }),
    ],
    ///
    module: {
      loaders: [
        {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
        {loader: 'style-loader!css-loader', test: /\.css$/},
        {loader: 'url-loader', test: /\.gif$/},
        {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
      ],
    },
    resolve: {
      alias: {
        config$: './configs/app-config.js',
        react: './vendor/react-master',
      },
      extensions: ['', 'js', 'jsx'],
      modules: [
        'node_modules',
        'bower_components',
        'shared',
        '/shared/vendor/modules',
      ],
    },
    ///
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {

    rules: [
      {
        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};