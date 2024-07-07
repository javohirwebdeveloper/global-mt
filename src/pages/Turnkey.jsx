import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import { NavLink } from "react-router-dom";
import { Offers } from "../components/Home/Offers";
import TurnkeyForm from "../components/Turnkey/form";
import { About } from "../components/Home/About";
import { Form } from "../components/Home/Form";
import { Subscription } from "../components/Home/Subscription";
import { Footer } from "../components/Home/Footer";
const Turnkey = () => {
  return (
    <>
      <div className="max-w-[1440px] xl:mt-[99px] md:mt-[50px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto">
        <h2 className="text-[#202020] xl:text-[48px] sm:text-[34px] text-[28px]">
          Кабинеты под ключ
        </h2>
        <div className="xl:mt-[40px] md:mt-[30px] sm:mt-[20px] grid md:grid-cols-2 grid-cols-1 gap-[10px] w-full">
          <NavLink
            to={`/Страница кабинета под ключ`}
            className="rounded-[10px] xl:pb-[20px] pb-[15px] bg-white overflow-hidden"
          >
            <img src={Img1} className="w-full" alt="" />
            <div className="xl:pt-[17px] xl:pl-[25px] pl-[15px] pt-[15px]  ">
              <p className="text-[16px] font-[600]">Реанимация</p>
            </div>
          </NavLink>
          <NavLink
            to={`/Страница кабинета под ключ`}
            className="rounded-[10px] xl:pb-[20px] pb-[15px] bg-white overflow-hidden"
          >
            <img src={Img2} className="w-full" alt="" />
            <div className="xl:pt-[17px] xl:pl-[25px] pl-[15px] pt-[15px]  ">
              <p className="text-[16px] font-[600]">Реанимация</p>
            </div>
          </NavLink>
          <NavLink
            to={`/Страница кабинета под ключ`}
            className="rounded-[10px] xl:pb-[20px] pb-[15px] bg-white overflow-hidden"
          >
            <img src={Img2} className="w-full" alt="" />
            <div className="xl:pt-[17px] xl:pl-[25px] pl-[15px] pt-[15px]  ">
              <p className="text-[16px] font-[600]">Реанимация</p>
            </div>
          </NavLink>
          <NavLink
            to={`/Страница кабинета под ключ`}
            className="rounded-[10px] xl:pb-[20px] pb-[15px] bg-white overflow-hidden"
          >
            <img src={Img1} className="w-full" alt="" />
            <div className="xl:pt-[17px] xl:pl-[25px] pl-[15px] pt-[15px]  ">
              <p className="text-[16px] font-[600]">Реанимация</p>
            </div>
          </NavLink>
          <NavLink
            to={`/Страница кабинета под ключ`}
            className="rounded-[10px] xl:pb-[20px] pb-[15px] bg-white overflow-hidden"
          >
            <img src={Img1} className="w-full" alt="" />
            <div className="xl:pt-[17px] xl:pl-[25px] pl-[15px] pt-[15px]  ">
              <p className="text-[16px] font-[600]">Реанимация</p>
            </div>
          </NavLink>
          <NavLink
            to={`/Страница кабинета под ключ`}
            className="rounded-[10px] xl:pb-[20px] pb-[15px] bg-white overflow-hidden"
          >
            <img src={Img2} className="w-full" alt="" />
            <div className="xl:pt-[17px] xl:pl-[25px] pl-[15px] pt-[15px]  ">
              <p className="text-[16px] font-[600]">Реанимация</p>
            </div>
          </NavLink>
          <NavLink
            to={`/Страница кабинета под ключ`}
            className="rounded-[10px] xl:pb-[20px] pb-[15px] bg-white overflow-hidden"
          >
            <img src={Img2} className="w-full" alt="" />
            <div className="xl:pt-[17px] xl:pl-[25px] pl-[15px] pt-[15px]  ">
              <p className="text-[16px] font-[600]">Реанимация</p>
            </div>
          </NavLink>
          <NavLink
            to={`/Страница кабинета под ключ`}
            className="rounded-[10px] xl:pb-[20px] pb-[15px] bg-white overflow-hidden"
          >
            <img src={Img1} className="w-full" alt="" />
            <div className="xl:pt-[17px] xl:pl-[25px] pl-[15px] pt-[15px]  ">
              <p className="text-[16px] font-[600]">Реанимация</p>
            </div>
          </NavLink>
          <NavLink
            to={`/Страница кабинета под ключ`}
            className="rounded-[10px] xl:pb-[20px] pb-[15px] bg-white overflow-hidden"
          >
            <img src={Img1} className="w-full" alt="" />
            <div className="xl:pt-[17px] xl:pl-[25px] pl-[15px] pt-[15px]  ">
              <p className="text-[16px] font-[600]">Реанимация</p>
            </div>
          </NavLink>
        </div>
      </div>
      <Offers />
      <TurnkeyForm />
      <About />
      <Form />
      <Subscription />
      <Footer />
    </>
  );
};

export default Turnkey;
