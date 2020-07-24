object1 = {title : "learn js"};
object2 = {
    title : "Let's learn",
    number : 23,
    information : {
        TorF : true,
        subjcet : function sub() {}
    }
};


var object3 = {};
object3.title = "Let's learn";
console.log(object3);                               //{title: "Let's learn"}

object3["title"] = "javascript";
console.log(object3);                               //{title: "javascript"}

var value1 = object3.title; 
console.log (value1);                               //javascript
var value2 = object3.number;
console.log (value2);                               //undefined


var object4 = {
    apple : "red",
    grapes : "purple",
};

for(var item in object4) {
    console.log(item);
    console.log(object4[item]);
}                                                   //apple //red //grapes //purple 

