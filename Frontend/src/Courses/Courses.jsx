import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoursePaid from "../components/CoursePaid";


const Courses = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar></Navbar>
      <div className="min-h-screen">
        <CoursePaid></CoursePaid>
      </div>
      <Footer></Footer>
      </div>
    </>
  );
};

export default Courses;
