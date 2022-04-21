console.log("working"); //Closures

//Que.1
   function counter(){
       var counter = 0;

       function IncreaseCounter() {
           return counter += 1;
       };
       return IncreaseCounter;
   }

   var counter = counter();
   alert(counter());
   alert(counter());
   alert(counter());
   alert(counter());

   //Que.2
   let count = 0;
   (function immediate(){
       if (count === 0) {
           let count = 1;
           console.log(count); //what is logged?
       }
       console.log(count); //what is logged?
   })
   ();

//Que.3

for (var i = 0; i < 3; i++) {
    setTimeout(function log(){
        console.log(i); //what is logged?
    }, 1000);
}

//Que.6 print the output

var a = 12;
(function () {
    alert(a);
})
();

//Que.7
var a =10;
var x = (function () {
    var a = 12;
    return function () {
        alert(a);
    };
})();
x();

//Que.8

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + "outerArg" + "\n" +
        "innerArg = " + "innerArg" + "\n" +
        "outerVar = " + "outerVar" + "\n" +
        "innerVar = " + "innerVar" + "\n" +
        "globalVar = " + "globalVar");
    
    })(456);
})(123);

//Que.4 Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

const outerFunction = function(length){
    innerfunction = function(breadth){
        console.log(`The area of rectangle is ${length*breadth}`);
    }
}
outerFunction(20);
outerFunction(50);

//Que.5 -Take a variable in outer function and create an inner function to increase the counter every time it is called

let outer = function(){
    variableCount = 0;
    inner = function(){
        console.log(`The count is ${variableCount+=1}`)
    }
}

outer();
inner();
inner();
inner();
inner();
inner();