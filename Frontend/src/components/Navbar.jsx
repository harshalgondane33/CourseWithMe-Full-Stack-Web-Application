import React from "react";
import { useState,useEffect } from "react";
import { Link,Outlet } from "react-router-dom";
import Login from "./Login";
const Navbar = () => {
    const [theme, settheme] = useState(
      localStorage.getItem("theme")? localStorage.getItem("theme"):"light"
    );
    const element=document.documentElement;
    useEffect(() => {
      if(theme==="dark")
      {
        element.classList.add("dark")
        localStorage.setItem("theme","dark")
        document.body.classList.add("dark")
      }
      else{
        element.classList.remove("dark")
        localStorage.setItem("theme","light")
        document.body.classList.remove("dark")
      }   

    }, [theme])

    const [Sticky, setSticky] = useState(false);
    useEffect(() => {
      const handlescroll = () => {
        if(window.scrollY>0)
        {
            setSticky(true);
        }
        else{
            setSticky(false);
        }
      }
      window.addEventListener('scroll',handlescroll);
      return () => {
        window.removeEventListener('scroll',handlescroll);
      }
    }, [])
    
  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        {/* <a>About</a> */}
        <Link to="/course">About</Link>
      </li>
      <li>
        <Link to="/course">Courses</Link>
      </li>
      <li>
        <Link to={'/course'}>Contact</Link>
      </li>
    </>
  );
  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 right-0 left-0 z-50 dark:bg-gray-800 dark:text-white ${Sticky?"sticky-navbar bg-base-300 shadow-md duration-300 transition-all ease-in-out dark:bg-gray-950 dark:text-white":""}`} >
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className=" text-2xl font-bold cursor-pointer">CourseWithMe</a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block dark:text-black">
            <input type="text" placeholder="Type here" className="input" />
          </div>
          <div>
            <label className="toggle text-base-content" >
              <input
                type="checkbox"
                value="synthwave"
                className="theme-controller"
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={
                  ()=>{
                    settheme(theme==="dark"?"light":"dark")
                  }
                }
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={
                  ()=>{
                    settheme(theme==="light"?"dark":"light")
                  }
                }
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>
          <div>
            <div className="p-2 cursor-pointer rounded-lg bg-black text-white hover:bg-slate-600 duration-300" onClick={()=>document.getElementById('my_modal_3').showModal()}>
              Login
            </div>
            <Login></Login>
          </div>
        </div>
      </div>
      {/* <Outlet/> */}
    </div>
  );
};

export default Navbar;
