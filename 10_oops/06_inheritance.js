class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username: ${this.username}`);
    }
}

// teacher is child class, user is base class
class Teacher extends User {
    constructor(username, pass) {
        super(username); //calls the constructor of super class
        this.pass = pass;
    }
    addCourse() {
        console.log(`course added by ${this.username}`);
    }
}

const Teacher1 = new Teacher("hiteshSir", "hitesh5");
Teacher1.addCourse();
Teacher1.logMe();

console.log(Teacher1 instanceof User); //true