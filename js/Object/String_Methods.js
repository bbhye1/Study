// Connect strings
var apple = "123" + "water" + 
                "멜론";
console.log(apple);                                 //123water멜론



// String()
console.log(""+123);                                //123
console.log(typeof (""+123));                       //string
console.log(String(123));                           //123
console.log(typeof String(123));                    //string

// new String()
console.log(new String(123));                       //String {"123"}
console.log(typeof new String(123));                //object
console.log(new String(123).valueOf());             //123


// length property
var value = "lemon";
console.log(value.length);                          //5
for (var i = 0; i < value.length; i++) {
    console.log(value[i]);
};                                                  //l //e //m //o //n


// trim()
var value1 = "   apple   ";
console.log(value1.length);                         //11
console.log(value1.trim().length);                  //5

var value2 = "lemon";
var instanse = new String("lemon");


// toString
var value = 123;
var result = value.toString();
console.log(typeof result);                         //string


var value = "abc";
var result = value.toString();
console.log(typeof result);


var result = toString(123);
console.log(result);                                //Object undefined ()안의 값로 프로토타입의 키값 중 찾음 하지만 문자열이 아니기 떄문에 못찾음 


// charAt()
var a = "apple";
console.log(a.charAt(3));                           //l
console.log(a[3]);                                  //l
console.log(a.charAt(6));                           //    (빈 문자열)
console.log(a[6]);                                  //undefined  (es6)


// indexOf()
var b = "pineapple";
console.log(b.indexOf("p"));                        //0
console.log(b.indexOf("p",3));                      //5
console.log(b.indexOf("p",-1));                     //0
console.log(b.indexOf("p","N"));                    //0
console.log(b.indexOf("c"));                        //-1

// lastIndexOf()
console.log(b.lastIndexOf("p"));                    //6
console.log(b.lastIndexOf("p",3));                  //0
console.log(b.lastIndexOf("p",-3));                 //0
console.log(b.lastIndexOf("c"));                    //-1

// concat()
var fruit = "apple";
console.log(fruit.concat("is",300));                //appleis300
console.log("melon".concat("is",300,"clap"));       //melonis300clap
var number = new String(1234);
console.log(number.concat("clap"));                 //1234clap

// toLowerCase(), toUpperCase()
console.log("victory".toUpperCase());               //VICTORY
console.log("VICTORY".toLowerCase());               //victory

// substring() // substr() // slice()
var summerfruit = "watermelon";
console.log(summerfruit.substring(3));              //ermelon
console.log(summerfruit.substring(3, 7));           //erme

console.log(summerfruit.substr(3));                 //ermelon
console.log(summerfruit.substr(3, 2));              //er

console.log(summerfruit.slice(2, 5));               //ter


// match() // replace() //search() //split();
var sports = "basket-ball";
console.log(sports.match(/k/));                     //k
console.log(sports.match("ke"));                    //ke
console.log(sports.match("kE"));                    //null

console.log(sports.replace(/ket/,"e"));             //base-ball
console.log(sports.replace('ket',"e"));             //base-ball
console.log(sports.replace('KEt',"e"));             //basket-ball

console.log(sports.search(/k/));                    //3
console.log(sports.search('k'));                    //3
console.log(sports.search(1));                      //-1

console.log(sports.split('-'));                     //["basket", "ball"]
console.log(sports.split(''));                      //["b","a","s","k","e","-","t","b","a","l","l"]
console.log(sports.split('-', 1));                  //["basket"] 반환수
console.log(sports.split('-', 2));                  //["basket", "ball"]



// charCodeAt()  //fromCharCode();  //localeCompare()
var hobby = "sk8tE"
console.log(hobby.charCodeAt());                    //115
console.log(hobby.charCodeAt(2));                   //56
console.log(hobby.charCodeAt(8));                   //NaN

console.log(String.fromCharCode(8,115,56));         //s8

var i = "B"
console.log(i.localeCompare("A"));                  //1
console.log(i.localeCompare("B"));                  //0
console.log(i.localeCompare("C"));                  //-1