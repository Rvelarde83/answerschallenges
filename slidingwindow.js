function maxSubarraySum(arr, num) {
    if ( num > arr.length){  // edge case, if num is larger than the array then return null
      return null;
    }
    var max = -Infinity;   //- Infinity in case is negative numbers
    for (let i = 0; i < arr.length - num + 1; i ++){    // loop over the array and stops {num} before the end
      temp = 0;
      for (let j = 0; j < num; j++){  // iterates from i to the num if num=4 then from current i and the next 3
          temp += arr[i + j]; //adds the first {num} numbers
       
        }
        if (temp > max) { // logic 
        max = temp; //  if temp is greater than max then keeps going
      }
    }
    return max; // when max is greater its returned 
  }

console.log(maxSubarraySum([1,2,5,2,8,1,5],4))

// /refactor/

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null; // edge case
    for (let i = 0; i < num; i++) { //loops over the array only the 1st{num} of times
      maxSum += arr[i]; // adds the first result to maxSum 
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i]; // removes the first index from tempSum and adds the last index from iteration which is where this second loop starts (at arr[num]) this way you get all the results without iterating over and over over the whole array.
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }


console.log(maxSubarraySum([1,2,5,2,8,1,5],4))