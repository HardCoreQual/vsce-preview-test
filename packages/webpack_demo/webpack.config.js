// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV == "production";

const config = {
  target: 'node',
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
      filename: 'index.js',
      library: 'core',
      libraryTarget: 'umd',
      umdNamedDefine: true
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
  ],
    externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
