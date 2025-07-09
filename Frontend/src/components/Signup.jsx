import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <div className="dark:bg-white dark:text-black flex h-screen justify-center items-center">
        <div id="my_modal_3" className="p-6 shadow-lg rounded-lg">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost relative right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg text-center">SignUp !</h3>
              <div className="mt-4">
                <span>Name</span>
                <br></br>
                <input
                  type="name"
                  placeholder="Enter Your Full Name"
                  className="px-3 py-1 w-80 rounded-md border"
                  {...register("name", { required: true })}
                ></input>
                <br></br>
                {errors.name && <span className="text-red-400 text-sm">This field is required</span>}
              </div>
              <div className="mt-4">
                <span>Email</span>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="px-3 py-1 w-80 rounded-md border"
                  {...register("email", { required: true })}
                ></input>
                <br></br>
                {errors.email && <span className="text-red-400 text-sm">This field is required</span>}
              </div>
              <div className="mt-4">
                <span>Password</span>
                <br></br>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="px-3 py-1 w-80 rounded-md border"
                  {...register("password", { required: true })}
                ></input>
                <br></br>
                {errors.password && <span className="text-red-400 text-sm">This field is required</span>}
              </div>
              <div className="mt-4 flex justify-around">
                <button className="bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200 cursor-pointer">
                  Signup
                </button>
                <p>
                  Already Registered?{" "}
                  <Link
                    to={"/"}
                    className="text-blue-400 hover:text-blue-800 cursor-pointer"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
