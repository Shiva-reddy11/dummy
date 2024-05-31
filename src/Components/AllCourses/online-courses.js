import React from 'react'
import { online } from '../../dummy-data'
import img9 from '../../Assets/courses/online/o1.png'
import back from '../../Assets/courses/online/o1.1.png'
import CountUp from 'react-countup'
import Title from '../Common/title'

const OnlineCourses = () => {
  return (
   <>
   <section className='online'>
    <div className='container2'>
    <Title subtitle='COURSES' title='Browse Our Online Courses' />

    <div className='content1 grid3'>
        {online.map((val) => (
            <div className='box'>
            <div className='img'>
            <img src={img9} alt=''/>
            <img src={back} alt='' className='show'/>
            </div>
            <h1>{val.courseName}</h1>
           <span>
             <CountUp start={0} end={val.count}>
            </CountUp>
            {val.course}
            </span>
            </div>
        ))}
    </div>
    </div>
    </section></>
  )
}

export default OnlineCourses
