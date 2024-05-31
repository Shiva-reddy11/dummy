import React from 'react'
import './testiomonal.css'
import Title from '../Common/title'
import {testimonal} from '../../dummy-data'
import testimg from '../../Assets/testo/t1.webp'

const Testiomonal = () => {
  return (
    <>
   <section className='testimonal'>
    <div className='container'>
           <Title subtitle='testimonal' title='our successful students'/>
           <div className='content grid22'>{testimonal.map((val,index)=>(
            <div  className={`items shadow key${index}`}> 
            <div className='box flex'>
                <div className='img'>
                    <img src={testimg} alt='img'/>
                    <i className='fa fa-quote-left icon'></i>
                </div>
                <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                </div>
            </div>
            <p>{val.desc}</p>
            </div>
           ))}</div>
    </div>
   </section>
    </>
  )
}

export default Testiomonal
