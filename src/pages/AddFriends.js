import React from "react";
import { data } from "../utils/Friends";
import icon from "../assets/boy.png";
import bg from "../assets/bg.svg";
const AddFriends = () => {
  return (
    <div
      style={{
        overflowY: "auto",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
      className="h-screen w-screen overflow-x-hidden"
    >
      {/* Search Bar */}
      <div style={{ padding: "20px", textAlign: "center" }} className="border-b border-white border-opacity-35 ">
        <input
          type="text"
          placeholder="Search for games..."
          className="w-10/12 py-2 border  rounded-md text-[16px] bg-transparent px-2"
        />
      </div>
      
      {/* Header Image */}
      <div
        className={`flex flex-col items-center pl-[50px] `}
        style={{
          width: "100%",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className="font-semibold text-xl my-4 self-start ml-8">Add Friends</div>
        <div className="w-9/12 flex flex-col items-center gap-y-4 border rounded-md py-12 ">
        <input
          type="text"
          placeholder="Search for games..."
          className="w-11/12 py-2 border border-white border-opacity-40   rounded-md text-[16px] bg-transparent px-2"
        />
        <div className="font-bold text-xl text-white text-opacity-70">OR</div>
        <input
          type="text"
          placeholder="Search for games..."
          className="w-11/12 py-2 border border-white border-opacity-40  rounded-md text-[16px] bg-transparent px-2"
        />
        </div>
        <div className="font-semibold text-xl my-4 ml-8 self-start ">Recommended</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full md:pr-10 md:pl-20 pr-5 pl-10">
        {data.map((item) => (
          <div className="border flex flex-col rounded-xl items-center gap-y-4 my-4 py-4 px-8 w-10/12 transition duration-300 ease-in-out hover:scale-105 ">
            <img src={icon} width="60px" height="60px" className="" />
            <div className="text-lg font-bold ">{item.name}</div>
            <div className="text-white text-opacity-40">Bio/Air</div>
            <div className="bg-[#202320] text-white text-opacity-70 text-lg py-1 px-2 rounded-2xl">+Friend</div>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default AddFriends;
