// const userEmail = ""//v@gmail.com"

// if(userEmail) console.log(userEmail)
// else console.log("no email");


/* falsy values in JS

false, 0, -0, BigInt 0n, "", null, undefined, NaN

*/

/* truthy values

"0", 'false', " ", [], {}, function() {}

*/

// console.log(Boolean([]));
// console.log([] == false)

const emptyObj = {};
// if(emptyObj == true)  // not equal

// if(Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }

// Nullish coalescing operator
let val1;
val1 = 5 ?? 10; //5
val1 = null ?? 10; //10
val1 = undefined ?? 10; //10
console.log(val1);

// terniary operator
const price = 70;
price >= 80 ? console.log(">= 80") : console.log("< 80");


