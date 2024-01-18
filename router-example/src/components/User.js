import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  return (
    <>
    <div>
        <h1>This is a user page</h1>
        <h1><Link to='/users/1'>User1</Link>&nbsp;</h1>
        <h1><Link to='/users/2'>User2</Link>&nbsp;</h1>
        <h1><Link to='/users/3'>User3</Link>&nbsp;</h1>
    </div>
    </>
  )
}

export default User