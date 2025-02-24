const myNums = [1,3,3];

// const res = myNums.reduce(function (acc, cur) {
//     console.log(acc, cur);
//     return cur+acc;
// }, 0) 
// console.log(res);

const cart = [
    {price: 400},
    {price: 199},
    {price: 449}
]

const billamt = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(billamt);

