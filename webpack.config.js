const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
  devServer: {
    compress: false,
    open: "/",
    port: 5004,
  },
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "public"),
      "@css": path.resolve(__dirname, "src/css"),
    },
  },
};
