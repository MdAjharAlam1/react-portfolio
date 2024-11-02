import React, { useRef, useState } from 'react'
import './Navbar.css'
// import logo from '../assets/logo.svg'
import underline_effect from '..//assets/nav_underline.svg'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'
import Logo from './Logo'
import { Link } from 'react-router-dom'



function Navbar() {
  const[menu ,setMenu] = useState('')
  const menuRef = useRef()
  
  function openMenu(){
    menuRef.current.style.right='0'
  }
  function closeMenu(){
    menuRef.current.style.right='-350px'
  }

  return (
    <header className='navbar'>
        <Logo/>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className="navbar-menu">
            <img src={menu_close} alt="" className='nav-mob-close' onClick={closeMenu} />
            <li><p onClick={()=> setMenu('home')}><Link className='anchor-link' to='/'>Home</Link></p>{menu ==="home" ? <img src={underline_effect} alt=''/>:<></>}</li>
            <li><p onClick={()=> setMenu('about')}><Link className='anchor-link' to='/about'>About Me</Link></p>{menu ==="about" ? <img src={underline_effect} alt=''/>:<></>}</li>
            <li><p onClick={()=> setMenu('skills')}><Link className='anchor-link' to='/skills'>Skills</Link></p>{menu ==="skills" ? <img src={underline_effect} alt=''/>:<></>}</li>
            <li><p onClick={()=> setMenu('portfolio')}><Link className='anchor-link' to='/mywork'>Portfolio</Link></p>{menu ==="portfolio" ? <img src={underline_effect} alt=''/>:<></>}</li>
            <li><p onClick={()=> setMenu('contact')}><Link className='anchor-link' to='/contact'>Contact</Link></p>{menu ==="contact" ? <img src={underline_effect} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><Link className='anchor-link' to='/contact'>Connect With Me</Link></div>

    </header>
  )
}

export default Navbar
