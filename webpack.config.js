const webpack = require("webpack");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require("html-webpack-plugin"); //打包html的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const FileListPlugin = require("thor-filelist-plugin");

const assetsDir = "static/";

const config = {
  entry: {
    page1: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `${assetsDir}js/[name].[hash].js`,
    chunkFilename: `${assetsDir}js/[name].chunk.[hash:8].js`,
  },
  devServer: {
    hot: true,
    open: true,
    port: 8087
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: {
          loader: "thor-text-loader",
          options: {
            name: "xuexing",
            age: 24,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              outputPath: `${assetsDir}img`,
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: ["img:src"],
            minimize: true,
          },
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  resolve: {
    // 设置别名
    alias: {
      "@": resolve("src"), // 这样配置后 @ 可以指向 src 目录
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "pubilc/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: `${assetsDir}css/[name].chunk.[hash:8].css`,
      chunkFilename: `${assetsDir}css/[id].chunk.[hash:8].css`,
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FileListPlugin(),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
  }
  if (argv.mode === "production") {
    config.plugins.push(new CleanWebpackPlugin());
  }

  return config;
};
