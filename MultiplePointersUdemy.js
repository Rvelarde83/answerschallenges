// moving from both ends of the array//
// function sumZero(arr){
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right){
//       let sum = arr[left] + arr[right];
//       if(sum === 0){
//           return [arr[left], arr[right]];
//       } else if(sum > 0){
//           right--;
//       } else {
//           left++;
//       }
//     }
//   }



/***************************************************************/
  //Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.//

function countUniqueValues(arr){
    if (!(arr.length)){
        return 0;
    }
    let i = 0;
    let j = i + 1;
    while (j < arr.length){
        if(arr[i] === arr[j]){
            j++;
    }else if (arr[i] !== arr[j]){
        i++;
        arr[i] = arr[j];
        j++;
// console.log(arr)
    }
}
    return i + 1
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

// teachers solution//
/* better code because the for loop takes care of adding 1 to j, instead of doing it manual, that makes it so you don't need one of the logic points ( if(arr[i] === arr[j]) {j++;} the for loop does that automatically */

function countUniqueValues2(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log("teachers solution")
console.log(countUniqueValues2([1,2,2,5,7,7,99]))