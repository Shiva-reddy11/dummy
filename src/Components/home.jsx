import Hero from "./Hero/hero";
import Navbar from "./navbar";
import '../App.css'
import AboutCard from "./About/about-card";
import Example from "./Courses/top-courses";
import CoursesCardsHome from "../Pages/courses-home-page";
import Footer from "./Footer/footer";
import StudentsReviews3 from "./Testimonials/testimonial2";





const Home = () => {
    return(
 <>
 <Navbar/>
 <Hero/>
 <AboutCard/>
 <Example/>
 <CoursesCardsHome/>
 <StudentsReviews3/>
<Footer/>
  
  </>
    )
}

export default Home;