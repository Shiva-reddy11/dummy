import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Back from '../../Common/back'

const CoursesDetails = () => {
   const {title}= useParams()
   
  return (
    <section>
       <Link to={'/courses'}> <button className='p-5 m-10 border border-gray-600'>Back</button></Link>
        <div>
            <h1 className='text-9xl text-rose-600'>
               {title}
            </h1>
        </div>
    </section>
  )
}

export default CoursesDetails
