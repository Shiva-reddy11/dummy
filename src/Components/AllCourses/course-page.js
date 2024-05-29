import React from 'react'
import Back from '../Back/back'
import CoursesCard from './courses-card'
import Navbar from '../navbar'
import OnlineCourses from './online-courses'

const CoursePage = () => {
  return (
    <>
  <Navbar/>
    <Back title='Explore Courses'/>
    <CoursesCard/>
    <OnlineCourses/>
    </>
  )
}

export default CoursePage
