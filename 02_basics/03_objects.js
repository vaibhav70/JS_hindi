// singleton
// object.create

// object literals

const mySym = Symbol("key1");
const jsUser = {
    name: "vaibhav",
    isLoggedin: false,
    "last name": "kumawat",
    [mySym]: "mykey1"

};

// console.log(jsUser["name"], jsUser["last name"], jsUser[mySym]); 

// jsUser["last name"] = "jain"
// Object.freeze(jsUser);
// jsUser["last name"] = "khan";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello js user");
}
jsUser.greeting2 = function() {
    console.log(`hello ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());