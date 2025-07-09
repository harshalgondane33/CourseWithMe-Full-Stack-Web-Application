import React from "react";
import baneer from "../assets/baneer.png"
const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
      <div className="order-2 md:order-2 w-full md:w-1/2 mt-12 md:mt-20">
        <div className="space-y-5 md:space-y-12">
          <h1 className="text-4xl font-bold">
            Hello , Welcome To{" "}
            <span className="text-pink-700">CourseWithMe</span>
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            culpa voluptate. Laboriosam dicta delectus pariatur ea? Iste aliquam
            dignissimos architecto delectus asperiores! Consectetur, voluptas
            itaque?
          </p>
          <label className="input validator dark:text-stone-700">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input className="dark:text-stone-700" type="email" placeholder="mail@site.com" required />
          </label>
          <button className="btn btn-soft btn-info">Connect</button>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-1/2">
        <img src={baneer} className="w-90vw h-90vh" alt="" />
      </div>
    </div>
  );
};

export default Banner;
