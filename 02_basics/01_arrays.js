//how to declare
const myArr = [0,1,2,3,4,5]    //always write like this
//declared a variable using const, and later tried to reassign it, which is NOT allowed given below, BUT we can modify the contents of an array or object using methods given at line 23
//myArr = [0,1,2,3,4,5]


/** Notes
 * we can have mix of datatype in an array
 * resizable(can be resize later)
 * not associative array means (myArr[0] always access using index)
 * zero indexed
 * copy operation create shallow copies
 * */

//another way to declare array

const myHeros = ["shaktiman", "naaga"]
const myArr2 = new Array(1,2,3,4)   //defined like this not in square bracket here

//Methods

//mostly used, values added in array
myArr.push(6)
console.log(myArr);

//another method, it removes last value of array
myArr.pop();
console.log(myArr)

//another method , it adds in starting of array
myArr.unshift(9);
console.log(myArr);

//
