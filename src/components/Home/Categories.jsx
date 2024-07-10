import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Photo1 from "../../assets/phtoto.png";
import Photo4 from "../../assets/photo-6.png";
import Photo2 from "../../assets/photo-4.png";
import Photo3 from "../../assets/Photo-8.png";
import Photo6 from "../../assets/photo-7.png";
import Photo7 from "../../assets/photo-5.png";
import Photo5 from "../../assets/photo.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-[1440px] xl:mt-[100px] md:mt-[99px] sm:mt-[50px] mt-[140px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto bg-color overflow-hidden flex flex-col items-start justify-start gap-[40px] leading-[normal] tracking-[normal] text-left text-11xl text-[#202020] font-t1 mq725:gap-[20px]">
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq725:flex-wrap">
        <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq450:text-[18px] mq450:leading-[22px] mq1000:text-[24px] mq1000:leading-[29px]">
          Популярные категории
        </h1>
        <div className="md:inline hidden">
          <Button
            className="h-[41px]  w-40"
            onClick={() => navigate("/Каталог")}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#f8f7f3",
              fontSize: "14",
              background: "#088269",
              borderRadius: "50px",
              "&:hover": { background: "#088269" },
              width: 160,
              height: 41,
            }}
          >
            Все категории
          </Button>
        </div>
      </div>
      <section className="w-full xl:h-[618px] md:h-[668px] h-[646px] grid xl:grid-cols-4 xl:grid-rows-2 md:grid-cols-3 md:grid-rows-3 grid-rows-4 grid-cols-2 gap-2.5">
        <div className="rounded-[10px] col-span-1 row-span-1 border-[#E5E2EE] border flex flex-col overflow-hidden w-full h-full">
          <div className="bg-white w-full flex justify-center overflow-hidden items-center h-[70%]">
            <img src={Photo1} alt="" className=" object-contain" />
          </div>
          <div className=" xl:text-[16px] md:text-[14px] h-[30%] text-[12px] xl:py-[20px] xl:px-[25px] md:py-[15px] md:px-[15px] py-[10px] px-[15px]  ">
            <div className="max-w-[148px] w-full">
              Мебель для медецинских целей
            </div>
          </div>
        </div>
        <div className="rounded-[10px] col-span-1 row-span-2 border-[#E5E2EE] border flex flex-col overflow-hidden w-full h-full">
          <div className="bg-white w-full flex justify-center overflow-hidden items-center h-[85%]">
            <img src={Photo3} alt="" className=" object-contain" />
          </div>
          <div className=" xl:text-[16px] md:text-[14px] h-[15%] text-[12px] xl:py-[20px] xl:px-[25px] md:py-[15px] md:px-[15px] py-[10px] px-[15px]  ">
            <div className="max-w-[148px] w-full">
              Дерматологическое оборудование
            </div>
          </div>
        </div>
        <div className="rounded-[10px] col-span-1 row-span-1 border-[#E5E2EE] border flex flex-col overflow-hidden w-full h-full">
          <div className="bg-white w-full flex justify-center overflow-hidden items-center h-[70%]">
            <img src={Photo4} alt="" className=" object-contain" />
          </div>
          <div className=" xl:text-[16px] md:text-[14px] h-[30%] text-[12px] xl:py-[20px] xl:px-[25px] md:py-[15px] md:px-[15px] py-[10px] px-[15px]  ">
            <div className="max-w-[148px] w-full">
              Оборудование для анастезиологии
            </div>
          </div>
        </div>
        <div className="rounded-[10px] col-span-1 row-span-1 border-[#E5E2EE] border flex flex-col overflow-hidden w-full h-full">
          <div className="bg-white w-full flex justify-center overflow-hidden items-center h-[70%]">
            <img src={Photo6} alt="" className=" object-contain w-1/2" />
          </div>
          <div className=" xl:text-[16px] md:text-[14px] h-[30%] text-[12px] xl:py-[20px] xl:px-[25px] md:py-[15px] md:px-[15px] py-[10px] px-[15px]  ">
            <div className="max-w-[148px] w-full">
              Мебель для медецинских целей
            </div>
          </div>
        </div>
        <div className="rounded-[10px] col-span-1 row-span-1 border-[#E5E2EE] border flex flex-col overflow-hidden w-full h-full">
          <div className="bg-white w-full flex justify-center overflow-hidden items-center h-[70%]">
            <img src={Photo2} alt="" className=" object-contain w-1/2" />
          </div>
          <div className=" xl:text-[16px] md:text-[14px] h-[30%] text-[12px] xl:py-[20px] xl:px-[25px] md:py-[15px] md:px-[15px] py-[10px] px-[15px]  ">
            <div className="max-w-[148px] w-full">
              Ветеринарное оборудование
            </div>
          </div>
        </div>{" "}
        <div className="rounded-[10px] col-span-1 row-span-1 border-[#E5E2EE] border flex flex-col overflow-hidden w-full h-full">
          <div className="bg-white w-full flex justify-center overflow-hidden items-center h-[70%]">
            <img src={Photo5} alt="" className=" object-contain w-1/2" />
          </div>
          <div className=" xl:text-[16px] md:text-[14px] h-[30%] text-[12px] xl:py-[20px] xl:px-[25px] md:py-[15px] md:px-[15px] py-[10px] px-[15px]  ">
            <div className="max-w-[148px] w-full">
              Оборудование для анастезиологии
            </div>
          </div>
        </div>
        <div className="rounded-[10px] col-span-1 row-span-1 border-[#E5E2EE] border flex flex-col overflow-hidden w-full h-full">
          <div className="bg-white w-full flex justify-center overflow-hidden items-center h-[70%]">
            <img src={Photo7} alt="" className=" object-contain w-1/2" />
          </div>
          <div className=" xl:text-[16px] md:text-[14px] h-[30%] text-[12px] xl:py-[20px] xl:px-[25px] md:py-[15px] md:px-[15px] py-[10px] px-[15px]  ">
            <div className="max-w-[148px] w-full">
              Дерматологическое оборудование
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto md:hidden">
        <Button
          className="h-[41px] text-nowrap w-40"
          disableElevation
          onClick={() => navigate("/Каталог")}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#f8f7f3",
            fontSize: "12",
            background: "#088269",
            borderRadius: "50px",
            "&:hover": { background: "#088269" },
            width: 125,
            height: 33,
          }}
        >
          Все категории
        </Button>
      </div>
    </div>
  );
};
