import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <div>
<h1>This is my Products Page</h1>
    </div>
    <nav>
        <Link to='shirts'>Shirts</Link>
        <Link to='jeans'>Jeans</Link>
    </nav>
    {/* outlet -child route display */}
    <Outlet/>  
    </>
  )
}

export default Products