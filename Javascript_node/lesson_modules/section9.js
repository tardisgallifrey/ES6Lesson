//Promises
console.log("\nPromises are objects that handle async chores.");

function add_positivenos_async(n1, n2) {

    //declaring a Promise is building a function
    //with a test and a resolve if test=true
    //and a reject if test=false
    //then returns the Promise
    //While it is instantiated because it is an object,
    //it requires you to override the resolve reject
    let p = new Promise(function (resolve, reject) {
       if (n1 >= 0 && n2 >= 0) {
          //do some complex time consuming work
          resolve(n1 + n2);
       }
       else
          reject('NOT_Postive_Number_Passed'); 
       })
       return p;
 }

 //Call the Promise prducing function with params
 //chain to a handler (.then),
 //or an error handler (.catch)
 console.log("\nCalling the Promise function with positive numbers.");
 add_positivenos_async(10, 20)
    .then(successHandler) // if promise resolved
    .catch(errorHandler);// if promise rejected

console.log("\nCalling the Promise function with negative numbers (reject)");
//This call tests the reject
 add_positivenos_async(-10, -20)
    .then(successHandler) // if promise resolved
    .catch(errorHandler);// if promise rejected

//This is our (.catch) handler function
 function errorHandler(err) {
    console.log('Handling error', err);
 }

 //This is our success (.then) handler
 function successHandler(result) {
    console.log('Handling success', result);
 }

 console.log("Because Promises are async,");
 console.log("their results will occur after this line.");
 console.log('end');