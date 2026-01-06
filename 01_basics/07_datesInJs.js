//define in milliseconds(i.e. why get long values)

let myDate = new Date()
console.log(myDate);            //o/p in not readable format 

//i.e. convert date to string

console.log(myDate.toString());   //much better 

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);    //object 

//To declare specific date

myCreatedDate = new Date (2023,0,23,53);
anotherFormat = new Date ("2023-01-14")

console.log(myCreatedDate);
console.log(anotherFormat);

//timestamp

let myTimeStamp = Date.now;
console.log(myTimeStamp);
