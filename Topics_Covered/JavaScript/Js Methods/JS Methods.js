// Math Methods:----------------------------------------------------------
const numbe = [4, 9, 16, 25];
const newArr = numbe.map(Math.sqrt)
console.log(newArr)
// Output: [2, 3, 4, 5]

// Printing Even Numbers in an Array:-------------------------------------
// ex 1:
var arr = [1,2,3,4,5,6,7,8,9,10]
var res = arr.map(fun)
function fun(num){
    return num * 2
}
console.log(res)
// Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// ex 2:
var prime = [1,2,3,4,5,6,7,8,9]
var arr = []
    for (var i=0; i<prime.length; i++){
        if(prime[i]%2===0){
            arr.push(prime[i])
        }
    }
console.log(arr)
// Output: [2, 4, 6, 8]

// Prime Numbers:---------------------------------------------------------
// ex 1:
let number = [1,2,3,4,5,6,7,8,9];
for(let i in number){
  let isprime = true;
  if(number[i]===1){
    console.log("1 is neither prime nor composite number.")
  }
  else if(number[i]>1){
    for(let a=2; a<number[i]; a++){
      if(number[i]%a==0){
        isprime = false;
        break;
      }
    }
    if(isprime){
      console.log(`${number[i]} is prime number`);
    }
    else{
      console.log(`${number[i]} is a not a prime number`);
    }
  }
  else{
    console.log("the number is not a prime number.");
  }
}
// Output: 
// 1 is neither prime nor composite number.
// 2 is prime number
// 3 is prime number
// 4 is a not a prime number
// 5 is prime number
// 6 is a not a prime number
// 7 is prime number
// 8 is a not a prime number
// 9 is a not a prime number
// ex 2:-my approach
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
// ex 3:-program to print prime numbers between the two numbers
// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));
console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
// Output:
// ex 4:-printing prime numbers from 1 to 100
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
// Output:
// ex 5:-Unfinished
var n = [7,17,27,37,47,57,67,77,87,97];
function test_prime(n){
  for(let i in n){
    if (n[i]===1){
      return false;
    }
    else if(n[i] === 2){
      return true;
    }
    else{
      for(var x = 2; x < n[i]; x++){
        if(n[i] % x === 0){
          return false;
        }
      }
    return true;
    }
  }
}
console.log(test_prime(n));
// Output: output can be received for only one value or for the last value
// ex 6:-Unfinished
var num = function (a){
for(var i=2; i<=Math.sqrt(ele); i++){
    if(ele%i===0){
    return false;
    }
return true;
   }
return a;    
}
console.log(num([2,3,4,5,6,7,8,9,10]))
// Output:
// ex 7:- Printing the prime number from 2 to till the given number
function sumPrimes(num){
  let numArray = [];
  for (let i = 1; i <= num; i++) {
    numArray.push(i);
  }
  numArray.map((number) => {
    for (let i = 2; i < number; i++) {
        if(number % i === 0) {
            let index = numArray.indexOf(number);
            return numArray.splice(index, 1);       
        }
    }   
  });
 return numArray;
}
sumPrimes(10);
// Output: [1, 2, 3, 5, 7, 9]

// Array Sums:------------------------------------------------------------
// (find duplicate ele in an array, repeatation countof ele in array, 
//       printing the next least value in an array)
// ex:find duplicate value in an array
var arr = [1,4,8,2,4,1,6,2,9,7];
function find(array){
return array.filter((cv, ci)=>
array.indexOf(cv)!==ci)
}
console.log(find(arr))
// Output: [4, 1, 2]


// Problems using Loop:---------------------------------------------------
var exp = ['abcdefgh'];
var res = exp.length;
for(var i = 0; i < res; i++){
    console.log(i)
}
// Output: 0

// leat frequent array----------------------------------------------------
 function leastFrequent(arr, n)
    {
        arr.sort();
        let min_count = n+1, res = -1;
        let curr_count = 1;
        for (let i = 1; i < n; i++) {
            if (arr[i] == arr[i - 1])
                curr_count++;
            else {
                if (curr_count < min_count) {
                    min_count = curr_count;
                    res = arr[i - 1];
                }
                curr_count = 1;
            }
        }
        if (curr_count < min_count)
        {
            min_count = curr_count;
            res = arr[n - 1];
        }
        return res;
    }
        let arr = userInput[1].split(' ');
        let n = arr.length;
        console.log(leastFrequent(arr, n));
 
// Unknown sum:
var a =+userInput[0];
    var b = userInput[1].split(' ');
    var reult = [];
    for(var i=0; i<b.length; i++){
        if(!reult.includes(b[i])){
            reult.push(b[i]);
        }
    }
 console.log(reult.join(''))
 
//  median:
var median = function(a,b,n){
  var x = 0;
  var y = 0;
  var count;
  var m1 = -1;
  var m2 = -1;
  for(count = 0; count <= n; count++){
    if(x==y){
      m1=m2;
      m2=b[0];
      break;
    }
    else if(y==n){
      m1=m2;
      m2=a[0];
      break;
    }
    if(a[x]<=b[y]){
      m1=m2;
      m2=a[x];
      x++;
    }
    else{
      m1=m2;
      m2=b[y];
      y++;
    }
  }
  return ((m1+m2)/2)
};
console.log(median([1, 2, 3, 4, 5, 6],[8,9,10,12,16,17]),7)

// median 2
function getMedian(ar1, ar2, n){
  var i = 0; 
  var j = 0; 
  var count;
  var m1 = -1, m2 = -1;
  for (count = 0; count <= n; count++){
    if (i == n){
      m1 = m2;
      m2 = ar2[0];
      break;
    }
    else if (j == n){
      m1 = m2;
      m2 = ar1[0];
      break;
    }   
    if (ar1[i] <= ar2[j]){
      m1 = m2; 
      m2 = ar1[i];
      i++;
    }
    else{
      m1 = m2; 
      m2 = ar2[j];
      j++;
    }
  }
  return (m1 + m2)/2;
}
var ar1 = [1, 2, 3, 4, 5, 6 ]
var ar2 = [8,9,10,12,16,17]
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
  console.log("Median is "+ getMedian(ar1, ar2, n1));
else
  console.log("Doesn't work for arrays of unequal size");














/* 
this
 is
  also
   a
    comment  */ 