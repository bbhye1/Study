// 1 demention array 
var list = ["1","2","3"];
for(var i = 0; i < list.length; i++) {
    console.log(list[i]);
};                                                              //1 //2 //3

// 2 demention array
var list = [["1","2","3"]];
for(var i = 0; i < list.length; i++) {
    for(var j = 0; j < list[i].length; j++){
        console.log(list[i][j]);
    }; 
};                                                              //1 //2 //3

// new Array()
var list = new Array();
console.log(list);                                              //[]
var list = new Array(1,2,3);
console.log(list);                                              //[1, 2, 3]   
var list = new Array(3);
console.log(list);                                              //[undefined, undefined, undefined]
    

// length property
var list = [1,2,3]; 
console.log(list.lengh);                                        //3
list.length = 5;
console.log(list);                                              //[1, 2, 3, undefined, undefined]
list.length = 2;
console.log(list);                                               //[1,2]

//Add element
var list = [1,2,3]; 
list[4] = 6;
console.log(list);                                              //[1, 2, 3, undefined, 6]
list[list.length +1] = 7;
console.log(list);                                              //[1, 2, 3, undefined, 6, undefined, 7]

//Delete
var list = [1,2,3]; 
console.log(delete list);                                       //false
list = [1,2,3]; 
console.log(delete list);                                       //true

var list = {apple: "red"};
console.log(delete list.apple);                                 //true
console.log(list.apple);                                        //undefined

var list = [1,2,3]; 
console.log(delete list[1]);                                    //true
console.log(list);                                              //[1, undefined, 3]

// unshift()
var list = [1,2,3];
list.unshift(45,67);
console.log(list);                                              //[45, 67, 1, 2, 3]

//push()
var list = [1,2,3];
list.push(45,67);
console.log(list);                                              //[1, 2, 3, 45, 67]

//concat()
var list = [1,2,3];
var result = list.concat(45,[67]);
console.log(result);                                            //[1, 2, 3, 45, 67]

// slice()
var list = [1, 2, 3, 4, 5, 6];
var copy_list = list.slice(1,5);  
var copy_list1 = list.slice(-3, -2); 
var copy_list2 = list.slice(3, 2);
var copy_list3 = list.slice(false, 2);
console.log(list);                                              //[1, 2, 3, 4, 5, 6]
console.log(copy_list);                                         //[2, 3, 4, 5]
console.log(copy_list1);                                        //[4]
console.log(copy_list2);                                        //[]    
console.log(copy_list3);                                        //[1, 2]


// join()
var list = [1,2,3];
console.log(list.join("%"));                                    //1%2%3
console.log(list.join(""));                                     //123
console.log(list.join());                                       //1,2,3

// toString()
var list = [1,2,3];
console.log(list.toString());                                   //1,2,3

// toLocaleString()
var list = [1234.33];
console.log(list.toLocaleString());                              //1,234.33
console.log(list.toLocaleString('zh-Hans-CN-u-nu-hanidec'));     //一,二三四.三三

// shift()
var list = [1,2,3,4,5]; 
console.log(list.shift());                                        //1
console.log(list);                                                //[2,3,4,5]

// pop()
var list = [1,2,3,4,5]; 
console.log(list.pop());                                          //5
console.log(list);                                                //[1,2,3,4]

// splice()
var list = [1,2,3,4,5];         
console.log(list.splice());                                       //[]
console.log(list);                                                //[1,2,3,4,5]

console.log(list.splice(1,2,"a","b"));                            //[2,3]
console.log(list);                                                //[1,"a","b",4,5]

// sort()
var list = [4,3,2,1];
console.log(list.sort());                                         //[1,2,3,4]
console.log(list);                                                //[1,2,3,4]

var list = ["a123", "a10", "a33", "a5"];
console.log(list.sort());                                         //["a10", "a123", "a33", "a5"]

var list = [,,"a","b"];
console.log(list.sort());                                         //["a", "b", undefined, undefined]

var list = [123, 10, 33, 5];
console.log(list.sort());                                          //[10, 123, 33, 5]
var result = list.sort(function(one,two){ 
    return one - two;
})
console.log(result);                                                //[5, 10, 33, 123]


//reverse()
var list = [123, 10, 33, 5];
console.log(list.reverse());                                        //5, 33, 10, 123]