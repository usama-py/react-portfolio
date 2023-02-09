import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum minima fuga perferendis, magnam amet ad pariatur aspernatur eius facilis dolorem, esse voluptatibus velit ipsum explicabo consequatur illo minus voluptates unde.
          </p>
          <a href="#contact" className='btn btn-primary'>let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About