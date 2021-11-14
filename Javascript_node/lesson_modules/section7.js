

export function Section7Lessons(){

//Things having to do with the Boolean() Object

console.log("\nBoolean Object things.");
console.log("\nCreate a new boolean object with new Boolean()");
var bool = new Boolean( );
console.log("bool.constructor() is : " + bool.constructor);

//Prototyping is important as a concept used in
//Object, Number, and Boolean objects
//It is the ability to add properties and methods to existing objects
console.log("\nA lesson on prototyping.  Please read code comments.");

//Create a functional object
function book(title, author){
    this.title = title;
    this.author = author;
 }

 //Now, you can create new objects from this object with new operator???

 console.log("Output of book object where price is prototyped into the object.");
 //book object needs a tile and author passed in
 var myBook = new book("Perl", "Tom");

        //prototype keyword allows adding the property 'price'
         book.prototype.price = null;
         myBook.price = 100;
         console.log("Book title is : " + myBook.title);
         console.log("Book author is : " + myBook.author);
         console.log("Book price is : " + myBook.price);


//As best as I can tell, the .toSource() method does not seem to work
//Several browsers are said not to support it and possibly, neither does nodejs

console.log("\nBoolean method .toString() in order to print value.");
var flag = new Boolean(false);
console.log( "flag.toString is : " + flag.toString());

console.log("\nBoolean method .valueOf() does similar.");
var flag = new Boolean(false);
console.log( "flag.valueOf is : " + flag.valueOf());

}