//how to use as a singleton object or declare object as constructor

/**
 * two ways to define
 */

//first way -- singleton object
const tinderUser = new Object();
console.log(tinderUser);  // get empty object

//second way -- non -singleton object
const tinderUser2={};
console.log(tinderUser2); //get empty object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname);

//How to combine objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//case-1

const obj3 = {obj1,obj2}
console.log(obj3);       //o/p { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//case-2 Use of assign
const obj4 = Object.assign(obj1,obj2)  //obj1 is target & obj2 is source
console.log(obj4); //o/p { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//case-3 mostly used where we have more than 2 objects
const obj5 = Object.assign({}, obj1, obj2)   // {} treat as target, obj1 & obj2 treat as source
console.log(obj5);     //o/p { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//mostly used to combine objects
const obj6 = {...obj1,...obj2}
console.log(obj6)


//one more case used mostly{where values comes from db or having multiple objects in array}
const users=[
    {
        id: 1,
        email:"h@gmail.com"
    },
        {
        id: 2,
        email:"h2@gmail.com"
    },
    {
        id: 3,
        email:"h3@gmail.com"
    }
    
]

users[1].email //access using this way
console.log(tinderUser);

//Methods used , 1st- to get all keys of a particular object

console.log(Object.keys(tinderUser));            //imp- o/p is in the form of array [ 'id', 'name', 'isLoggedIn' ]

//method -2 to get all values
console.log(Object.values(tinderUser));

//method -3 get array in array in output , it puts key value in array
console.log(Object.keys(tinderUser));

//to check if any value is present or not
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//part-3

//Destructuring of objects {used in React}
const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//how to access
course.courseInstructor  //not a wrong way

//but to access diff properties instead of using course. every time 

//use
const {courseInstructor} = course
console.log(courseInstructor)

//if want to change name
const {courseInstructor: instructor} = course
console.log(instructor)

//all these tasks are called destructuring

//API --we get values from backend in the form of JSON
//JSON structure
// {
//     "name": "hitesh",
//     "coursename": "JS in hindi",
//     "price": "free"
// }
//for some cases we get API's in form of array instead of objects
// [
//     {},
//     {},
//     {}
// ]

