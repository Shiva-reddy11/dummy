import { Link } from "react-router-dom";



const Login = () => {

    return(
 
 <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
    <div className='bg-white p-3 rounded w-25'>
        <h1>Login Form</h1>
        <form action=''>
            <div className='mb-3'>
                <lable htmlFor='UserId'>userId</lable>
                <input type='text' placeholder='enter userid' className='form-control rounded-0' />
            </div>
            <div className='mb-3'>
                <lable htmlFor='password'>Password</lable>
                <input type='text' placeholder='enter password' className='form-control rounded-0' />
            </div>
            <button className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
            <p>you are agree to our terms and conditions</p>
            <Link to={'/signup'}className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none' >Create Account</Link>
    
        </form>
    </div>

 </div>
 
 
 

    )
}

export default Login;