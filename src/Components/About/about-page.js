import React from 'react'
// import './about.css'
import AboutCard from './about-card'
import Navbar from '../navbar'
import Back from '../Common/back'
import aboutimg from '../../Assets/bg.webp'
import StudentsReviews3 from '../Testimonials/testimonial2'
import Footer from '../Footer/footer'

const About = () => {
  return (
    <>
    <Navbar/>
    <Back title='About Us'/> 
    <img src={aboutimg}/>
    <AboutCard />
    <StudentsReviews3/>
    <Footer/>
    </>

  )
}

export default About
