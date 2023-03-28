import "./App.css";

export default function App() {
  const names = [
    {
        persons:'APJ.A.Kaalam🚀🐱‍🏍',
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-NAO6dFUA5Mo6PTzdViauwqqWUIYgZxaLQ&usqp=CAU"
    },
    {
        persons:'Vallalar🤍🔥',
        pic:'https://images.squarespace-cdn.com/content/v1/51d1ea2fe4b064a83dc0123c/1409430637926-HT2ZYXAAWD7VKISTR4JB/1920044_10201513855434497_1950985464_n-1.jpg?format=500w'
    }, 
    {
        persons:'Archilles👑⚔',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEAyvU3EBlvWZXK0Z5GoKkJxL0-j3KSJTXA&usqp=CAU'
    },
    {
        persons:'kamarajar📕📚',
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7op1OQ4An0-busy-ZfM70PnUhgY-H3KH8A&usqp=CAU'
    }
  ]
  return (
    <div className="App">
      {names.map(nm => <New persons={nm.persons} pic={nm.pic}/>)}
      </div>
  );
}

function New({persons, pic}) {
  return(
    <div>
      <img className ='pict' src = {pic} alt = {persons}/>
      <h1>Honorable, <span className='red'>{persons}</span></h1>
      </div>
  )
}