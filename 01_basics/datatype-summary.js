// Primitive
// number, string, boolean, null, undefined, symbol, BigInt

const score = 100;
const score1 = 100.1;

const isLoggedIn = false;
const temperature = null;

let userEmail;

const id = Symbol("123");
const id2 = Symbol("123");

//console.log(id == id2);

const bigNumber = 910285701927590n;

//console.log(typeof bigNumber);

// Reference
// Arrays, Obj, Functions

const heroes = ["shaktiman", "nagraj", "hodo"];
const myObj = {
    name: "table",
    property: "has 4 legs"
}

const myFunction = function() {
    console.log("hello world from function");
}

// console.log(typeof heroes, typeof myObj, typeof myFunction);


//_______________________________________________________________
// stack (Primitive),   heap(Non primitive)

let userOne = {
    name: "kishan",
    mail: "kishan@mail"
}

let userTwo = userOne

userTwo.name = "kishnaaa"

//console.log(userOne)



