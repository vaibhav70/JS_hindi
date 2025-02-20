const myArr = [1,3,4,5,6];
const myArr2 = ["string1", "string2"];
const myArr3 = new Array(1,3,4,5,6);
let myArr4 = myArr
let myArr5 = new Array(...myArr);
// console.log(myArr[1]);

// Array methods
myArr.push(11);
// console.log(myArr4, myArr5);

myArr.shift();
myArr.unshift(8);

let newArr = myArr.join();
console.log(newArr, typeof newArr);

// slice, splice
let mySliceArr = myArr.slice(1,4);
console.log("slice", myArr, mySliceArr);
let mySpliceArr = myArr.splice(1,4);
console.log("splice", myArr, mySpliceArr);
