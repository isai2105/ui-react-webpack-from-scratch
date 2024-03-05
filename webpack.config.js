const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // files that match and should be hit by Webpack
                exclude: /node_modules/, 
                use: { // tells webpack what loader it needs to use
                    loader: 'babel-loader'
                }
            }, 
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader' 
                }
            }
        ],
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}