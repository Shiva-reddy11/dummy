import Login from "../login";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "../sign-up";
import Home from "../home";
import About from "../About/about";

const NavigationStack = () => {
return(
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/about" Component={About}/>
    <Route path="/login" Component={Login}/>
    <Route path="/signup" Component={SignUp}/>
    </Routes>
    </BrowserRouter>
)
};

export default NavigationStack;