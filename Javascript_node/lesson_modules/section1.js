//JavaScript ES6 Section 1
//
//Syntax, variables, var, const, let
//Conditionals, typeof, spread operator


export function Section1lessons(){
    //this is single line comment  

    /* This is a  
    Multi-line comment 
    */

    //Make this a habit
    // Whole-script strict mode syntax 
    "use strict";

    //Make semicolons a habit

        console.log("\nOutput of console.log(), Our Hello World\n");
    //First Program in JavaScript run by nodejs
    var message = "Hello World";            //Declare a var(iable) called message and fill with text
    console.log(message);                    //Publish message to terminal console or,
    //in browser, it goes to HTML console, which we normally can't see

    //declaring a variable with var
    var hisname = "Tom";

    //declaring a variable with const
    const myname = "Dave";

    //declaring a variable with let
    let yourname = "Bill";

    //var, const, and let do not do equal things when declaring a variable
    //They are not interchangeable

    console.log("\nOutput on declaring with var, let, const, and let\n");
    //concatenating a variable with a string
    console.log("The value in the variable is: " + hisname);
    console.log("The value in the variable is: " + myname);
    console.log("The value in the variable is: " + yourname);

    console.log("\nOutput on variable scopes\n");
    //num has GLOBAL scope (accessible anywhere in script)
    var num = 10;

    function test() {

        //num here can only be accessed inside this function (LOCAL scope)
        var num = 100
        console.log("value of num in test() " + num);
    }
    console.log("value of num outside test() " + num);
    test();


        console.log("\nOutput showing how LET works with scopes\n");
    // The let declaration allows to redeclare and set scope to a variable
    //  inside a new block
    function test1() {
        var num = 100;
        console.log("value of num in test1() " + num); //This semicolong is necessary, thus the habit

        //This is a block declaration, not function
        //num could not be changed here, normally (I think)
        //But, let allows that while restricting its new scope 
        //to this block only
        {
            console.log("Inner Block begins")
            let num = 200
            console.log("value of num : " + num)
        }
    }

    //The above is a function declaration/definition
    //This line calls the function into working
    test1();


    //With var this is legal
    // no is given a new value of 20
    var no = 10;
    var no = 20;
    console.log(no);

    //This is not legal
    // let limits scope, so
    // you can't redeclare again
    // in the same scope. It throws an error,
    // thus, I have it commented out
    //let no = 10; 
    //let no = 20; 
    //console.log(no);


        console.log("\nOutput showing use of CONST on variables and objects\n");
    // const declared variables are immutable (read only)
    //they cannot be altered from assigned state
    //Also, they must be assigned a state/value at 
    //declaration
    //This will throw an error
    //const x = 10
    //x = 12 // will result in an error!!

    // const arrays can have new members added,
    // but member values cannot be altered
    const DEPT_NOS = [10, 20, 30, 50];
    DEPT_NOS.push(40);
    console.log('dept numbers is ', DEPT_NOS);

    //This one throws an error
    const EMP_IDS = [1001, 1002, 1003];
    console.log('employee ids', EMP_IDS);
    //re assigning variable employee ids
    //EMP_IDS = [2001,2002,2003];
    //console.log('employee ids after changing',EMP_IDS);

    console.log("\nOutput showing how hoisting var works\n");
    //The use of var acts a little like a global variable
    //It is said to be hoisted to the top of scope
    console.log(company); // using variable before declaring, outputs undefined
    var company = "TutorialsPoint"; // declare and initialized here
    console.log(company);

    //example of hoisting and use of var variable outside of scope
    for (var i = 1;i <= 5;i++){
        console.log(i);
    }

    // using i here is still legal and has correct value
    console.log("after the loop i value is "+i);

    //As operators are operators, I'm skipping most
    //but two that will be useful in JavaScript and Reactjs
    //I will cover here

    console.log("\nOutput of a conditional operator\n");
    //Conditional, like a mini-if statement
    // left of ? is condition if(num > 0)
    // first expression to the right is TRUE output
    // expression after the colon is FALSE statment
    //TRUE and FALSE can be empty, but colon must exist
    //in either case
    var num = -2; 
    var result = num > 0 ?"positive":"non-positive"; 
    console.log(result);

    console.log("\nOutput of a typeof operator\n");
    //typeof operator tells us what type of variable 
    // it points to. Essential in a non-typed system
    var num = 12;
    console.log(typeof num); //output: number

    // Spread operator the three dots operator (...)
    // functions like a fill-in-the-blanks operator

        console.log("\nOutput for uses of Spread Operators on function params and objects\n");
    //This function wants three variables as parameters
    function addThreeNumbers(a,b,c){
        return a+b+c;
    }

    //Yet, we defined an array of three numbers
    const arr = [10,20,30];

    //The three dots (Spread operator) used before the array variable (...arr)
    //says, "unbundle this array and fill in the three requested parameters"
    console.log('sum is :',addThreeNumbers(...arr));

    //Spread operator doesn't deal with mixed numbers
    //Here, it should just drop the 4. output should be 6 not 10
    console.log('sum is ',addThreeNumbers(...[1,2,3,4]));


    //The Spread operator also functions as a way of copying objects
    //copy object
    let student1 ={firstName:'Mohtashim',company:'TutorialsPoint'}

    //copy student1 into student2
    let student2 ={...student1}
    console.log(student2);

    //The Spread operator also functions to join (concatenate) objects
    //concatenate objects
    let student3 = {lastName:'Mohammad'}

    //join student1 and student2, load result into student4
    let student4 = {...student1,...student3}
    console.log(student4);

    //End of Section 1 as I determined it
}