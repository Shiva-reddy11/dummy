import Hero from "./Hero/hero";
import Navbar from "./navbar";
import '../App.css'
import AboutCard from "./About/about-card";
import Example from "./Courses/top-courses";
import CoursesPage from "./Courses/courses-page";




const Home = () => {
    return(
 <>
 <Navbar/>
 <Hero/>
 <AboutCard/>
 {/* <Example/> */}
{/* <CoursesPage/> */}
  
  </>
    )
}

export default Home;