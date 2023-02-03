let arr=[1,3,5,7,9]

function miniMaxSum(arr) {
    const sum = arr.reduce((a, b) => a + b);
    const min = sum - Math.max(...arr);
    const max = sum - Math.min(...arr);
    console.log(`${min} ${max}`);
}

miniMaxSum(arr)

