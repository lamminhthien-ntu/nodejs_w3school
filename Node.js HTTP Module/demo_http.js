var http = require('http');

//create a server object
http.createServer(function (req,res){
    res.write('Server respone with hello word');
    res.end();
}).listen(8080);