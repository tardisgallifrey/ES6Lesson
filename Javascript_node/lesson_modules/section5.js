//JavaSript ES6 lessons
//Objects


//Objects (including JSON objects) are extended multipart data types

export function Section5Lessons(){

//This is a basic object definition
//Yes, functiosns can be part of an oject
var person = {
    firstname: "Tom",
    lastname: "Hanks",
    func: function () { return "Hello!!" },
};

console.log("\Output of a basic object constructor\n");
//access the object values 
console.log(person.firstname)
console.log(person.lastname)
console.log(person.func())

//In ES5, an object had to be built this way:
//var foo = 'bar' 
//var baz = { foo:foo } This says the foo item points to (:) the foo variable
//console.log(baz.foo)

//In ES6, it can be simplified:
var foo = 'bar';
var baz = { foo } //This does the same.  If variable foo exists, we'll make the item foo: "bar"
console.log(baz.foo);

console.log("\nOutput of Object build with new Object()\n");

//An object can be built using the Object constructor
var myCar = new Object();
myCar.make = "Ford";        //define an object property and fill it
myCar.model = "Mustang";
myCar["year"] = 1987;       //alternate method to do this  
myCar.color;

console.log(myCar["make"]); //access the object property 
console.log(myCar["model"]);
console.log(myCar.year);    //alternate method
console.log(myCar.color);   //properties without value are undefined

console.log("\nOutput of function method of building an Object\n");
//Another method to construct object, the function method
function Car() {
    this.make = "Ford";  //this. is required
    this.model = "F150";
}
var obj = new Car();
console.log(obj.make);;
console.log(obj.model);

//The Object.Create Method is useful to create default properties that can be replaced later

console.log("\nOutput of Object.create() type where default property is overriden.\n");
var roles = {
    type: "Admin", // Default value of properties 
    displayType: function () {
        // Method which will display type of role 
        console.log(this.type);
    }
}

// Create new role type called super_role 
var super_role = Object.create(roles);
super_role.displayType();                   // Output:Admin  

// Create new role type called Guest 
var guest_role = Object.create(roles);
guest_role.type = "Guest";                 //overrides default type 
guest_role.displayType();                  // Output:Guest

//Using assign() to clone an object

console.log("\nOutput of use of assign() method to clone an object\n");

"use strict";
var det = { name: "Tom", ID: "E1001" };
var copy = Object.assign({}, det);

console.log(copy);

for (let val in copy) {
    console.log(copy[val]);
}

//Merging objects

console.log("\nOutput of merged objects a, b, and c\n");
var o1 = { a: 10 };
var o2 = { b: 20 };
var o3 = { c: 30 };
var obj = Object.assign(o1, o2, o3);
console.log(obj);
console.log(o1);
//Now that they are merged, changes in one object property changes in all merged objects
obj.b = 15;
console.log(obj);
console.log(o1);


console.log("\nOutput of example of deleting a property in an object\n");
// Creates a new object, myobj, with two properties, a and b. 
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the ‘a’ property 
delete myobj.a;
console.log("a" in myobj) // yields "false"

console.log("\nOutput on object comparison\n");
//Generally objects cannot be compared as they reference two different memory addresses
//Each is always unique
var val1 = { name: "Tom" };
var val2 = { name: "Tom" };
console.log(val1 == val2)  // return false 
console.log(val1 === val2)  // return false

//If a new object points to an existing object, you can compare, but WHY
var val3 = { name: "Harry" };
var val4 = val3;
console.log(val3 == val4)  // return false 
console.log(val3 === val4)  // return false

//Object destructuring or extracting data and creating new variables

console.log("\nOutput for reasonably simple method to destructure an object\n");
//First method, reasonably simple
let student = {
    rollno: 20,
    student_name: 'Prijin',
    cgpa: 7.2
}

//destructuring to same property name
let { student_name, cgpa } = student;
console.log(student_name);
console.log(cgpa);

//destructuring to different name
let { student_name: person_name, cgpa: student_cgpa } = student;;
console.log(student_cgpa);
console.log("student_name", student_name);

console.log("\nOutput of destructuring under different circumstances");
let student1 = {
    rollno: 20,
    name: 'Prijin',
    cgpa: 7.2
}

console.log("\nOutput when variable already exists that receives property\n");
// destructuring to already declared variable
let rollno;
({ rollno } = student1);
console.log(rollno);

// assign default values to variables
console.log("\nOutput when you are adding another value not in original object\n");
let product = { id: 1001, price: 2000 } //discount is not product property
let { id, price, discount = .10 } = product;
console.log(id);
console.log(price);
console.log(discount);

console.log("\nOutput when destructuring using REST operator and nested properties\n");

// rest operator with object destructuring
let customers = {
    c1: 101,
    c2: 102,
    c3: 103
}

let { c1, ...others } = customers
console.log(c1)
console.log(others)

//nested objects
let emp = {
    id: 101,
    address: {
        city: 'Mumbai',
        pin: 1234
    }
}
let { address } = emp;

console.log(address);;
let { address: { city, pin } } = emp;
console.log(city);

}