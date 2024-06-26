import React from "react";
import Logo from "../assets/logo.svg";
import './loading.css'
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <img src={Logo} alt="" className="h-[140px] w-[140px]" />
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loading;
