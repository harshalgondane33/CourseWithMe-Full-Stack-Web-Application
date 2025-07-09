import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      {/* <button
        className="btn p-2 cursor-pointer rounded-lg bg-black text-white hover:bg-slate-600 duration-300"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button> */}
      <div className="dark:bg-slate-200 dark:text-black">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                // onClick={ ()=> document.getElementById("my_modal_3").open = false }
            
              >
                ✕
              </button>

              <h3 className="font-bold text-lg text-center">Login !</h3>
              <div className="mt-4">
                <span>Email</span>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="px-3 py-1 w-full rounded-md border"
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
                  className="px-3 py-1 w-full rounded-md border"
                  {...register("password", { required: true })}
                ></input>
                <br></br>
                {errors.password && <span className="text-red-400 text-sm">This field is required</span>}
              </div>
              <div className="mt-4 flex justify-around">
                <button className="bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200 cursor-pointer">
                  Login
                </button>
                <p>
                  Not Registered?{" "}
                  <Link
                    to={"/signup"}
                    className="text-blue-400 hover:text-blue-800 cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
