import React, {useState, useRef} from "react";
import Slider from "react-slick";
import LeftArrow from "../../assets/17--arrow---right.svg";
import "slick-carousel/slick/slick.css";
import Rectangle1 from '../../assets/rectangle-1.png'
import Rectangle2 from '../../assets/rectangle-2.png'
import Rectangle3 from '../../assets/rectangle-3.png'
import Rectangle4 from '../../assets/rectangle-4.png'
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";

export const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    dots: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
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
      className={`mx-auto max-w-[1440px] w-full mt-[150px] bg-color overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[65px] box-border gap-[135px] leading-[normal] tracking-[normal] text-left text-11xl text-[#202020] font-t1 mq450:gap-[34px] mq800:gap-[67px] mq1350:flex-wrap mq1350:p-5 mq1350:box-border `}
    >
      <h1 className="m-0 w-[195px] relative text-inherit leading-[120%] font-medium font-inherit flex items-center shrink-0 mq450:text-lg mq450:leading-[22px] mq800:text-[24px] mq800:leading-[29px]">
        Новости компании
      </h1>
      <section className="flex flex-col items-start justify-start gap-[40px] max-w-full mq800:gap-[20px]">
        <Slider
          ref={sliderRef}
          {...settings}
          className=" w-[1310px] h-[465px] inline-flex items-start gap-2.5"
        >
          <div className="relative w-[322px] h-[465px]">
            <div className="relative w-80 h-[465px] rounded-[10px] border border-solid border-[#e5e2ee]">
              <p className="absolute w-[270px] h-11 top-[400px] left-3.5 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ML-tw-1j text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
                Допускает внедрение поэтапного и развития общества.
              </p>
              <img
                className="absolute w-80 h-80 -top-px -left-px object-cover"
                alt="Rectangle"
                src={Rectangle1}
              />
              <div className="inline-flex flex-col items-start gap-[5px] absolute top-[339px] left-3.5">
                <div className="relative w-fit mt-[-1.00px] font-1440-t3 font-[number:var(--1440-t3-font-weight)] text-ML-tw-1j text-[length:var(--1440-t3-font-size)] tracking-[var(--1440-t3-letter-spacing)] leading-[var(--1440-t3-line-height)] [font-style:var(--1440-t3-font-style)]">
                  07.11.2022
                </div>
                <div className="relative w-[277px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-ws-j7-it text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
                  Название новости
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[322px] h-[465px]">
            <div className="relative w-80 h-[465px] rounded-[10px] border border-solid border-[#e5e2ee]">
              <img
                className="absolute w-80 h-80 -top-px -left-px object-cover"
                alt="Rectangle"
                src={Rectangle2}
              />
              <p className="absolute w-[270px] h-11 top-[400px] left-3.5 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ML-tw-1j text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
                Допускает внедрение поэтапного и развития общества.
              </p>
              <div className="inline-flex flex-col items-start gap-[5px] absolute top-[339px] left-3.5">
                <div className="relative w-fit mt-[-1.00px] font-1440-t3 font-[number:var(--1440-t3-font-weight)] text-ML-tw-1j text-[length:var(--1440-t3-font-size)] tracking-[var(--1440-t3-letter-spacing)] leading-[var(--1440-t3-line-height)] [font-style:var(--1440-t3-font-style)]">
                  07.11.2022
                </div>
                <div className="relative w-[277px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-ws-j7-it text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
                  Название новости
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[322px] h-[465px]">
            <div className="relative w-80 h-[465px] rounded-[10px] border border-solid border-[#e5e2ee]">
              <img
                className="absolute w-80 h-80 -top-px -left-px object-cover"
                alt="Rectangle"
                src={Rectangle3}
              />
              <p className="absolute w-[270px] h-11 top-[400px] left-3.5 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ML-tw-1j text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
                Допускает внедрение поэтапного и развития общества.
              </p>
              <div className="inline-flex flex-col items-start gap-[5px] absolute top-[339px] left-3.5">
                <div className="relative w-fit mt-[-1.00px] font-1440-t3 font-[number:var(--1440-t3-font-weight)] text-ML-tw-1j text-[length:var(--1440-t3-font-size)] tracking-[var(--1440-t3-letter-spacing)] leading-[var(--1440-t3-line-height)] [font-style:var(--1440-t3-font-style)]">
                  07.11.2022
                </div>
                <div className="relative w-[277px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-ws-j7-it text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
                  Название новости
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[322px] h-[465px] mr-[-2.00px]">
            <div className="relative w-80 h-[465px] rounded-[10px] border border-solid border-[#e5e2ee]">
              <img
                className=" w-80 h-80 object-cover"
                alt="Rectangle"
                src={Rectangle4}
              />
              <p className="absolute w-[270px] h-11 top-[400px] left-3.5 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ML-tw-1j text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
                Допускает внедрение поэтапного и развития общества.
              </p>
              <div className="inline-flex flex-col items-start gap-[5px] absolute top-[339px] left-3.5">
                <div className="relative w-fit mt-[-1.00px] font-1440-t3 font-[number:var(--1440-t3-font-weight)] text-ML-tw-1j text-[length:var(--1440-t3-font-size)] tracking-[var(--1440-t3-letter-spacing)] leading-[var(--1440-t3-line-height)] [font-style:var(--1440-t3-font-style)]">
                  07.11.2022
                </div>
                <div className="relative w-[277px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-ws-j7-it text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
                  Название новости
                </div>
              </div>
            </div>
          </div>
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
            className="h-[41px] w-[145px]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#f8f7f3",
              fontSize: "14",
              background: "#088269",
              borderRadius: "50px",
              "&:hover": { background: "#088269" },
              width: 145,
              height: 41,
            }}
          >
            Все новости
          </Button>
        </div>
      </section>
    </div>
  );
};

