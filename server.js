const http = require('http');

const server = http.createServer(function(req, res){
    res.end("I created my first server using node.js")
});

server.listen(3000);