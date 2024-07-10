import { removeFromCart, updateCartItemQuantity } from "../redux/actions";
import React, { useState, useEffect } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  TextField,
  Slider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LikeImg from "../assets/24--favourites.svg";
import CravnitImg from "../assets/comparison.svg";
import LikeImg1 from "../assets/24--favourites1.svg";
import CrossImg from "../assets/20--cross.svg";
import MinusImg from "../assets/minus.svg";
import PlusImg from "../assets/plus.svg";
import {
  addToFavorites,
  removeFromFavorites,
  addToCompare,
} from "../redux/actions";
import { Footer } from "../components/About/Footer";

const Cart = () => {
  const favorites = useSelector((state) => state.favorites);

  const handleFavoriteClick = (product) => {
    dispatch(addToFavorites(product));
  };
  const handleCompareClick = (product) => {
    dispatch(addToCompare(product));
  };
  const handleRemoveFromFavorites = (product) => {
    dispatch(removeFromFavorites(product.id));
  };
  const isFavorite = (productId) => {
    return favorites.some((product) => product.id === productId);
  };

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.product.price1 * item.quantity,
      0
    );
    return totalPrice.toLocaleString("en-US", {
      useGrouping: true,
      maximumFractionDigits: 2,
    });
  };
  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCartItemQuantity(productId, newQuantity));
  };

  return (
    <>
      {cart.length === 0 ? (
        <div
          className={`max-w-[1440px] xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-row items-start justify-between leading-[normal] tracking-[normal] gap-[20px] text-left text-[48px] text-[#202020] font-t1 mq800:flex-wrap `}
        >
          <h1 className="m-0 relative text-inherit leading-[53px] font-medium font-inherit mq450:text-[29px] mq450:leading-[32px] mq800:text-[38px] mq800:leading-[42px]">
            Корзина
          </h1>
          <div className="w-[514px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-11xl">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
                <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit mq450:text-[18px] mq450:leading-[22px] mq800:text-[24px] mq800:leading-[29px]">
                  Не добавлено товаров в Корзина
                </h1>
                <div className="w-[368px] relative text-base leading-[140%] font-medium text-[#7A7687] flex items-center max-w-full box-border pr-5">
                  Вы можете перейти на главную страницу или воспользоваться
                  каталогом товаров
                </div>
              </div>
              <div className="w-[296px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[10px]">
                <Button
                  className="h-[41px] flex-1"
                  disableElevation
                  onClick={() => navigate("/")}
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
                  На главную
                </Button>
                <Button
                  className="h-[41px] w-[126px]"
                  disableElevation
                  onClick={() => navigate("/Каталог")}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#f8f7f3",
                    fontSize: "14",
                    background: "#088269",
                    borderRadius: "50px",
                    "&:hover": { background: "#088269" },
                    width: 126,
                    height: 41,
                  }}
                >
                  В каталог
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex md:flex-row flex-col gap-[10px] max-w-[1440px]  mt-[20px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full">
          <div className="w-full flex flex-col gap-2.5">
            {cart.map((product) => (
              <div
                key={product.product.id}
                className="w-full relative xl:h-[237px] md:h-[212px]  border rounded-[10px] border-[#E5E2EE] overflow-hidden flex flex-row"
              >
                <div className="xl:w-[320px] xl:h-[237px] md:h-[212px] h-[184px] md:w-[180px] w-[151px] border-r border-[#E5E2EE] bg-[white] flex justify-center items-center relative">
                  <div className="w-full flex md:justify-start justify-between absolute xl:top-[15px] xl:left-[15px] md:top-[15px] md:left-[15px] top-0 left-0 pt-[10px] pl-[10px] pr-1">
                    <div
                      className={`${
                        product.product.type === 1 ? "" : "hidden"
                      } xl:w-[79px]top-2.5 left-2.5 xl:h-[27px] xl:text-[14px] text-[12px] w-[67px] h-[21px] rounded-41xl text-[#088269] border-[#088269] bg-[#E1EFE6] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                    >
                      Новинка
                    </div>
                    <div
                      className={`${
                        product.product.type === 2 ? "" : "hidden"
                      } xl:w-[100px] top-2.5 left-2.5 text-nowrap w-[85px] xl:text-[14px] text-[12px] xl:h-[27px] h-[21px] rounded-41xl text-[#59599A] border-[#59599A] bg-[#E6E6FD] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                    >
                      Хит продаж
                    </div>
                    <div
                      className={`${
                        product.type === 3 ? "" : "hidden"
                      } xl:w-[55px] top-2.5 left-2.5 xl:h-[27px] xl:text-[14px] text-[12px] w-[46px] h-[21px] rounded-41xl text-[#AD7B00] border-[#AD7B00] bg-[#FFE095] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                    >
                      -30%
                    </div>
                    <div className=" md:hidden flex justify-start  box-border">
                      <img
                        className="cursor-pointer top-[0px] left-[0px] w-[20px] h-[20px] overflow-hidden z-[2]"
                        loading="lazy"
                        alt=""
                        onClick={handleCompareClick(product.product.id)}
                        src={CravnitImg}
                      />
                      <img
                        className="cursor-pointer top-[0px] left-[6px] w-[20px] h-[20px] overflow-hidden z-[2]"
                        loading="lazy"
                        alt=""
                        src={
                          isFavorite(product.product.id) ? LikeImg1 : LikeImg
                        }
                        onClick={() => {
                          if (isFavorite(product.product.id)) {
                            handleRemoveFromFavorites(product.product);
                          } else {
                            handleFavoriteClick(product.product);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <img
                    src={product.product.img}
                    className="xl:w-[159px] xl:h-[159px] md:w-[124px] md:h-[124px] h-[100px] w-[100px]"
                    alt=""
                  />
                </div>
                <div className="absolute flex xl:top-[17px] md:top-[15px] gap-[10px] top-[11px] right-[10px] md:right-[15px] box-border">
                  <img
                    className="cursor-pointer hidden md:inline top-[0px] left-[0px] w-6 h-6 overflow-hidden z-[2]"
                    loading="lazy"
                    alt=""
                    onClick={handleCompareClick(product.product.id)}
                    src={CravnitImg}
                  />
                  <img
                    className="cursor-pointer hidden md:inline top-[0px] left-[34px] w-6 h-6 overflow-hidden z-[2]"
                    loading="lazy"
                    alt=""
                    src={isFavorite(product.product.id) ? LikeImg1 : LikeImg}
                    onClick={() => {
                      if (isFavorite(product.product.id)) {
                        handleRemoveFromFavorites(product.product);
                      } else {
                        handleFavoriteClick(product.product);
                      }
                    }}
                  />
                  <img
                    src={CrossImg}
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => handleRemoveFromCart(product.product.id)}
                    alt=""
                  />
                </div>

                <div className="xl:pt-[20px] xl:gap-0 md:gap-[21px] gap-[15px] max-w-[424px] w-full md:pt-[15px] pt-[10px] xl:pl-[25px] md:pl-[20px] pl-[15px] flex md:justify-between xl:flex-row flex-col">
                  <div className="flex flex-col xl:gap-[10px] gap-[5px]">
                    <div className="xl:text-[16px] text-[14px] font-[600]">
                      {product.product.name}
                    </div>
                    <div className="flex flex-col xl:text-[12px] text-[10px] xl:gap-[5px] gap-[2px]">
                      <div>Артикул: {product.product.vendor}</div>
                      <div>В наличии</div>
                    </div>
                  </div>
                  <div className="flex flex-col xl:gap-[28px] md:gap-[20px] gap-[15px]">
                    <div className="xl:text-[16px] text-[14px] font-[600]">
                      {product.product.price}
                    </div>
                    <div className="select-none productCount text-[#07745E] w-24 rounded-[50px] box-border flex flex-row items-start justify-start py-[9px] px-[19px] gap-[15px] border-[1px] border-solid border-lavender">
                      <div
                        className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 cursor-pointer"
                        onClick={() =>
                          handleQuantityChange(
                            product.product.id,
                            product.quantity - 1
                          )
                        }
                      >
                        <img
                          className="w-2.5 h-2.5 relative"
                          loading="lazy"
                          alt=""
                          src={MinusImg}
                        />
                      </div>
                      <div className="relative text-[12px] font-semibold inline-block min-w-[6px]">
                        {product.quantity}
                      </div>
                      <div
                        className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 cursor-pointer"
                        onClick={() =>
                          handleQuantityChange(
                            product.product.id,
                            product.quantity + 1
                          )
                        }
                      >
                        <img
                          className="w-2.5 h-2.5 relative"
                          loading="lazy"
                          alt=""
                          src={PlusImg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="xl:w-[320px] bg-[#fff] rounded-[10px] border-[#E5E2EE] border xl:h-[237px] px-[20px] py-[15px] md:w-[236px] h-[212px] w-full">
            <div className="w-full xl:text-[14px] font-[600] text-[12px] border-b border-[#E5E2EE] pb-[15px] flex justify-between">
              <span>Итого</span>
              <span>${getTotalPrice()}</span>
            </div>
            <div className="w-full gap-[8px] mt-[15px] mb-[20px] flex flex-col">
              <div className="flex w-full xl:text-[12px] text-[10px] justify-between">
                <span>Товары ({cart.length} шт)</span>
                <span>${getTotalPrice()}</span>
              </div>
              <div className="flex w-full xl:text-[12px] text-[10px] justify-between">
                <span>Скидка</span>
                <span>0 руб.</span>
              </div>
            </div>
            <div className="w-full gap-2.5 flex flex-col">
              <Button
                className="h-[41px] xl:text-[14px] text-nowrap text-[12px] flex-1 min-w-[139px]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#f8f7f3",
                  background: "#088269",
                  borderRadius: "50px",
                  "&:hover": { background: "#088269" },
                  height: 41,
                }}
                onClick={() => {
                  handleAddToCart(handleAddToCart);
                }}
              >
                Оформить заказ
              </Button>
              <Button
                className="h-[41px]  flex-1 min-w-[139px]"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#202020",
                  fontSize: "14",
                  borderColor: "#d5d1e1",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#d5d1e1" },
                  height: 41,
                }}
              >
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;
