import React, {useState, useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import LeftArrow from "../../assets/17--arrow---right.svg";
import { categories, products, brands } from "../../../public/data";
import "slick-carousel/slick/slick-theme.css";
export const ProductsWrapper = () => {
  const [category, setCategory] = useState("Новинки");


  if (category === "Новинки" | category === "Реанимация") {
  var filteredProducts = products.filter(product => product.category === category);
}else {
  var filteredProducts = products.filter(product => product.sale === true);

}

   const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
    <div className="absolute w-[1440px] h-[603px] top-[2974px] left-0 bg-x-1l-ubo-z overflow-hidden">
       <div className="w-[980px] top-[562px] left-[395px] absolute h-[41px]">
      <button className="all-[unset] w-[138px] duration-200 cursor-pointer hover:bg-[#41AB95] h-[41px] box-border inline-flex gap-2.5 px-[30px] py-[11px] absolute top-0 left-[842px] bg-tx-u7vg items-center justify-center rounded-[50px]">
        <div className="relative text-nowrap mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Все товары
        </div>
      </button>
      <div className="inline-flex items-center gap-2.5 absolute top-0 left-0">
        <button onClick={handlePrev} className="relative cursor-pointer select-none duration-200 hover:border-[#088269] w-[41px] h-[41px] flex justify-center items-center bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1]">
          <div className="relative w-[17px] h-[17px] rotate-90">
            <img
              className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
              alt="Element arrow left"
              src={LeftArrow}
            />
          </div>
        </button>
        <button onClick={handleNext} className="relative cursor-pointer select-none duration-200 hover:border-[#088269] w-[41px] h-[41px] flex justify-center items-center bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1] rotate-180">
          <div className="relative w-[17px] h-[17px] rotate-90">
            <img
              className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
              alt="Element arrow right"
              src={LeftArrow}
            />
          </div>
        </button>
      </div>
      <button className="all-[unset] duration-200 hover:bg-tx-u7vg hover:text-white text-tx-u7vg cursor-pointer box-border flex w-[249px] gap-2.5 px-[30px] py-[11px] absolute top-0 left-[583px] border border-solid border-[#d5d1e1] items-center justify-center rounded-[50px]">
        <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Бесплатная консультация
        </div>
      </button>
    </div>
      <Slider ref={sliderRef} {...settings} className="inline-flex items-start gap-3 absolute top-0 left-[395px] w-[1310px] h-[522px]">
      {filteredProducts.map((product, index) => (<div key={index} className="inline-flex flex-col items-center gap-5 pt-0 pb-[15px] px-0 relative flex-[0_0_auto] rounded-[10px] border border-solid border-[#e5e2ee]">
      <div className="relative w-80 h-[279px]">
        <div className="relative h-[279px]">
          <div className="absolute w-80 h-[279px] top-0 left-0 bg-z-vq-cz-3 border border-solid border-[#e5e2ee]">
            <img
              className="absolute w-[181px] h-[181px] top-[62px] left-[62px] object-cover"
              alt="Photo"
              src={product.img}
            />
          </div>
          <div className="inline-flex items-center gap-[153px] absolute top-[15px] left-[15px]">
            <div className={`${product.category === "Новинки" ? 'inline-flex' : 'hidden'}  items-center justify-center gap-2 px-2.5 py-1 relative flex-[0_0_auto] bg-[#e1efe6] rounded-[60px] border border-solid border-[#088269]`} >
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[#088269] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Новинка
              </div>
            </div>
            <div className="inline-flex items-start gap-2.5 px-0 py-0.5 relative flex-[0_0_auto]">
              <img className="relative w-6 h-6" alt="Card icon" src="comparison.svg" />
              <div className="relative w-6 h-6 bg-[url(/favourites.svg)] bg-[100%_100%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex pt-[20px] pl-[15px] flex-col items-start gap-[15px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[30px] pl-[3px] pr-0 py-0 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[277px] mt-[-1.00px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-ws-j7-it text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
              {product.name}
            </div>
            <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
              <div className="mt-[-1.00px] font-1440-t3 font-[number:var(--1440-t3-font-weight)] text-ML-tw-1j text-[length:var(--1440-t3-font-size)] relative w-fit tracking-[var(--1440-t3-letter-spacing)] leading-[var(--1440-t3-line-height)] [font-style:var(--1440-t3-font-style)]">
                Артикул: {product.vendor}
              </div>
              <div className="relative w-fit font-1440-t3 font-[number:var(--1440-t3-font-weight)] text-ML-tw-1j text-[length:var(--1440-t3-font-size)] tracking-[var(--1440-t3-letter-spacing)] leading-[var(--1440-t3-line-height)] [font-style:var(--1440-t3-font-style)]">
                В наличии
              </div>
            </div>
          </div>
          <div className="relative w-fit font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-ws-j7-it text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
            {product.price}
          </div>
        </div>
        <button className="all-[unset] box-border items-start gap-2.5 px-20 py-[11px] relative flex-[0_0_auto] border border-solid border-[#d5d1e1] inline-flex rounded-[50px]">
          <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-tx-u7vg text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
            Добавить в корзину
          </div>
        </button>
      </div>
    </div>))}
    </Slider>
      <div className="inline-flex flex-col items-start gap-2.5 absolute top-[78px] left-[65px]">
      <div onClick={() => setCategory('Реанимация')} className={`relative cursor-pointer w-fit mt-[-1.00px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] ${category === 'Реанимация' ? 'text-black' : 'opacity-50'} hover:text-black duration-200 text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]`}>
        Хиты продаж
      </div>
      <div onClick={() => setCategory('Новинки')} className={` relative cursor-pointer w-fit font-1440-t1 font-[number:var(--1440-t1-font-weight)] ${category === 'Новинки' ? 'text-black' : 'opacity-50'} hover:text-black duration-200 text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]`}>
        Новинки
      </div>
      <div onClick={() => setCategory('Акции')} className={`relative cursor-pointer w-fit font-1440-t1 font-[number:var(--1440-t1-font-weight)] ${category === 'Акции' ? 'text-black' : 'opacity-50'} hover:text-black duration-200 text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]`}>
        Акции
      </div>
    </div>
      <div className="absolute h-9 top-px left-[65px] font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-ws-j7-it text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] whitespace-nowrap [font-style:var(--1440-h2-font-style)]">
        Каталог товаров
      </div>
    </div>
  );
};