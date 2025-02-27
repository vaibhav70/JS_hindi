let myName = "vaibhav   ";
String.prototype.trueLength = function() {
    return this.trim().length;
}
console.log(myName.trueLength());

const Teacher = {
    subject: 'java'
}

const User = {
    username: "vaibhav"
}

Object.setPrototypeOf(Teacher, User); 
//Teacher has all props of User

console.log(User.subject); //undefined
console.log(Teacher.subject); // 'java'