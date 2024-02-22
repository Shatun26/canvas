const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Добавляет стили в DOM при помощи тега <style>
          'css-loader', // Интерпретирует @import и url() как import/require() и разрешает их
          'sass-loader', // Компилирует SCSS в CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
