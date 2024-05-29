import React from 'react'
// import './about.css'
import aboutimg from '../../Assets/about.webp'
import AboutWrapper from './about-wrapper'
import { homeAbout } from "../../dummy-data"

const AboutCard = () => {
  return (
   <>
   <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={aboutimg} alt='imggg' />
          </div>
          <div className='right row'>
            <h3>LEARN ANYTHING</h3>
            <h1>Benefits About Online Learning Expertise</h1>
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <AboutWrapper />
   </>
  )
}

export default AboutCard
