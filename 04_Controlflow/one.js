// if
const isuserloggedin = true

const score = 200

// if (score > 100) {
//     const power = "fly";
//     console.log(`User Power: ${power}`)
// }


const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500){
//     console.log("Less than 500");
// } else if(balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }


const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromEmail = true

if (userloggedin && debitcard){
    console.log("Allowed to buy courses");
}

if (loggedinfromgoogle || loggedinfromEmail){
    console.log("User logged in");
}