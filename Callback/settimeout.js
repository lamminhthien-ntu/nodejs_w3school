function first(){
    setTimeout(function (){
      console.log("One");
    },500);
}

function second() {
    console.log('Second');
}

first();
second();