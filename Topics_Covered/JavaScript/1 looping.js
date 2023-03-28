let c = ["r","b","y","p","g"];

// Output 1 : 
// r
// b
// y
// p
// g
for(var i=0; i<=c.length; i++){
    console.log(c[i]);
}
for(var i of c){
    console.log(i)
}
for(var i in c){
    console.log(c[i])
}
c.forEach(myFunction)
function myFunction(color) {
  console.log(color);
}
var result = c.forEach((ele)=>console.log(ele))
// Output 1a : 
// colors:r
// colors:b
// colors:y
// colors:p
// colors:g
for(let key of c){
    console.log("colors:"+key)
}
//Output
// -------------------------------------------------
// Output 2 : 
// ['r', 'b', 'y', 'p', 'g']6 times
for(var i=0; i<=c.length; i++){
    console.log(c);
}
// Output 2a : 
// ['r', 'b', 'y', 'p', 'g']5 times
for(var i=0; i<c.length; i++){
    console.log(c);
}
for(var i=0; i<=c.length-1; i++){
    console.log(c);
}
for(var i of c){
    console.log(c)
}
for(var i in c){
    console.log(c)
}
// -------------------------------------------------
// Output 3 :
// 0
// 1
// 2
// 3
// 4
// 5
for(var i=0; i<=c.length; i++){
    console.log(i);
}
// Output 3a :
// 0
// 1
// 2
// 3
// 4
for(var i=0; i<c.length; i++){
    console.log(i);
}
for(var i=0; i<=c.length-1; i++){
    console.log(i);
}
for(var i in c){
    console.log(i)
}
c.forEach(myFunction)
function myFunction(color, i) {
  console.log(i);
}
// -------------------------------------------------
// Output 4 : 
// undefine
for(var i=0; i<=c; i++){
    console.log(c[i]);
}
for(var i=0; i<=c; i++){
    console.log(c);
}
for(var i=0; i<=c; i++){
    console.log(i);
}
// Output 4a : 
// undefine 5times
for(var i of c){
    console.log(c[i])
}
// Output 4b:
// r
// undefine 4times
c.forEach(myFunction)
function myFunction(color, i) {
  console.log(color[i]);
}
// -------------------------------------------------
// Output 5 :
// 1:r
// 2:b
// 3:y
// 4:p
// 5:g
c.forEach(myFunction)
function myFunction(color, i) {
  console.log(`${i+1}:${color}`);
}
// -----------------------------------------------
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// -----------------------------------------------
// Sum 1 :
// Output :
// 650
// 440
// 120
// 40
let numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)
function myFunction(item, index, arr) {
  console.log(item * 10);
}
// -----------------------------------------------
// Sum 2 :
// Output :
// 125
let sum = 0;
numbers.forEach(my_Fun);
function my_Fun(item) {
  sum += item
}
console.log(sum);
// Sum 2a :
numbers.forEach((ele)=>sum += ele)
console.log(sum)
// -----------------------------------------------
// Sum 1 & 2 Combine :
// Output :
// 1250
let res = [];
let sum_sum = 0;
numbers.forEach(myFunction)
function myFunction(item) {
  res = item * 10;
  sum_sum += res
}
console.log(sum_sum);
// -----------------------------------------------
// Sum 3 :
// Output :
// 1 24
// 2 26
// 3 28
// 4 30
var arr = [12,13,14,15];
arr.forEach((ele,i)=>
console.log(i+1,ele*2))
// -----------------------------------------------
// Sum 4 : printing the 3rd table
let table=3, limit=10;
for(i=1; i<=limit; i++){
    document.write("<h2>"+i+"*"+table+"="+(i*table)+"</h2>");
}


























