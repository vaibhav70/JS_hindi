// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123aaa";
tinderUser.name = "vaibhav";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email: "user@gmail.com",
    fullName: {
        fname: "vaibhav",
        lname: "kumawat"
    }
}

// console.log(regularUser.fullName?.fname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {obj1, obj2};
// Object.assign(target, source)
const obj4 = Object.assign({}, obj1, obj2);
const obj5 = {...obj1, ...obj2};
// console.log(obj5);


// console.log(obj4?.[1]);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js in hindi",
    price: 100,
    courseInstructor: "hitesh"
}

// course.courseInstructor
// const {courseInstructor} = course;
// console.log(courseInstructor);

// const {courseInstructor: CI} = course;
// console.log(CI);

//  {
//     "name": "vaibhav",
//     "courseName": "js in hindi",
//     "price": "free"
//  }







