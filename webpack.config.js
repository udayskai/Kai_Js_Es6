var path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    // entry: {
    //   demo:"../../../Batch5/Day17/ES6/src/ClassDemo/demo.js",
    //   main:"../../../Batch5/Day17/ES6/src/ClassDemo/main.js"
    // },
    mode: "development", // development // production
    entry: [


            "../NodeGame/src/Discount/Controller/DiscountBase.js",
            "../NodeGame/src/Discount/Controller/Child.js",
            "../NodeGame/src/Discount/Model/model.js",
            "../NodeGame/src/Discount/Controller/Main1.js"

        // "../NodeGame/src/Class/classDemo.js",
        // "../NodeGame/src/Class/mainDemo.js",

        // "../Day19/src/static/staticDemo.js",
        // "../Day19/src/static/nonStaticDemo1.js",
        // "../Day19/src/static/nonStaticDemo2.js",
        // "../Day19/src/static/main.js",

        // "../Day19/src/Abstract/abstractDemo.js",
        // "../Day19/src/Abstract/childDemo.js",
        // "../Day19/src/Abstract/mainDemo.js"



    ],
    output: {
        publicPath: "./dist/",
        path: path.join(__dirname, "./dist/"),
        //filename: "[name].build.js",
        filename: "build.js",
        library: 'appGlobal'
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" },
            //{test:/\.css?$/,loaders: ['style-loader', 'css-loader']}
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../ES6/dist/',
                            hmr: process.env.NODE_ENV === 'development'
                            //minimize:true
                        },
                    },
                    'css-loader',
                ]
            }
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
};
