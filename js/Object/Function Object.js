
// new Fuction()
var obj = new Function ("a", "b", "return a + b;");
console.log(obj(1,2));                                      //3

var obj = new Function ("return 10 + 5;");
console.log(obj());                                         //15



//call function

function getFruit(param1, param2) {
    return param1 +","+param2 +" "+ "is fruit";
  }

getFruit("apple","lemon");                                  //"apple,lemon is fruit"
console.log(getFruit.length);                               //2

getFruit("apple","lemon","melon");
console.log(getFruit.length);                               //2


//function declaration 
function getFruit(params) {
    return;
}

getFruit(a); 

//function expressin
var getFruit = function (param) {
   return param + 1;
  } 
getFruit(2);

var countFruit = function inside(param) {
    if (param == 3) {
        return param + 1;
    }
    return inside(param+1);
}
countFruit(1);                                              //4
inside(1);                                                  // Error : inside is not defined


// call()
function getTotal(one, two) {
    return one + two ;
}
var result = getTotal.call(this, 10, 20); 
console.log(result);                                       //30


var value = {one:20, two:30};
function getTotal() {
    return this.one + this.two ;
}
var result = getTotal.call(value);
console.log(result);                                        //50

// apply()
function getTotal(one, two) {
    return one + two ;
}
 var result = getTotal.apply(this, [15,25]);
 console.log(result);                                       //40

 // toString()
 function getTotal(one, two) {
    return one + two ;
}
 console.log(getTotal.toString());                         //function getTotal(one, two) {return one + two;}


//argument object 
function getTotal(one) {
    return one + arguments[1]+ arguments[2];
}
 var result = getTotal.apply(this, [1,2,3]);
 console.log(result);                                       //6

 
