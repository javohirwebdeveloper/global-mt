import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Photo1 from '../../assets/phtoto.png'
import Photo4 from '../../assets/photo-6.png'
import Photo2 from '../../assets/photo-4.png'
import Photo3 from '../../assets/Photo-8.png'
import Photo6 from '../../assets/photo-7.png'
import Photo7 from '../../assets/photo-5.png'
import Photo5 from '../../assets/photo.png'
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Ategory from "./Ategory";
import Ategory1 from "./Ategory1";

export const Categories = () => {
  return (
    <div
      className={`mt-[100px] max-w-[1310px] w-full mx-auto bg-color overflow-hidden flex flex-col items-start justify-start gap-[40px] leading-[normal] tracking-[normal] text-left text-11xl text-[#202020] font-t1 mq725:gap-[20px]`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq725:flex-wrap">
        <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq450:text-[18px] mq450:leading-[22px] mq1000:text-[24px] mq1000:leading-[29px]">
          Популярные категории
        </h1>
        <Button
          className="h-[41px] w-40"
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
      <section className="self-stretch flex flex-row items-start justify-start gap-[10px] text-left text-base text-[#202020] font-t1 mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[290px] max-w-[320px]">
          <Ategory phtoto={Photo1} prop="Дерматологическое оборудование" />
          <Ategory
            phtoto={Photo2}
            prop="Ветеринарное оборудование"
            divPadding="22px 25px 31px"
          />
        </div>
        <div className="flex-[0.8594] hover:scale-105 cursor-pointer duration-200  flex flex-col items-start justify-start pt-0 pb-5 pr-5 pl-[25px] relative gap-[66px] min-w-[290px] max-w-[320px] mq450:gap-[33px] mq450:flex-1">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs box-border border-[1px] border-solid border-[#E5E2EE]" />
            <div className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none bg-color2 box-border w-80 h-[534px] z-[1] border-[1px] border-solid border-[#E5E2EE]" />
          </div>
          <div className="w-[232px] flex flex-row items-start justify-start py-0 px-[29px] box-border">
            <img
              className="h-[488px] flex-1 relative max-w-full overflow-hidden object-contain mix-blend-multiply z-[2]"
              loading="lazy"
              alt=""
              src={Photo3}
            />
          </div>
          <div className="w-[248px] relative leading-[140%] font-medium flex items-center z-[2]">
            Дерматологическое оборудование
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[290px] max-w-[320px]">
          <Ategory
            phtoto={Photo4}
            prop="Оборудование для анастезиологии"
            divPadding="19px 26px 20px"
          />
          <Ategory1 photo={Photo5} prop="Оборудование для анастезиологии" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[290px] max-w-[320px]">
          <Ategory1 photo={Photo6} prop="Мебель для медецинских целей" />
          <Ategory phtoto={Photo7} prop="Дерматологическое оборудование" />
        </div>
      </section>
    </div>
  );
};


