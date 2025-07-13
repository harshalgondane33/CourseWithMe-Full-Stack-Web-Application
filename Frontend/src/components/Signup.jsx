import React, { useEffect ,useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider";
const Signup = () => {
  const [authUser, setauthUser] = useAuth();
  const hasShownToast = useRef(false);
  // console.log(authUser);
  const location = useLocation();
  const navigate = useNavigate();
  const fromCourse = location.state?.fromCourse;
  console.log(fromCourse)
  const from = location.state?.from?.pathname || "/";
  //console.log(from)
  useEffect(() => {
    if (fromCourse && !hasShownToast.current) {
      toast.error("Sign Up or Login To See All Courses");
      hasShownToast.current=true;
    }
  }, [fromCourse]); 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:5001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("User", JSON.stringify(res.data.user));
        if (res.data) {
          toast.success("SignUp Succesfully");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          navigate(from, { replace: true });
        }
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in SignUp : " + err.response.data.message);
      });
  };
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
                <span>Full Name</span>
                <br></br>
                <input
                  type="fullname"
                  placeholder="Enter Your Full Name"
                  className="px-3 py-1 w-80 rounded-md border"
                  {...register("fullname", { required: true })}
                ></input>
                <br></br>
                {errors.fullname && (
                  <span className="text-red-400 text-sm">
                    This field is required
                  </span>
                )}
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
                {errors.email && (
                  <span className="text-red-400 text-sm">
                    This field is required
                  </span>
                )}
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
                {errors.password && (
                  <span className="text-red-400 text-sm">
                    This field is required
                  </span>
                )}
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
