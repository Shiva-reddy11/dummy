import React from 'react'
import './about.css'
import { awrapper } from "../../dummy-data"
import CountUp from 'react-countup'


const AboutWrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>
                  <CountUp start={0} end={val.data}>
                  </CountUp>
                  </h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default AboutWrapper;
