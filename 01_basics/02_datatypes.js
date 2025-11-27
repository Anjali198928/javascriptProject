"Use strict";        //using this nodejs trat all old JS code as newer version

//alert(3+3)     //not useful here because we are using nodejs here not browser

//Imp. Tip Code readability should be high

/*
original docs by ECMA script on tc39.es but quite dififcult to understand
easier one on mdn web_docs
*/


let name = "Anjali"        //datatype is String
let age = 18               // datatype is number
let isLoggedIn = false     // datatype-boolean

/*
Type of datatype
1. number
2. biginit
3. boolean
4. null   -standalone value but it is a datatype 
5. undefined - value not assigned
Imp. 6. symbol -to find uniqueness
Imp. 7. object
*/

console.log(typeof "anjali")           //typeof is used to know the datatype of anything here we got output string

console.log(typeof undefined)   //    datatype is undefined

console.log(typeof null) //datatype is object