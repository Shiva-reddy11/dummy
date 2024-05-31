import React, { useEffect, useReducer, useRef } from 'react'
import './style.css'
import googleicon from '../../Assets/google-logo-icon.png'
import img from '../../Assets/banner.png'
import { Link } from 'react-router-dom'
import { InitialState, ReducerFun } from '../Functions/useReducer'

const LoginPage = () => {
  const [state,dispatch]=useReducer(ReducerFun,InitialState)
useEffect(()=>{
  loginfun()
},[])
  const loginfun =()=>{
    const action ={
      type :"LOGINTRUE"
   }

   dispatch(action)
  }

  return (
   <>
   <section id='loginpage' className='flex bg-white'>
   <div id='login-md' className='flex  justify-center items-center'>
    <img src={img} id='login-img'/>
   </div>
   <div id='login-form' className='flex flex-col justify-center items-center gap-3'>
    <div >
      <h1>Login Page</h1>
      
      <h2 className='pb-4'>Welcome! back please enter your details</h2> 
      </div>
      <form className='flex flex-col '>
        <input type='email' required placeholder='Enter mail id'  id='login-input'/>
        <input type='text' required placeholder='Enter password' id='login-input'/>
        <input type='submit' value={'Log in'} id='login'/>
      </form>
      <a href='/signup'><button id='create-btn' className='shadow-xl' onClick={loginfun}>Create Account</button></a>
      <h2>or</h2>
      <button id='create-btn' className='shadow-xl flex justify-center items-center gap-3'><img src={googleicon}/>Sign in With Google</button>
    </div>
   </section>
   </>
  )
}

export default LoginPage