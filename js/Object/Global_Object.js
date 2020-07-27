
// Global property
console.log(NaN);                           //NaN
console.log(Infinity);                      //Infinity
console.log(undefined);                     //undefined

// parseInt()
console.log(parseInt(123.23));              //123
console.log(parseInt("-123px"));             //-123
console.log(parseInt("123px777"));          //123
console.log(parseInt("   123.5  "));        //123
console.log(parseInt(12, 16));              //18
console.log(parseInt(0x12));                //18
console.log(parseInt());                    //NaN

// parseFloat()
console.log(parseFloat("-123.33") + 6);         //-117.33
console.log(parseFloat("12.3abc3"));            //12.3
console.log(parseFloat("1.2e5"));               //120000
console.log(parseFloat());                      //NaN


// isNaN()
console.log(isNaN("aa"));                       //true
console.log(isNaN());                           //true
console.log(isNaN(123));                        //false
console.log(isNaN("123"));                      //false
console.log(isNaN(null));                       //false

console.log(NaN === NaN);                       //false
console.log(Object.is(NaN, NaN));               //true

// isFinite()
console.log(isFinite("aa"));                    //false
console.log(isFinite(0/0));                     //false
console.log(isFinite(1/0));                     //false
console.log(isFinite("11"));                    //true
console.log(isFinite(123));                     //true
console.log(isFinite(false));                   //true


// encodeURI(), decodeURI()

console.log(encodeURI("index/&번호=?123"));          // index/&%EB%B2%88%ED%98%B8=?123));  
console.log(decodeURI("index/&%EB%B2%88%ED%98%B8=?123"));    //index/&번호=?123 

// eval()

var result = eval("parseInt('123.3')");
console.log(result);                                //123