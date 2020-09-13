const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.js"],
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: ".",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
};
