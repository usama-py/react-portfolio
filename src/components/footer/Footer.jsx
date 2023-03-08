import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>MOHD USAMA</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohd-usama359518238/"><AiFillLinkedin/></a>
        <a href="https://www.leetcode.com/usama_984"><SiLeetcode/></a>
        <a href="https://www.instagram.com/usama_984"><BsInstagram/></a>
        <a href="https://www.github.com/usama-py"><AiFillGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Mohd Usama. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer