const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const tsconfig = require('./tsconfig.json');

const pathAliases = {};
Object.entries(tsconfig.compilerOptions.paths ?? {}).forEach(([key, item]) => {
  pathAliases[key.slice(0, -2)] = path.resolve(__dirname, item[0].slice(0, -2));
});

module.exports = (env, argv) => ({
  mode: 'development',
  entry: {
    app: './src/index.ts',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  },
  devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'assets/**/*',
          context: 'src',
        }
      ]
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  cache: {
    type: 'filesystem',
    version: '1.0',
  },
  stats: {
    assets: false,
    modules: false,
    entrypoints: false,
    chunks: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.s[a|c]ss$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
      { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
      {
        test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: { limit: 10000, mimetype: 'application/font-woff2' },
      },
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: { limit: 10000, mimetype: 'application/font-woff' },
      },
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' },
    ],
  },
  resolve: {
    alias: pathAliases,
    extensions: ['.tsx', '.ts', '.js'],
  },
});
