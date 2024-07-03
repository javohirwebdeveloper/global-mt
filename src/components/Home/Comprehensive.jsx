import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo1 from "../../assets/photo-2.png";
import Photo2 from "../../assets/photo-3.png";
import LeftArrow from "../../assets/17--arrow---right.svg";
import RightArrow from "../../assets/17--arrow---right-1.svg";
import Photo3 from "../../assets/photot.png";
import { Button } from "@mui/material";
import Comprehensive1 from "./Comprehensive1";

export const Comprehensive = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: false,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div
      className={`mt-[150px] w-[1310px] mx-auto bg-color overflow-hidden flex flex-col items-start justify-start gap-[41.5px] leading-[normal] tracking-[normal] text-left text-11xl text-[#202020] font-t1 mq700:gap-[21px] `}
    >
      <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq975:text-[24px] mq975:leading-[29px] mq450:text-[18px] mq450:leading-[22px]">
        Комплексное оснащение кабинетов
      </h2>
      <Slider
        ref={sliderRef}
        {...settings}
        className=" w-[1310px] h-[579px] gap-[10px] max-w-full"
      >
        <Comprehensive1 photo={Photo1} prop="Экспресс лаборатория" />
        <Comprehensive1 photo={Photo2} prop="Лазерная терапия" />
        <Comprehensive1 photo={Photo3} prop="Операционный блок" />
      </Slider>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq700:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div
            className="relative select-none cursor-pointer w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border-[1.5px] border-solid border-[#d5d1e1] hover:border-[#088269] duration-200"
            onClick={handlePrev}
          >
            <div className="relative w-[17px] h-[17px] top-3 left-3 rotate-90">
              <img
                className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                alt="Element arrow left"
                src={LeftArrow}
              />
            </div>
          </div>
          <div
            className="relative cursor-pointer select-none w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border-[1.5px] border-solid border-[#d5d1e1] hover:border-[#088269] duration-200 rotate-180"
            onClick={handleNext}
          >
            <div className="relative w-[17px] h-[17px] top-3 left-3 rotate-90">
              <img
                className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                alt="Element arrow right"
                src={LeftArrow}
              />
            </div>
          </div>
        </div>
        <div className="w-[467px] flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
          <Button
            className="h-[41px] flex-1 min-w-[157px]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#088269",
              fontSize: "14",
              borderColor: "#d5d1e1",
              borderRadius: "50px",
              "&:hover": { borderColor: "#d5d1e1" },
              height: 41,
            }}
          >
            Бесплатная консультация
          </Button>
          <Button
            className="h-[41px] w-[216px]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#f8f7f3",
              fontSize: "14",
              background: "#088269",
              borderRadius: "50px",
              "&:hover": { background: "#088269" },
              width: 216,
              height: 41,
            }}
          >
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </div>
  );
};
