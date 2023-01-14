import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <div>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
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
          <form>
          <input
              className="w-full px-4 py-2 text-xl text-gray-700 rounded transition ease-in-out mb-6"
              id="name"
              type="text"
              value={name}
              onChange={onChange}
              placeholder=" Full Name"
            />
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

            <div className="flex justify-end whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Have an account?
                <Link
                  className="text-red-600 hover:text-red-900 transition duration-200 ease-in-out ml-1"
                  to="/sign-in"
                >
                  Sign In
                </Link>
              </p>
             
            </div>
            <button
            className="w-full bg-blue-600 text-white py-3 uppercase text-sm font-semibold rounded shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out"
            type="submit"
          >
            Sign Up
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
