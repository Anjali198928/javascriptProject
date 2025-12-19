//define number simply

const score =400;
 console.log(score);

 //to define exclusively number

const balance =new Number(100);    //it will show in output that it is a number
console.log(balance);

console.log(balance.toString());      //convert number to string now we can use on it string methods like
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 23.8966;
//it return string and renge is defined for this
console.log(otherNumber.toPrecision(3));     //focus on 3 values

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));         //to give representation like indian way

//Maths

console.log(Math);    //it is an object, when we do this in inspect mode we get some deeper methods there

//mostly used ones
console.log(Math.abs(-4));           //convert negative values to positive

console.log(Math.round(4.6));
console.log(Math.ceil(4.2)) //get upeer value
console.log(Math.floor(4.9)) //get lower value

//to find lowest value in array
console.log(Math.min(4,3,6,8));

//Math.random      ,here values comes in between 0 and one mostly in decimal
//we used this one where we want to get values in beetwen a range
console.log(Math.random()*10);      //value shift to the left side

//to get guarented value above 0 we add 1

console.log((Math.random()*10)+1);

//get values in a range we define max and min value
const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1))+min);






