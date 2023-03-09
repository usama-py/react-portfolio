import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio',
    github:'https://github.com/usama-py/react-portfolio',
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'To-Do-List API',
    github:'https://github.com/usama-py/to-do-listapi/tree/master',
    demo: 'https://dribbble.com/shots/20838335-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Latest News',
    github:'https://github.com/usama-py/latest-news',
    demo: 'https://dribbble.com/shots/20790524-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Password Manager',
    github:'https://github.com/usama-py/password-manager',
    demo: 'https://dribbble.com/shots/20790460-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Demo Banking App',
    github:'https://github.com/usama-py/sparkpro',
    demo: 'https://dribbble.com/shots/20790416-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo})  =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title} </h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
      <small>P.S. Live Demos Do Not Work Except This Portfolio Link, The others are just as placeholders</small>
    </section>
  )
}

export default Portfolio
