const { dirname } = require('path');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: './dist'
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "css-loader",
              "sass-loader",
            ],
          },
        ],
      },

}