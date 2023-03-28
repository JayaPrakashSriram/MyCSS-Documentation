// ..........................MRF:
// MRF is also the array methods in JavaScript. 
// Each will return a new array based on the result of the function.
// to know more about call back, read the link below
// https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/

// ------------------------------------------------------------------------------------------------

// Map():  -> replaces for loop
// Map recives funcion as a parameter. Then Map will call the function once for each element and
//    applies that function to each element of the first array and returns new array(return value)
//    from the result. Map does not execute the function for empty elements and does not change
//    the original array.
// Map method is an iterative method.
// Map is a non-mutating method.

// Syntax1:
// var new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
// }[, thisArg])
// Syntax2:
// Arrow function
// map((currentValue) => { lines of code })
// map((currentValue, index) => { lines of code })
// map((currentValue, index, array) => { lines of code })
// Callback function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// map(callbackFn)
// map(callbackFn, thisArg)
// Inline callback function
// map(function (currentValue) { lines of code })
// map(function (currentValue, index) { lines of code })
// map(function (currentValue, index, array) { lines of code })
// map(function (currentValue, index, array) { lines of code }, thisArg)

// Parameter:
// currentValue : Required : The value of the current element.
// index        : Optional : The index of the current element.
// arr          : Optional : The array of the current element.

// thisValue	: Optional : A value passed to the function to be used as its this value.
//    Default value: undefined.

// Return value : A new array with each element being the result of the callback function.

// ???Since map builds a new array, calling it without using the returned array is an 
//    anti-pattern???

// ex 1:-multi:
// with   : =>
// without: fun
const numb = [1, 2, 3, 4];
const doubled = numb.map(item => item * 2); 
console.log(doubled);
// Ouptut: [2, 4, 6, 8]

// ex 2:-square:
// with   : =>
// without: fun, con
const myAwesomeArray = [5, 4, 3, 2, 1]
myAwesomeArray.map(x => x * x)
// Output: [25, 16, 9, 4, 1]

// ex 3:-square root, without a console:
// with   :
// without: =>, fun, con
const numbrs = [4, 9, 16, 25];
const newArr = numbrs.map(Math.sqrt)
// Output: [2, 3, 4, 5]

// ex 4:-multi:
// with   : fun
// without: => 
const ex4 = [5, 4, 3, 2, 1]
const newAr = ex4.map(myFunction)
function myFunction(num) {
  return num * 2;
}
console.log(newAr)
// Output: [10, 8, 6, 4, 2]

// ex 5:-object:
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
// Output: [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// incomplitio in this link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// ongoing https://www.google.com/search?q=array+method+map+javascript&rlz=1C1CHZN_enIN1033IN1033&oq=array+method+map&aqs=chrome.1.69i57j0i512j0i22i30l7j0i15i22i30.14796j0j7&sourceid=chrome&ie=UTF-8

// ------------------------------------------------------------------------------------------------

// Filter():  -> If condition
// Filters apply to each and every element in an array. 
// It does not change the original array.
// If the conditional returns true, the element gets pushed to the output array and vise-versa.

// Syntax:
// var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
// }[, thisArg])

// ex 1:-even numbers in an array
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); 
// Output: [2, 4]

// ------------------------------------------------------------------------------------------------

// Reduce():
// Reduce method runs a reducer function on each element of the array,
// which reduces an array of values down to just one value.

// Syntax:
// arr.reduce(callback[, initialValue])

// ex 1:-sum of given array
const nmbrs = [1, 2, 3, 4];
const sum_ = nmbrs.reduce(function (result, item) {
  return result + item;
 }, 0);
console.log(sum_); 
// Notes: 
// Here, 0 is the value of result. so, code start works like 0+1(result+item). 
// item denotes array which starts from nmbrs[0]. So, 0+1(result+item). 
// Output: 10

// ex 2:-count the string of animals
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});
console.log(petCounts); 
// Output:
//  { 
//     dog: 2, 
//     chicken: 3, 
//     cat: 1, 
//     rabbit: 1 
//  } 

// ------------------------------------------------------------------------------------------------

// Arrow Function:

// ex1:
let x = function(x, y) {
    return x * y;
 }
 let alt_x = (x, y) => x * y;
 
 // ex2:
 let myFunction = (arg1, arg2, ...argN) => {
     statement(s)
 }
 // myfunction - function name
 // If the body has single statement or expression, you can write arrow function as:
 let myFunctions = (arg1, arg2, ...argN) => expression
 
 // ex3:-Arrow Function with No Argument
 let greet = () => console.log('Hello');
 greet();
 // Output: Hello
 
 // ex4:-Arrow Function with One Argument
 let greet_ = x => console.log(x);
 // Output: Hello
 
 // ex5:-Arrow Function as an Expression
 let percentage = 35;
 let per = (percentage<35) ?
 ()=>console.log('FAIL'):
 ()=>console.log('PASS');
 per();
 // Output:PASS
 
 // ex6:-Multiline Arrow Functions
 let sum = (a, b) => {
     let result = a + b;
     return result;
 }
 let result1 = sum(5,7);
 console.log(result1); 
 // Output:12
 
 // ex7:-this with Normal Function and Arrow Function
 // Inside a regular function, this keyword refers to the function where it is called.
 //      However, this is not associated with arrow functions. 
 //      Arrow function does not have its own this. So whenever you call this, 
 //      it refers to its parent scope.
 function Person() {
   this.name = 'Jack',
   this.age = 25,
   this.sayName = function () {
       // this is accessible
       console.log(this.age);
       function innerFunc() {
           // this refers to the global object
           console.log(this.age);
           console.log(this);
       }
       innerFunc();
   }
 }
 let xo = new Person();
 xo.sayName();
41// Output:
 // 25
 // undefined
 // Window {}
 // Here, this.age inside this.sayName() is accessible because 
 //      this.sayName() is the method of an object.
 //      However, innerFunc() is a normal function and this.age is not accessible because
 //      this refers to the global object (Window object in the browser). 
 //      Hence, this.age inside the innerFunc() function gives undefined.
 function Person() {
   this.name = 'Jack',
   this.age = 25,
   this.sayName = function () {
       console.log(this.age);
       let innerFunc = () => {
           console.log(this.age);
       }
       innerFunc();
   }
 }
 const xx = new Person();
 xx.sayName();
 // Output:
 // 25
 // 25
 // Here, the innerFunc() function is defined using the arrow function. And inside the 
 // arrow function, this refers to the parent's scope. Hence, this.age gives 25.
 // ...bending in arrow function... https://www.programiz.com/javascript/arrow-function
 //                      Arguments Binding
 //                      Arrow Function with Promises and Callbacks
 //                      Mistakes Should Avoid With Arrow Functions
 




// Exercise 01: combination of map and filter:
const persons = [
    {firstname : "Malcom", lastname: "Reynolds", grade:  96},
    {firstname : "Kaylee", lastname: "Frye",     grade:  84},
    {firstname : "Jayne",  lastname: "Cobb",     grade: 100},
    {firstname : "Sam",    lastname: "Sung",     grade:  65},
    {firstname:  "Katie",  lastname: "Kane",     grade:  90}
  ];
// map
  persons.map(getFullName);
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }
console.log(res)
// map
persons.map(FullName);
function FullName(item) {
  let ry = [item.firstname,item.lastname].join(" ");
    console.log(ry)
}
// filter
  const per_Grades = persons.filter(per => per.grade >= 90);
  console.log(per_Grades);
// persons
  console.log(persons)


// Output:
// ['Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb', 'Sam Sung', 'Katie Kane']

// Malcom Reynolds
// Kaylee Frye
// Jayne Cobb
// Sam Sung
// Katie Kane

// [{…}, {…}, {…}]
// 0: {firstname: 'Malcom', lastname: 'Reynolds', grade: 96}
// 1: {firstname: 'Jayne', lastname: 'Cobb', grade: 100}
// 2: {firstname: 'Katie', lastname: 'Kane', grade: 90}

// [{…}, {…}, {…}, {…}, {…}]
// 0: {firstname: 'Malcom', lastname: 'Reynolds', grade: 96}
// 1: {firstname: 'Kaylee', lastname: 'Frye', grade: 84}
// 2: {firstname: 'Jayne', lastname: 'Cobb', grade: 100}
// 3: {firstname: 'Sam', lastname: 'Sung', grade: 65}
// 4: {firstname: 'Katie', lastname: 'Kane', grade: 90}