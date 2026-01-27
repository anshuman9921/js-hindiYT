const myarray = [0, 1, 2, 3, 4, 5]

// console.log(myarray.length)

// Array methods

myarray.push(6) // adds an element to the end
// console.log(myarray)

myarray.unshift(9)
myarray.shift()
console.log(myarray) // adds an element to the beginning

// slice and splice
console.log("A", myarray);
const myn1 = myarray.slice(1, 3)
console.log(myn1);
console.log("B", myarray);