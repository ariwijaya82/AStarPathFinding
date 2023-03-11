import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}