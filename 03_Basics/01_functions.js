

function saymyname(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// saymyname();

// function addtwonumbers(number1, number2){
//     console.log(number1 + number2)
// }


function addtwonumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
}


const result = addtwonumbers(3,4);
// console.log("Result: ", result);

function loginuser(username){
    if(!username){
        console.log("Please enter a user name.")
        return
    }
    return `${username} just logged in !`
}

// console.log(loginuser("Hitesh"))
console.log(loginuser())