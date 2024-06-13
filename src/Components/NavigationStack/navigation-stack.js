import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home";
import About from "../About/about-page";
import CoursesHomePage from "../../Pages/courses-home-page";
import SignupPage from "../Login-Signup/signup-page";
import LoginPage from "../Login-Signup/login-page";
import CoursesPage from "../Courses/courses-page";
import ContactPage from "../Contact/contact-page";
import PageNotFound from "../../Pages/404";
import CoursesCards from "../Courses/courses-cards";
import CoursesDetails from "../Courses/Courses Details/courses-details";
import CoursesCardsHome from "../../Pages/courses-home-page";
import Example from "../Courses/top-courses";



const NavigationStack = () => {
   
return(

    <>
    <BrowserRouter>
    <Routes>
    <Route path="/*" Component={PageNotFound}/>
    <Route path="/" Component={Home}/>
    <Route path="/about" Component={About}/>
    <Route path="/contact" Component={ContactPage}/>


    <Route path="/courses" Component={CoursesPage}/>
    <Route path="/coursescards" Component={CoursesCards}/>
    <Route path="/courses/:title" Component={CoursesDetails}/>
    <Route path="/:title" Component={CoursesDetails}/>
    </Routes>

    <Routes>
        <Route path="/example" Component={Example}/>
        <Route path="/CoursesHomePage" Component={CoursesHomePage}/> 
        <Route path="/login" Component={LoginPage}/>
        <Route path="/signup" Component={SignupPage}/>
    </Routes>
    </BrowserRouter>
    </>
)
};

export default NavigationStack;