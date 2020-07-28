//stringify()

var data = {
    apple: "red",
    melon: "green",
    amount: 123
}

console.log(JSON.stringify(data));                                   //{"apple":"red","melon":"green","amount":123}
console.log(JSON.stringify(['apple', 123]));                         //["apple",123]
console.log(JSON.stringify([Infinity, NaN, null]));                  //[null,null,null]
console.log(JSON.stringify([true, false]));                          //[true,false]
console.log(JSON.stringify(undefined));                              //undefined
console.log(JSON.stringify([undefined]));                            //[null]
console.log(JSON.stringify({value: undefined}));                     //{}

function replace(key, value){
    return key === "amount"? 50 : value;
};
console.log(JSON.stringify(data, replace));                          //{"apple":"red","melon":"green","amount":50}
console.log(JSON.stringify(data, ['apple', 'melon']));               //{"apple":"red","melon":"green"}
console.log(JSON.stringify(data,"",'\n'));                            /*{
                                                                        "apple": "red",
                                                                        
                                                                        "melon": "green",
                                                                        
                                                                        "amount": 123
                                                                        } */



// parse()
var value = "123";
try{
    var result = JSON.parse(value);
} catch {
    console.log("Json Parsing Error");
}
console.log(result);                                    //123
console.log(typeof result);                             //string

var value = "true";
try{
    var result = JSON.parse(value);
} catch {
    console.log("Json Parsing Error");
}
console.log(result);                                    //true
console.log(typeof result);                             //boolean

var value = '["abc","de","123"]';
try{
    var result = JSON.parse(value);
} catch {
    console.log("Json Parsing Error");
}
console.log(result);                                    //["abc","de","123"]

var value = '{"apple":"red"}';
try{
    var result = JSON.parse(value);
} catch {
    console.log("Json Parsing Error");
}
console.log(result);                                    //{apple: "red"}

var data = '{"apple":"red","melon":"green"}'

function replace(key, value){
    return key === "melon" ?"yellow" :value;
}
try{
    var result = JSON.parse(data, replace);
} catch {
    console.log("Json Parsing Error");
}
console.log(result);                                    //{apple: "red", melon: "yellow"}
