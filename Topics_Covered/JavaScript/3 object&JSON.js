// comparition of 2 objects
obj1 ={
    name:"person1",age:5
  };
  obj2 ={
    name:"person1",age:5
  };
//   if(JSON.stringify(obj1)===JSON.stringify(obj2))//---> down
//   {console.log("both are having same properties")}//---> down
//   else{console.log("both are having different properties")}//---> no need for if condition because stringify will return boolean value

  var comnparition= JSON.stringify(obj1)===JSON.stringify(obj2)
  console.log(comnparition);