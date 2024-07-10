import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LikeImg from "../assets/24--favourites.svg";
import LikeImg1 from "../assets/24--favourites1.svg";
import CravnitImg from "../assets/comparison.svg";
import { products } from "../../public/data";
import RightI from "../assets/Blog/right.svg";
import { Button } from "@mui/material";
import FilterImg from "../assets/filter.svg";
import { addToFavorites, removeFromFavorites } from "../redux/actions";
import { addToCart, addToCompare } from "../redux/actions";
import { Comprehensive } from "../components/Home/Comprehensive";
import { ProductsWrapper } from "../components/Stock/ProductsWrapper";
import { ProductsWrapper1 } from "../components/Stock/ProductsWrapper1";
import { Brands } from "../components/Home/Brands";
import { Form } from "../components/Home/Form";
import { Subscription } from "../components/Home/Subscription";
import Right1x from "../assets/right1x.svg";
import Right2x from "../assets/right2x.svg";
import Left1x from "../assets/left1x.svg";
import Left2x from "../assets/left2x.svg";
import { Footer } from "../components/Home/Footer";
const Stock = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleFavoriteClick = (product) => {
    dispatch(addToFavorites(product));
  };
  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  const isFavorite = (productId) => {
    return favorites.some((product) => product.id === productId);
  };

  const Product = products.filter((product) => product.type === 3);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <div
        className={`max-w-[1440px] xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-row items-start justify-start gap-[10px] leading-[normal] tracking-[normal] text-left text-base text-[#202020] font-h3 mq765:flex-col `}
      >
        <div className="w-full mq765:flex hidden justify-center items-center gap-2 border border-[#E5E2EE] rounded-[5px] h-[41px]">
          <img src={FilterImg} className="w-[17px] h-[17px]" alt="" />
          <span>Фильтр</span>
        </div>
        <div className="xl:w-80 mq765:hidden md:w-[236px] rounded-3xs box-border flex flex-col items-start justify-start pt-[13px] pb-[18px] pr-[13px] pl-[19px] gap-[15px] border-[1px] border-solid border-[#E5E2EE]">
          <div className="relative leading-[140%] font-medium inline-block min-w-[82px] z-[1]">
            Категории
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pr-1.5 pl-0">
            <div className="h-px flex-1 relative bg-[#E5E2EE] z-[1]" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-sm">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
              <div className="relative inline-block min-w-[105px]">
                Группы товаров
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                loading="lazy"
                alt=""
                src={RightI}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
              <div className="relative inline-block min-w-[70px]">Мониторы</div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                alt=""
                src={RightI}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
              <div className="relative inline-block min-w-[45px]">Лампы</div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                alt=""
                src={RightI}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
              <div className="relative inline-block min-w-[56px]">Кровати</div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                alt=""
                src={RightI}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
              <div className="relative inline-block min-w-[65px]">Рентгены</div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                alt=""
                src={RightI}
              />
            </div>
          </div>
        </div>
        <div>
          <main className="w-full grid  xl:grid-cols-3 grid-cols-2 gap-[10px_8px]">
            {Product.map((product) => (
              <div key={product.id}>
                <div className="xl:w-80 md:w-[236px] w-[168px] flex flex-row items-start justify-start text-left text-sm text-[#202020]3 font-l1">
                  <div className=" xl:w-80 md:w-[236px] w-[168px] flex-1 rounded-3xs flex flex-col items-start justify-start pt-0 px-0 pb-[13px] gap-[20px] border-[1px]  border-solid border-[#E5E2EE]">
                    <div className="xl:w-80 md:w-[236px] w-[168px] self-stretch rounded-t-3xs rounded-b-none bg-color flex flex-col items-start justify-start pt-[13px] px-3.5 pb-[33px] gap-[21px] z-[1] border-[1px] border-solid border-[#E5E2EE]">
                      <div className="self-stretch flex flex-row items-center w-full justify-between xl:pr-0 md:pr-[10px] pr-[7px]">
                        <div
                          className={`${
                            product.type === 1 ? "" : "hidden"
                          } w-[79px] h-[27px] rounded-41xl text-[#088269] border-[#088269] bg-[#E1EFE6] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                        >
                          Новинка
                        </div>
                        <div
                          className={`${
                            product.type === 2 ? "" : "hidden"
                          } w-[100px] h-[27px] rounded-41xl text-[#59599A] border-[#59599A] bg-[#E6E6FD] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                        >
                          Хит продаж
                        </div>
                        <div
                          className={`${
                            product.type === 3 ? "" : "hidden"
                          } xl:w-[55px] xl:h-[27px] w-[46px] h-[21px] xl:text-[14px] text-[12px] rounded-41xl text-[#AD7B00] border-[#AD7B00] bg-[#FFE095] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                        >
                          -30%
                        </div>
                        <div className="xl:w-[58px] w-[44px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                          <div className="self-stretch h-4 xl:h-6 relative">
                            <img
                              className="absolute cursor-pointer top-[0px] left-2 xl:left-[0px] xl:w-6 xl:h-6 w-[18px] h-[18px] overflow-hidden z-[2]"
                              loading="lazy"
                              alt=""
                              src={CravnitImg}
                            />
                            <img
                              className="absolute cursor-pointer top-[0px] left-[34px] xl:w-6 xl:h-6 w-[20px] h-[18px] overflow-hidden z-[2]"
                              loading="lazy"
                              alt=""
                              src={isFavorite(product.id) ? LikeImg1 : LikeImg}
                              onClick={() => {
                                if (isFavorite(product.id)) {
                                  handleRemoveFromFavorites(product.id);
                                } else {
                                  handleFavoriteClick(product);
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-12 mq450:pl-5 mq450:pr-5 mq450:box-border">
                        <img
                          className="xl:h-[181px] xl:w-[181px] md:w-[124px] md:h-[124px] w-[114px] h-[114px] relative object-cover mix-blend-multiply z-[2]"
                          loading="lazy"
                          alt=""
                          src={product.img}
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 text-lg text-[#202020]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                        <div className="w-full flex flex-row items-start justify-start py-0 px-[3px] box-border">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] z-[2]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                              <div className="self-stretch text-[16px] xl:text-[18px] relative font-semibold">
                                <p className="m-0">Анализатор мочи</p>
                                <p className="m-0">MIND UA-66</p>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[5px] text-xs text-[#7A7687]">
                                <div className="relative inline-block min-w-[90px]">
                                  Артикул: {product.vendor}
                                </div>
                                <div className="relative inline-block min-w-[58px]">
                                  В наличии
                                </div>
                              </div>
                            </div>
                            <div className="relative font-semibold inline-block min-w-[112px]">
                              {product.price}
                            </div>
                          </div>
                        </div>
                        <Button
                          className="self-stretch xl:text-[14px] text-[12px] text-nowrap xl:w-[296px] md:w-[220px] w-[148px] h-[33px] xl:h-[41px] text-[#088269] z-[2]"
                          disableElevation
                          onClick={() => handleAddToCart(product)}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#088269",
                            borderColor: "#d5d1e1",
                            borderRadius: "50px",
                            "&:hover": { borderColor: "#d5d1e1" },
                          }}
                        >
                          Добавить в корзину
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </main>
          <div className="self-stretch mt-[40px] max-w-[328px] mx-auto w-full flex flex-row items-start justify-center py-0 px-5 box-border text-sm">
            <div className="w-[328px] flex flex-row items-start justify-start gap-[5px] max-w-full">
              <div className="h-8 w-8 rounded-lg bg-[#ffffff] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE]">
                <img
                  className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={Left2x}
                />
              </div>
              <div className="h-8 w-8 rounded-lg bg-[#ffffff] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE]">
                <img
                  className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={Left1x}
                />
              </div>
              <div className="rounded-lg bg-[#088269] flex flex-row items-start justify-start py-[6.5px] px-[13px] text-color">
                <div className="relative font-semibold inline-block min-w-[6px]">
                  1
                </div>
              </div>
              <div className="flex-[0.6] rounded-lg bg-[#FFFFFF] flex flex-row items-start justify-start py-[5px] pr-2.5 pl-[11px] border-[1px] border-solid border-[#E5E2EE]">
                <div className="relative font-semibold inline-block min-w-[9px]">
                  2
                </div>
              </div>
              <div className="flex-[0.6] rounded-lg bg-[#FFFFFF] flex flex-row items-start justify-start py-[5px] pr-2.5 pl-[11px] border-[1px] border-solid border-[#E5E2EE]">
                <div className="relative font-semibold inline-block min-w-[9px]">
                  3
                </div>
              </div>
              <div className="flex-[0.8] rounded-lg bg-[#FFFFFF] flex flex-row items-start justify-start py-[7px] px-2.5 text-[13px] font-open-sans">
                <div className="relative font-semibold inline-block min-w-[11px]">
                  ...
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-[#FFFFFF] flex flex-row items-start justify-start py-[5px] pr-[7px] pl-2 border-[1px] border-solid border-[#E5E2EE]">
                <div className="relative font-semibold inline-block min-w-[15px]">
                  10
                </div>
              </div>
              <div className="h-8 w-8 rounded-lg bg-[#FFFFFF] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE]">
                <img
                  className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={Right1x}
                />
              </div>
              <div className="h-8 w-8 rounded-lg bg-[#FFFFFF] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE]">
                <img
                  className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={Right2x}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comprehensive />
      <ProductsWrapper />
      <ProductsWrapper1 />
      <Brands />
      <Form />
      <Subscription />
      <Footer />
    </>
  );
};

export default Stock;
