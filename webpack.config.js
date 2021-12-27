const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoPrefixer = require("autoprefixer");
const webpack = require("webpack");
const envVars = require("./src/environment");

const isDev = process.env.STAGE === "dev";
const devtool = isDev ? "inline-source-map" : "(none)";
module.exports = {
  devServer: {
    historyApiFallback: true
  },
  entry: ["@babel/polyfill", "./src/index.js"],
  optimization: !isDev
    ? {
        minimize: true,
        minimizer: [new TerserPlugin()]
      }
    : {},
  output: {
    chunkFilename: "[id].[hash].js",
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|ttf|woff2|woff|eot)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "./assets/icons"
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./static/favicon.ico"
    }),
    new LodashModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      GAVKI_ENV: envVars
    })
  ],
  devtool
};
