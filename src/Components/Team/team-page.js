import React from 'react'
import './team.css'
import TeamCard from './team-card'
import Back from '../Common/back'
import Navbar from "../navbar";

const TeamPage = () => {
  return (
    <>
    <Navbar/>
    <Back title='Team'/>
    <section className='team padding'>
        <div className='container grid'>
        <TeamCard/>
        </div>
    </section>
    </>
  )
}

export default TeamPage
