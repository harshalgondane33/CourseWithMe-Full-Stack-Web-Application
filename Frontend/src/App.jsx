import { useState ,useEffect } from "react";
import Home from "./Home/Home";
import CoursePaid from "./components/CoursePaid";
import toast, { Toaster } from 'react-hot-toast';
import {Navigate, Route, Routes} from "react-router-dom"
import Courses from "./Courses/Courses";
import list from "../public/list.json"
import Signup from "./components/Signup";
import Contact from "./Contact/Contact";
import { useAuth } from "./Context/AuthProvider";
import User from "../../Backend/model/user.model";
import About from "./About/About";
function App() {
  const [authUser,setauthUser] = useAuth();
  // console.log(authUser)
  useEffect(() => {
    setauthUser(localStorage.getItem('User'))
    // console.log(authUser)
      }, [])
      
      

  return (
    <>
    <div className="dark:bg-gray-800 dark:text-white">
      <Routes> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course' element={authUser ? <Courses></Courses> :  <Navigate to={"/signup"} replace state={{ fromCourse: true }}/> } />
        <Route path="/signup" element={<Signup></Signup>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/about" element={<About></About>}/>
      </Routes>
      <Toaster />
      </div>
    </>
  );
}

export default App;
