/*
create a funtion a calculate the sum of all numbers from 1 to a given number
*/
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}   


module.exports = { sumOfNumbers, isPrime };
