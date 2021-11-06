// Section 2 JavaScript with node "ES6" lessons
//Conditional expressions (IF-THEN) and Loops


export function Section2Lessons(){

    //Since I do relate everything to C, JavaScript's (even in ES6),
    // if/then and for loops are extremely similar to those in 'C'
    console.log("Output of an IF-THEN\n");
    //IF-THEN-ELSE
    var num = 12;

    //If num modulo 2 equals 0 (meaning, it is even)
    //output Even, ELSE output ODD
    if (num % 2 == 0) {
    console.log("Even");
    } else {
    console.log("Odd");
    }

    console.log("\nOutput of an ELSE ladder\n");
    //ELSE ladder
    //else's can be continued as much as is needed
    var num=2
    if(num > 0) {
    console.log(num+" is positive")
    } else if(num < 0) {
    console.log(num+" is negative")
    } else {
    console.log(num+" is neither positive nor negative")
    }


        console.log("\nOutput of a Switch/Case statement\n");
    //Switch Statement, pretty much the same as 'C'

    var grade="A";
    switch(grade) {
        case "A": {
            console.log("Excellent");
            break;
        }
        case "B": {
            console.log("Good");
            break;
        }
        case "C": {
            console.log("Fair");
            break;
        }
        case "D": {
            console.log("Poor");
            break;
        }
        default: {
            console.log("Invalid choice");
            break;
        }
    }


    console.log("\nOutput of a FOR loop\n");
    //the FOR Loop
    var num = 5;
    var factorial=1;

    //Let variable i equal whatever num is, decrement it (i--)
    //until it is 1 and stop
    //Do whatever is between {} while i is greater than or equal to 1

    //Note the use of let in this case.  Important
    for( let i = num ; i >= 1; i-- ) {
        //factorial = factorial * i
    factorial *= i ;
    }
    console.log(factorial);


    console.log("\nOutput of complex FOR loop\n");
    //Different than C, JavaScript allows multiple things going on 
    //and multiple tests in a for loop by using commmas
    //Not the use of "use strict"
    "use strict";

    //Breaking this down:
    //  let temp exist undefined;
    //  let i = 0;
    //  let j= 0;
    //  As long as j<30: do the following:
    //  temp = i,
    //  i = j,
    //  j = i + temp
    //NOTE no braces and nothing between them
    //  this is likely for doing simple things only

    //Written this way is legal for a single instruction after the loop
    //However, it's easy to confuse, methinks, so I've commented it out in favor of the second form
    //If one accidentally put a semicolon after the for loop, this would throw an error on the 'j'
    //not being declared
    //for(let temp, i = 0, j = 1; j<30; temp = i, i = j, j = i + temp) console.log(j);

    //For my money, even if you can write it like the above, do all loops/if-thens this way
    for(let temp, i = 0, j = 1; j<30; temp = i, i = j, j = i + temp){ 
        console.log(j);
    }


    console.log("\nOutput of a FOR..IN Loop\n");
    //FOR..IN loop
    //Similar to the for..in and foreach loops of other langages
    //Often used like this to loop through objects and retrieve values
    var obj = {a:1, b:2, c:3};

    //As long as there is a prop(erty) left in obj,
    //do what's between the braces
    //prop = one property of obj each time through loop
    for (var prop in obj) {
    console.log(obj[prop]);
    }


    console.log("\nOutput of a FOR..OF Loop\n");
    //Same as for..in except used on literals
    //such as this array.  There are not names for each element, just indexes

    //Each time through the loop, val equals the next item in array
    for (let val of[12 , 13 , 123]){
        console.log(val)
    }

    
    //The while and do..while loops are also similar to same in 'C'


    console.log("\nOutput of a WHILE loop\n");
    //While loop
    var num = 5;
    var factorial = 1;

    //As long as num is larger or equal than 1, do what's between the braces
    while(num >=1) {
    factorial = factorial * num;
    num--;
    }
    console.log("The factorial is "+factorial);


    console.log("\nOutput of a DO..WHILE loop\n");
    //The do..while loop
    //The difference between do..while and while,
    //is that while could skip the braces on a false condition,
    //a do..while loop must run at least once
    var n = 10;
    do {
    console.log(n);
    n--;
    } while(n >= 0);


    console.log("\nOutput of a BREAK in a loop\n");
    // break forces you out of the loop
    // usually used with a condition
    var i = 1
    while(i <= 10) {
    if (i % 5 == 0) {
        console.log("The first multiple of 5 between 1 and 10 is : "+i)
        break //exit the loop if the first multiple is found
    }
    i++
    }

    console.log("\nOutput of a CONTINUE in a loop\n");
    // continue allows you to continue processing to next cycle
    // also often used with a condition
    // It will make you skip the rest of the loop this time
    var num = 0
    var count = 0;

    //cycle through num when it is 1 to 20
    // On even values (modulo 2 == 0), don't
    // increment count (skip it), thus final count is only the odd numbers
    for(num = 0;num <= 20;num++) {
    if (num % 2 == 0) {
        continue
    }
    count++
    }
    console.log(" The count of odd values between 0 and 20 is: "+count)

    console.log("\nOutput of a BREAK & CONTINUE using LABELS\n");
    console.log("\nBREAK with LABEL\n");
    //Break with a label
    //both break and continue can be used with labels (name with a colon)
    //to more finely control execution of a loop
    //
    //However, for my opinion, if you HAVE to do this, try a different method to process
    //These can cause problems on slight variations.  They remind me of GOTO in other languages
    //which is normally frowned upon
    outerloop: // This is the label name
    for (var i = 0; i < 5; i++) {
    console.log("Outerloop: " + i);
    innerloop:
    for (var j = 0; j < 5; j++){
        if (j > 3 ) break ; // Quit the innermost loop
        if (i == 2) break innerloop; // Do the same thing
        if (i == 4) break outerloop; // Quit the outer loop
        console.log("Innerloop: " + j);
    }
    }

    console.log("\nCONTINUE with LABEL\n");
    outerloop: // This is the label name
    for (var i = 0; i < 3; i++) {
    console.log("Outerloop: " + i);
    for (var j = 0; j < 5; j++) {
        if (j == 3) {
        continue outerloop;
        }
        console.log("Innerloop: " + j );
    }
    }

}

