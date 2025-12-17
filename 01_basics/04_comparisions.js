//basic comparisions

// console.log(2>1)
// console.log(2>=1)

//Problematic ones (where data types are different)

console.log("2">1);    //output true which is surprising
console.log("02">1);   //ouput true
console.log(null>0);      //output false
console.log(null == 0);    //output false
console.log(null >= 0);     //output true

console.log(undefined == 0);

//comparion and equality checks are different 
// avoid to use these type of code , it creates confusion