

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
// console.log(loginuser())

// ... -> this is called both rest and spread operator

function calculatecartprice(...num1){
    return num1
}

// console.log(calculatecartprice(200, 400, 500));


const user = {
    username: "Hitesh",
    price: 1999
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user)

// handleobject({
//     username: "Sam",
//     price: 388
// });


const mynewarray = [200, 400, 100, 600]

function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(mynewarray));