function setUsername(username) {
    this.username = username;
    console.log("called");
}

function createUser(username, mail, pass) {
    setUsername.call(this, username);
    this.mail = mail;
    this.pass = pass;
}

const user1 = new createUser("veboman", "v@gmail.com", "1234");
console.log(user1);