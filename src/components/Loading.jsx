import React from "react";
import Logo from "../assets/logo.svg";
import './loading.css'
const Loading = () => {
  return (
    <div className="wrapper">
      <div className="main-div">
        <img src={Logo} className="w-[140px] h-[65px]" alt="" />
      </div>
    </div>
  );
};

export default Loading;
