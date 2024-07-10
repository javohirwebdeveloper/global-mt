import React, {useState, useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/17--arrow---right.svg";
import { brands } from "../../../public/data";
import { Button } from "@mui/material";

export const Brands = () => {
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
      className={`mx-auto max-w-[1440px] w-full mt-[150px] space-x-[110px] bg-color overflow-hidden flex items-start py-0 pr-0  box-border leading-[normal] tracking-[normal] gap-[20px] text-left text-11xl text-color1 font-t1 mq1325:flex-wrap mq1325:p-5 mq1325:box-border`}
    >
      <div className=" max-w-[242px] w-full flex flex-col items-start justify-start gap-[25px]">
        <h2 className="m-0 text-[#202020_!important]  relative text-inherit leading-[120%] font-medium font-inherit inline-block min-w-[112px] mq450:text-[18px] mq450:leading-[22px] mq800:text-[24px] mq800:leading-[29px]">
          Бренды
        </h2>
        <div className="relative text-[#202020_!important] opacity-50 text-nowrap text-base leading-[140%] font-medium text-gray">
          Эксклюзивные поставщики
        </div>
      </div>
      <section className="flex flex-col md:ml-0 -ml-[40px] items-start justify-start xl:gap-[40px] w-[1310px] text-left text-base text-color1 font-t1 mq800:gap-[20px]">
        <Slider
          ref={sliderRef}
          {...settings}
          className="carousel md:w-[1310px] w-[768px] xl:h-[280px] h-[216px] inline-flex items-start gap-2.5"
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative carousel-item item xl:w-[322px] w-[236px] xl:h-[280px] h-[216px]"
            >
              <div className="relativexl:w-[322px] w-[236px] xl:h-[280px] h-[216px] bg-x-1l-ubo-z rounded-[10px] border border-solid border-[#e5e2ee]">
                <div className="xl:w-[322px] w-[236px] h-[152px] xl:h-[196px] flex justify-center items-center bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]">
                  <img
                    className=" xl:w-[217px] w-[157px]  xl:h-[102px] "
                    alt="Cropped"
                    src={brand.img}
                  />
                </div>
                <p className="xl:w-[226px] xl:text-[16px] md:text-[14px] text-[14px] xl:px-[25px] xl:py-[20px] px-[15px] md:py-[15px] py-[14px] w-[134px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="w-[1000px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
          <div className="xl:flex hidden flex-row items-start justify-start gap-[10px]">
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
            Сертификаты
          </Button>
        </div>
      </section>
    </div>
  );
};
