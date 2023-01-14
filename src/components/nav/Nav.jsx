import React from 'react'
import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{BiUserCircle} from 'react-icons/bi'
import{AiOutlineBook}  from 'react-icons/ai'
import{FcSelfServiceKiosk} from 'react-icons/fc'
import{BsFillTelephoneFill} from 'react-icons/bs'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><BiUserCircle/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><AiOutlineBook/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><FcSelfServiceKiosk/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BsFillTelephoneFill/></a>
    </nav>
  )
}

export default Nav