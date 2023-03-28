                                                //  Object and JSON
// Object ->  Key  : "Value"
// JSON   -> "Key" : "Value"
// Object
// Sum 1 :
let shortProvison = 
[   
{
    Sugar           : "5kg",
    Deepam_oil      : "2L",
    Turmeric        : "250g",
    Urade_dal       : "5Kg",
    Pigeon_pea      : "5Kg",
    Black_chickpeas : "2Kg",
    White_chickpeas : "2Kg"
}
]
// Output :
// {
//     Sugar           : "5kg",
//     Deepam_oil      : "2L",
//     Turmeric        : "250g",
//     Urade_dal       : "5Kg",
//     Pigeon_pea      : "5Kg",
//     Black_chickpeas : "2Kg",
//     White_chickpeas : "2Kg"
// }
    for (let e=0; e<shortProvison.length; e++){
        console.log(shortProvison[e])
    }
    for (let expenses of shortProvison){
        console.log(expenses);
    } 
    for (let expenses in shortProvison){
        console.log(expenses) //It will call only the index value.
        console.log(shortProvison[expenses])
    }
    shortProvison.forEach(expenses)
        function expenses(result){
            console.log(result);
        }
    shortProvision.forEach((expenditure)=>
            console.log(expenditure))
// ----------------------------------------------
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ----------------------------------------------
// Sum 2 : 
// for in loop is the best approach for iteration like Output 2 for this sum 
// dif. bet. Sum 1 & 2 is, curly braces is out side the array braket {[]} in Sum 2 and vise versa 
var obj = {
    name: 'john',
    age: '20',
    gender: 'male',
    attendence: ['mon','tue','wed','thus','fri']
}
// Output 1:
// mon 
// tue 
// wed 
// thus 
// fri
for(var i=0; i<obj.attendence.length; i++){
    console.log(obj.attendence[i])
}
for (var i in obj.attendence){
    console.log(obj.attendence[i])
}
for(var i of obj.attendence){
    console.log(i)
}

// Output 2:
// name: 'john',
// age: '20',
// gender: 'male',
// attendence: ['mon','tue','wed','thus','fri']
 for(var i in obj){
    console.log(`${i}:${obj[i]}`)  //console.log(i,':',obj[i])
 }
// ----------------------------------------------
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ----------------------------------------------
// JSON
// Sum 1 :
var arr = [
    {
        "name":"John",
        "age" :"20"
    },
    {
        "name":"Doe",
        "age" :"21"
    },
    {
        "name":"Ram",
        "age" :"22"
    },
    {
        "name":"Rupan",
        "age" :"23"
    }
]
// Output 1 :
// John : 20
// Doe : 21
// Ram : 21
// Rupan : 23
for (var i=0; i<arr.length; i++){
    console.log(arr[i].name,':', arr[i].age);
}
for (var i in arr){
    console.log(arr[i].name,':', arr[i].age);
}

// Output 2 :
// {name: 'John', age: '20'}
// {name: 'Doe', age: '21'}
// {name: 'Ram', age: '22'}
// {name: 'Rupan', age: '23'}
arr.forEach(fun_name)
function fun_name(res){
    console.log(res)
}










