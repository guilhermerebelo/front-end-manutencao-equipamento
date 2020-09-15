/* eslint-env node */
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        cadastro: "./app/main/app.js"
    },
    output: {
        path: __dirname + "/../dist",
        filename: "cadastro.js",
        library: "cadastro",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
            },
            {
                test: /\.html$/,
                use: "html-loader"
            }
            // {
            //     test: /\.(eot|ttf|otf)(\?.*)?$/,
            //     loader: "file-loader",
            //     options: {
            //         limit: 10000,
            //         name: "[name].[ext]",
            //         outputPath: "/fonts/", // where the fonts will go
            //         publicPath: "/assets" // override the default path
            //     }
            // }
        ]
    },
    plugins: [
        // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
        // Only emit files when there are no errors
        new webpack.NoEmitOnErrorsPlugin(),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
        // Minify all javascript, switch loaders to minimizing mode
        //new webpack.optimize.UglifyJsPlugin(),

        // Reference: https://github.com/webpack/extract-text-webpack-plugin
        // Extract css files
        // Disabled when in test mode or not in build mode
        new ExtractTextPlugin({
            filename: "cadastro.css",
            allChunks: true
        })
    ],
    externals: {
        angular: "angular",
        moment: "moment",
        lodash: "_"
    },
    devtool: "#source-map"
};
