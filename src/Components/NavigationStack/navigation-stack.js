import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home";
import About from "../About/about-page";
import CoursePage from "../AllCourses/course-page";


const NavigationStack = () => {
return(
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/about" Component={About}/>
    <Route path="/courses" Component={CoursePage}/>
    </Routes>
    </BrowserRouter>
)
};

export default NavigationStack;