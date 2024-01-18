import React, { useEffect, useRef, useState } from 'react'

function HookuseRef2() {
    const[inputValue,setInputValue]=useState('');
    // const[count,setCount]=useState(0);

    const count=useRef(0);
    // useEffect(()=>{
    //     setCount(count+1);
    // },[]);
    useEffect(()=>{
     count.current=count.current+1;
    });
  return (
    <div>
        <label htmlFor=''>Enter Name:</label>
        <input 
        type='text' 
        placeholder='Enter Your Name'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        />
        <h1>Render Count:{count.current}</h1>
        <h2>Data : {inputValue}</h2>

    </div>
  )
}

export default HookuseRef2