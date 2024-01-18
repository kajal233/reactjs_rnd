import React, { useState } from 'react'

function MultipleChecks() {
    const [fruitsArray, setFruitsArray,] = useState([]);

    const handleChange = (e) => {
        
        const value=e.target.value;
        const checked=e.target.checked;
        console.log(value,checked);
        if (checked) {
            setFruitsArray(
                [
                    ...fruitsArray,value
                ]
            ) 
        } else {
           setFruitsArray(fruitsArray.filter((e)=>(e!== value))) ;
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(fruitsArray);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor=''>Select Fruits: &nbsp;</label>


                <label htmlFor=''>&nbsp; Apple &nbsp;</label>
                <input type='checkbox' name='fruits' value='Apple' onChange={handleChange} />


                <label htmlFor=''>&nbsp; Mango &nbsp;</label>
                <input type='checkbox' name='fruits' value='Mango' onChange={handleChange} />


                <label htmlFor=''>&nbsp; Banana &nbsp;</label>
                <input type='checkbox' name='fruits' value='Banana' onChange={handleChange} />


                <label htmlFor=''>&nbsp; Orange &nbsp;</label>
                <input type='checkbox' name='fruits' value='Orange' onChange={handleChange} />


                <label htmlFor=''>&nbsp; Kiwi &nbsp;</label>
                <input type='checkbox' name='fruits' value='Kiwi' onChange={handleChange} />

                <br/><br/>
                <input type='submit' value='Submit'/>
            </form>
        </>
    )
}

export default MultipleChecks