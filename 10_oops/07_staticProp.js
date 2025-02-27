class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // static prevents the function to be accessed
    // outside of the class or inheriting
    static createId() { 
        return `123`;
    }
}

const user1 = new User("veboman");
// console.log(user1.createId()); // func not accesible because of static

class Teacher extends User{
    constructor(username, subject) {
        super(username);
        this.subject = subject;
    }
}

const teacher1 = new Teacher("SirJi","JavaScript");
console.log(teacher1.username, teacher1.subject);