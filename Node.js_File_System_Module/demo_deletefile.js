var fs = require('fs');

fs.unlink('Node.js_File_System_Module/mynewfile1.txt',function (err){
    if (err) throw  err;
    console.log('File Deleted');
})