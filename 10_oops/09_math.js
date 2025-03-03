


const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for(let [key, value] of chai) {
    console.log(key, " ", value);
}