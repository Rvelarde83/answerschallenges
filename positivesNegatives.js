/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function countPositivesSumNegatives(input) {
    // your code here
    let positive= 0;
    let negative= 0;
    if (input === null || input.length === 0) {
        return [];}
        else{
    input.forEach(number => {number > 0 ? positive+=1: negative += number});
}
return answer =[positive, negative]
}

console.log(countPositivesSumNegatives(input));
// for (i of  input) {
//   if ( i >0 ){
//     positive+=1}
//     else {
//     negative += i}