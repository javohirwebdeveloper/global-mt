import React, { useRef, useEffect } from "react";
import bgImg from "../../assets/vector.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LeftArrow from "../../assets/17--arrow---right.svg";
import Banner3 from "../../assets/banner3.png";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/Vector-1.png";
import Banner4 from "../../assets/banner4.png";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const carouselRef = useRef(null);

  const renderIndicator = (clickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <div
          className="mx-[5px] cursor-pointer duration-300 bg-[#7A7687] w-[38px] h-1.5 rounded-[20px]"
          onClick={clickHandler}
          onKeyDown={clickHandler}
          value={index}
          key={index}
          role="button"
          tabIndex={0}
          aria-label={`Slide ${index + 1}`}
          title={`Slide ${index + 1}`}
        />
      );
    }
    return (
      <div
        className="pagination cursor-pointer duration-300 w-1.5 h-1.5 opacity-[50%] bg-[#7A7687] rounded-[3px]"
        onClick={clickHandler}
        onKeyDown={clickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`Slide ${index + 1}`}
        title={`Slide ${index + 1}`}
      />
    );
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  return (
    <div
      className="max-w-[1440px] h-[367px] rounded-[10px] xl:mt-[30px] mt-[20px] md:px-[65px] sm:px-[20px] px-[15px] mx-auto"
      data-aos="fade-right"
    >
      <div className="carousels  relative">
        <Carousel
          ref={carouselRef}
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2500}
          showStatus={false}
          emulateTouch={true}
          swipeable={true}
          draggable={true}
          renderIndicator={renderIndicator}
          className="carousels select-none h-full"
        >
          <div className="carousel1 item relative w-full h-[367px] bg-x-7rs-fx rounded-[10px] overflow-hidden">
            <div className="w-[100%] h-[100%] flex justify-end items-end">
              <div className="banner-clip-path h-[100%] w-[60%]">
                <img
                  src={Banner3}
                  alt=""
                  className="object-cover object-left w-full bottom-0 h-full"
                />
              </div>
            </div>

            <div className="absolute w-[1250px] h-full top-0 left-[60px]">
              <div className="text-left absolute w-[538px] top-[31px] left-0 font-1440-h1 font-[number:var(--1440-h1-font-weight)] text-ws-j7-it text-[length:var(--1440-h1-font-size)] tracking-[var(--1440-h1-letter-spacing)] leading-[var(--1440-h1-line-height)] [font-style:var(--1440-h1-font-style)]">
                Заголовок баннера <br />в пару строк
              </div>
            </div>

            <div className="hover:bg-[#088269] hover:text-[#fff] text-tx-u7vg duration-200 hover:border-transparent cursor-pointer inline-flex items-center justify-center gap-2.5 px-[30px] py-[11px] absolute top-[272px] left-[245px] rounded-[50px] border border-solid border-[#d5d1e1]">
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                В каталог
              </div>
            </div>

            <button className="hover:bg-[#41ab95] duration-200 cursor-pointer all-[unset] box-border inline-flex items-center justify-center gap-2.5 px-[30px] py-[11px] absolute top-[272px] left-[60px] bg-tx-u7vg rounded-[50px]">
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Запросить цену
              </div>
            </button>

            <p className="text-left absolute w-[379px] top-[162px] left-[60px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ML-tw-1j text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>

          <div className="carousel2 item relative w-full h-[367px] bg-x-7rs-fx rounded-[10px] overflow-hidden">
            <div className="w-[100%] h-[100%] flex justify-end items-end">
              <div className="banner-clip-path h-[100%] w-[60%]">
                <img
                  src={Banner2}
                  alt=""
                  className="object-cover object-left w-full bottom-0 h-full"
                />
              </div>
            </div>

            <div className="absolute w-[1250px] h-full top-0 left-[60px]">
              <div className="text-left absolute w-[538px] top-[31px] left-0 font-1440-h1 font-[number:var(--1440-h1-font-weight)] text-ws-j7-it text-[length:var(--1440-h1-font-size)] tracking-[var(--1440-h1-letter-spacing)] leading-[var(--1440-h1-line-height)] [font-style:var(--1440-h1-font-style)]">
                Заголовок баннера строк
              </div>
            </div>

            <div className="hover:bg-[#088269] hover:text-[#fff] text-tx-u7vg duration-200 hover:border-transparent cursor-pointer inline-flex items-center justify-center gap-2.5 px-[30px] py-[11px] absolute top-[272px] left-[245px] rounded-[50px] border border-solid border-[#d5d1e1]">
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                В каталог
              </div>
            </div>

            <button className="hover:bg-[#41ab95] duration-200 cursor-pointer all-[unset] box-border inline-flex items-center justify-center gap-2.5 px-[30px] py-[11px] absolute top-[272px] left-[60px] bg-tx-u7vg rounded-[50px]">
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Запросить цену
              </div>
            </button>

            <p className="text-left absolute w-[379px] top-[162px] left-[60px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ML-tw-1j text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>

          <div className="carousel3 item relative w-full h-[367px] bg-x-7rs-fx rounded-[10px] overflow-hidden">
            <div className="w-[100%] h-[100%] flex justify-end items-end">
              <div className="banner-clip-path h-[100%] w-[60%]">
                <img
                  src={Banner1}
                  alt=""
                  className="object-cover object-left w-full bottom-0 h-full"
                />
              </div>
            </div>

            <div className="absolute w-[1250px] h-full top-0 left-[60px]">
              <div className="text-left absolute w-[538px] top-[31px] left-0 font-1440-h1 font-[number:var(--1440-h1-font-weight)] text-ws-j7-it text-[length:var(--1440-h1-font-size)] tracking-[var(--1440-h1-letter-spacing)] leading-[var(--1440-h1-line-height)] [font-style:var(--1440-h1-font-style)]">
                Заголовок баннера <br />в пару строк
              </div>
            </div>

            <div className="hover:bg-[#088269] hover:text-[#fff] text-tx-u7vg duration-200 hover:border-transparent cursor-pointer inline-flex items-center justify-center gap-2.5 px-[30px] py-[11px] absolute top-[272px] left-[245px] rounded-[50px] border border-solid border-[#d5d1e1]">
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                В каталог
              </div>
            </div>

            <button className="hover:bg-[#41ab95] duration-200 cursor-pointer all-[unset] box-border inline-flex items-center justify-center gap-2.5 px-[30px] py-[11px] absolute top-[272px] left-[60px] bg-tx-u7vg rounded-[50px]">
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Запросить цену
              </div>
            </button>

            <p className="text-left absolute w-[379px] top-[162px] left-[60px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ML-tw-1j text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>

          <div className="carousel4 item relative w-full h-[367px] bg-x-7rs-fx rounded-[10px] overflow-hidden">
            <div className="w-[100%] h-[100%] flex justify-end items-end">
              <div className="banner-clip-path h-[100%] w-[60%]">
                <img
                  src={Banner4}
                  alt=""
                  className="object-cover object-left w-full bottom-0 h-full"
                />
              </div>
            </div>

            <div className="absolute w-[1250px] h-full top-0 left-[60px]">
              <div className="text-left absolute w-[538px] top-[31px] left-0 font-1440-h1 font-[number:var(--1440-h1-font-weight)] text-ws-j7-it text-[length:var(--1440-h1-font-size)] tracking-[var(--1440-h1-letter-spacing)] leading-[var(--1440-h1-line-height)] [font-style:var(--1440-h1-font-style)]">
                Заголовок баннера <br />в пару строк
              </div>
            </div>

            <div className="hover:bg-[#088269] hover:text-[#fff] text-tx-u7vg duration-200 hover:border-transparent cursor-pointer inline-flex items-center justify-center gap-2.5 px-[30px] py-[11px] absolute top-[272px] left-[245px] rounded-[50px] border border-solid border-[#d5d1e1]">
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                В каталог
              </div>
            </div>

            <button className="hover:bg-[#41ab95] duration-200 cursor-pointer all-[unset] box-border inline-flex items-center justify-center gap-2.5 px-[30px] py-[11px] absolute top-[272px] left-[60px] bg-tx-u7vg rounded-[50px]">
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Запросить цену
              </div>
            </button>

            <p className="text-left absolute w-[379px] top-[162px] left-[60px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ML-tw-1j text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </Carousel>

        <div className="absolute bottom-[33px] right-[60px]">
          <div className="flex w-[92px] h-[41px] items-center gap-2.5 relative ">
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
        </div>
      </div>
    </div>
  );
};
