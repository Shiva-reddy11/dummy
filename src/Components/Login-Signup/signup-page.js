import React, { useReducer } from 'react'
import './style.css'
import googleicon from '../../Assets/google-logo-icon.png'
import img2 from '../../Assets/lms-bg-signup.png'
import { InitialState, ReducerFun } from '../Functions/useReducer'

const SignupPage = () => {
 
  return (
   <>
   <section id='loginpage' className='flex bg-white'>
   <div id='login-form' className='flex flex-col justify-center items-center gap-3 '>
    <div className='mt' >
      <h1>Signup Page</h1>
      <h2 className='pb-4'>Welcome!</h2> 
      </div>
      <form className='flex flex-col '> 
        <input type='text' required placeholder='Enter username'  id='login-input'/>
        <input type='email' required placeholder='Enter mail id'  id='login-input'/>
        <input type='text' required placeholder='Enter password' id='login-input'/>
        <input type='submit' value={'Sign Up '}  id='login'/>
      </form>
      <h2>or</h2>
      <button id='create-btn' className='shadow-xl flex justify-center items-center gap-3'><img src={googleicon}/>Sign in With Google</button>
      <a href='/login'><p>if you have already account <span className='click'>click here</span></p></a>
    </div>
    <div id='login-md' className=' flex  justify-center items-center'>
    <img src={img2} id='login-img'/>
   </div>
   </section>
   </>
  )
}

export default SignupPage
