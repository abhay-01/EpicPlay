import React, { useEffect, useState, useRef } from "react";
import g from "../images/g.webp";
import f from "../images/f.webp";
import bg from "../assets/bg.svg";
import OtpInput from "react-otp-input";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import axios from "axios";

export const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const location = useLocation();
  const navigate = useNavigate();
  const otpRef = useRef(null);

  const correctOtp = location.state?.correctOtp;

  const resetOtp = () => {
    setOtp(["", "", "", ""]); // Reset the OTP state
    if (otpRef.current) {
      otpRef.current.focus(); // Focus on the first input
    }
  };

  const verifyOTP = () => {
    if (otp.join("") === correctOtp.toString().trim()) {
      navigate("/password");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong OTP. Please enter the correct OTP again.",
        confirmButtonText: "Try Again",
        didClose: resetOtp,
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
          <h1 className="text-white  text-[30px] flex justify-center items-center">
            OTP Verification
          </h1>
          <p className="text-gray-500 pb-9 pt-0">
            Enter the verification code we just sent on your email address
          </p>
          <div className="flex-col justify-center items-center text-white">
            <OtpInput
              value={otp.join("")}
              onChange={(value) => setOtp(value.split(""))}
              numInputs={6}
              isInputNum
              inputStyle={{
                width: "2.8rem",
                height: "2.8rem",
                margin: "0 0.2rem",
                fontSize: "1.5rem",
                borderRadius: "4px",
                border: "1px solid #ced4da",
                color: "black",
                background: " rgba(86, 88, 90, 1)",
              }}
              renderInput={(inputProps, index) => (
                <input {...inputProps} key={index} />
              )}
            />

            <button
              onClick={verifyOTP}
              className="bg-blue-950 w-full mt-4 p-2  rounded-md text-white "
            >
              Verify OTP
            </button>
            <div className="flex">
              <p className="mt-5 text-gray-500">Don't recieve code?</p>
              <span className="text-blue-700 mt-5">Resend</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
