import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  <section className='cta'>
    <p>Have a project in mind? <br className='sm:block hidden'/>
    Lets build something together!</p>
    <Link to="/contact" className='btn'>
        Contact
    </Link>
  </section>
}

export default CTA
