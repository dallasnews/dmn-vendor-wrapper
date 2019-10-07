// https://github.com/juristr/webpack-typescript-starter

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC = path.resolve(__dirname, "src");
const DIST = path.resolve(__dirname, "dist");

const common = {
  context: SRC,
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
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

const web = {
  ...common,
  entry: {
    index: "./web.js"
  },
  output: {
    filename: "web.js",
    path: DIST
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC}/test.html`
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

const lib = {
  ...common,
  entry: {
    index: "./lib.js"
  },
  output: {
    filename: "lib.js",
    library: "wrapper",
    // libraryTarget: "umd",
    path: DIST
  },
  target: "node"
};

module.exports = [web, lib];
