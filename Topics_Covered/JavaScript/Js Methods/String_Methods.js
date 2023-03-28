// String Method:---------------------------------------------------------
// ..........................Split():

// ex 1: Creating array from string:
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);
// Output: [ 'Apple', 'Banana' ]
// Note: subseqent ex in ex 1 of join.

// ..........................trim():

// ..........................Join():

// ex 1: Creatring a string from an array:
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// Output: Apple, Banana
// Note: subseqent ex in ex 1 of split.

// ..........................push():
// Push will Append an item to an array.

// ex 1:
const fits = ["Apple", "Banana"];
const newLen = fits.push("Orange");
console.log(fits);
console.log(newLen);
// Ouptut: 
// ["Apple", "Banana", "Orange"]
// 3

// ..........................pop():
// pop can only be used to remove the last item from an array.

// ex1:
const frus = ["Apple", "Banana", "Orange"];
const removedItem = frus.pop();
console.log(frus);
console.log(removedItem);
// Output:
// ["Apple", "Banana"]
// Orange

// ..........................concat():
// ..........................splice():
// ..........................chartAt():
// ..........................chartCodeAt():
// ..........................startsWith():
// ..........................endsWith():
// ..........................fromCharCode():
// ..........................includes():

// ex 1:
const fruis = ["Apple", "Banana"];
fruis.includes("Banana"); // true
fruis.includes("Cherry"); // false
// Output: 
// true
// false
// Note: subseqent ex in ex 2 of indexof.

// ..........................indexOf():

// ex 1: Find the index of an item in an array:
let string = ("H o  world.");
let result = string.indexOf(".");
console.log(result)
// Output: 10

// ex 2: Check if an array contains a certain item:
const frits = ["Apple", "Banana"];
console.log(frits.indexOf("Banana") !== -1);
console.log(frits.indexOf("Orange") !== -1);
console.log(frits.indexOf("banana") !== -1);
// Output:
// true
// false
// false
// Note: subseqent ex in ex 1 of includes.

// ..........................lastIndexOf():
// ..........................match():
// ..........................repeat():
// ..........................replace():
// ..........................search():
// ..........................substr():
// ..........................substring():

// ..........................toUpperCase():

// ex 1: 
var str = "changing lower to upper case"
console.log(str.toUpperCase())
// Output: CHANGING LOWER TO UPPER CASE

// ex: Map + Arrow Function:
const names = ['Ali', 'Atta', 'Alex', 'John'];
const u_c = names.map(name => name.toUpperCase());
console.log(u_c);
// Output: ['ALI', 'ATTA', 'ALEX', 'JOHN']

// ex: Normal Function:
var nama = ["hi", "hellow"]
const uppercased = nama.map(function (name) {
return name.toUpperCase();
});
console.log(uppercased)
// Output: ['HI', 'HELLOW']

// ..........................toLowerCase():

// ..........................Combine String Methods:

// ex 1: Unshift and Pop: rotating an array:
var rotate = function(a,k){
    for(var i=0; i<k; i++){
        a.unshift(a.pop())
    }
    return a;
}
console.log(rotate([1,2,3,4,5],3))
