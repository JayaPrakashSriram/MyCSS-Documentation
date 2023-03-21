
import "./index.css";

export default function App() {
  const lines = ['men', 'personaties']
  const men_to = 
  [
  { men:'APJ.A.Kalam🚀🐱‍🏍', 
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-NAO6dFUA5Mo6PTzdViauwqqWUIYgZxaLQ&usqp=CAU" },
  { men:'Vallalar🤍🔥', 
    photo: 'https://images.squarespace-cdn.com/content/v1/51d1ea2fe4b064a83dc0123c/1409430637926-HT2ZYXAAWD7VKISTR4JB/1920044_10201513855434497_1950985464_n-1.jpg?format=500w'  },
  { men:'Archilles👑⚔', 
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEAyvU3EBlvWZXK0Z5GoKkJxL0-j3KSJTXA&usqp=CAU' },
  { men:'kamarajar📕📚', 
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7op1OQ4An0-busy-ZfM70PnUhgY-H3KH8A&usqp=CAU'  }
  ]
  
  
  return (
    <div className="App">
      <div className="App">
      {/* <New />
      <New />
      <New /> */}

      {/* <Nam nm='APJ.A.Kalam'/>
      <Nam nm='Vallalar'/>
      <Nam nm='Archilles'/> */}

      <Ben />

      <Per persons='APJ.A.Kalam🚀🐱‍🏍' pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-NAO6dFUA5Mo6PTzdViauwqqWUIYgZxaLQ&usqp=CAU"/>
      <Per persons='Vallalar🤍🔥'    pic='https://images.squarespace-cdn.com/content/v1/51d1ea2fe4b064a83dc0123c/1409430637926-HT2ZYXAAWD7VKISTR4JB/1920044_10201513855434497_1950985464_n-1.jpg?format=500w' />
      <Per persons='Archilles👑⚔'    pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEAyvU3EBlvWZXK0Z5GoKkJxL0-j3KSJTXA&usqp=CAU'/>
      <Per persons='kamarajar📕📚'   pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7op1OQ4An0-busy-ZfM70PnUhgY-H3KH8A&usqp=CAU'/>

      <Lol lin = 'person'/>
      <Lol lin = 'being' />
      <Lol lin = 'to be'/>

      {lines.map(nm => <Lol lin='are you'/>)}

      {lines.map(nm => <Lol lin={nm} />)} 

      {men_to.map(nk => <Final pers={nk}/>)}
      {/* [2,3,4].map(num => num * 2)  */}
    </div>
    </div>
  );
}

// function New(){
//   const sent = 'Ready!!!'
//   return(
//     <div>
//       <h1>Are you <span className='ready'>{sent}</span></h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   )
// }

// function Nam(props){
//   // console.log(props)
//   const nm = props.nm
//   return(
//     <div>
//       <h1>My favorite persons are, <span className='ready'>{nm}</span></h1>
//     </div>
//   )
// }

// function Per(name){
//  return(
//    <div>
//      <img className ='pict' src={name.pic} alt={name.person}/>
//      <li>Honorable <span className='ready'>{name.persons}</span></li>
//    </div>
//  )
//}

function Per({pic , persons}){
 return(
    <div>
      <img className ='pict' src={pic} alt={persons}/>
      <li>Honorable <span className='ready'>{persons}</span></li>
      </div>
  )
}

function Lol({lin}){
  return(
    <div>
    <h1>Honorable {lin}</h1>
    </div>
  )
}

function Final({pers}){
  return(
<div>
  <img className ='pict' src={pers.photo} alt={pers.men}/>
  <li>Honorable <span className='ready'>{pers.men}</span></li>
  </div>
  )
}

function Ben(){
  return(
<h1>My favourite persons are,</h1>
  )
}

