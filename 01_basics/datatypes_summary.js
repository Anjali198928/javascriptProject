//Data types  1.Primitive 2.Non-Primitive(Reference) classified on the basis of how data is stored in memory and accessed

/***********Primitive****************
 * String,Number,Boolean,Null,Undefined,Symbol(to make value unique), BigInt(big values or scientific values handle in it)
 * 
 **/ 

//example of primitive data type
const score = 100;            //number type
const scoreValue = 100.3;     //number type
const isLoggedIn = false;     //boolean type
const outSideTemp = null;     //null type
let userEmail;                // undefined

//How to use use Symbol
const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id === anotherId);    //o/p false because both have unique values
const bigNumber = 3456543576654356754n;

//example of non-primitive data type

const heros = ["shaktiman", "naagraj", "doga"];          //arrays
//Object (values write in the form of key value pairs)
let myObj =
{
    name: "john",
    age: 22
}

//functions , we can declare it as variable

//how to declare --function(){}
//store in variable

const myFunction = function(){
    console.log("Hello world");
}

//********Memory*********
//Stack and Heap Memory

//stack memory : in this if we declare a variable in it ,we get a copy of it
//heap memory: when any object (non primitive type) is defined then we get a refernce of original value
//ex of stack memory
let myYoutubeName = "abcdedotcom"
let anotherName = myYoutubeName
 anotherName ="chaiaurcode"
 console.log(anotherName);
 console.log(myYoutubeName)

 //ex of heap memory , here if we update or change anything this will change in original value
 let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo=userOne
 userTwo.email="hitesh@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);
