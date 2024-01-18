import React, { useState } from 'react'

function ControlledFunction() {
   const[name,setName]= useState("")
   const handleSubmission=(e)=>{
    e.preventDefault();
         console.log(e.target[0].value);
        }

  return (
    <form onSubmit={handleSubmission}>
        <label htmlFor=''>Enter Name:</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value.toUpperCase().substring(0,10))} />
        <br/><br/>
        <input type='submit' value="Submit"/>
    </form>
  )
}

export default ControlledFunction