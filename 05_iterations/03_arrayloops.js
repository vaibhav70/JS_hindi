let arr = [1,345,4, 90];

/* 
for (const iterator of object) {
}
*/

for(const num of arr) {
    //console.log(num);
}

const mapp = new Map();
mapp.set('IN', "India");
mapp.set("US", "United States of America");
mapp.set("AU", "Australia");
//console.log(mapp);
for(const [key, value] of mapp) {
    //console.log(key, ": ", value);
}
// for(const m in mapp) { //maps arent iteratable 
//     console.log(m);
// } 

const games = {
    game1: "spiderman",
    game2: "GTA",
    game3: "the witcher"
}

for(const entries in games) { // objects not iteratable
    //console.log(entries);
}

