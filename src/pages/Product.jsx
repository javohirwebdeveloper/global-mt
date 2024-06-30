import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../public/data";
import { Button } from "@mui/material";
import StarRatings from "react-star-ratings";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-[1440px] px-[65px] mx-auto w-full">
      <div
        className={` w-full flex flex-row items-start justify-start gap-[60px] leading-[normal] tracking-[normal] text-left text-sm text-[#202020] font-t2 mq725:gap-[30px] mq1050:flex-wrap`}
      >
        <div className="flex-1 rounded-3xs bg-[white] box-border flex flex-row items-start justify-between py-[23px] pr-[26px] pl-6 min-w-[218px] max-w-full gap-[20px] border-[1px] border-solid border-[#E5E2EE] mq725:pt-5 mq725:pb-5 mq725:box-border mq450:flex-wrap">
          <div className="h-[509px] w-[760px] relative rounded-3xs bg-color4 box-border hidden max-w-full border-[1px] border-solid border-color1" />
          <div className="w-40 flex flex-col items-start justify-start gap-[382px]">
            <div className="w-[79px] rounded-[60px] bg-honeydew box-border flex flex-row items-start justify-start py-0.5 px-[9px] z-[1] border-[1px] border-solid border-color3">
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[59px]">
                Новинка
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
              <div className="h-[50px] flex-1 relative rounded-8xs bg-gray-100 box-border z-[1] border-[1px] border-solid border-color3">
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-100 box-border w-full h-full hidden border-[1px] border-solid border-color3" />
                <img
                  className="absolute h-[68%] w-[68%] top-[16%] right-[16%] bottom-[16%] left-[16%] max-w-full overflow-hidden max-h-full object-cover mix-blend-multiply z-[1]"
                  loading="lazy"
                  alt=""
                  src="/photo@2x.png"
                />
              </div>
              <div className="h-[50px] flex-1 relative rounded-8xs bg-gray-100 box-border z-[1] border-[1px] border-solid border-lavender">
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-100 box-border w-full h-full hidden border-[1px] border-solid border-lavender" />
                <img
                  className="absolute h-[68%] w-[68%] top-[16%] right-[16%] bottom-[16%] left-[16%] max-w-full overflow-hidden max-h-full object-cover mix-blend-multiply z-[1]"
                  loading="lazy"
                  alt=""
                  src="/photo-1@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-start relative">
                <img
                  className="h-[413px] w-[413px] absolute !m-[0] top-[-389px] right-[-401px] object-cover mix-blend-multiply z-[1]"
                  loading="lazy"
                  alt=""
                  src="/photo-2@2x.png"
                />
                <div className="h-[50px] flex-1 relative rounded-8xs bg-gray-100 box-border z-[2] border-[1px] border-solid border-lavender">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-100 box-border w-full h-full hidden border-[1px] border-solid border-lavender" />
                  <img
                    className="absolute h-[68%] w-[68%] top-[16%] right-[16%] bottom-[16%] left-[16%] max-w-full overflow-hidden max-h-full object-cover mix-blend-multiply z-[1]"
                    alt=""
                    src="/photo-3@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                loading="lazy"
                alt=""
                src="/24-comparison.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                loading="lazy"
                alt=""
                src="/24-favourites.svg"
              />
            </div>
          </div>
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
                  <div className="relative">Категория: {product.category}</div>
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
              <div className="self-stretch h-px relative box-border opacity-[0.8] border-t-[1px] border-solid border-color1" />
              <div className="w-[461px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[15px] max-w-full">
                <div className="relative leading-[140%] font-medium inline-block min-w-[70px]">
                  О товаре
                </div>
                <div className="self-stretch relative text-xs font-medium opacity-80 text-[#202020] whitespace-pre-wrap">
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      {/* Add other product details here */}
    </div>
  );
};

export default Product;
