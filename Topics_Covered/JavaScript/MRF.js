//intro
//map and filter are alternative of for loop and if condition respectively, their usage is limited

//Map
// syntax: arrayname.map((function))
// ex: var res= arr.map(()=>{}) console.log(res);
//---> inside the map method it takes function as perameter and apply on each element in the array, function has default usage in map
//---> it returns an array
//---> in map arrow function is used in maximum
//---> the parameter should represent array elements
//---> parameter can be userdefine 
//---> logic goes on at the place of {}. {curly brases as no real time usage} 
//---> in map, return is a inbuild function. So there is no need for return key
//---> console can be called at any place where that output is required
//---> identify hoisting -> already tried in developer console
//---> using map we can't write a particular condition of particular element in an array, to overcome we use filter
// sum1a value returns
// var arr=[12,13,14,15]
// var res=arr.map((ele)=>ele*2)
// console.log(res);
// or sum1b value returns, function inside the console
// console.log(arr.map((array)=>array*2))
// or sum1c returns undefine, verticle output, console inside the function, without curly braces
// arr.map((foo)=>console.log(foo*2))
// or sum1d returns undefine, verticle output, with curly braces
// arr.map((e)=>{console.log(e*2)})
// or sum1e if we use curly brases here, we need to use return key word
// var res= arr.map((ele)=>{return ele*2})
// console.log(res);
// sum2
// var arr=['apple','oramge','mangoe']
// var res=arr.map((ele)=>ele+"s")
// console.log(res);
// sum3 rest countries -api in map
// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true')
// request.send()
// request.onload=function(){
//     var data=request.response
//     var result=JSON.parse(data)
    //var res= result.map((ele)=>ele.name.common)--->print only name
    //var res= result.map((ele)=>ele.population)//--->print only population
    // var res= result.map((ele)=>ele.name.common)//---down
    // var res1= result.map((ele)=>ele.population)//---down
    // console.log(res,res1)//--->printed both name and population in seperate arrays
    // console.log("res","res1")//--->printed as res res1
    // var endres= [...res, ...res1];//----down
    // console.log(endres);//--->printed both name and population in single array
    // var res= result.map((elements)=>`${elements.name.common}:${elements.region}:${elements.population}`)//---down
    // console.log(res);//--->printed 250 data of array as 'name:region:population'     
    // loops---> printed 250 data from array as 'name:region:population'. printed more clearly
    // for(var i=0; i<res.length; i++){console.log(res[i])}//forloop
    // for(let i in res){console.log(res[i])}
    // for(let i of res){console.log(i)}
// }

//filter
// syntax: arrayname.filter((function))
//---> filter is based on condition, same as if condition
//---> it takes function similar to map, ie; takes function as parameter amd apply on each and every element in an array
//---> if the condition is yes it will push to array
//---> if condition false it will be rejected
//---> return value in boolean
// sum1
// var arr=[12,13,14,15]
// var res=arr.filter((ele)=>ele%2===0)
// console.log(res);
// sum2 rest countries -api in filter
// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true')
// request.send()
// request.onload=function(){
//     var data=request.response
//     var result=JSON.parse(data)
//     var res= result.filter((elements)=>`${elements.name.common}:${elements.region}:${elements.population}`)//---down
//     // // above line is taken from filter to compare between them(map and filter)
//     // // entire api as been printed in object((key:value)pairs with alphabetical order) as output
//     var res= result.filter((ele)=>ele.population<300000)//---> condition find countries with <300000
//     var ult= res.map((ele)=>ele.name.common);console.log(ult);//---> to display the filter result countries
//     var result=res.map((ele)=>`${ele.population}:${ele.name.common}`)
//     console.log(result)
// }

//reduce
// syntax: arrayname.reduce((acc,cv)=>{})
// acc=> accumulate is the initial value, and the first value become cv
// if nothing is given in acc it takes 1st value as acc
// cv=> array element / currrent value
// reduce function will reduce the rray into single value
// usage in total,summation
// final output of reduce is a value
// sum1 without initial value
// var arr=[12,13,14,15]
// var res= arr.reduce((acc,cv)=>acc+cv)//----> sum of arrays
// console.log(res);
// sum2 with initial value
// var res= arr.reduce((acc,cv)=>acc+cv,100)//----> sum of arrays
// console.log(res);
// sum3 rest countries -api in map
// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true')
// request.send()
// request.onload=function(){
//     var data=request.response
//     var result=JSON.parse(data)
//         var res= result.reduce((acc,cv)=>acc+cv.population,0)
//         console.log(res)
//     }
// in sum1 the sum of array was added as a number and not as string here the initial value is not required because the values is inside the array
// but in sum3 the api needs the initial value because the value in the api are inside the object 
// if the cvv value is not given then the value will be added as 123456789 not as 45 <-sum of number from 1 to 9
