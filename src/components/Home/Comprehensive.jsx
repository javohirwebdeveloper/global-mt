import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo1 from "../../assets/photo-2.png";
import Photo2 from "../../assets/photo-3.png";
import LeftArrow from "../../assets/17--arrow---right.svg";
import Photo3 from "../../assets/photot.png";

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
    <div className="absolute w-[1310px] h-[739px] top-[1539px] left-[65px] bg-x-1l-ubo-z overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="carousel inline-flex items-start gap-2.5 absolute top-[79px] left-0">
        <div className="carousel-item relative w-[432px] h-[579px]">
          <div className="relative w-[430px] h-[579px] rounded-[10px] overflow-hidden border border-solid border-[#e5e2ee]">
            <img className="absolute w-[430px] h-[517px] -top-px -left-px object-cover" alt="Photo" src={Photo1} />
            <div className="absolute h-[22px] top-[536px] left-6 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]">
              Экспресс лаборатория
            </div>
          </div>
        </div>
        <div className="carousel-item relative w-[432px] h-[579px]">
          <div className="relative w-[430px] h-[579px] rounded-[10px] overflow-hidden border border-solid border-[#e5e2ee]">
            <img className="absolute w-[430px] h-[517px] -top-px -left-px object-cover" alt="Photo" src={Photo2} />
            <div className="absolute h-[22px] top-[536px] left-6 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]">
              Лазерная терапия
            </div>
          </div>
        </div>
        <div className="carousel-item relative w-[432px] h-[579px] mr-[-2.00px]">
          <div className="relative w-[430px] h-[579px] rounded-[10px] overflow-hidden border border-solid border-[#e5e2ee]">
            <img className="absolute w-[430px] h-[517px] -top-px -left-px object-cover" alt="Photot" src={Photo3} />
            <div className="absolute h-[22px] top-[536px] left-6 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]">
              Операционный блок
            </div>
          </div>
        </div>
      </Slider>
      <div className="w-[1310px] top-[698px] left-0 absolute h-[41px]">
        <button className="w-[216px] box-border h-[41px] hover:bg-[#41AB95] duration-200 flex absolute top-0 left-[1094px] bg-tx-u7vg items-center justify-center rounded-[50px]">
          <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
            Рассчитать стоимость
          </div>
        </button>
        <div className="aroows inline-flex items-center gap-2.5 absolute top-0 left-0">
          <button onClick={handlePrev} className="relative flex justify-center items-center cursor-pointer select-none duration-200 hover:border-[#088269] w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1]">
            <div className="relative w-[17px] h-[17px] rotate-90">
              <img
                className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                alt="Element arrow right"
                src={LeftArrow}
              />
            </div>
          </button>
          <button onClick={handleNext} className="relative  flex justify-center items-center cursor-pointer select-none duration-200 hover:border-[#088269]  w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1] rotate-180">
            <div className="relative w-[17px] h-[17px] rotate-90">
              <img
                className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                alt="Element arrow right"
                src={LeftArrow}
              />
            </div>
          </button>
        </div>
        <button className="all-[unset] cursor-pointer box-border inline-flex gap-2.5 px-[30px] py-[11px] absolute top-0 left-[843px] border border-solid border-[#d5d1e1] items-center justify-center rounded-[50px]">
          <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-tx-u7vg text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
            Бесплатная консультация
          </div>
        </button>
      </div>
      <div className="absolute h-9 -top-px left-0 font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-ws-j7-it text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] whitespace-nowrap [font-style:var(--1440-h2-font-style)]">
        Комплексное оснащение кабинетов
      </div>
    </div>
  );
};