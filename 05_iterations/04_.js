const games = {
    game1: "spiderman",
    game2: "GTA",
    game3: "the witcher"
}

// objects can be iterable with for-in loop
for(const key in games) {
    //console.log(`${key}: ${games[key]}`)
}

const arr = ["as", "it", "was"];
for(const a in arr) {
    //console.log(a);
}
for(const a of arr) {
    //console.log(a);
}
//for-in prints index, for-of print value in array

