for(var i=0; i < 4; i++) {
    console.log(i);
}                           //1 //2 //3 //4

var i = 0;
for( ; i < 4; ) {
    console.log(i);
    i++;
}                           

for(var i = 0; ; ) {
    if(i < 4) {
    console.log(i);
    i++;
    }
}                         

var i = 0;
for( ; ; ) {
    if(i < 4) {
    console.log(i);
    i++;
    }
}                     






//Quiz

var a = 0;
var b = 0;
var c = 0;

for(var i=0; i < 50; i++) {
    if (i % 2 === 0) {
        a += i;
        c += i;
    } else {
        b += i;
        c += i;
    }
    
}

console.log("even total:"+ a);
console.log("odd total:"+ b);
console.log("total:"+ c);