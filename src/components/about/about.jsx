import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {BiAward} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiAward className='about__icons'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icons'/>
              <h5>Clients</h5>
              <small></small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icons'/>
              <h5>Projects</h5>
              <small>5</small>
            </article>
          </div>
          <p>
          As a computer science student, I am a passionate problem-solver with a love for coding and all things tech. I'm always eager to learn and improve my skills, whether it's by mastering a new programming language or tackling a complex algorithm. As a team player, I enjoy collaborating with my peers and contributing to group projects. With my dedication to the field and impressive abilities, I am confident that I will make a significant impact in the tech industry.
           </p>
          <a href="#contact" className='btn btn-primary'>let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About