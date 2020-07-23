var a = 1;
switch (a) {
    case 1:
        console.log("a: one");
    case 2:
        console.log("a: two");
};                                      //a: one //a: two

var a = 1;
switch (a) {
    case 1:
        console.log("a: one");
        break;
    case 2:
        console.log("a: two");
};                                      //a: one

var a = 1;
switch (a) {
    case 2:
        console.log("a: one");
    default:
        console.log("a: none");
    case 3:
        console.log("a: two");
};                                      //a: none //a: two


var a = 1;
switch (a) {
    case 2:
        console.log("a: one");
    default:
        console.log("a: none");
        break;
    case 3:
        console.log("a: two");
};                                      //a: none


var a = 1;
switch (a) {
    case 1:
    case 2:
        console.log("a: one");
};                                      //a: one 