import React, { useState } from "react";
import bg from "../assets/bg.svg";
import { FaGoogle } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import g from "../images/g.webp";
import f from "../images/f.webp";

export const Login = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          overflowY: "auto",
          backgroundColor: "black",
          color: "white",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Search Bar */}
        <div
          style={{ padding: "20px", textAlign: "center" }}
          className="border-b border-white border-opacity-35 "
        >
          <input
            type="text"
            placeholder="Search for games..."
            className="w-8/12 py-2 pl-6 border  rounded-md text-[16px] bg-transparent px-2"
          />
        </div>
        {/* Header Image */}
        <div
          className={`flex flex-col   items-center justify-center flex-1`}
          style={{
            width: "100%",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full max-w-xs px-4 py-8  rounded-md shadow-md">
            <input
              type="text"
              placeholder="Example@email.com"
              className="w-full mt-5 p-2 rounded-lg border border-gray-300 placeholder-gray-500  bg-zinc-800"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full mt-5 p-2 border border-gray-300 rounded-lg placeholder-gray-500  bg-zinc-800"
            />
            <input
              type="text"
              placeholder="at least 8 characters"
              className="w-full mt-5 p-2 border border-gray-300 rounded-lg placeholder-gray-500  bg-zinc-800"
            />

            <div className="mt-1 mr-0 pr-0 flex justify-end text-blue-700">
              <div className="text-sm ml-20 pl-16 pr-0  text-right">
                Forget Password?
              </div>
            </div>

            <button className="bg-blue-950 w-full mt-2 p-2  rounded-md text-white">
              Sign in
            </button>

            <div className="flex items-center my-4-full">
              <hr className="flex-grow h-px bg-gray-500 " />
              <span className="mx-4 text-gray-300">or</span>
              <hr className="flex-grow border-t-2 border-white " />
            </div>

            <button className="bg-white w-full mt-2 p-2 border border-gray-300 rounded-md text-black flex items-center justify-center space-x-2">
              <img src={g} alt="Google logo" className="w-5 h-5" />
              <span>Sign in with Google</span>
            </button>
            <button className="bg-white w-full mt-2 p-2 border border-gray-300 rounded-md text-black flex items-center justify-center space-x-2">
              <img src={f} alt="Google logo" className="w-5 h-5" />
              <span>Sign in with Facebook</span>
            </button>

            <p className="mt-5 text-gray-500">
              Don't you have account?{" "}
              <button className="text-blue-600" onClick={handleSignup}>
                SignUP
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
