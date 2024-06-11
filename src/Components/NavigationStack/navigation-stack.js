import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home";
import About from "../About/about-page";
import CoursesHomePage from "../../Pages/courses-home-page";
import SignupPage from "../Login-Signup/signup-page";
import LoginPage from "../Login-Signup/login-page";
import { useReducer } from "react";
import { InitialState, ReducerFun } from "../Functions/useReducer";
import CoursesPage from "../Courses/courses-page";



const NavigationStack = () => {
    const [state,dispatch] = useReducer(ReducerFun,InitialState)
    console.log('state: ', state[0].Login);
    
return(

    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/about" Component={About}/>
    <Route path="/courses" Component={CoursesPage}/>
    </Routes>

    <Routes>
        <Route path="/CoursesHomePage" Component={CoursesHomePage}/> 
        <Route path="/login" Component={LoginPage}/>
        <Route path="/signup" Component={SignupPage}/>
    </Routes>
    </BrowserRouter>
    </>
)
};

export default NavigationStack;