import React, {useState, useRef} from "react";
import Slider from "react-slick";
import LeftArrow from "../../assets/17--arrow---right.svg";
import "slick-carousel/slick/slick.css";
import Rectangle1 from '../../assets/rectangle-1.png'
import Rectangle2 from '../../assets/rectangle-2.png'
import Rectangle3 from '../../assets/rectangle-3.png'
import Rectangle4 from '../../assets/rectangle-4.png'
import "slick-carousel/slick/slick-theme.css";
export const News = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
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
    <div className="absolute w-[1440px] h-[546px] top-[5892px] left-0 bg-x-1l-ubo-z overflow-hidden">
      <div className="absolute w-[980px] h-[41px] top-[505px] left-[395px]">
        <button className="hover:border-tx-u7vg hover:bg-transparent border text-x-1l-ubo-z hover:text-tx-u7vg border-transparent duration-200 box-border inline-flex gap-2.5 px-[30px] py-[11px] absolute top-0 left-[835px] bg-tx-u7vg items-center justify-center rounded-[50px]">
          <div className=" text-nowrap relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)]  text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
            Все новости
          </div>
        </button>
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
      </div>
      <Slider ref={sliderRef} {...settings} className=" w-[1310px] h-[465px] inline-flex items-start gap-2.5 absolute top-0 left-[395px]">
        <div className="relative w-[322px] h-[465px]">
          <div className="relative w-80 h-[465px] rounded-[10px] border border-solid border-[#e5e2ee]">
            <p className="absolute w-[270px] h-11 top-[400px] left-3.5 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ML-tw-1j text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Допускает внедрение поэтапного и развития общества.
            </p>
            <img className="absolute w-80 h-80 -top-px -left-px object-cover" alt="Rectangle" src={Rectangle1} />
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
            <img className="absolute w-80 h-80 -top-px -left-px object-cover" alt="Rectangle" src={Rectangle2} />
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
            <img className="absolute w-80 h-80 -top-px -left-px object-cover" alt="Rectangle" src={Rectangle3} />
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
            <img className=" w-80 h-80 object-cover" alt="Rectangle" src={Rectangle4} />
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
      <div className="absolute w-[195px] h-[72px] -top-px left-[65px] font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-ws-j7-it text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] [font-style:var(--1440-h2-font-style)]">
        Новости компании
      </div>
    </div>
  );
};