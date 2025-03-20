//1. write a boolean function to find a given number is prime

console.log("------- 1. write a boolean function to find a given number is prime -----------")

function isPrime(num) {
  // Handle numbers less than 2
  if (num <= 1) {
    return false;
  }
  
  // Check for factors from 2 to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // num is divisible by i, so it's not prime
    }
  }
  
  return true; // num is prime
}
