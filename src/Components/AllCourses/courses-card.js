import React from 'react'
import {coursesCard} from '../../dummy-data'
import './courses.css'
import img1 from '../../Assets/courses/c1.png'
import img2 from '../../Assets/courses/c2.png'
import img3 from '../../Assets/courses/c3.png'
import img4 from '../../Assets/courses/c4.png'
import img5 from '../../Assets/courses/c5.png'
import img6 from '../../Assets/courses/c6.png'
import img7 from '../../Assets/courses/c7.png'
import img8 from '../../Assets/courses/c8.png'
import img9 from '../../Assets/courses/c9.png'
import back from '../../Assets/back.webp'




 const imgdata=[,'img2','img3','img4','img5','img6','img7','img8','img9']


const CoursesCard = () => {
  return (
   <>
   <section className='courseCard'>
    <div className='container grid2'>
        {coursesCard.map((val)=>{
            return(
             <div className='items'>
                <div className='content flex'>
                    <div className='left'>
                        <div className='img'>
                            <img src={img2} alt='img'/>   
                        </div>
                    </div> 
                    <div className='text'>
                        <h1>{val.coursesName}</h1>
                        <div className='rate'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <label>(5.0)</label>
                        </div>
                        <div className='details'>
                        {/* this beacuse we are fetch the nested api */}
                        {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={back} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h3>{val.priceAll} / {val.pricePer}</h3>
                </div>
                <button className='outline-btn'>ENROLL NOW !</button>
             </div>
        )})}
    </div>
   </section>
   </>
  )
}

export default CoursesCard
