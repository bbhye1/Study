// defineProperty()
var obj = {};
Object.defineProperty(obj, "apple", {value: "red", enumerable: true});
console.log(obj);                               //{apple:"red"}

//defineProperties
var obj = {};
Object.defineProperties(obj, 
    {apple:{value:"red",enumerable: true}, melon: {value: "green", enumerable: true}});
console.log(obj);                               //{apple: "red", melon: "green"}
for (name in obj) {
    console.log(name+":"+obj[name]);
}                                               //apple:red //melon:green

//property descriptor
//value
var obj = {};
Object.defineProperty(obj, "apple", {value: "red"});
console.log(obj);                                  //{apple:"red"}

//writable
var obj = {};
Object.defineProperty(obj, "apple", {value: "red", writable: true});
obj.apple = "green";
console.log(obj);                                   //{apple:"green"}

var obj = {};
Object.defineProperty(obj, "apple", {value: "red", writable: false});
obj.apple = "green";
console.log(obj);                                   //{apple:"red"}

//enumerable
var obj = {};
Object.defineProperty(obj, "apple", {value: "red", enumerable: true});
for(name in obj) {
    console.log(name+":"+obj[name]);
}                                                    //apple:red 

var obj = {};
Object.defineProperty(obj, "apple", {value: "red", enumerable: false});
for(name in obj) {
    console.log(name+":"+obj[name]);
}                                                    //

//configurable
var obj = {};
Object.defineProperty(obj, "apple", {value: "red", configurable: true});
delete obj.apple;
console.log(obj.apple);                             //undefined

var obj = {};
Object.defineProperty(obj, "apple", {value: "red", configurable: false});
delete obj.apple;
console.log(obj.apple);                             //red



//getter
var obj = {};
Object.defineProperty(obj, "apple",{
    get: function() {
        return "red";
    }
});
var result = obj.apple;
console.log(result);                            //red

//setter
    var obj ={}, data = {};
    Object.defineProperty(obj, "apple",{
        set: function (param) {
            data.title = param;
        },
        get: function () {
            return data.title;
        }    
    });
    obj.apple = "red";
    console.log(obj.apple);                     //red

// getPrototypeOf()
function Read(point) {
    this.point = point;
  };
Read.prototype.getPoint = function(){};
Read.prototype.setPoint = function(){};
var obj = new Read(100);
var result = Object.getPrototypeOf(obj);
for(var key in result){
    console.log(key+":"+result[key])
};                                      //getPoint = function(){} //setPoint = function(){}

//getOwnPropertyNames() 
var obj = {};
Object.defineProperties(obj, 
    {apple:{value:"red"}, melon: {value: "green"}});
var result = Object.getOwnPropertyNames(obj);
for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
}                                               //apple //melon

var obj = {};
Object.defineProperties(obj, 
    {apple:{value:"red",enumerable: true}, melon: {value: "green", enumerable: false}});
var result = Object.keys(obj);
for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
}                                               //apple

//getOwnPropertyDescriptor()
var obj = {};
Object.defineProperty(obj, "apple", {value: "red", writable:true, enumerable:true});
var result = Object.getOwnPropertyDescriptor(obj, "apple");
for(var property in result) {
    console.log(property);    
}                                               //value //writable //enumerable //configurable

//preventExtensions()  //isExtensible()
var obj = {};
Object.preventExtensions(obj);
try{
Object.defineProperty(obj, "apple", {value: "red"}); 
} catch {
console.log("Error");
}                                               //Error
console.log(Object.isExtensible(obj));          //false

//seal() //isSealed()
var obj = {};
Object.defineProperty(obj, "apple", {value: "red"}); 
Object.seal(obj);
try{
    Object.defineProperty(obj, "melon", {value:"green"}); 
    delete obj.apple;
} catch {
console.log("Error");
}                                               //Error
console.log(Object.isSealed(obj));              //true

//freeze() isFrozen()
var obj = {};
Object.defineProperty(obj, "apple", {value: "red"}); 
Object.freeze(obj);
try{
    Object.defineProperty(obj, "melon", {value:"green"}); 
    delete obj.apple;
    obj.apple = "pink";
} catch {
console.log("Error");
}                                               //Error
console.log(Object.isFrozen(obj));              //true
