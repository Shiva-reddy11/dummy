import React from 'react'
import Back from '../Common/back'
import Navbar from '../navbar'
import Footer from '../Footer/footer'
import img from '../../Assets/bg.webp'

const ContactPage = () => {
  return (
    <>
        <Navbar/>
        <Back title={'contact us'}/>
        <img src={img}/>
        <Footer/>
    </>
  )
}

export default ContactPage
