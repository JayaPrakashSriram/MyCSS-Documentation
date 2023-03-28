// a.Print odd numbers in an array?
//   i.General Approach:
var arr = [1,2,3,4,5,6,7,8,9];
    let res = [];
for(var i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
        res.push(arr[i])
    }
}
console.log(res)
// Output: [1, 3, 5, 7, 9]

//  ii.Normal Function:
var sum = function (arr){
    let res = [];
    for(let i in arr){
    if(arr[i]%2!=0){
        res.push(arr[i])
    }
}
return res;
}
let arr= console.log(sum([1,2,3,4,5,6,7,8,9]))
// Output: [1, 3, 5, 7, 9]

// iii.Anonymous:
var arr = [1,2,3,4,5,6,7,8,9]
var fun = function (arr){
    var res=[]
    for(var i in arr){
        if(arr[i]%2!=0){
            res.push(arr[i])
            }
        }
    }
console.log(res)
// Output: [1, 3, 5, 7, 9]

//  iv.IIFE:
(function (arr){
    var res = [];
    for(var i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
        res.push(arr[i])
    }
}
console.log(res)
})([11,12,13,14,15,16,17,18,19])
// Output: [11, 13, 15, 17, 19]

//   v.Arrow Function in MRF:
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let resultArray =(function (arrNumber){
    return (arrNumber.filter((item) =>{
        return item % 2 !== 0
    }))
})(arrNumber);
console.log("All odd numbers in an array: " + resultArray)
// Output: All odd numbers in an array: 1,3,5,7,9,11,13
console.log(resultArray)
// Output: [1, 3, 5, 7, 9, 11, 13]

// -----------------------------------------------------------------------

// b.Convert all the strings to title caps in a string array?
//   i.General Approach:
var str = "changing lower to upper case"
console.log(str.toUpperCase())
// Output: CHANGING LOWER TO UPPER CASE

//  ii.Normal Function:
function fun(){                 //---function fun(arr){
    var arr = 'lets, do it'
    var res = arr.toUpperCase()
    console.log(res)
}
fun(arr)                           //---fun(arr)
// Output: LETS, DO IT
// ?with return key word
// ?using for loop
// ?using for loop with return

// iii.Anonymous:
var arr = 'lets, do it'
var func = function (){
    var res = arr.toUpperCase()
    console.log(res)
}
func() 
// Output: LETS, DO IT

//  iv.IIFE:
(function (arr){                //---function func(arr){
    var res = arr.toUpperCase()
    console.log(res)
})
('hey, come on')
// Output: HEY, COME ON
// IIFE:-> array of elements
(function (arr){
    for(var i=0; i<arr.length; i++){
    var res = arr[i].toUpperCase()
    console.log(res)
    }
})
(['hey', 'come on'])
// Output:
// arr[0] HEY
// arr[1] COME ON

//   v.MRF:
var nama = ["hi", "hellow"] //---["hi, hellow"]
const uppercased = nama.map(function (name) {
return name.toUpperCase();
});
console.log(uppercased)
// Output: ['HI', 'HELLOW'] //---['HI, HELLOW']

//  vi.MRF with Arrow
const names = ['Ali', 'Atta', 'Alex', 'John'];  //---['Ali, Atta, Alex, John']
const u_c = names.map(name => name.toUpperCase());
console.log(u_c);
// Output: ['ALI', 'ATTA', 'ALEX', 'JOHN']      //---['ALI, ATTA, ALEX, JOHN']

// vii.Anonymous + IIFE + MRF + Arrow:->karthi
let stringArray = ["karthik", "is", "a", "Full","stack","web", "developer"]
let resultstring = (function (stringArray) {
    return (stringArray.map((item) => {
        return item.toUpperCase()
    }))
})(stringArray);
console.log("All upper case string in an array: " + resultstring)

// -----------------------------------------------------------------------

// c.Sum of all numbers in an array?
//   i.General Approach:
var a = [1,2,3,4,5,6,7,8,9];       //---[1, 2, 3, 4, 5, 6, 7, 8, 9]
var b = +[0]
var c = []                         //---var c = 0;
for(let i=0; i<=a.length; i++){    //---for(let i=0; i<a.length; i += 1){
    var resu = (+b) + (+c);        
    c = +a[i]                      //---c += a[i];
    b = resu
}                                  //---}
    console.log(resu)              //---console.log(c);
// Output: 45

//  ii.Normal Function:
const ar = [1, 2, 6, 9, 0, -12];
function funn(ar) {
  let num = 0;
  for (let i = 0; i < ar.length; i += 1) {
    num += ar[i];
  } 
  return num;
}
console.log(funn(ar));
// Output:  6

// iii.Anonymous:
const ary = [1, 2, 6, 9, 0, -12];
var prob = function (ary) {
  let num = 0;
  for (let i = 0; i < ary.length; i += 1) {
    num += ary[i];
  } 
  return num;
}
console.log(prob(ary));
// Output: 6

//  iv.IIFE:
(function funn(aray) {
  let num = 0;
  for (let i = 0; i < aray.length; i += 1) {
    num += aray[i];
  } 
    console.log(num)
})
([1, 2, 6, 9, 0, -12])
// Output: 6

//   v.MRF:
const given = [1, 2, 3, 4];
const sum_ = given.reduce(function (zero, given) {
  return zero + given;
 }, 0);
console.log(sum_);
// Output: 10

//  vi.MRF with Arrow
let calc = () => {
  const arr = [5, 4, 3, 2, 1];
  const result = arr.reduce((prev, cur) => prev + cur);
  return result;
}
calc();
// Output: 15

// Alternate:
// ex: c.vi. this ex returns undefine but the orginal sum of this sum doesn't:
const arr = [5, 4, 3, 2, 1];
const result = arr.reduce((prev, cur) => prev + cur);
console.log(result);
// Output: 15

let resultSumArray = (function (arrayNumber) {

    return (arrNumber.reduce((currentTotal, item) => {

        return currentTotal + item

    }, 0))
})(arrNumber);

console.log("Sum of numbers in an array: " + resultSumArray)

// -----------------------------------------------------------------------

// d.Return all the prime numbers in an array?
//   i.General Approach:
var n = [7,17,27,37,47,57,67,77,87,97]
var resu = []
for(let i=0; i<n.length; i++){
    if(n[i]==2 || n[i]==3 || n[i]==5 || n[i]==7){
        resu.push(n[i])
    }
    else if(n[i]!=1 && n[i]%2!=0 && n[i]%3!=0 && n[i]%5!=0 && n[i]%7!=0){
        resu.push(n[i])
    }
}
console.log(resu);
// Output: [7, 17, 37, 47, 67, 97]

//  ii.Normal Function:
// Output:  

// iii.Anonymous:
// Output: 

//  iv.IIFE:
// Output: 

//   v.MRF:
// Output: 

//  vi.MRF with Arrow
// Output: 

// -----------------------------------------------------------------------

// e.Retrurn all the palindromes in an array?
//   i.General Approach:
var obj_o = ['apple', 'deed', 'guvi', 'rotator', 'racecar'];
var tluser = [];
var obj_t = obj_o.toString().split("").reverse().join("").split(",");
for (let i = 0; i < obj_o.length; i++) {
  for (let j = 0; j < obj_t.length; j++) {
    if (obj_o[i] == obj_t[j]) {
      tluser.push(obj_o[i])
    }
  }
}
console.log(tluser);
// Output: [ 'deed', 'rotator', 'racecar']

//  ii.Normal Function:
                                                                     // let words = ['apple', 'deed', 'guvi', 'rotator', 'racecar'];
function P_drome(words){
    let arr = []
    let str = words.slice(0)
    let pal = str.toString().split("").reverse().join("").split(",");
    for (let i = 0; i < words.length; i++) {
        for (let k = 0; k < pal.length; k++) {
            if (words[i] == pal[k]) {
                arr.push(words[i])
            }
        }
    }
    return arr
}
console.log(P_drome(['apple', 'deed', 'guvi', 'rotator', 'racecar']))// console.log(P_drome(words))
// Output: [ 'deed', 'rotator', 'racecar']

// iii.Anonymous:
// Output: 
//  iv.IIFE:
// Output: 
//   v.MRF:
// Output: 

//  vi.MRF with Arrow
let arr = ['apple', 'deed', 'guvi', 'rotator', 'racecar'];
let palindromes = arr.filter(w => {
  let len = w.length;
  console.log(w[len-1])
  for (let i = 0; i < len; i++) {
    if (w[i] == w[len-1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(palindromes)
// Output: [ 'deed', 'rotator', 'racecar']

// -----------------------------------------------------------------------

// f.Retun median of two sorted arrays of the same size?
//   i.General Approach:
// Output:

//  ii.Normal Function:
let arr1 = [1, 2, 3, 4, 5, 6 ]
let arr2 = [8,9,10,12,16,17]
let resultMedian = function (arr1, arr2) {
  let store1 = []
  let store2 = []
  let lenArr1 = arr1.length
  let lenArr2 = arr2.length
  if(lenArr1 % 2 === 0){    
    store1 = (arr1[(lenArr1 / 2) - 1] + arr1[lenArr1 / 2]) / 2
  } 
  else{
    store1 = arr1[(lenArr1 - 1) / 2]
  }
  if(lenArr2 % 2 === 0){
    store2 = (arr2[(lenArr2 / 2) - 1] + arr2[lenArr2 / 2]) / 2
  }
  else{
    store2 = arr2[(lenArr2 - 1) / 2]
  }
  console.log('median of arr1 = ' + store1)
  console.log('median of arr2 = ' + store2)
  console.log('combine median of arr1 and arr2 = ' + (store1 + store2))
  return
}(arr1, arr2)
// Output:
// median of arr1 = 3.5
// median of arr2 = 11
// combine median of arr1 and arr2 = 14.5

// iii.Anonymous:
// Output: 
//  iv.IIFE:
// Output: 
//   v.MRF:
// Output: 
//  vi.MRF with Arrow              xxx
// Output: 

// -----------------------------------------------------------------------

// g.Remove duplicates from an array?
//   i.General Approach:
// Output:
//  ii.Normal Function:
// Output:  
// iii.Anonymous:
// Output: 
//  iv.IIFE:
// Output: 
//   v.MRF:
// Output: 
//  vi.MRF with Arrow              xxx
// Output: 

// -----------------------------------------------------------------------

// h. Rotate an array by k times?
//   i.General Approach:
let Ar = [1, 2, 3, 4, 5];
let N = Ar.length;
let K = 2;
let des = [];
for (let i = 0; i < N; i++){
  if(i < K){
    des.push(Ar[N + i - K])
  }
  else{
    des.push(Ar[i - K])
  }
}
console.log(des)
// Output: [3, 4, 5, 1, 2]

//  ii.Normal Function:
// ex 1:
var rotate = function(a,k){
    for(var i=0; i<k; i++){
        a.unshift(a.pop())
    }
    return a;
}
console.log(rotate([1,2,3,4,5],2))
// Output: [3, 4, 5, 1, 2]

// iii.Anonymous:
// Output: 
//  iv.IIFE:
// Output: 
//   v.MRF:
// Output: 
//  vi.MRF with Arrow              xxx
// Output: 

// h.i.-> adding function in the same sum
// function RightRotate(a, n, k){
//   var des = []
//   for (let i = 0; i < n; i++){
//     if(i < k){
//       des.push(a[n + i - k])
//     }
//     else{
//       des.push(a[i - k])
//     }
//   }
//   console.log(des)
// }
// let Array = [1, 2, 3, 4, 5];
// let N = Array.length;
// let K = 2;
// RightRotate(Array, N, K);
// Output: [3, 4, 5, 1, 2]

// -----------------------------------------------------------------------




let array = [6, 9, 15, 6, 13, 9, 11, 15];
      let index = 0, newArr = [];
      const length = array.length;
      function findDuplicates(arr) {
         for (let i = 0; i < length - 1; i++) {
            for (let j = i + 1; j < length; j++) {
            if (arr[i] === arr[j]) {
                  newArr[index] = arr[i];
                  index++;
               }
            }
         }
         return newArr;
      }
console.log(findDuplicates(array));
// Output: [ 6, 9, 15 ]