function add(num1, num2) {

    console.log(num1+num2);
}

//add(1,3);

function loginUserMessage(username) {
    if(username) console.log(`${username} logged in`);
    else console.log("no useername");
}

// loginUserMessage("heather");

function calculateCartPrice(...prices) {
    console.log(prices);

}

// calculateCartPrice(100,200,100);

const item = {
    itemname: "bag",
    price: 299
}

function handleObject({itemname, price}) {
    console.log(`${price} ${itemname}`);
}

//handleObject(item);


const myArr = [100,300,300,600];
function returnSecondValue(getArray) {
    console.log(getArray[1]);
}

returnSecondValue(myArr);