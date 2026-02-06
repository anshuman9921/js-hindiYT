const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval

// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr,0)



// console.log(myTotal);


const shoppingCart = [
    {
        itemNmae: "JS Course",
        price: 2999
    },
    {
        itemNmae: "Python Course",
        price: 2499
    },
    {
        itemNmae: "Java Course",
        price: 2122
    },
    {
        itemNmae: "SQL Course",
        price: 2333
    },
]

const  pricetopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(pricetopay);