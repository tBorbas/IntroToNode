const http = require("http");

const server = http.createServer(function (req, res) {
    res.writeHead(200, {"ContentType": "text/html"});
    res.end("Hello World");
})

server.listen(3000)