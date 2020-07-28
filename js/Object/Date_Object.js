// new Date()
var obj = new Date(2020,1,1,1,1,1,1);
console.log(obj.toLocaleString());                  //2020. 2. 1. 오전 1:01:01

var obj = new Date(2020, 06);
console.log(obj);                                   //Wed Jul 01 2020 00:00:00 GMT+0900 (대한민국 표준시)

var obj = new Date("2020-06");
console.log(obj);                                   //Mon Jun 01 2020 09:00:00 GMT+0900 (대한민국 표준시)

var obj = new Date(2020, 11, 36);
console.log(obj);                                   //Tue Jan 05 2021 00:00:00 GMT+0900 (대한민국 표준시)

//Date.now()
console.log(Date.now());                            //1595915419403
console.log(new Date());                            //Tue Jul 28 2020 14:50:19 GMT+0900 (대한민국 표준시)

//Date.parse()
console.log(Date.parse("Tue Jul 28 2020 14:50:19"));    //1595915419000

//functions
var obj = new Date(2020, 05, 10);
console.log(obj.getMonth());                           //5
console.log(obj.getDate());                            //10
console.log(obj.valueOf());                            //1591714800000
console.log(obj.setMonth(01));                         //1581260400000
console.log(obj.setDate(15));                          //1581692400000
