// https://github.com/juristr/webpack-typescript-starter

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC = path.resolve(__dirname, "src");
const DIST = path.resolve(__dirname, "dist");

module.exports = {
  optimization: {
    namedModules: true,
    namedChunks: true
  },
  context: SRC,
  entry: {
    index: "./index.js"
  },

  output: {
    filename: "bundle.js",
    path: DIST
  },

  resolve: {
    extensions: [".js"],
    modules: [SRC, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "raw-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`
    })
  ],
  devtool: "cheap-module-source-map",
  devServer: {
    host: "localhost",
    port: 8080,
    quiet: true,
    watchContentBase: true,
    contentBase: DIST,
    publicPath: "/",
    hot: false
  }
};
