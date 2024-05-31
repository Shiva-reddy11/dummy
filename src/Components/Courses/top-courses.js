import React from 'react'
import './courses.css'
import Title from '../Common/title'
import { topcategory } from '../../dummy-data'

const Example = () => {
  return (
    <section className='flex justify-center items-center flex-col bg-white'>
    <div className='pt-15'>
      <Title title={'Popular Category'} subtitle={'Category'} />
    </div>
    <div  className='flex gap-10 m-12 justify-center items-center  text-center'>
    
      {topcategory.map((val)=>(
       <div id='category-box' className='flex justify-center items-center flex-col shadow-md hover:-translate-y-1 hover:scale-110 duration-200 ' >
        <img src={val.image} className='shadow-xl' id='category-img'/>
        <p className='mt-3 font-semibold text-xl'>{val.course}</p>
        <button className='mt-5  text-teal-600 '>View Course</button>
       </div>
      ))}
    </div>
    </section >
  )
}

export default Example
