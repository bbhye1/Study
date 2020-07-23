var a = 0, b = 0;
while (a < 1) {
    b++;
    if(b === 3) {
    break;
    console.log(b);        
    }
    console.log(b);
}                                   //1 //2



for(var i = 0; i < 5; i++) {
    if(i === 2 || i === 3) {
        continue;
    }
    console.log(i);
}                                   //0 //1 //4