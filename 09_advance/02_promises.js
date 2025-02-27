const p1 = new Promise(function (res, rej) {
    // do an async task
    // db calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete');
        res("p1 done 001");
    }, 1000);
});

p1.then( function (message) {
    console.log(`p1 is consumed. message: ${message}`);
})

new Promise(function(res, rej) {
    setTimeout(() => {
        console.log("async task 2");
        rej("rejected");
    }, 1000);
}).then(function() {

}).catch(function(message) {
    console.log(message);
})

const p4 = new Promise(function(res, rej) {
    setTimeout(function() {
        let error = false;
        if(error) {
            rej('p4 rejected');
        }
        else {
            res({name: "vaibhav", mail: "vaibhav@gmail.com"});
        }
    }, 1000);
})

p4.then(function(user) {
    console.log(user);
    return user.name;
}).then(function(name) {
    console.log(name);
}).catch(function(error) {
    console.log(error);
}).finally(function () {
    console.log('either p4 is resolved or rejected');
    // always runs
})

const p5 = new Promise(function(res, rej) {
    setTimeout(function() {
        let error = false;
        if(error) {
            rej('p5 rejected');
        }
        else {
            res({username: "vaibhav", password: "1111"});
        }
    }, 1000);
})

// async function consumeP5() {
//     const response = await p5;
//     console.log(response);
// }

async function consumep5() {
    try {
        const response = await p5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumep5();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
//getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
    
}).then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
});








