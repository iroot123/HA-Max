var http = require('http');

http.createServer(function(req,resp) {
    resp.writeHead(200, {"Content-Type": "text/plain"});
    resp.write("Hello World3");
    resp.end();

    console.log("sample output to console");

}).listen(8080);