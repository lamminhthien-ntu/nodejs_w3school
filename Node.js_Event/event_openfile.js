var events = require('events');
var eventEmitter = events.EventEmitter();


var fs = require('fs');
var rs = fs.createReadStream("Node.js_Event/demofile.txt");
rs.on('open', function (){
    console.log('The file is open');
});