import React from 'react'
import './team.css'
import team1 from '../../Assets/team/t1.webp'
import { team } from "../../dummy-data"


const TeamCard = () => {
  return (
    <>
    {team.map((val,index)=>(
        <div key={index} className={`item shadow key${index}`} >
            <div className='img'>
                <img src={team1} alt='team1'/>
            </div>
        <div className='details'>
           <h2>{val.name}</h2>
           <p>{val.work}</p>
        </div>
        </div>
    ))}
    </>
  )
}

export default TeamCard
