import Hero from "./Hero/hero";
import Navbar from "./navbar";
import '../App.css'
import AboutCard from "./About/about-card";
import CoursesHomePage from "../Pages/courses-home-page";
import Testiomonal from "./Testiomonal/testiomonal";
import TeamPage from "./Team/team-page";
import TeamCard from "./Team/team-card";
import Example from "../Dummy/example";



const Home = () => {
    return(
 <>
 <Navbar/>
 <Hero/>
 <AboutCard/>
 <CoursesHomePage/> 
  <Testiomonal/>
  </>
    )
}

export default Home;