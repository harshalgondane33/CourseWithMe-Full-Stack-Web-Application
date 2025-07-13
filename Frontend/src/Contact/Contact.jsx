import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { name, email, message } = data;

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoLink = `mailto:harshalgondane333@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar></Navbar>
        <div className="relative top-30 left-20">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white rounded-md px-3 py-2 hover:bg-pink-800 duration-200 cursor-pointer inline-block ml-20 mt-5"
          >
            Resume
          </a>
        </div>

        <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 mt-11">
          <div className="w-full max-w-2xl bg-white text-black dark:bg-slate-800 dark:text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600"
                  {...register("name", { required: true })}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600"
                  {...register("email", { required: true })}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600"
                  {...register("message", { required: true })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Contact;
