// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc";
tinderuser.name = "Sammy";
tinderuser.isloggedin = false;
// console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const course = {
    coursename: "JSinhindi",
    price: 999,
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor);