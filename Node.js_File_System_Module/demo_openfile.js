var fs = require('fs');

fs.open('Node.js_File_System_Module/mynewfile2.txt','w',function (err,file){
    if (err) throw err;
    console.log('Opened');
});