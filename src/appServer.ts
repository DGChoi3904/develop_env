import http from "http";
import fs from "fs";

const server = http.createServer((req,res)=> {    
    if(req.method === "GET"){
        if(req.url === "/"){
            const mainHtml = fs.readFileSync("./index.html");
            res.writeHead(200,{"Content-type":"text/html"});
            res.end(mainHtml);   
        }
    }
})

