var a = 1;
while (a < 4) {
    console.log(a);
    a++;
}                       //1 //2 //3

var a = 1; 
do {
    console.log("do:"+a);
    a++;
} while (a < 4) {
    console.log("while:"+a);
}                             //do: 1 //do: 2 //do: 3 //while: 3