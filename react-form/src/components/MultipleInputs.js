import React, { useState } from 'react'

function MultipleInputs() {
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        const new_value = (name === 'email') ? value.toLowerCase() : value;
        console.log(name, value);
        setData((prev) => {
            return {
                ...prev, [name]: new_value
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor=''>Enter Name:</label>
            <input type='text' value={data.name} onChange={handleChange} name='name' placeholder='Enter Your Name' />

            <label htmlFor=''>Enter Email:</label>
            <input type='text' value={data.email} onChange={handleChange} name='email' placeholder='Enter Your Email' />

            <input type='submit' value='Submit' className='btn btn-success' />
        </form>

    )
}

export default MultipleInputs