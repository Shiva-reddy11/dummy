import React from 'react'
// import './about.css'
import AboutCard from './about-card'
import Navbar from '../navbar'
import Back from '../Common/back'

const About = () => {
  return (
    <>
    <Navbar/>
    <Back title='About Us'/>
    <AboutCard />
    </>

  )
}

export default About
