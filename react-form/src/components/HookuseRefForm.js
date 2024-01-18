import React, { useEffect, useRef } from 'react'

function HookuseRefForm() {
   const firstRef= useRef();
   const lastRef= useRef();
   useEffect(()=>{
    console.log(firstRef);
    console.log(lastRef);
    firstRef.current.focus();
    firstRef.current.style.color='red';
    firstRef.current.style.backgroundColor='Pink';
   });
   const handleSubmit=(e)=>{
e.preventDefault();
console.log('Full Name:', firstRef.current.value,lastRef.current.value);
   }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor=''>&nbsp; First Name &nbsp;</label>
                <input type='text' ref={firstRef}  placeholder='Enter Your First Name'  />


                <label htmlFor=''>&nbsp;Last Name  &nbsp;</label>
                <input type='text' ref={lastRef}  placeholder='Enter Your Last Name' />

                <input type='submit' value='Submit'/>
                
                <br/><br/>
    </form>
  )
}

export default HookuseRefForm