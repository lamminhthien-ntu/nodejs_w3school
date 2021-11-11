var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text to updated at the end of the file. ', function (err) {
    if (err) throw err;
    console.log('Updated!');
});