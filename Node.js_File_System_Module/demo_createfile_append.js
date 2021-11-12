var fs = require('fs');

fs.appendFile('Node.js_File_System_Module/mynewfile1.txt','Hello content! 22222222', function (err){
    if (err) throw  err;
    console.log('Saved!');
});