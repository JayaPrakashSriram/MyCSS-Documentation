<script>
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

document.getElementById("demo").innerHTML = citrus;
</script>

            //    i.Anonymous 
            //   ii.IIFE
            //  iii.Arrow

//1q.a.Print odd numbers in an array
//   i.Anonymous:
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
// output: [1, 3, 5, 7, 9]

// ii.IIFE
(function (arr){
    var res = [];
    for(var i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
        res.push(arr[i])
    }
}
console.log(res)
})([11,12,13,14,15,16,17,18,19])
// output: [11, 13, 15, 17, 19]

//3q.a.
// iii.Arrow
var sum = (odd)=>{
    var op = [];
    for(var i in odd){
    if(odd[i]%2!=0){
       op.push(odd[i])
}
}
return op;
}
console.log(sum([21,22,23,24,25,26,27,28,29]))
// output: [21, 23, 25, 27, 29]
// -----------------------------------------------------------------------
//1q.b.Convert all the strings to title caps in a string array
//   i.


