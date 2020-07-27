var obj = new Object(111);
console.log(obj);                                           //number {111}
console.log(obj + 100);                                     //object

var obj1 = new Object();
console.log(obj1);                                           // {}

var obj2 = Object({name: "value"});
console.log(obj2);                                          //{name: "value"}

var obj3 = {};
var obj4 = Object();
console.log(obj3 instanceof Object);                        //true
console.log(obj4 instanceof Object);                        //true

var obj = {name: "value"};
console.log(obj.valueOf());                                 //{name: "value"}

console.log(Object.create);                                 //create() { [native code] }
console.log(Object.prototype.create);                       //undefined
console.log(Object.prototype.toString);                     //toString() { [native code] }
var a = {};
console.log(a.toString);                                    //toString() { [native code] }

console.log(String.fromCharCode(49,77));                    //1M

var b = {fruit : "apple"};
console.log(b.hasOwnProperty("fruit"));                     //true
console.log(b.hasOwnProperty("melon"));                     //false
console.log(b.hasOwnProperty("hasOwnProperty"));            //false

console.log(b.propertyIsEnumerable("fruit"));               //true


var c = new Object(123);
console.log(Object.prototype.isPrototypeOf(c));             //true

var b = {fruit : "apple"};
var c = new Object(123);
console.log(b.toString());                                  //[object Object]
console.log(Object.prototype.toString.call(c));             //[object Number]

console.log(12345.67.toLocaleString());                     //12,345.67
console.log("12345.67".toLocaleString());                   //12345.67


