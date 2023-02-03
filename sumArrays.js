// Sum Numbers
function sum (numbers) {
    let arrSum = []
 
   
    if (numbers.length=== 0){
        return 0
    }else {
return arrSum =numbers.reduce((curr, next) => curr + next);   }
};

console.log(sum([1, 5.2, 4, 0, -1, ]))