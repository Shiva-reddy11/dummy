// import React from 'react'
// import { coursesCard } from '../dummy-data'
// import OnlineCourses from '../Components/AllCourses/online-courses'
// import img2 from '../Assets/courses/c2.png'
// import back from '../Assets/back.webp'
// import '../Components/AllCourses/courses.css'
// import Title from '../Components/Common/title'

// const CoursesHomePage = () => {
//   return (
//    <>
//    <>
//       <section className='homeAbout'>
//         <div className='container-home'>
//           <Title subtitle='our courses' title='explore our popular online courses' />
//           <div className='courseCard'>
//     <div className='container grid2'>
//         {coursesCard.slice(0,3).map((val)=>{
//             return(
//              <div className='items'>
//                 <div className='content flex'>
//                     <div className='left'>
//                         <div className='img'>
//                             <img src={img2} alt='img'/>   
//                         </div>
//                     </div> 
//                     <div className='text'>
//                         <h1>{val.coursesName}</h1>
//                         <div className='rate'>
//                             <i className='fa fa-star'></i>
//                             <i className='fa fa-star'></i>
//                             <i className='fa fa-star'></i>
//                             <i className='fa fa-star'></i>
//                             <i className='fa fa-star'></i>
//                             <label>(5.0)</label>
//                         </div>
//                         <div className='details'>
//                         {/* this beacuse we are fetch the nested api */}
//                         {val.courTeacher.map((details) => (
//                       <>
//                         <div className='box'>
//                           <div className='dimg'>
//                             <img src={back} alt='' />
//                           </div>
//                           <div className='para'>
//                             <h4>{details.name}</h4>
//                           </div>
//                         </div>
//                         <span>{details.totalTime}</span>
//                       </>
//                     ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <h3>{val.priceAll} / {val.pricePer}</h3>
//                 </div>
//                 <button className='outline-btn'>ENROLL NOW !</button>
//              </div>
//         )})}
//     </div>
//    </div>
         
//         </div>
//         <OnlineCourses />
//       </section>
//     </></>
//   )
// }

// export default CoursesHomePage
