import React, { useState } from 'react'

function OtherInputs() {
    const[textArea,setTextArea]=useState("");
    const[selectMenu,setSelectMenu]=useState("India");
    const[checked,setChecked]=useState(false);
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log('comments:',e.target[0].value);
      console.log('country:',e.target[1].value);
      console.log('checkbox:',e.target[2].checked);
    }

  return (
   <form onSubmit={handleSubmit}>
    <label style={{verticalAlign:"top"}} htmlFor=''>Comments:</label>
    <textarea value={textArea} onChange={(e)=>{setTextArea(e.target.value)}} cols='30' rows='10'></textarea>
    <br/><br/>
    <label htmlFor=''>Select Country:&nbsp;</label>
    <select value={selectMenu} onChange={(e)=>setSelectMenu(e.target.value)}>
      <option value='India'>India</option>
      <option value='UK'>UK</option>
      <option value='USA'>USA</option>
      <option value='Africa'>Africa</option>
    </select>
    <br/><br/>
    <label htmlFor=''>Yes,I agree the terms &nbsp;</label>
    <input type='checkbox' checked={checked} onChange={(e)=>{setChecked(e.target.checked)}}/>
    <br/><br/>
    <input type='submit' value='Submit'/>
   </form>
  )
}

export default OtherInputs