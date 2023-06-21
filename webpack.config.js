const path = require("path");

const config = {
    enrty: path.resolve(__dirname, "src", "main.ts"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude : /node_modules/,
                use: "ts-loader"
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