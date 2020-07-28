//abs()
console.log(Math.abs(-123));                        //123
console.log(Math.abs(-Infinity));                   //Infinity

// floor()
console.log(Math.floor(4.2));                       //4
console.log(Math.floor(-1.2));                      //-2
console.log(Math.floor(-4.0));                      //-4

// ceil()
console.log(Math.ceil(4.2));                        //5
console.log(Math.ceil(-1.2));                       //-1
console.log(Math.ceil(-1.8));                       //-1

// round()
console.log(Math.round(4.7));                       //5
console.log(Math.round(-1.2));                      //-1
console.log(Math.round(-1.8));                      //-2

// max()
console.log(Math.max(4, 6, 9));                     //9
console.log(Math.max(4, 6, "ab"));                  //NaN

// min()
console.log(Math.min(4, 6, 9));                     //4
console.log(Math.min(4, 6, "ab"));                  //NaN

//pow()
console.log(Math.pow(10, 3));                       //1000
console.log(Math.pow(10, 0));                       //1
console.log(Math.pow("a", 3));                      //NaN
console.log(Math.pow(10, "a"));                     //NaN
console.log(Math.pow(10));                          //NaN
