var http = require('http');
var fs = require('fs');
http.createServer(function (req,res){
    fs.readFile('/Node.js_File_System_Module/demofile1.html',function (err ,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);    