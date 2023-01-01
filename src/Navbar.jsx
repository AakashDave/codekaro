import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className='navbar'>
        <div className="headNav">
            <h1 className='logo'>&#10100;;&#10101;</h1>
            <h1 className='headLogo'>CodeKaro</h1>
            <p className='subHead'>FREE ONLINE EDITOR</p>
        </div>
        <div className="openBtn">
          <NavLink to={"/codepad"}>
            <button className="custom-btn btn-15"><span>Open CodePad</span></button>
          </NavLink>
          
        </div>
        
        <ul className='navList'>
            <li> <a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a>  </li>
            <li> <a href="#news">NEWS</a> </li>
            <li> <a href="#contact">CONTACT</a> </li>
        </ul>
      </nav>
  )
}

export default Navbar

