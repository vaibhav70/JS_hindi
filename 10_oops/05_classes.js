// ES6

class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    encryptPassword() {
        this.password = `${this.password}abc`;
        return this.password;
    }
}

const user1 = new user("vebo", "122");
console.log(user1.encryptPassword());


// Behind the scenes

const User = function(username, password) {
    this.username = username;
    this.password = password;

    // this.encryptPassword = function() {
    //     this.password = `${this.password}abc`;
    //     return this.password;
    // } //we can do the above code or with prototype
}
User.prototype.encryptPassword = function() {
    this.password = `${this.password}abc`;
    return this.password;
}

const user2 = new User("arjun", "ar123");
console.log(user2.encryptPassword());

