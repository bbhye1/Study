var list = [undefined, null, 0, "", false]
for(var i = 0; i <list.length; i++) {
   console.log(new Boolean(list[i]));          //false //false //false //false //false 
}

var list = ["0", "123","aa"]
for(var i = 0; i <list.length; i++) {
    var result = new Boolean(list[i]);
    console.log(result+1);                     //2 //2 //2 
 }

 var result = true.toString();
 console.log(result);                          //true
 console.log(typeof result);                   //string

 var obj = new Boolean(2);
 console.log(obj.valueOf());                   //true

 