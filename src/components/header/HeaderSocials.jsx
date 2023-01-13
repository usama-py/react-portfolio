import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mohd-usama-359518238/' targets="_blank"><BsLinkedin/></a>
        <a href='https://github.com/usama-py/' targets="_blank"><BsGithub/></a>
        <a href='https://leetcode.com/usama_984/' targets="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials