let marvel = ["ironman, spiderman, thor"];
let dc = ["superman", "wonderwoman", "flash"];

// marvel.push(...dc);
// console.log(marvel);
// let all = marvel.concat(dc);
// console.log(all);

let all = [...marvel, ...dc];
//console.log(all);

let deepArr = [1,3,5,[22,32,41],[1,[22,12]]];
//console.log(deepArr.flat(Infinity));

// console.log(Array.isArray("vaibhav"));
// console.log(Array.from("vaibhav"));
// console.log(Array.from({name: "vaibhav"}));

let score1 = 100, score2 = 120, score3 = 130
console.log(Array.of(score1, score2, score3));


