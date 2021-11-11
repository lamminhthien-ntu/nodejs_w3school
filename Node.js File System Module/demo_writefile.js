var fs = require('fs');

fs.writeFile('mynewfile3.txt','Hello Content write file!',function (err){
    console.log('Saved');
});