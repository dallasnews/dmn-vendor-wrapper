const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC = path.resolve(__dirname, "src");
const DIST = path.resolve(__dirname, "dist");

const config = {
  context: SRC,
  entry: {
    index: "./index.js"
  },
  output: {
    filename: "index.js",
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
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["url-loader"]
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

module.exports = config;
