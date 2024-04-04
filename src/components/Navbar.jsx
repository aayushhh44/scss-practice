import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const navRef = useRef();

    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
  
    <header>
        <h3>Aayush</h3>
      <nav ref={navRef}>
        <NavLink className='nav-link' to='/Home'>
                Home
            </NavLink>
            <NavLink className='nav-link' to='/my-works'>
                My works
            </NavLink>
            <NavLink className='nav-link' to='/Blogs'>
                Blogs
            </NavLink>
            <NavLink className='nav-link' to='/contact'>
                Contact
            </NavLink>

            <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                <FaTimes />
            </button>
      </nav>

        <button className='nav-btn' onClick={showNavBar}>
            <FaBars />
        </button>
      </header>
  )
}

export default Navbar
