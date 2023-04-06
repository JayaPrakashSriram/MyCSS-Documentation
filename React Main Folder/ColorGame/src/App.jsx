import { useState } from 'react'
import './App.css';

export default function App(){
  return(
    <div className='entireStru'>
    <AddColor/>
  </div>
  )}

  function AddColor(){
    const[color, setColor] = useState('orange')
    const styles ={
       background:color,
    };
    const [colorList, setColorList] = useState(['crimson', 'orange', 'black'])
    return(
       <div >
           <input className='inputBox' style={styles} type='text' onChange={(event)=> setColor(event.target.value)} value={color}/>{" "}
           <button className='button' onClick={()=>setColorList([...colorList, color])}>Add Color</button>
           {/* <div className='cBars'>{colorList.map((clr)=>( <ColorBox color={clr}/>))} </div> */}
           {colorList.map((clr)=>( <ColorBox color={clr}/>))}
       </div>
    );
 }
 
 function ColorBox(color){
   const styles ={
      width:'260px',
      height:'25px',
      margin:'8px 0px 0px 26px',
      background:color.color
   }
   console.log(color)
   return(
      <div style={styles}>{color.color}</div> 
   )
 }
