var fs = require('fs');

fs.writeFile('Node.js_File_System_Module/mynewfile3.txt','Hello Content write file!',function (err){
    console.log('Saved');
});