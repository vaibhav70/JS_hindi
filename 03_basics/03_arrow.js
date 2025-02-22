const user = {
    username: "vaibhav",
    price: 999,
    welcomeMessage: function() { 
        console.log(`${this.username}, welcome to website`)
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);


// function chai() {
//     let username = "hitesh"
//     console.log(this);
// }

// const chai = function () {
//     let username = "vaibhav"
//     console.log(this.username);
// }

const chai = () => {
    let username = "vaibhav"
    console.log(this.username);
}
chai();

const addtwo = (a, b) => a+b;
console.log(addtwo(1,3));



