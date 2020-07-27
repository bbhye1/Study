// isArray()
console.log(Array.isArray({a: 1}));             //false
console.log(Array.isArray([1, 2]));             //true
console.log(Array.isArray(123));                //false

console.log(typeof {a: 1});                     //object
console.log(typeof [1, 2]);                     //object
console.log(typeof null);                       //object

// indexOf() // lastIndexOf()
var value = [1,2,5,2,5];
console.log(value.indexOf(5));                  //2
console.log(value.indexOf(5,3));                //4
console.log(value.indexOf("5"));                //-1

console.log("12525".indexOf("5",-2));           //2
console.log(value.indexOf(5,-2));               //4

console.log(value.lastIndexOf(2));              //3

// forEach()
var list = ["a","b","c"];
list.forEach(function(el, index, all) {
    console.log(el+":"+index+":"+all);
});                                            //a:0:a,b,c //b:1:a,b,c //c:2:a,b,c

var list = ["a","b","c"];
var fn = function(el, index, all) {
    console.log(el+":"+index+":"+all);
};
list.forEach(fn);                               //a:0:a,b,c //b:1:a,b,c //c:2:a,b,c

var list = ["a","b","c"];
var fn = function(el, index, all) {
    console.log(el + this.ten);
};
list.forEach(fn,{ten: 10});                     //a10 //b10 //c10



var list = ["a","b","c"];
var fn = function(el, index, all) {
    if (index === 0) {
        list.push("d");
    }
    console.log(el);
};
list.forEach(fn);                               //a //b //c

var list = ["a","b","c"];
var fn = function(el, index, all) {
    if (index === 0) {
        delete list[1];
    }
    console.log(el);
};
list.forEach(fn);                               //a //c


var list = ["a","b","c"];
var fn = function(el, index, all) {
    if (index === 0) {
        list[1] = "change";
    }
    console.log(el);
};
list.forEach(fn);                               //a //change //c



// every() // some()

var list = [50, 70, 30, 40];
var fn = function(el, index, all) {
    console.log(el);
    return el > 50; 
}
console.log(list.every(fn));                    //50 //false

var fn = function(el, index, all) {
    console.log(el);
    return el < 50; 
}
console.log(list.some(fn));                    //50 //70 //30 //true

// filter() // map()

var list = [50, 70, 30, 40];
var point = {value: 45}
var fn = function (el, index, all) {
    return el > this.value; 
  }
console.log(list.filter(fn, point));                   //[50, 70]


var fn2 = function (el, index, all) {
    return el+ this.value;
}
console.log(list.map(fn2, point));                      //[95, 115, 75, 85]


// reduce() // reduceRight()

var list = [1,3,5,7];
var fn = function (prev, curr, index, all) { 
    console.log(prev+":"+ curr);
    return prev + curr;
 }
 var result = list.reduce(fn); 
console.log("결과:"+result);                            //1:3 //4:5 //9:7 //결과:16

var result = list.reduce(fn, 3); 
console.log("결과:"+result);                           //3:1 //4:3 //7:5 //12:7 //결과:19

var result = list.reduceRight(fn); 
console.log("결과:"+result);                           //7:5 //12:3 //15:1 //결과:16

var result = list.reduceRight(fn, 3); 
console.log("결과:"+result);                           //3:7 //10:5 //15:3 //18:1 //결과:19