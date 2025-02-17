const myDate = new Date();

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// let myCustomDate = new Date(2025, 1);
// let myCustomDate = new Date(2025, 1, 22, 16, 50);
let myCustomDate = new Date("2025-1-15") 
//console.log(myCustomDate.toString())
//console.log(Date.now());

// console.log(myCustomDate.getDate(), myCustomDate.getMonth());

let myDate1 = myCustomDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"
})

console.log(myDate1);


