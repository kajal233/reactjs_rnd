import React, { useEffect, useRef } from 'react'

function HookuseRef() {
    const newRef=useRef();
    useEffect(()=>
    {
        console.log(newRef.current);
    })
    const HandleChange=()=>{
        newRef.current.style.color='Red';
        newRef.current.style.fontFamily='Cooper';
    }
  return (
    <div>
        <h1 ref={newRef}>Refs is used to access a DOM element directly</h1>
        <button onClick={HandleChange}>Click Me</button>
    </div>
  )
}

export default HookuseRef