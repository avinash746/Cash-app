import React from 'react'
import Logo from "../../assets/logo.png"
import Eye from "../../assets/eye button.svg"
import Menu from "../../assets/menu.png"
import "./style.css"
import { useState } from 'react'

const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false);

  const handleMenuIconClick=()=>{
    setIsMobile(isMobile=>!isMobile);
  }

  return (
    <div className='nav'>
        <img src={Logo} alt='logo icon'/>
        <div className='wrapper'>
        <div className={`nav-part2 ${isMobile?'nav-part2-mobile':''} `}>
            <h4 className='nav-items'>SIGN IN</h4>
            <h4 className='nav-items'>LEGAL</h4>
            <h4 className='nav-items'>LICENSE</h4>
            <h4 className='nav-items'>SECURITY</h4>
            <h4 className='nav-items'>CAREERS</h4>
            <h4 className='nav-items'>PRESS</h4>
            <h4 className='nav-items'>SUPPORT</h4>
            <h4 className='nav-items'>STATUS</h4>
            <h4 className='nav-items'>CODE BLOGS</h4>
        </div>
        </div>
        <img className='eye' src={Eye} alt='eye icon'/>
        <img className='menu' onClick={handleMenuIconClick} src={Menu} alt='Menu icon'/>
    </div>
  )
}

export default NavBar