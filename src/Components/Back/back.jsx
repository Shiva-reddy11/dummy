import React from 'react'
import { useLocation } from 'react-router-dom'
import rightarrow from '../../Assets/right-arrow.png'

const Back = ({title}) => {
    const location = useLocation()
  return (
    <>
    <section className='back'>
       <h2>Home > {location.pathname.split('/')[1]}</h2>
       <h1>{title}</h1>
    </section>
    <div className="marginn"></div>
    </>
  )
}

export default Back