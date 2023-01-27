import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword, auth, getAuth } from "firebase/auth";
import {toast} from "react-toastify"

export default function SignIn() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  } 
  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user){
        navigate("/")
      }
      toast.success("Sign in successfully!")
    } catch (error) {
      toast.error("Sign in failed!")
    }
  }
  return (
    <div>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center max-w-6xl mx-auto px-6 py-12">
        {/* image */}
        <div className="md:w-[67%] lg:w-[50%] mb-5 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
            alt="house"
            className="w-full rounded-sm"
          />
        </div>
        {/* Input form */}
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
          
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 rounded transition ease-in-out mb-6"
              id="email"
              type="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />

            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 rounded transition ease-in-out"
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </div>

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?
                <Link
                  className="text-red-600 hover:text-red-900 transition duration-200 ease-in-out ml-1"
                  to="/sign-up"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  className="text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out"
                  to="/forgot-password"
                >
                  Forgot password
                </Link>
              </p>
            </div>
            <button
            className="w-full bg-blue-600 text-white py-3 uppercase text-sm font-semibold rounded shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out"
            type="submit"
          >
            Sign in
          </button>
          <div
            className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-400 
          after:border-t after:flex-1 after:border-gray-400"
          >
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth/>
          </form>
      
        </div>
      </div>
    </div>
  );
}
