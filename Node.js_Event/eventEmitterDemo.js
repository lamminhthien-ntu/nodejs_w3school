var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('denvang',function tocdo(){
    console.log('Giảm tốc độ');
});

emitter.on('denvang',function dunglai(){
    console.log('Dừng lại trước vạch giới hạn');
});

var tinhieu = [3,2,1] //1: đèn đỏ, 2: đèn vàng, 3: đèn xanh
for (var th of tinhieu) {
    if (th == 2) {
        emitter.emit('denvang');
    }
}
