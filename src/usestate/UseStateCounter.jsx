import {useState} from "react";
import React from 'react';
import "./useStateCounter.css"


const UseStateCounter = () => {

const [count,setCount]= useState(0);

const artır =()=>{

setCount(count+1)
}


const azalt =()=>{
if(count>0 ){
 setCount(count-1)}
  
}
  
const reset =()=>{
  setCount(0)
}

// const uyarı = React.createElement('h1', null, 'Lift History!');

  return (
    <div className="container">

       <div className="left">
        <h2>count:{count}</h2>
        </div>


<div className="desc">
    {count > 0 && count % 10 === 0 && (
        <p>10 ve katlarına ulaştınız!</p>
      )}
   </div>
   
        <div className="right">
   <button className="inc" onClick={artır}>+</button>
   <button className="res" onClick={reset}>reset</button>
   <button className="dec" onClick={azalt}>-</button>
        </div>
   
   
     
      
      
   

    </div>
  )
}

export default UseStateCounter;






