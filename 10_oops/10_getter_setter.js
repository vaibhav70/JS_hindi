class User {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }

    get pass() {
        return this._pass.toUpperCase();
    }
    set pass(pass) {
        this._pass = pass;
    }
}


const hitesh = new User("h@mail.com", "123a")
console.log(hitesh.pass);