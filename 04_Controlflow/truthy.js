const userEmail = "h@hitesh.ai"

// if (userEmail) {
//     console.log("Got User Email");

// } else {
//     console.log("Don't have user email")
// }

// falsy values

    // false, 0, -0, BogInt On, "", null, undefined, NaN

// truthy values
    // "0", 'false', " ", [], {}, function (){}

// how to check if an object is empty or not. below is the example

const emptyObj = {
    name: "Anshuman"
}

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
    
// } else {
//     console.log("Object isn't empty")
// }


// Nullish Coalescing Operator (??): null undefined.

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10

// console.log(val1);


// Terinary Operator

// condition ? true : false

const iceteaprice = 100
iceteaprice <= 80 ? console.log("Less than 80") : console.log("More than 80")