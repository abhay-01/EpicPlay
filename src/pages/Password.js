import React, { useState, useRef } from "react";
import bg from "../assets/bg.svg";
import { FaGoogle } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import g from "../images/g.webp";
import f from "../images/f.webp";
import axios from "axios";
import Swal from "sweetalert2";

export const Password = () => {
  const [pass, setPass] = useState("");
  const [rePass, setrePass] = useState("");
  const otpRef = useRef(null);
  const navigate = useNavigate();

  const resetpass = () => {
    setPass("");
    setrePass("");
    if (otpRef.current) {
      otpRef.current.focus(); // Focus on the password input
    }
  };

  const handlesignup = () => {
    if (pass === rePass) {
      navigate("/home");
    } else {
      Swal.fire({
        // icon: "error",
        // title: "Oops...",
        text: "Passwords do not match. Please enter them again.",
        confirmButtonText: "Try Again",
        didClose: resetpass,
      });
    }
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
          <h1>OTP Verified</h1>

          <p className="text-gray-500 pt-4">
            Kindly, enter the password below.
          </p>

          <div className="flex flex-col items-center justify-center w-full max-w-xs px-4 py-8  rounded-md shadow-md">
            <input
              type="password"
              placeholder="atleast 8 character"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full mt-3 p-2  border border-gray-300 rounded-md placeholder-gray-500 bg-zinc-800"
            />
            <p className=" text-blue-500 ml-56 mt-0 mb-4">Strong</p>

            <input
              type="password"
              placeholder="re-enter the password"
              value={rePass}
              onChange={(e) => setrePass(e.target.value)}
              className="w-full mt-3 p-2 border border-gray-300 rounded-md placeholder-gray-500  bg-zinc-800"
            />
            <p className=" text-blue-500 ml-56 mt-0 mb-4">Matched</p>
            <button
              onClick={handlesignup}
              className="bg-blue-950 w-full mt-2 p-2  rounded-md text-white"
            >
              SignUP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
