

export function Section6Lessons(){
//Number Objects

console.log("\nThings having to do with the Number() Object.");
var val = new Number(6);


//Lord knows even why some of these exist


//EPSILON smallest interval between two numbers
console.log("\nEPSILON.");
var interval = Number.EPSILON;
console.log(interval);

//Maximum safe integer
console.log("\nMax Safe Integer.");
var interval = Number.MAX_SAFE_INTEGER;
console.log(interval);

//Largest possible representational value
//not to be confused with safest max above
var val = Number.MAX_VALUE;
console.log("\nValue of Number.MAX_VALUE : " + val );


//Minimum safe integer, AKA the world does not stop at Zero
//It revolves around it
var val = Number.MIN_SAFE_INTEGER;
console.log("\nValue of Number. MIN_SAFE_INTEGER: " + val );


//Minimum value for integer
var val = Number.MIN_VALUE;
console.log("\nValue of Number.MIN_VALUE : " + val );

//Not a number
//A read only constant
console.log("\nNot a Number.");
var dayOfMonth = 50;
if (dayOfMonth < 1 || dayOfMonth > 31) {
   dayOfMonth = Number.NaN
   console.log("Day of Month must be between 1 and 31.")
} else {
   console.log("day of month "+dayOfMonth)
}

//Negative Infinity, math term (constant)
//Read only
var val = Number.NEGATIVE_INFINITY;
console.log("\nValue of Number.NEGATIVE_INFINITY : " + val );

//Positive Infinity, same song, second verse
var val = Number.POSITIVE_INFINITY;
console.log("\nValue of Number.POSITIVE_INFINITY : " + val );

console.log("\nNumber object Methods");
//Number Object methods,
//often used as variable tests
;
//Not a number.  Is this a number or not a number?
console.log("\nIs it a number or Not a Number?");
var res = Number.isNaN(10);
console.log(res);

console.log("\nIs a number Finite or Infinite?");
var res = Number.isFinite(10);
console.log(res);

console.log("\nIs the value an integer, a float, or something else?");
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(-100000)); // true
console.log(Number.isInteger(0.1)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger("10")); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger(false)); // false

console.log("\nIs it a safe integer between -253 and 253 (Is it 8-bit).");
var res = Number.isSafeInteger(10);
console.log(res);

console.log("\nConvert string number to float.");
console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.23"));

console.log("\nConvert string number to integer.");
console.log(Number.parseInt("10"));
console.log(Number.parseInt("10.23"));

console.log("\nConvert one type of Number to another type, casting.");

console.log("\nConvert to Exponential Notation");
//toExponential()
var num1 = 1225.30;
var val = num1.toExponential();
console.log(val);

console.log("\nConvert to Fixed digits notation (param to toFixed is decimals.");
var num3 = 177.234;
console.log("num3.toFixed() is "+num3.toFixed());
console.log("num3.toFixed(2) is "+num3.toFixed(2));
console.log("num3.toFixed(6) is "+num3.toFixed(6));

console.log("\nConvert number to current Locale setting (determines what commans and decimals do).");
var num = new Number(177.1234);
console.log( num.toLocaleString());


console.log("\nConvert to Precision. Like toFixed, but to significant digits, not arbitrary.");
var num = new Number(7.123456);
console.log(num.toPrecision());
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));

console.log("\nConvert to String, but radix Param used to display in different bases.");
var num = new Number(10);
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));

console.log("\nConvert to Primitive.  Similar to Integer, I think.");
var num = new Number(10);
console.log(num.valueOf(num));

console.log("\nconsole.log output of binary, prefix with 0b");
console.log(0b001); 
console.log(0b010); 
console.log(0b011); 
console.log(0b100);

console.log("\nconsole.log output of Octal, prefix with 0o");
console.log(0o010);
console.log(0o100);
console.log(0o136);

console.log("\nconsole.log output of Hexadecimal, prefix with 0x");
console.log(0x1A);
console.log(0x1A7D);
console.log(0xFFFF);

//Object Listerals moved to section with Objects

}