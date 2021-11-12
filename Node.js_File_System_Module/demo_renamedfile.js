
var fs = require('fs');

fs.rename('Node.js_File_System_Module/mynewfile1.txt','Node.js_File_System_Module/myrenamedfile.txt',function (err){
    if (err) throw err;
    console.log('File Renamed!');
    
})