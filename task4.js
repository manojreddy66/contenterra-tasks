// 4. Write a program to find missing numbers from the given array and return the missing numbers in
// new array.
// Sample input
arr=[4,5,7,1,9,2,3]

function findMissing(arr) {
    let missing = [];
    arr.sort((a,b) => a-b);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i-1] + 1 !== arr[i]) {
        missing.push(arr[i-1] + 1);
      }
    }
    return missing;
  }