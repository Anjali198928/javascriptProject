//only way to defined a constant use keyword const
const accountId="144553"  //it cannot changed node.js doesn't allowed this becz it is fixed

//two ways to defined a variable , using var and let
let accountEmail = "xyz@gmail.com"

/*
Prefer not to use var becz of issue in block scope and functional scope
*/
var accountPassword = "12345"

accountCity = "Jaipur"        // it is possible to defined variable like this but this is not a good practice

// possible to defined a variable but doesnt assign value in it at initial stage js consider its value undefined
let accountState; 


//INVESTIGATE to change the values of all the above fields defined 

//case:1 try to change const value not possible it gives error
//accountId = 2; 

console.log(accountId)

//another way to print the values in tabular form
console.table([accountEmail,accountCity,accountPassword,accountState])

//command to run 
//node foldername/filename.js ex node 01_basics/01_variables.js