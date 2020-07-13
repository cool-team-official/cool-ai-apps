const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  publicPath: "./",
  configureWebpack: {
    module: {
      rules: [{
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }, ]
    },
    plugins: [
      new CopyWebpackPlugin([{
          from: "app.json",
          to: "app.json"
        },
        {
          from: "./src/preload.js",
          to: "preload.js"
        },
        {
          from: "./src/assets/logo.png",
          to: "logo.png"
        },
        {
          from: "README.md",
          to: "README.md"
        }
      ])
    ]
  }
};