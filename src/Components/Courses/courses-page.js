import React from 'react'
import Example from './top-courses'
import Navbar from '../navbar'
import Back from '../Common/back'
import CoursesCards from './courses-cards'

const CoursesPage = () => {
  return (
    <>
<Navbar/>
    <Back title={'course'}/>
    <Example/>
    <CoursesCards/>
    </>
  )
}

export default CoursesPage
