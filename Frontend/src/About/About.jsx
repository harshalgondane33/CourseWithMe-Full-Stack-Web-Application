import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-10 mt-10">
        <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">What is CourseWithMe?</h2>
          <p className="text-lg leading-relaxed">
            CourseWithMe is an online learning platform built to simplify the process of learning through accessible and affordable courses. 
            Our goal is to empower students, professionals, and lifelong learners by giving them the tools they need to grow their skills.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To provide high-quality education to everyone, everywhere — for free or at minimal cost.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Meet the Developer</h2>
          <p className="text-lg leading-relaxed">
            Hi! I'm <span className="text-pink-500 font-semibold">Harshal Gondane</span>, a passionate full-stack developer and student at IIIT Kota.
            I created CourseWithMe as a project to help others learn and grow — just like I did with open resources online.
          </p>
          <p className="mt-4">
            Connect with me:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Email: <a href="mailto:harshalgondane3333@gmail.com" className="text-blue-400 hover:underline">Mail</a></li>
            <li>GitHub: <a href="https://github.com/harshalgondane33" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">github</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/harshal-gondane-bb55bb130/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
    </>
  )
}

export default About
