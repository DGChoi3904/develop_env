const path = require("path");

const config = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    mode: "development",
    target:["web","ES5"],
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
                exclude : /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                exclude : /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}

module.exports = config;