const marverl_heroes = ["Thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marverl_heroes.push(dc_heroes);

// console.log(marverl_heroes);
// for (let i = 0; i < marverl_heroes.length; i++){
//     console.log(marverl_heroes[i])
// }

// const all_heroes = marverl_heroes.concat(dc_heroes);
// console.log(all_heroes);

const all_new_heroes = [...marverl_heroes, ...dc_heroes];
// console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));