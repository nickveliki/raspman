const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const dotenv = require("dotenv-webpack");

module.exports = (env)=>( {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    watchOptions:{
        ignored:new RegExp("node_modules")
    },
    module: {
        rules: [
            {
                test:/\.js$/, 
                use: 'babel-loader'
            },
            {
                test:/\.css$/, 
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: "url-loader",
                query:{
                    publicPath:"/assets/",
                    outputPath:path.resolve("./", "dist", "assets"),
                }
            }
        ]
    },
    mode:'development',
    devServer:{
        historyApiFallback:{
            index:"/index.html/"
        }
    },
    plugins: [
        new htmlPlugin({
            template: './src/index.html',
            title:"Progressive Web Application"
        }),
        new WorkboxPlugin.InjectManifest({
            swSrc:'./src/sw.js',
            swDest:'service-worker.js'
        }),
        new CleanPlugin(),
        new dotenv({
            path:env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : '.env'
        })
    ]
})