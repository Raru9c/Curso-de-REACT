const path = require ("path");
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');


module.exports = {
    entry: "/src/index.js",
    output: {
        path: path.resolve (__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/'
    },
    mode: "development",
    devServer:{
        historyApiFallback: true,
        compress: true,
        port: 3005,
        open: true},

    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
        {test: /\.(js|jsx)$/,
        exclude: "/node_modules",
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
    }},
    {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset"
    },
    {test: /\.html$/,
    use: [
        {loader: 'html-loader'}
    ]  },
    {test: /\.(css|s[ac]ss)$/i,
    use: ['style-loader','css-loader','sass-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            inject: true,
            template: "./public/index.html",
            filename: './index.html'
        }), new MiniCssExtractPlugin ({
            filename: "[name].css"
        })
    ]
} 

  