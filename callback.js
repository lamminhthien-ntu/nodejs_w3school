function doHomework(subject, callback) {
    setTimeout( function(){
        console.log(`Bắt đầu làm bài tập ${subject}.`);
        callback();
    }, 5000);

}

function alertFinished(){
    console.log('Làm bài tập xong!');
}
doHomework('Toán', alertFinished);