const path = require("path");

const config = {
    enrty:path.resolve(__dirname,"src","main.ts"),
    mode:"development",
    module:{
        rules:[]
    },
    output:{
        filename: "main.js",
        path:path.resolve(__dirname, "dist")
    }
}