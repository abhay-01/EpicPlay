import React from "react";
import { data } from "../utils/Friends";
import icon from "../assets/boy.png";
import bg from "../assets/bg.svg";
const AddFriends = () => {
  return (
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
          className="w-10/12 py-2 border  rounded-md text-[16px] bg-transparent px-2"
        />
      </div>

      {/* Header Image */}
      <div
        className={`flex flex-col items-start pl-[50px] `}
        style={{
          width: "100%",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="font-semibold text-xl my-4 ">Add Friends</div>
        <div
          className="w-11/12 flex flex-col items-center gap-y-4 border rounded-md py-12  "
          style={{
            width: "100%",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <input
            type="text"
            placeholder="Enter friend username"
            className="w-11/12 py-2 border border-white border-opacity-40   rounded-md text-[16px] bg-transparent px-2"
          />
          <div className="font-bold text-xl text-white text-opacity-70">OR</div>
          <input
            type="text"
            placeholder="Enter friend code"
            className="w-11/12 py-2 border border-white border-opacity-40  rounded-md text-[16px] bg-transparent px-2"
          />
        </div>
        <div className="font-semibold text-xl my-4 ">Recommended</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full p-4">
          {data.map((item) => (
            <div className="border flex flex-col rounded-xl items-center gap-y-4 my-4 py-4 px-8 w-full sm:w-9/12 transition duration-300 ease-in-out hover:scale-105">
              <img src={icon} width="60px" height="60px" className="" />
              <div className="text-lg font-bold ">{item.name}</div>
              <div className="text-white text-opacity-40">Bio/Air</div>
              <div className="bg-[#202320] text-white text-opacity-70 text-lg py-1 px-2 rounded-2xl">
                +Friend
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddFriends;
