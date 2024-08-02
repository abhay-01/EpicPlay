import React from "react";
import { data } from "../utils/Friends";
import icon from "../assets/boy.png"
const Friends = () => {

  return (
    <div className=" bg-[#171717] text-white  ">
      <div className="w-10/12">
      <div>All Friends</div>
      <div className="text-4xl">Hello guys</div>
      {data.map((item) => (
        <div className="border flex flex-row rounded-3xl items-center my-4 py-4 px-8">
          <img src={icon} width="40px" height="40px" className=""/>
          <div className="flex flex-row justify-between ">
            <div>
            <div>{item.name}</div>
            <div>Bio/Air</div>
            </div>
            <div>{item.status}</div>
          </div>

        </div>
      ))}
      </div>
    </div>
  );

  return <div></div>;

};

export default Friends;
