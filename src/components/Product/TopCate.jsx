import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/17--arrow---right.svg";
import { products } from "../../../public/data";
import { Button } from "@mui/material";

export const TopCate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
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
      className={`mx-auto max-w-[1440px] w-full mt-[150px] space-x-[110px] bg-color overflow-hidden flex items-start py-0 pr-0 pl-[65px] box-border leading-[normal] tracking-[normal] gap-[20px] text-left text-11x font-t1 mq1325:flex-wrap mq1325:p-5 mq1325:box-border`}
    >
      <div className=" w-[330px] flex flex-col items-start justify-start gap-[25px]">
        <h2 className="text-[30px] text-[#202020] font-[500] max-w-[242px] w-full">
          Популярные категории
        </h2>
      </div>
      <section className="flex flex-col items-start justify-start gap-[40px] w-[1310px] text-left text-base text-color1 font-t1 mq800:gap-[20px]">
        <Slider
          ref={sliderRef}
          {...settings}
          className=" w-[1310px] h-[280px] inline-flex items-start gap-2.5"
        >
          {products.map((brand, index) => (
            <div key={index} className="relative w-[322px] h-[280px]">
              <div className="relative w-80 h-[280px] bg-x-1l-ubo-z rounded-[10px] border border-solid border-[#e5e2ee]">
                <div className="absolute w-80 h-[196px] top-0 left-0 bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]">
                  <img
                    className="absolute w-[217px] h-[102px] top-[45px] left-[50px] object-cover"
                    alt="Cropped"
                    src={brand.img}
                  />
                </div>
                <p className="absolute w-[226px] top-[215px] left-6 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
                  {brand.category}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="w-[1000px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div
              onClick={handlePrev}
              className="cursor-pointer select-none duration-200 hover:border-[#088269] relative w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1]"
            >
              <div className="relative w-[17px] h-[17px] top-3 left-3 rotate-90">
                <img
                  className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                  alt="Element arrow right"
                  src={LeftArrow}
                />
              </div>
            </div>
            <div
              onClick={handleNext}
              className="cursor-pointer select-none duration-200 hover:border-[#088269] relative w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1] rotate-180"
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
          <Button
            className="h-[41px] w-[155px]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#f8f7f3",
              fontSize: "14",
              background: "#088269",
              borderRadius: "50px",
              "&:hover": { background: "#088269" },
              width: 155,
              height: 41,
            }}
          >
            Все категории
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TopCate;
