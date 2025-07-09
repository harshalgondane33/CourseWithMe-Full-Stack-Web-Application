import { useState } from "react";
import Home from "./Home/Home";
import CoursePaid from "./components/CoursePaid";
import {Route, Routes} from "react-router-dom"
import Courses from "./Courses/Courses";
import list from "../public/list.json"
import Signup from "./components/Signup";
function App() {
  
  return (
    <>
    <div className="dark:bg-gray-800 dark:text-white">
      <Routes> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course' element={<Courses></Courses>}/>
        <Route path="/signup" element={<Signup></Signup>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
