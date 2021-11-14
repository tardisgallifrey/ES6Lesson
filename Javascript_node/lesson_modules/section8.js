//We are going out of order for a while
//This is the lesson on Classes in ES6



export function Section8Lessons(){
//Objects are real-time representations of any entity and have
//three features: state, behavior, identity--TutorialsPoint
//state--attributes of object, current conditions
//behavior--how will object act, what will it do?
//identity--unique value to represent everything about object

//Classes, essentially are objects
//Classes encapsulate object data (security) and have methods to 
//communicate with other classes/functions


//basic class example
//All classes have constructors, even if you don't say so
//height and width are class properties
class Polygon { 
    constructor(height, width) { 
       this.height = height; 
       this.width = width; 
    } 
 }

 //classes can be defined and assigned to a variable
 //In reality, we never physicall operate on the class definition,
 //only a variable instantiated to that class definition
 var Polygon3 = class Polygon1 { 
    constructor(height, width) { 
       this.height = height; 
       this.width = width; 
    } 
 }

 //Instantiation can also occur with new keyword
 //constructor values must be passed to object
 var Polygon2 = new Polygon(6, 12);

'use strict' 

//Classes can also have functions (methods)
//that operate on properties and actions
//Note: The use of 'this'
class Polygon4 { 
   constructor(height, width) { 
      this.h = height; 
      this.w = width;
   } 
   test() { 
      console.log("The height of the polygon: ", this.h) 
      console.log("The width of the polygon: ",this. w) 
   } 
} 

console.log("\nCreating a variable by instantiating a class.");
console.log("Then calling the class method 'polyObj.test()");
var polyObj = new Polygon4(10,20); 
polyObj.test();      

//Classes have setters for properties/functions
class Student {
    constructor(rno,fname,lname){
       this.rno = rno
       this.fname = fname
       this.lname = lname
       console.log('inside constructor')
    }

    //This is a Setter
    set rollno(newRollno){
       console.log("inside setter")
       this.rno = newRollno
    }
 }

 console.log("\nClasses have Setters.");
 console.log("\nHow the setter gets used.");
 //Instantiate new Student variable
 let s1 = new Student(101,'Sachin','Tendulkar');
 //Output the s1 object
 console.log(s1);

 //setter is called
 s1.rollno = 201;
 console.log(s1);

console.log("\nUsing an expression to set with.");
//I suppose, the idea is to allow for synonyms
//in case someone doesn't remember the actual property name?
//Or, when you want the property name obfuscated?
let expr = 'name';

let obj = {
    fname: 'Sachin',

    //If we use 'name', then fname gets the value of v
    set [expr](v) { this.fname = v; }
   };

   console.log("\nExample output of using expression 'name'");
   console.log("instead of 'fname' (see code)");
   console.log("Value of fname set with fname: "+obj.fname);
   obj.name = 'John';
   console.log("Value of fname set with 'name': "+obj.fname);


   console.log("\nClasses also have Getters to retrieve property values.");

   class Student1{
    constructor(rno,fname,lname){
       this.rno = rno;
       this.fname = fname;
       this.lname = lname;
       console.log('inside constructor');
    }
    //This is the getter
    get fullName(){
       console.log('inside getter');
       return this.fname + " - "+this.lname;
    }
 }

 console.log("\nExample output of object.");
 let s2 = new Student1(101,'Sachin','Tendulkar');
 console.log(s2);
 
 console.log("Example output when using a getter (fullname).");
 console.log(s2.fullName);

console.log("\nGetters can also use expressions, just like Setters.");
 let expr1 = 'name';

 let obj1 = {
    get [expr1]() { return 'Sachin'; }
 };
 console.log("Use of expression 'name' to get value: "+obj1.name);

console.log("\nUse of static keyword, means you call method directly from Class defintion.");
console.log("No need to instantiate class first.");
 'use strict' 
class StaticMem { 
   static disp() { 
      console.log("Static Function called") 
   } 
} 

console.log("Example output of call static method disp().");
StaticMem.disp()

console.log("\nthe instanceof keyword tests to see if the current obj is a ");
console.log("match with the test class (Person)");
class Person{ } 
var obj3 = new Person() 
var isPerson = obj3 instanceof Person; 
console.log(" obj3 is an instance of Person? " + isPerson); 

console.log("\nES6 allows class inheritance with 'extends' keyword,");
console.log("hence it's use in React.");
class Shape { 
    constructor(a) { 
       this.Area = a
    } 
 } 

 //Circle inherits everything from Shape and adds the disp() method
 class Circle extends Shape { 
    disp() { 
       console.log("Area of the circle:  "+this.Area); 
    } 
 } 

 console.log("Example output of extending Shape with Circle.");
 var obj5 = new Circle(223); 
 obj5.disp(); 

console.log("\nClasses can have single, multiple, and multilevel inheritances.");

console.log("\nOutput from obj6, instantiated by Leaf, inherited from Child,");
console.log("and Child inherits from Root (multilevel inheritance).");

 class Root { 
    test() { 
       console.log("call from parent class") 
    } 
 } 
 class Child extends Root {} 
 class Leaf extends Child {}  
 
 //indirectly inherits from Root by virtue of inheritance {} 
 var obj6 = new Leaf();
 obj6.test(); 

 console.log("\nClasses can also override methods in parent classes.");
 console.log("StringPrinter overrides doPrint in Printerclass.");
 class PrinterClass { 
    doPrint() { 
       console.log("doPrint() from Parent called… ");
    }
 }
 class StringPrinter extends PrinterClass { 
    doPrint() { 
       console.log("doPrint() is printing a string…"); 
    } 
 } 

 var obj7 = new PrinterClass;
 console.log("Output of doPrint in PrinterClass: ");
 obj7.doPrint();

 var obj8 = new StringPrinter(); 
 console.log("Output of doPrint in StringPrinter: ");
 obj8.doPrint();

 console.log("\nThe Super keyword is used to refer to the parent class");
 console.log("methods (and properties vis-a-vis React?");
 class PrinterClass1 { 
    doPrint() {
       console.log("doPrint() from Parent called…"); 
    } 
 }  
 class StringPrinter1 extends PrinterClass1 { 
    doPrint() { 
       super.doPrint(); 
       console.log("doPrint() is printing a string…"); 
    } 
 } 

 console.log("We call StringPrinter with a super.doPrint which ");
 console.log("calls the parent method, not our overriden method.")
 console.log("So, we get both outputs in one call.");
 var obj9 = new StringPrinter1();
 obj9.doPrint();

}