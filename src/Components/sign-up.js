import { Link } from "react-router-dom"


const SignUp = () =>{

    return(
<div className="d-flex justify-content-center align-items-center bg-primary vh-100">
    <div className='bg-white p-3 rounded w-25'>
        <h1>SignUp Form</h1>
        <form action=''>
            <div className='mb-3'>
                <lable htmlFor='UserId'>Full Name</lable>
                <input type='text' placeholder='enter your name' className='form-control rounded-0' />
            </div>
            <div className='mb-3'>
                <lable htmlFor='mobile'>Mobile</lable>
                <input type='tel' placeholder='enter mobile number' className='form-control rounded-0' />
            </div>
            <div className='mb-3'>
                <lable htmlFor='email'>Email</lable>
                <input type='email' placeholder='enter mobile number' className='form-control rounded-0' />
            </div>
            <div className='mb-3'>
                <lable htmlFor='password'>Password</lable>
                <input type='text' placeholder='enter password' className='form-control rounded-0' />
            </div>
            <button className='btn btn-success w-100 rounded-0'><strong>SignUp</strong></button>
            <p>you are agree to our terms and conditions</p> 
            <Link to={'/'}className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none' >Login</Link>   
        </form>
    </div>

 </div>
        
    )
}

export default SignUp