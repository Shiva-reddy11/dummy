import React from 'react'
import './about.css'
import Back from '../Back/back'
import AboutCard from './about-card'
import Navbar from '../navbar'

const About = () => {
  return (
    <>
    <div id='nav-position'><Navbar/></div>
    
    <Back title='About Us'/>
    <AboutCard />
    </>

  )
}

export default About
