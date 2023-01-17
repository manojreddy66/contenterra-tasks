// 3.Write a program to find out all the numbers whose sum is 9 from 1 to 9999. if we get sum of digits
// more than one digit, we need to repeat the process till its sum is single digit.

function findSum(num) {
    let sum = 0;
    let numString = num.toString();
  
    for (let i = 0; i < numString.length; i++) {
      sum += parseInt(numString[i]);
    }
  
    if (sum > 9) {
      return findSum(sum);
    }
  
    return sum;
  }
  
  let arr = [];
  
  for (let i = 1; i <= 9999; i++) {
    if (findSum(i) === 9) {
      arr.push(i);
    }
  }

  console.log(arr)