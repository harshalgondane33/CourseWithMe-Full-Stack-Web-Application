import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { useForm } from "react-hook-form";
import axios from "axios";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      email : data.email,
      password : data.password
    }
    await axios.post("http://localhost:5001/user/login",userInfo).then(
      (res) => {
        //console.log(res.data);
        if(res.data)
        {
          toast.success("Login Succesfully")
        }
        reset();
        document.getElementById("my_modal_3").close();
        localStorage.setItem("User" ,JSON.stringify(res.data.user))
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    ).catch((err) => {
      console.log(err)
      toast.error("Error in Login : " +err.response.data.message)
    })
     // clears the form
    // document.getElementById("my_modal_3").close(); // close the modal
  };
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      {/* <button
        className="btn p-2 cursor-pointer rounded-lg bg-black text-white hover:bg-slate-600 duration-300"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button> */}
      <div className="dark:bg-white dark:text-black">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-white dark:text-black">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => document.getElementById("my_modal_3").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"           
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
