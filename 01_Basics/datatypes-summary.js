// # Primitive 

//  7 types : String, number, boolean, null, undefined, symbol, Bigint


const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);



// # Reference(Non-primitive) type

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let details = {
    name: "Anders",
    age: 22,
    email: "anshuman@gmail.com"
}
// console.table(heroes)


const myfunc = function (name){
    console.log("Hello world from",name)
}

myfunc(details.name)