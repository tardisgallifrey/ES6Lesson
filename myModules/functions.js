//These are the JavaScript functions described in ES6 TutorialsPoint
//
// In keeping with operating from a module configuration, I've moved them here



//SayHello function writes Hello World to the document
export function sayHello() {
   document.write("Hello World")
}

//Warn fires an alert box with a message and writes a message to the document
export function Warn() {
   alert("This is a warning message!");
   document.write("This is a warning message!");
}

//getConfirmation launches a OK/Cancel or Yes/No box
export function getConfirmation() {

   var retVal = confirm("Do you want to continue ?");

   if (retVal == true) {
      document.write("User wants to continue!");
      return true;
   } else {
      Document.write("User does not want to continue!");
      return false;
   }
}

//getValue launches a prompt box to get a value
export function getValue() {
   var retVal = prompt("Enter your name : ", "your name here");
   document.write("You have entered : " + retVal);
}

export function WriteCookie() {
   if (document.myform.customer.value == "") {
      alert("Enter some value!");
      return;
   }
   var cookievalue = escape(document.myform.customer.value) + ";";
   document.cookie = "name = " + cookievalue;
   document.write("Setting Cookies : " + "name = " + cookievalue);
}

//DeleteCookie just writes the cookie with an expiration date in the past
//thus removing it from the browser
export function DeleteCookie() {
   var now = new Date();
   //Cookie delete is just set the expire date 
   //to something in the past instead of the future
   now.setMonth(now.getMonth() - 1);
   cookievalue = escape(document.myform.customer.value) + ";"
   document.cookie = "name=" + cookievalue;
   document.cookie = "expires = " + now.toUTCString() + ";"
   document.write("Setting Cookies : " + "name = " + cookievalue);
}

//ExpireCookie sets expiration date for a cookie while creating it
export function ExpireCookie() {
   //Get today's date
   var now = new Date();

   //Set to one month from now
   now.setMonth(now.getMonth() + 1);

   //Same as setting up cookie to write with your name
   cookievalue = escape(document.myform.customer.value) + ";"

   //Write the cookie with "now" value converted to time string
   document.cookie = "name = " + cookievalue;
   document.cookie = "expires = " + now.toUTCString() + ";"
   document.write("Setting Cookies : " + "name = " + cookievalue);
}


//ReadCookie reads all existing cookies from the current browser session
export function ReadCookie() {
   var allcookies = document.cookie;
   document.write("All Cookies : " + allcookies);

   // Get all the cookies pairs in an array 
   // Get cookies associated with this web site (IP or name, not just pages)
   // Split at semicolons, which divide cookies
   // array looks like [ "name=yourname", "secondcookiekeky=secondkeyname", ... ]
   var cookiearray = allcookies.split(';');

   // Now take key value pair out of this array  
   for (var i = 0; i < cookiearray.length; i++) {
      //split i-th index of the array at the equals sign
      // index 0 is the key, index 1 is the value
      // index 0 goes into name, index 1 goes into value 
      var name = cookiearray[i].split('=')[0];
      var value = cookiearray[i].split('=')[1];
      document.write("<br/>Key is : " + name + " and Value is : " + value);
   }

}


//Function for mouse hover
export function mouseover() {
   document.write("Mouse Over");
}

//Function for mouse moving away 
export function mouseout() {
   document.write("Mouse Out");
}


//redirecting is a window method, not a document method
//
//Other choices are:
// replace = replace current window, destroys history
// assign = loads a new document, maintains history
// reload = load current document again
// 
export function newLocation() {
   window.location = "http://www.xyz.com";
}


//This lesson is also in Section 5 of Javascript_node
export function MyObjects() {

   


   //You can also have arrays of objects

   //Example
   var person = {
      firstname: "Tom",
      lastname: "Hanks",
      func: function () { return "Hello!!" },
   };


   //access the object values 
   //Use Development Tools in Chrome to see these
   console.log(person.firstname);
   console.log(person.lastname);
   console.log(person.func());

   //Assigning a new property to object 'baz'
   //Console will print the value of foo: bar
   var foo = 'bar' 
   var baz = { foo } 
   console.log(baz.foo)

   //Build an object using Object constructor
   var myCar = new Object(); 
   myCar.make = "Ford"; //define an object 
   myCar.model = "Mustang"; 
   myCar.year = 1987;  

   console.log(myCar["make"]); //access the object property 
   console.log(myCar.model);  //also legal
   console.log(myCar["year"]);

   //Objects can also be built by a function, using this to 
    //create the properties
    function Car() { 
      this.make = "Ford"; 
      this.model = "F123"; 
   }  

   var obj = new Car(); 
   console.log(obj.make);
   console.log(obj.model);

   //Use Object.Create() to create new objects 
     //from a prototype object
     var roles = { 
      type: "Admin", // Default value of properties 
      displayType : function() {  
         // Method which will display type of role 
         console.log(this.type); 
      } 
   }  
   
   // Create new role type called super_role 
   var super_role = Object.create(roles); 
   super_role.displayType(); // Output:Admin  
   
   // Create new role type called Guest 
   var guest_role = Object.create(roles); 
   guest_role.type = "Guest"; 
   guest_role.displayType(); // Output:Guest

   //Use Object.assign() to clone one 
     //object to a new object variable
     "use strict" 
        var det = { name:"Tom", ID:"E1001" }; 
        var copy = Object.assign({}, det); 
        console.log(copy);  
        for (let val in copy) { 
        console.log(copy[val]);
        } 
}

