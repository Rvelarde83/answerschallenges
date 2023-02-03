// for (let i = 1; i <= 4; i++){
//     console.log("#")
// }

function staircase(n) {
    let output= ""
for( let i = 1; i<= n; i ++) {
    // outer loop for rows
    for (let s = n - 1; s >= i; s--) {
        output += ' '
        // loop for empty spaces
    }
    for(let h= 1; h <= i; h ++) {
        output += '#'
    }
     // new line
     output += "\n"
}
    return output
}

console.log(staircase(4))