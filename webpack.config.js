const path = require("path");

const config = {
    entry: path.resolve(__dirname, "src", "main.ts"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts?$/,
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
        extensions: [".js", ".ts"]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}

module.exports = config;