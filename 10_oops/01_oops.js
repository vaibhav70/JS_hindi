// const user1 = {
//     username: "vaibhav",
//     loginCount: 234,
//     loggedIn: true,

//     userDetails: function() {
//         console.log(this.username);
//     }
// }

// user1.userDetails();


function User(username, loginCount, loggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.loggedIn = loggedIn
    this.greeting = function() {
        console.log(`welcome ${this.username}`);
    }
    //return this; implicit return
}

const user2 = new User("veboman", 33, true);
const user3 = new User("jatthan", 1, false);
// console.log(user2);
// console.log(user3);
//user2.greeting();

// when we use this keyword, an empty object is created
// a constructor function is called 

console.log(user2.constructor);

console.log(user2 instanceof User);