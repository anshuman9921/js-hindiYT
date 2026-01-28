// singleton

// object literals

const Jsuser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isloggedin: false,
    lastloginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser["lastloginDays"])

Jsuser.email = "hitesh@chatgpt.com";
// Object.freeze(Jsuser);
// Jsuser.email = "hitesh@microsoft.com";
// console.log(Jsuser);

Jsuser.greetings = function(){
    console.log("Hello JS User");
}

Jsuser.greetingTwo = function (){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(Jsuser.greetingTwo());