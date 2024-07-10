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
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();
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
      className="max-w-[1440px] h-[367px] rounded-[10px]  mt-[20px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto"
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
          <div className="carousel1 item relative w-full mq765:h-[406px] h-[367px] bg-x-7rs-fx rounded-[10px] overflow-hidden flex flex-col md:flex-row">
            <div className="carousel-content w-full md:w-1/2 h-full flex flex-col justify-center items-start p-4 md:p-8">
              <div className="text-left xl:text-[48px] font-1440-h1 font-bold text-ws-j7-it text-2xl md:text-4xl">
                Заголовок баннера <br />в пару строк
              </div>
              <p className="text-left max-w-[379px] xl:mt-[20px] xl:mb-[40px] font-1440-t1 font-medium text-ML-tw-1j mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="mt-8 flex gap-[10px] md:gap-4">
                <button className="hover:bg-[#41ab95] flex justify-center items-center w-[147px] h-[33px] text-nowrap duration-200 cursor-pointer bg-tx-u7vg rounded-full text-white">
                  Запросить цену
                </button>
                <button
                  onClick={() => navigate(`/Каталог`)}
                  className="hover:bg-[#088269] text-nowrap hover:text-[#fff] w-[147px] h-[33px] flex justify-center items-center duration-200 cursor-pointer border border-[#d5d1e1] rounded-full text-tx-u7vg"
                >
                  В каталог
                </button>
              </div>
            </div>
            <div className="carousel-image banner-clip-path w-full md:w-1/2 h-full flex justify-center items-center">
              <img
                src={Banner3}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="carousel1 item relative w-full mq765:h-[406px] h-[367px] bg-x-7rs-fx rounded-[10px] overflow-hidden flex flex-col md:flex-row">
            <div className="carousel-content w-full md:w-1/2 h-full flex flex-col justify-center items-start p-4 md:p-8">
              <div className="text-left xl:text-[48px] font-1440-h1 font-bold text-ws-j7-it text-2xl md:text-4xl">
                Заголовок баннера <br />в пару строк
              </div>
              <p className="text-left max-w-[379px] xl:mt-[20px] xl:mb-[40px] font-1440-t1 font-medium text-ML-tw-1j mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="mt-8 flex gap-[10px] md:gap-4">
                <button className="hover:bg-[#41ab95] xl:!h-[41px] flex justify-center items-center w-[147px] h-[33px] text-nowrap duration-200 cursor-pointer bg-tx-u7vg rounded-full text-white">
                  Запросить цену
                </button>
                <button
                  onClick={() => navigate(`/Каталог`)}
                  className="hover:bg-[#088269] text-nowrap hover:text-[#fff] w-[147px] h-[33px] flex justify-center items-center duration-200 cursor-pointer border border-[#d5d1e1] rounded-full text-tx-u7vg"
                >
                  В каталог
                </button>
              </div>
            </div>
            <div className="carousel-image banner-clip-path w-full md:w-1/2 h-full flex justify-center items-center">
              <img
                src={Banner2}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="carousel1 item relative w-full mq765:h-[406px] h-[367px] bg-x-7rs-fx rounded-[10px] overflow-hidden flex flex-col md:flex-row">
            <div className="carousel-content w-full md:w-1/2 h-full flex flex-col justify-center items-start p-4 md:p-8">
              <div className="text-left xl:text-[48px] font-1440-h1 font-bold text-ws-j7-it text-2xl md:text-4xl">
                Заголовок баннера <br />в пару строк
              </div>
              <p className="text-left max-w-[379px] xl:mt-[20px] xl:mb-[40px] font-1440-t1 font-medium text-ML-tw-1j mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="mt-8 flex gap-[10px] md:gap-4">
                <button className="hover:bg-[#41ab95] flex justify-center items-center w-[147px] h-[33px] text-nowrap duration-200 cursor-pointer bg-tx-u7vg rounded-full text-white">
                  Запросить цену
                </button>
                <button
                  onClick={() => navigate(`/Каталог`)}
                  className="hover:bg-[#088269] text-nowrap hover:text-[#fff] w-[147px] h-[33px] flex justify-center items-center duration-200 cursor-pointer border border-[#d5d1e1] rounded-full text-tx-u7vg"
                >
                  В каталог
                </button>
              </div>
            </div>
            <div className="carousel-image banner-clip-path w-full md:w-1/2 h-full flex justify-center items-center">
              <img
                src={Banner1}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="carousel1 item relative w-full mq765:h-[406px] h-[367px] bg-x-7rs-fx rounded-[10px] overflow-hidden flex flex-col md:flex-row">
            <div className="carousel-content w-full md:w-1/2 h-full flex flex-col justify-center items-start p-4 md:p-8">
              <div className="text-left xl:text-[48px] font-1440-h1 font-bold text-ws-j7-it text-2xl md:text-4xl">
                Заголовок баннера <br />в пару строк
              </div>
              <p className="text-left max-w-[379px] xl:mt-[20px] xl:mb-[40px] font-1440-t1 font-medium text-ML-tw-1j mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="mt-8 flex gap-[10px] md:gap-4">
                <button className="hover:bg-[#41ab95] flex justify-center items-center w-[147px] h-[33px] text-nowrap duration-200 cursor-pointer bg-tx-u7vg rounded-full text-white">
                  Запросить цену
                </button>
                <button
                  onClick={() => navigate(`/Каталог`)}
                  className="hover:bg-[#088269] text-nowrap hover:text-[#fff] w-[147px] h-[33px] flex justify-center items-center duration-200 cursor-pointer border border-[#d5d1e1] rounded-full text-tx-u7vg"
                >
                  В каталог
                </button>
              </div>
            </div>
            <div className="carousel-image banner-clip-path w-full md:w-1/2 h-full flex justify-center items-center">
              <img
                src={Banner4}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </Carousel>

        <div className="absolute mq780:hidden bottom-[33px] right-[60px]">
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
