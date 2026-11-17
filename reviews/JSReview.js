
// create a for loop with 5 iterations and print the iterations number in aeach iterations
for (let i = 1; i <= 5; i++) {
  console.log("Iteration number: " + i);
}

// 5 elemanli bir array olustur
const fruits = ["elma", "armut", "muz", "kiraz", "cilek"];
console.log(fruits);


console.log("======================");

let str = "026488684ab#dhug$#fdgdf$%@^****!!#$%&^%$#@!@#$%^&*()_+";

str = str.replace(/[^a-zA-Z0-9]/g, "");
console.log(str);

console.log("======================");

let actualHeader = "CYDEO - QA - Automation Engineer";
let expectedHeader = "CYDEO - qa - automation engineer";

console.log(actualHeader === expectedHeader); // false

const isEqual = actualHeader.toLowerCase() === expectedHeader.toLowerCase();
console.log(isEqual); // true

console.log("======================");

/*
 create a function that can identify if a number is prime number.
*/
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false