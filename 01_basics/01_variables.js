const accountId = 1445533
let accountEmail = "vishanu@google.com";
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2; //not allowed

accountEmail = "hc@hc.com";
accountPassword = "2121212"
accountCity = "Bengaluru"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])