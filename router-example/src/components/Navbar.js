import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {

    const NavLinkCSS=({isActive})=>{
        return{
            fontWeight:isActive ? 'bold' :'normal',
            fontSize:isActive ? '25px' :'20px'
        }
    }
  return (
    <nav className='main-nav'>
        <NavLink to='/' style={NavLinkCSS}>Home</NavLink>
        <NavLink to='/products' style={NavLinkCSS}>Product</NavLink>
        <NavLink to='/about' style={NavLinkCSS}>About</NavLink>
        <NavLink to='/contact' style={NavLinkCSS}> Contact</NavLink>
        <NavLink to='/users' style={NavLinkCSS}> User</NavLink>
        <NavLink to='/users/admin' style={NavLinkCSS}> Admin</NavLink>
    </nav>
  
  )
}

export default Navbar