//Section 3 lessons on JavaScript ES6
//Functions


export function Section3Lessons() {

    console.log("\nOutputs of different function calls\n");

    //In its simplest form, this is a function
    //the word function is required
    //
    //define a  function 
    function test() {
        console.log("function called");
    }
    //call test function
    test();

    //Returning functions return data
    //This function returns "hello world"
    function retStr() {
        return "hello world!!!";
    }

    //A returning function assigns its return value to a var variable
    var val = retStr();
    console.log(val);

    //A parameterized function receives values from variables
    //This type has a list of parameters used in the function
    //as locally scoped variables
    function add(n1, n2) {
        var sum = n1 + n2;
        console.log("The sum of the values entered " + sum);
    }
    add(12, 13);

    //This is me
    //You will often combine a returning and parameterized function into one
    function new_add(n1, n2) {
        var sum = n1 + n2;
        return sum;
    }
    var val = new_add(12, 13);
    console.log("Your sum is: " + val);


    //function default parameters
    //You can assign a default value to a parameter value in case it
    //doesn't get passed a value when called
    function default_add(a, b = 1) {
        return a + b;
    }

    //A function that returns a value can be used in the same places a variable is used
    console.log(default_add(4));

    //If you pass in a value for the default valued param, the passed in value is used instead
    console.log(default_add(4, 2));


    console.log("\nFunction example with more conditions\n");

    function addTwoNumbers(first, second = 10) {
        console.log('first parameter is :', first);
        console.log('second parameter is :', second);
        return first + second;
    }

    console.log("case 1 sum:", addTwoNumbers(20));     // no value
    console.log("case 2 sum:", addTwoNumbers(2, 3));
    console.log("case 3 sum:", addTwoNumbers());       //Outputs undefined and NaN
    console.log("case 4 sum", addTwoNumbers(1, null))   //null passed
    console.log("case 5 sum", addTwoNumbers(3, undefined));


    console.log("\nRest parameters functions\n");
    //A function with Rest parameters means there is an undefined number
    // of parameters
    //You can pass as many or as few as needed
    //HOWEVER, all variables must be the same TYPE
    //i.e. All numbers, all strings, etc


    console.log("\nOutput of a Rest param function\n");
    //Rest parameters can be included with defined parameters, but it 
    //MUST be the last in the list
    function fun1(...params) {
        console.log(params.length);
    }
    fun1();
    fun1(5);
    fun1(5, 6, 7);

    console.log("\nOutput of a Rest param with defined params function\n");
    function fun2(a, b, c, ...paramlist) {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(paramlist.length);
    }

    fun2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


    console.log("\nOutput of an anonymous function\n");
    //Anonymous functions don't have names
    //Usually need to be immediately assigned to a variable
    var func = function (x, y) { return x * y };

    function product() {
        var result;
        //You call the variable as if it is a function with parameters
        result = func(10, 20);
        console.log("The product : " + result);
    }
    product();

    console.log("\nOutput of a function declared with new\n");

    //A function can be defined with new Function (which is like instantiating an object)
    //THis is an object constructor
    //list parameters first followed by function body inside quotes
    var func1 = new Function("x", "y", "return x*y;");
    function product1() {
        var result;
        result = func1(10, 20);
        console.log("The product : " + result);
    }
    product1();

    console.log("\nOutput of Recursive anonymous function\n");
    //Recursive anonymous functions can be built like this
    //the entire function definition inside parentheses
    //function is called by () at end of definition
    (function () {
        var msg = "Hello World"
        console.log(msg)
    })()   //This parentheses is the function call.  Can't be put somewhere else.  Goes here

    //While the above is an example of an anonymous recursive function, it is also an IIFE
    //IIFE -- Immediately Invoked Function Expression
    //the ( function stuff goes here    )() format means this function executes immediately as it 
    //is encountered in the script

    console.log("\nOutput of an IIFE\n");
    //It can also be written in this form
    var main = function () { //A regular function surrounds the IIFE

        //This is the IIFE
        var loop = function () {
            for (var x = 0; x < 5; x++) {
                console.log(x);
            }
        }();
        //IF the console.log() is run it will throw an error
        //X is not available outside the IIFE, even inside the regular function
        //console.log("x can not be accessed outside the block scope x value is :"+x); 
    }
    main();

    //Lambda Functions/statements
    //Lambda functions and statements are a concise (meaning small here) way of defining 
    //anonymous functions.  There are many forms.  Take note of each
    //They are used A LOT in Reactjs/NExtjs apps, especially in the role of callback functions
    //There are places that only Lambda functions can be used

    console.log("\nOutput of Lambda functions/statements\n");
    //Lambda Expression--super simple.  Can have params or not
    //Also called ARROW functions/statements (you know, the =>)
    //If there is only one param, you can leave off the parentheses in these
    var foo = (x) => 10 + x;
    console.log(foo(10));

    //Lambda Statement, uses regular braces for function block
    var msg = () => {
        console.log("function invoked");
    }
    msg();

    //REGULAR functions, like variables can be hoisted up, like this
    hoist_function();
    function hoist_function() {
        console.log("foo");
    }

    //Anonymous types cannot be hoisted, thus this is commented out
    //hoist_function1(); // TypeError: hoist_function() is not a function  
    //var hoist_function1() = function() { 
    //console.log("bar"); 
    //};


    //Arrow functions are used often as callback functions in JavaScript
    //They have a heavy use in arrary.protoype.map functions
    //The anonymous arrow function is run once for each of the
    //elements in the array

    console.log("\nOutput of an array map using an arrow function\n");
    //In this example, the element variable is the current array element passed in
    //The index variable is the current array index passed in
    const names = ['TutorialsPoint', 'Mohtashim', 'Bhargavi', 'Raja']
    names.map((element, index) => {
        console.log('inside arrow function');
        console.log('index is ' + index + ' element value is :' + element);
    });


    //Example of why arrow functions are important
    //The use of 'this' operator in a function fails if using a regular anonymous function
    //Yet, if works correctly if you use the Arrow function
    //This is why I said some things in JavaScript/React MUST use the arrow function, not another type

    function Student(rollno, firstName, lastName) {
        this.rollno = rollno;
        this.firstName = firstName;
        this.lastName = lastName;

        this.fullNameUsingAnonymous = function () {
            //Use of anonymous function as callback in setTimeout will fail
            setTimeout(function () {
                //creates a new instance of this ,hides outer scope of this
                console.log(this.firstName + " " + this.lastName)
            }, 2000)
        }

        this.fullNameUsingArrow = function () {
            //use of Arrow function will work
            setTimeout(() => {
                //uses this instance of outer scope
                console.log(this.firstName + " " + this.lastName)
            }, 3000)
        }
    }


    const s1 = new Student(101, 'Mohammad', 'Mohtashim')
    //this fails
    s1.fullNameUsingAnonymous();
    //this works
    s1.fullNameUsingArrow();


    "use strict"

    //Generator function loads and stops.  Returns an iterator
    //Identified by the yield property and the function* identifier
    function* ask() {
        const name = yield "What is your name?";
        const sport = yield "What is your favorite sport?";
        return `${name}'s favorite sport is ${sport}`;
    }
    const it = ask(); //Function assignment

    console.log("\nOutput of Generator function\n");
    console.log(it.next()); //use of next() iterator steps through function
    //Each yield returns something and stops until next next()
    console.log(it.next('Ethan'));
    console.log(it.next('Cricket'));

    console.log("\nOutput of example showing how Arrow function is sometimes required\n");

}
