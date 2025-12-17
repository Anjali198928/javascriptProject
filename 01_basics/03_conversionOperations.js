let score ="33"

/*
To know the typeof any value 
*/

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)         //conversion into number
console.log(typeof valueInNumber)

/*
another case
*/

let score1 = "33abac"
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log (valueInNumber1)

let score2 = null
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log (valueInNumber2)

let score3 =undefined
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log (valueInNumber3)

/*
Conversion into numbers
"33" -->33
"33abc" --> NaN
true -->1  false -->0 
*/
//Conversion into boolean
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn)

let isLoggedIn1 = ""

/* 
Conversion into boolean
1 => true 0 => false
 empty string " " => false
 "text" => true
*/

//Conversion into String
let someNumber = 103;

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


/***************OPERATIONS*************/
let str1 = "hello"
let str2 = "anjali"

let str3 = str1 +str2
console.log(str3);

//complex cases      (not a good code)
// console.log("1" + 2)   //o/p   12
// console.log(1 + "2")   //o/p   12
// console.log("1" + 2 + 2)  //o/p 122     if first value is string it has to be treated as string 
// console.log(1+2+"2")      //o/p  32   //follow ECMA guideline to do that for type conversion(ToPrimitive)

/*
special conversion 
*/

console.log(+true)         //value 1 , it is not a good code 
console.log(+"")           // output value 0 , it is not a good code, no use of it


let gameCounter =100
gameCounter++;                //Read abount prefix and post fix operators from mdn docs, output 101
++gameCounter;                //output 101
console.log(gameCounter);
