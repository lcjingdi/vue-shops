var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    devServer: { disableHostCheck: true, },
    module: {
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif|bmp)$/, use: 'url-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'
            },
            {
                test: /\.js$/,use: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /.vue$/, use: 'vue-loader'
            }
        ]
    }

}