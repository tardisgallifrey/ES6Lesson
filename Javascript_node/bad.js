// Whole-script strict mode syntax 
"use strict"; 

//Because 'v' is not declared with a var, this script throws an error since
//use strict is in play
//Comment out the use strict and you'll see it run, but not produce expected output
//and it won't throw an error
 v = "Hi!  I'm a strict mode script!";  // ERROR: Variable v is not declared


 //In JavaScript, you can use "use strict" inside a block to limit its enforcement
 //comment out the one above and see how this operates when run
 w = 15 
function f1() { 
   "use strict"; 
   var w = "Hi!  I'm a strict mode script!"; 
}