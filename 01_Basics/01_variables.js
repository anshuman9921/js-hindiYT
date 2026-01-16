const accountId = 144553
let accountemail = "anshu@gmail.com"
var accountPassword = "12345"
accountcity = "Jaipur"                  //not a best practice

// accountId = 2

accountemail = "hc@c.com"
accountPassword = "212121"
accountcity = "Bengaluru"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountemail, accountPassword, accountcity]);
