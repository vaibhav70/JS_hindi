// let a = 1;
// const b = 2;
// var c = 3;

// if (true) {
//     let a = 10;
//     let d = 11;
//     var e = 12;
//     console.log(a);
// }
//console.log(a, d, e);


//console.log(a,b,c);


function one() {
    const username = "vaibhav";

    function two() {
        const website = "youtube";
        console.log(username);

    }
    //console.log(website);
    two();
}

// one();

if(true) {
    const username = "vaibhav"
    if(username === "vaibhav") {
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website);

}

//console.log(username);

// *******************Interesting******
addone(5);
function addone(num) {
    return num+1;
}


addTwo(10); // function inaccesible
const addTwo = function(num) {
    return rum + 2;
}
addTwo(10); // function accesible


