// Write a function called sameFrequency. Given two positive integers, find out if the two arrbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

function sameFrequency(num1, num2){
  let arr1 = String(num1).split('').map(Number)
  let arr2 = String(num2).split('').map(Number)
  // console.log(arr1, arr2) 
  if(arr1.length !== arr2.length){
      return false;
  }
let frequencyCounter1 = {}
let frequencyCounter2 = {}
for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
}
for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
}
// console.log(frequencyCounter1);
// console.log(frequencyCounter2);
for(let key in frequencyCounter1){
  if(!(key  in frequencyCounter2)){ // checks that the key exists in frequencyCounter2
    return false
  }
  else if(frequencyCounter2[key] !== frequencyCounter1[key]){ // checks that the val matches in frequencyCounter1
    
    return false
}
}
return true
}


console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(224,222) )// false

