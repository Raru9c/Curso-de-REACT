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
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve (__dirname, 'src/components/'),
            '@containers': path.resolve (__dirname, 'src/containers/'),
            '@styles': path.resolve (__dirname, 'src/styles/'),
            '@icons': path.resolve (__dirname, 'src/assets/icons/'),
            '@logos': path.resolve (__dirname, 'src/assets/logos/')
        }
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
        type: "asset",
        loader: 'file-loader',
        options: {
            name: 'images/[hash]-[name].[ext]'    
        }
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

  