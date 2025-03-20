// 2. write recursive function to print numbers from 1 to n

console.log("--------  2. write recursive function to print numbers from 1 to n---------")

function printNumbers(n) {
  
  if (n < 1) {
    return;
  }
  
  
  printNumbers(n - 1);
  
  
  console.log(n);
}

printNumbers(10);
