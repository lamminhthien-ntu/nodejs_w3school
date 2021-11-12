var fs = require('fs');

fs.appendFile('Node.js_File_System_Module/mynewfile1.txt', ' This is my text to updated at the end of the file. ', function (err) {
    if (err) throw err;
    console.log('Updated!');
});