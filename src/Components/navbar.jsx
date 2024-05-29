import React, { useEffect, useRef } from "react";
import menu from "../Assets/menu.png";
import close from "../Assets/close.png";
import '../App.css'
import { Link } from "react-router-dom";

const Navbar = () => {

  const navDialogRef = useRef(null);
  useEffect(() => {
    handleMenu();
  }, []);
  const handleMenu = () => {
    if (navDialogRef.current) {
      navDialogRef.current.classList.toggle("hidden");
    }
  };

  return (
    <nav id="bg-nav" className="p-5 flex justify-between items-center">
     <p className="text-3xl font-medium font-display ml-10 mb-2 items-center ">
     <Link to={'/'}> <span className="text-secondary">E</span>Learn
        <span className="text-secondary">ing</span></Link>
      </p> 

      <div id="nav-menu" className="hidden lg:flex gap-12 items-center ">
       <Link to={'/'}> <ul className="text-2xl cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200 ">
          Home
        </ul></Link>
        <Link to={'/courses'}>
        <ul className="text-2xl cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200 ">
          Courses
        </ul></Link>
        <ul className="text-2xl cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200 ">
          Bolgs
        </ul>
       <Link to={'/about'}> <ul className="text-2xl cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200 ">
          About
        </ul></Link>
        <ul className="text-2xl cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200 ">
          Contact
        </ul>
      </div>
      <button className="hidden lg:flex items-center gap-1 border border-gray-800 text-2xl hover:border-gray-400 text-secondary px-6 py-2 mr-10 rounded-lg">
        Login
      </button>

      <button
        className="p-2 lg:hidden border-style: none width: 2rem"
        onClick={handleMenu}
      >
        <img src={menu} alt="menuimg" className="text-gray-600" />
      </button>

      <div
        ref={navDialogRef}
        id="nav-dialog"
        className="hidden fixed z-10 lg:hidden bg-white inset-0 p-10"
      >
        <div id="nav-bar" className="flex justify-between items-center">
          <p className="text-3xl font-medium font-display">
          <Link to={'/'}> <span className="text-secondary">E</span>Learn
            <span className="text-secondary">ing</span></Link>
          </p>

          <button
            className="p-2 lg:hidden border-style: none width: 2rem"
            onClick={handleMenu}
          >
            <img src={close} alt="menuimg" className="text-gray-600" />
          </button>
        </div>
        <div className="mt-6">
        <Link to={'/'}> <ul className="font-medium m-3 p-3 hover:bg-gray-100 rounded">
            Home
          </ul></Link>
          <Link to={'/courses'}><ul className="font-medium m-3 p-3 hover:bg-gray-100 rounded">
            Courses
          </ul></Link> 
          <ul className="font-medium m-3 p-3 hover:bg-gray-100 rounded">
            Bolgs
          </ul>
          <Link to={'/about'}> <ul className="font-medium m-3 p-3 hover:bg-gray-100 rounded">
            About
          </ul></Link>
          <ul className="font-medium m-3 p-3 hover:bg-gray-100 rounded">
            Contact
          </ul>
        </div>
        <div className="h-[1px] bg-gray-100"></div>
        <button className="mt-6 w-full text-2xl flex gap-2 item-center px-6 py-3 rounded-lg hover:bg-gray-100 font-size:30px text-secondary">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
