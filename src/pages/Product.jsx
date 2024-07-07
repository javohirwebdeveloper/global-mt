import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../public/data";
import { Button } from "@mui/material";
import StarRatings from "react-star-ratings";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Product.css";
import Specifications from "../components/Product/Specifications";
import { ProductsWrapper } from "../components/Home/ProductsWrapper";
import { Comprehensive } from "../components/Home/Comprehensive";
import { Brands } from "../components/Home/Brands";
import TopCate from "../components/Product/TopCate";
import { Subscription } from "../components/Home/Subscription";
import { Footer } from "../components/Home/Footer";
const Product = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  const carouselRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const renderIndicator = (clickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <div
          onClick={clickHandler}
          onKeyDown={clickHandler}
          value={index}
          key={index}
          role="button"
          tabIndex={0}
          aria-label={`Slide ${index + 1}`}
          title={`Slide ${index + 1}`}
          className=" border-[#088269] border-[2px] w-[50px] h-[50px] cursor-pointer duration-200 overflow-hidden flex justify-center items-center rounded-[5px]"
        >
          <img src={product.img} className="w-[34px] h-[34px]" alt="" />
        </div>
      );
    }
    return (
      <div
        onClick={clickHandler}
        onKeyDown={clickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`Slide ${index + 1}`}
        title={`Slide ${index + 1}`}
        className=" border-[#D5D1E1] border-[2px] w-[50px] h-[50px] cursor-pointer duration-200 overflow-hidden flex justify-center items-center rounded-[5px]"
      >
        <img src={product.img} className="w-[34px] h-[34px]" alt="" />
      </div>
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

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div className="max-w-[1440px]  xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full">
        <div
          className={` w-full flex flex-row items-start justify-start gap-[60px] leading-[normal] tracking-[normal] text-left text-sm text-[#202020] font-t2 mq725:gap-[30px] mq1050:flex-wrap`}
        >
          <div className="max-w-[760px] w-full h-[509px]">
            <div className="z-40 absolute ml-[25px] mt-[25px]">
              <div
                className={`${
                  product.sale === true ? "inline-flex" : "hidden"
                }  items-center  justify-center gap-2 px-2.5 py-1 flex-[0_0_auto] bg-[#e1efe6] rounded-[60px] border border-solid border-[#088269]`}
              >
                <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[#088269] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                  {product.salePrice}
                </div>
              </div>
              <div
                className={`${
                  product.category === "Новинки" ? "inline-flex" : "hidden"
                }  items-center justify-center gap-2 px-2.5 ml-3 py-1 flex-[0_0_auto] bg-[#e1efe6] rounded-[60px] border border-solid border-[#088269]`}
              >
                <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[#088269] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                  Новинка
                </div>
              </div>
            </div>
            <Carousel
              ref={carouselRef}
              showArrows={false}
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              emulateTouch={true}
              swipeable={true}
              draggable={true}
              renderIndicator={renderIndicator}
              className="max-w-[760px] carousels w-full h-[509px] rounded-3xs select-none bg-[white] box-border flex flex-row items-start justify-between py-[23px] pr-[26px] pl-6 min-w-[218px] border-[1px] border-solid border-[#E5E2EE] mq725:pt-5 mq725:pb-5 mq725:box-border mq450:flex-wrap"
            >
              <img
                src={product.img}
                alt=""
                className="item max-w-[413px] w-full max-h-[413px]"
              />
              <img
                src={product.img}
                alt=""
                className="item max-w-[413px] w-full max-h-[413px]"
              />
              <img
                src={product.img}
                alt=""
                className="item max-w-[413px] w-full max-h-[413px]"
              />
            </Carousel>
          </div>
          <div className="w-[492px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border min-w-[492px] max-w-full text-11xl text-[#202020] mq725:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[22px] pl-0 gap-[15px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                    <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-inherit whitespace-pre-wrap mq450:text-lg mq450:leading-[22px] mq1000:text-[24px] mq1000:leading-[29px]">
                      Анализатор мочи MIND UA-66
                    </h1>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-xs text-[#202020]">
                      <StarRatings
                        rating={product.rating}
                        starDimension="18px"
                        starRatedColor="#FFAC0C"
                        starSpacing="3px"
                      />
                      <div className="relative font-medium inline-block min-w-[18px]">
                        {product.rating}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px] text-xs text-[#7A7687]">
                    <div className="relative">
                      Категория: {product.category}
                    </div>
                    <div className="relative">
                      {`Производитель: `}
                      <span className="[text-decoration:underline]">Lorem</span>
                    </div>
                    <div className="relative inline-block min-w-[90px]">
                      Артикул: {product.vendor}
                    </div>
                    <div className="relative inline-block min-w-[58px]">
                      В наличии
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-lg font-semibold">
                  {product.price}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-[10px] text-sm text-[#202020] mq450:flex-wrap">
                <div className="w-24 rounded-[50px] box-border flex flex-row items-start justify-start py-[9px] px-[19px] gap-[15px] border-[1px] border-solid border-lavender">
                  <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                    <img
                      className="w-2.5 h-2.5 relative"
                      loading="lazy"
                      alt=""
                      src="/10-minus.svg"
                    />
                  </div>
                  <div className="relative font-semibold inline-block min-w-[6px]">
                    1
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                    <img
                      className="w-2.5 h-2.5 relative"
                      loading="lazy"
                      alt=""
                      src="/10-plus.svg"
                    />
                  </div>
                </div>
                <Button
                  className="h-[41px] w-[162px]"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#088269",
                    fontSize: "14",
                    borderColor: "#d5d1e1",
                    borderRadius: "50px",
                    "&:hover": { borderColor: "#d5d1e1" },
                    width: 162,
                    height: 41,
                  }}
                >
                  Задать вопрос
                </Button>
                <Button
                  className="h-[41px] flex-1 min-w-[139px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#f8f7f3",
                    fontSize: "14",
                    background: "#088269",
                    borderRadius: "50px",
                    "&:hover": { background: "#088269" },
                    height: 41,
                  }}
                >
                  Добавить в корзину
                </Button>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[12px] max-w-full text-base">
                <div className="self-stretch h-px relative box-border opacity-[0.8] border-t-[1px] border-solid border-[#E5E2EE]" />
                <div className="w-[461px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[15px] max-w-full">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[70px]">
                    О товаре
                  </div>
                  <div className="self-stretch relative text-xs font-medium opacity-80 text-[#202020] whitespace-pre-wrap">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Specifications />
      </div>
      <ProductsWrapper />
      <div className="mx-auto w-[1440px]">
        <Comprehensive />
      </div>
      <TopCate />
      <Brands />
      <Subscription />
      <Footer />
    </>
  );
};

export default Product;
