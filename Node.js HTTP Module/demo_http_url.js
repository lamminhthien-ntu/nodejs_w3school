var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Hello Chrome I'm having Header frome nodejs server !");
    res.end();
}).listen(8080);