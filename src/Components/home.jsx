import Hero from "./Hero/hero";
import Navbar from "./navbar";
import '../App.css'
import AboutCard from "./About/about-card";
import CoursesHomePage from "../Pages/courses-home-page";



const Home = () => {
    return(
 <>
 <Navbar/>
 <Hero/>
 <AboutCard/>
 {/* <CoursesHomePage/> */}
  </>
    )
}

export default Home;