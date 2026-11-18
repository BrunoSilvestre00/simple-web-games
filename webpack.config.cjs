const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {homepage} = require("./package.json");

module.exports = (_env, argv) => ({
    entry: "./src/index.tsx",
    devtool: argv.mode === "development" ? "eval-source-map" : false,
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        extensionAlias: {".js": [".ts", ".tsx", ".js"]}
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/[name].[contenthash].js",
        publicPath: "auto",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {transpileOnly: true, compilerOptions: {noEmit: false}}
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./public/index.html"}),
        new HtmlWebpackPlugin({
            filename: "404.html",
            template: "./public/404.html",
            inject: false,
            basePath: new URL(homepage).pathname
        })
    ],
    devServer: {port: 3000, hot: true},
    optimization: {splitChunks: {chunks: "all"}}
});
