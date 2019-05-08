const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

const clientConfig = {
  entry: ["babel-polyfill", "./src/main/client/client.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "furnas.client.js"
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        })
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(xml|txt)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.ico$/,
        use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i
    }),
    new webpack.DefinePlugin({
      SERVER: false
    })
  ]
};

const serverConfig = {
  entry: ["babel-polyfill", "./src/main/server/server.js"],
  target: 'node',
  output: {
    path: path.resolve(__dirname, "server"),
    filename: "furnas.server.js"
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
        test: /\.scss$/,
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(xml|txt)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.ico$/,
        use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      SERVER: true
    })
  ]
};

module.exports = [clientConfig, serverConfig];