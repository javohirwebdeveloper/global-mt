import React, {useState, useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import LeftArrow from "../../assets/17--arrow---right.svg";
import { products } from "../../../public/data";
import "slick-carousel/slick/slick-theme.css";
import LikeImg from "../../assets/24--favourites.svg";
import CravnitImg from "../../assets/comparison.svg";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToCompare, addToFavorites } from "../../redux/actions";
import { NavLink } from "react-router-dom";

export const ProductsWrapper = () => {
  const [category, setCategory] = useState("Новинки");

  const cart = useSelector((state) => state.cart);
  const compare = useSelector((state) => state.compare);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToCompare = (product) => {
    dispatch(addToCompare(product));
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  if ((category === "Новинки") | (category === "Реанимация")) {
    var filteredProducts = products.filter(
      (product) => product.category === category
    );
  } else {
    var filteredProducts = products.filter((product) => product.sale === true);
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
    <div
      className={` max-w-[1440px] mt-[150px] bg-color w-full mx-auto overflow-hidden flex items-start py-0 pr-0 pl-[65px] box-border gap-[88px] leading-[normal] tracking-[normal] text-left text-11xl text-[#202020] font-h3 mq450:gap-[22px] mq800:gap-[44px] mq1350:flex-wrap mq1350:pl-5 mq1350:pr-5 mq1350:pb-5 mq1350:box-border`}
    >
      <div className="flex flex-col w-[330px] items-start justify-start pt-0.5 px-0 pb-0">
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <h1 className="m-0 relative text-nowrap text-inherit leading-[120%] font-medium font-inherit mq450:text-lg mq450:leading-[22px] mq800:text-[24px] mq800:leading-[29px]">
            Каталог товаров
          </h1>
          <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[10px] text-base text-gray">
            <div
              onClick={() => setCategory("Реанимация")}
              className={`${
                category === "Реанимация" ? "text-black" : "opacity-50"
              } relative leading-[140%] cursor-pointer font-medium inline-block min-w-[101px]`}
            >
              Хиты продаж
            </div>
            <div
              onClick={() => setCategory("Новинки")}
              className={`${
                category === "Новинки" ? "text-black" : "opacity-50"
              } relative leading-[140%] cursor-pointer font-medium inline-block min-w-[66px]`}
            >
              Новинки
            </div>
            <div
              onClick={() => setCategory("Акции")}
              className={`${
                category === "Акции" ? "text-black" : "opacity-50"
              } relative leading-[140%] cursor-pointer font-medium inline-block min-w-[48px]`}
            >
              Акции
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-start justify-start w-[1310px] text-left text-sm text-teal font-h3 mq800:gap-[20px]">
        <Slider
          ref={sliderRef}
          {...settings}
          className="inline-flex items-start top-0 w-[1310px] h-[522px]"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center gap-5 pt-0 pb-[15px] px-0 relative flex-[0_0_auto] rounded-[10px] border border-solid border-[#e5e2ee]"
            >
              <div className="relative w-80 h-[279px]">
                <div className="relative h-[279px]">
                  <NavLink
                    to={`/product/${product.id}`}
                    className="absolute w-80 bg-[white] h-[279px] top-0 left-0 bg-z-vq-cz-3 border border-solid border-[#e5e2ee]"
                  >
                    <img
                      className="absolute w-80 h-[181px] top-[62px] object-contain"
                      alt="Photo"
                      src={product.img}
                    />
                  </NavLink>
                  <div className="inline-flex justify-between w-[91%] items-center absolute top-[15px] left-[15px]">
                    <div
                      className={`${
                        product.sale === true ? "hidden" : "inline-flex"
                      } ${
                        product.category === "Новинки"
                          ? "inline-flex"
                          : "hidden"
                      } items-center justify-center gap-2 px-2.5 py-1 relative flex-[0_0_auto] bg-[#e1efe6] rounded-[60px] border border-solid border-[#088269]`}
                    >
                      <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[#088269] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                        Новинка
                      </div>
                    </div>
                    <div
                      className={`${
                        (category === "Реанимация") | (category === "Новинки")
                          ? "hidden"
                          : "inline-flex"
                      } ${
                        product.sale === true ? "inline-flex" : "hidden"
                      }  items-center justify-center gap-2 px-2.5 py-1 relative flex-[0_0_auto] bg-[#e1efe6] rounded-[60px] border border-solid border-[#088269]`}
                    >
                      <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[#088269] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                        {product.salePrice}
                      </div>
                    </div>
                    <div className="inline-flex items-start gap-2.5 px-0 py-0.5 relative flex-[0_0_auto]">
                      <img
                        className="relative cursor-pointer w-6 h-6"
                        alt="Card icon"
                        src={CravnitImg}
                      />
                      <img
                        className="relative cursor-pointer w-6 h-6"
                        src={LikeImg}
                        alt=""
                      />
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
                <button
                  onClick={() => handleAddToCart(product)}
                  className="duration-200 hover:bg-tx-u7vg hover:text-white text-tx-u7vg box-border items-start gap-2.5 px-20 py-[11px] relative flex-[0_0_auto] border border-solid border-[#d5d1e1] inline-flex rounded-[50px]"
                >
                  <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                    Добавить в корзину
                  </div>
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="w-[1000px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px] mq800:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button
              onClick={handlePrev}
              className="relative cursor-pointer select-none duration-200 hover:border-[#088269] w-[41px] h-[41px] flex justify-center items-center bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1]"
            >
              <div className="relative w-[17px] h-[17px] rotate-90">
                <img
                  className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                  alt="Element arrow left"
                  src={LeftArrow}
                />
              </div>
            </button>
            <button
              onClick={handleNext}
              className="relative cursor-pointer select-none duration-200 hover:border-[#088269] w-[41px] h-[41px] flex justify-center items-center bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1] rotate-180"
            >
              <div className="relative w-[17px] h-[17px] rotate-90">
                <img
                  className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                  alt="Element arrow right"
                  src={LeftArrow}
                />
              </div>
            </button>
          </div>
          <div className="w-[397px] flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
            <Button
              className="h-[41px] flex-1 min-w-[162px]"
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
              className="h-[41px] w-[138px]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#f8f7f3",
                fontSize: "14",
                background: "#088269",
                borderRadius: "50px",
                "&:hover": { background: "#088269" },
                width: 138,
                height: 41,
              }}
            >
              Все товары
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

