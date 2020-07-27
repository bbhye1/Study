
// Make Number objcet
console.log (Number("123") + 100);              //223
console.log (Number("AAA"));                    //NaN
console.log (Number(0x11));                     //17
console.log (Number(true));                     //1
console.log (Number(null));                     //0
console.log (Number(undefined));                //undefined
console.log (Number());                         //0


// Constant Number
console.log (Number.MAX_VALUE);                     //1.7976931348623157e+308
console.log (Number.MIN_VALUE);                     //5e-324
console.log (Number.NEGATIVE_INFINITY);             //-Infinity
console.log (Number.POSITIVE_INFINITY);             //Infinity
console.log (Number.NaN);                           //NaN


// new operator
var obj1 = new Number("111");
var obj2 = new Number("999");
console.log(obj1);                                  //Number {111}
console.log(obj2);                                  //Number {999}


// Primitive Value 
var apple = "red"                                   /* red is primitive value. */
var obj = new Number("111");
console.log(obj);                                  //Number {111}
console.log(obj1 + 50);                             //161
console.log(obj1.valueOf());                        //111


// toString()
var value = 123;
console.log(123 === value.toString());              //false
console.log(123.toString());                        // Syntax Error
console.log(123..toString());                       //123
console.log(123..toString(16));                     //7b


// toLocalString()
console.log(111123.33.toLocaleString());               //111,123.33
console.log(111123.33.toLocaleString('de-DE'));        //111.123,33
console.log(111123.33.toLocaleString('bn-IN'));        //১,১১,১২৩.৩৩

// toExponential()
console.log(1234..toExponential());                     //1.234e+3
console.log(1234..toExponential(2));                    //1.23e+3

// toFixed()
console.log(123.456.toFixed(2));                        //123.46
console.log(123.456.toFixed(5));                        //123.45600





