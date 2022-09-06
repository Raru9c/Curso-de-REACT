const path = require ("path");
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const MiniCssExtractPlugin = require ('mini-css-extract-plugin')

module.exports = {
    entry: "/src/index.js",
    output: {
        path: path.resolve (__dirname, 'dist'),
        filename: "bundle.js"
    },
    mode: "development",
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
    {test: /\.html$/,
    use: [
        {loader: 'html-loader'}
    ]  },
    {test: /\.sa[ac]ss$/,
    use: ['css-loader',
    'style-loader',
    'sass-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            inject: true,
            template: "./public/index.html",
            filename: '/menu.html'
        }), new MiniCssExtractPlugin ({
            filename: "[name].css"
        })
    ]
}