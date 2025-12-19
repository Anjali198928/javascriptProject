//simple definitions, declare in double course
const name ="hitesh"
const repoCount = 50

//old way
console.log(name+repoCount+"value")

//modern way use backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//one more way to declare string
const gameName = new String('Hitesh')

//different methods provided by String
console.log(gameName[0]);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4);
console.log(anotherString);


//trim -to remove unneceassary space

const newStringOne = "   hitesh  "
console.log(newStringOne);

console.log(newStringOne.trim());

//replace- to replace something
const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20','-'));

//includes, to check something is included or not
console.log(url.includes('hitesh'))


