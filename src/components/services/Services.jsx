import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Provide clean and modern UI/UX designs for web and mobile applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient in UI/UX design tools such as Adobe XD, Figma, Sketch, and InVision.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conduct user research and testing to ensure usability and user satisfaction.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop brand identity and visual style guides for consistent branding.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* {end of ui/ux} */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom website design and development using HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive website design and development with mobile-first approach.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website redesign and updates to improve user experience and functionality.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration with third-party APIs and services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web application development with React.</p>
            </li>
          </ul>
        </article>
        {/* {end of development} */}
        <article className='service'>
          <div className='service__head'>
            <h3>Python Scripting</h3>
          </div>
          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop custom Python scripts to automate repetitive tasks and increase efficiency.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build web applications using Flask or Django frameworks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create data pipelines and perform data analysis using Python libraries such as Pandas and Numpy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Provide testing and debugging services for existing Python scripts and applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Can develop custom scripts to integrate with APIs and web services using popular Python libraries like Requests and Beautiful Soup..</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services