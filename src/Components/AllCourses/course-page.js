import React from 'react'
import CoursesCard from './courses-card'
import Navbar from '../navbar'
import OnlineCourses from './online-courses'
import Back from '../Common/back'

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
