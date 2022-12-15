const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./app/index.js",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(js)$/,
                use: "babel-loader"
            },
        ]
    },   
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        },
        plugins: [new HtmlWebpackPlugin()],
        mode: process.env.Node_ENV === 'production' ? "development" : "production"
    };        