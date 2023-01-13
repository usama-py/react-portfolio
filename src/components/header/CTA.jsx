import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download='Mohd_Usama_Resume' className='btn'>Download Resume</a>
        <a herf="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA