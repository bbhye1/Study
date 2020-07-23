var apple;
try{
    apple = lemon;
} catch(error) {
    console.log("This is catch");
};                                              //This is catch


var apple;
try{
    apple = lemon;
} catch(error) {
    console.log("This is catch");
}finally {
    console.log("This is finally")
};                                              //This is catch //This is finally

var apple;
try{
    throw "This is throw";
    apple = 4;
} catch(error) {
    console.log(error);
    console.log(apple);
};                                              //This is throw  //undefined

try{
    throw {
        msg1: "This is",
        msg2: "Throw"
    };
  } catch(error) {
    console.log(error.msg1);
    console.log(error.msg2);
};                                              //This is //Throw (string)

try{
    throw new Error("This is throw");   
  } catch(error) {
    console.log(error.message);
};                                              //This is throw (object)