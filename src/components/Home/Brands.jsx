import React, {useState, useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/17--arrow---right.svg";
import { brands } from "../../../public/data";
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
    <div className="absolute w-[1440px] h-[361px] top-[4563px] left-0 bg-x-1l-ubo-z overflow-hidden">
      <div className="w-[980px] top-80 left-[395px] absolute h-[41px]">
        <div className="inline-flex items-center gap-2.5 absolute top-0 left-0">
          <div onClick={handlePrev} className="cursor-pointer select-none duration-200 hover:border-[#088269] relative w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1]">
            <div className="relative w-[17px] h-[17px] top-3 left-3 rotate-90">
              <img
                className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                alt="Element arrow right"
                src={LeftArrow}
              />
            </div>
          </div>
          <div onClick={handleNext} className="cursor-pointer select-none duration-200 hover:border-[#088269] relative w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1] rotate-180">
            <div className="relative w-[17px] h-[17px] top-3 left-3 rotate-90">
              <img
                className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                alt="Element arrow right"
                src={LeftArrow}
              />
            </div>
          </div>
        </div>
        <button className="border border-transparent hover:border-[#088269] hover:text-[#088269] hover:bg-white duration-200 cursor-pointer text-x-1l-ubo-z box-border inline-flex gap-2.5 px-[30px] py-[11px] absolute top-0 left-[825px] bg-tx-u7vg items-center justify-center rounded-[50px]">
          <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
            Сертификаты
          </div>
        </button>
      </div>
      <Slider ref={sliderRef} {...settings} className=" w-[1310px] h-[280px] inline-flex items-start gap-2.5 absolute top-0 left-[395px]">
        {brands.map((brand, index) => (<div key={index} className="relative w-[322px] h-[280px]">
          <div className="relative w-80 h-[280px] bg-x-1l-ubo-z rounded-[10px] border border-solid border-[#e5e2ee]">
            <div className="absolute w-80 h-[196px] top-0 left-0 bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]">
              <img
                className="absolute w-[217px] h-[102px] top-[45px] left-[50px] object-cover"
                alt="Cropped"
                src={brand.img}
              />
            </div>
            <p className="absolute w-[226px] top-[215px] left-6 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              {brand.name}
            </p>
          </div>
        </div>))}
      </Slider>
      <div className="absolute w-[220px] h-[22px] top-[60px] left-[65px] opacity-50 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
        Эксклюзивные поставщики
      </div>
      <div className="absolute h-9 -top-px left-[65px] font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-ws-j7-it text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] whitespace-nowrap [font-style:var(--1440-h2-font-style)]">
        Бренды
      </div>
    </div>
  );
};