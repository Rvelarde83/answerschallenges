var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false,  null , undefined, true, true, true, true, true];

let counter = 0;
// for (let i in array1) {
   
//         if (array1[i] === true) {
//             counter += 1;
//         }
//         console.log(counter);
//     }
array1.forEach(element => {typeof element == 'boolean' ? (element === true ? counter += 1 : counter += 0): counter += 0
    
});
console.log(counter);

