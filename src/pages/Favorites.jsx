import React, { useState, useEffect } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  TextField,
  Slider,
} from "@mui/material";
import { products } from "../../public/data";
import Img1 from "../assets/BrandPage/1.png";
import Img2 from "../assets/BrandPage/2.png";
import LikeImg from "../assets/24--favourites.svg";
import FilterImg from "../assets/filter.svg";
import SearchImg from "../assets/24--search.svg";
import CravnitImg from "../assets/comparison.svg";
import DownArrow from "../assets/catalog/down.svg";
import Pagination from "../components/Pagination";
import LikeImg1 from "../assets/24--favourites1.svg";
import CrossImg from "../assets/20--cross.svg";
import Burger1 from "../assets/catalog/1.svg";
import Table1 from "../assets/catalog/4.svg";
import {
  addToFavorites,
  removeFromFavorites,
  addToCompare,
} from "../redux/actions";
import { addToCart } from "../redux/actions";

import Table2 from "../assets/catalog/4-1.svg";
import Burger2 from "../assets/catalog/1-1.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Footer } from "../components/About/Footer";

const Favorites = () => {
  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };
  const navigate = useNavigate();
  const [burger, setBurger] = useState(4);
  const [category, setCategory] = useState("All");
  const [all, setAll] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const isFavorite = (productId) => {
    return favorites.some((product) => product.id === productId);
  };
  const handleFavoriteClick = (product) => {
    dispatch(addToFavorites(product));
  };
  const handleCompareClick = (product) => {
    dispatch(addToCompare(product));
  };

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleAddToCompare = (product) => {
    dispatch(addToCompare(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (favorites.length === 0) {
    return (
      <>
        <div
          className={`max-w-[1440px] xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-row items-start justify-between leading-[normal] tracking-[normal] gap-[20px] text-left text-[48px] text-[#202020] font-t1 mq800:flex-wrap `}
        >
          <h1 className="m-0 relative text-inherit leading-[53px] font-medium font-inherit mq450:text-[29px] mq450:leading-[32px] mq800:text-[38px] mq800:leading-[42px]">
            Избранное
          </h1>
          <div className="w-[514px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-11xl">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
                <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit mq450:text-[18px] mq450:leading-[22px] mq800:text-[24px] mq800:leading-[29px]">
                  Не добавлено товаров в избранное
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
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="flex xl:flex-row flex-col md:gap-0 gap-[20px]  justify-between w-full max-w-[1440px] xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto">
        <div className="max-w-[114px] text-nowrap text-[#202020] w-full flex xl:flex-col gap-[10px] xl:text-[16px]">
          <div>Все товары ({favorites.length})</div>
          <div className="opacity-50">Маммографы</div>
          <div className="opacity-50">Флюорографы</div>
        </div>
        <div className="flex-1 max-w-[980px] flex flex-col items-start justify-start gap-[9px] w-full text-[#7A7687]">
          <div className="self-stretch rounded-8xs overflow-hidden flex flex-col items-center justify-center py-[9px] px-[19px] border-[1px] border-solid border-[#E5E2EE]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq675:flex-wrap">
              <FormControl
                className="h-[19px] w-[139px] font-l1 text-sm text-[#202020]"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "14.787234042553193%",
                  height: "19px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#202020",
                    fontSize: 14,
                    fontWeight: "Regular",
                    fontFamily: "Manrope",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="13px"
                      height="13px"
                      src="/13-arrow--down-2.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>По популярности</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className="flex flex-row items-center justify-start gap-[140px] mq450:gap-[70px]">
                <div className="flex flex-row items-center justify-start gap-[15px]"></div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative cursor-pointer min-h-[20px]"
                    onClick={() => setBurger(1)}
                    loading="lazy"
                    alt=""
                    src={burger === 4 ? Burger1 : Burger2}
                  />
                  <img
                    className="h-5 w-5 relative cursor-pointer min-h-[20px]"
                    loading="lazy"
                    onClick={() => setBurger(4)}
                    alt=""
                    src={burger === 1 ? Table1 : Table2}
                  />
                </div>
              </div>
            </div>
          </div>
          {burger === 4 ? (
            <div className="self-stretch grid md:grid-cols-3 grid-cols-2 gap-[10px_8px] ">
              {favorites.map((product) => (
                <div key={product.id}>
                  <div
                    className={`xl:w-80 md:w-[236px] w-[168px] flex flex-row items-start justify-start text-left text-sm text-color3 font-l1 `}
                  >
                    <div className="flex-1 rounded-3xs flex flex-col items-start justify-start pt-0 px-0 pb-[13px] gap-[20px] border-[1px] border-solid border-[#E5E2EE]">
                      <div className="self-stretch rounded-t-3xs rounded-b-none bg-color flex flex-col items-start justify-start pt-[13px] md:px-3.5 px-1 pb-[33px] gap-[21px] z-[1] border-[1px] border-solid border-[#E5E2EE]">
                        <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
                          <div
                            className={`${
                              product.type === 1 ? "" : "hidden"
                            } xl:w-[79px] xl:h-[27px] xl:text-[14px] text-[12px] w-[67px] h-[21px] rounded-41xl text-[#088269] border-[#088269] bg-[#E1EFE6] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                          >
                            Новинка
                          </div>
                          <div
                            className={`${
                              product.type === 2 ? "" : "hidden"
                            } xl:w-[100px] text-nowrap w-[85px] xl:text-[14px] text-[12px] xl:h-[27px] h-[21px] rounded-41xl text-[#59599A] border-[#59599A] bg-[#E6E6FD] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                          >
                            Хит продаж
                          </div>
                          <div
                            className={`${
                              product.type === 3 ? "" : "hidden"
                            } xl:w-[55px] xl:h-[27px] xl:text-[14px] text-[12px] w-[46px] h-[21px] rounded-41xl text-[#AD7B00] border-[#AD7B00] bg-[#FFE095] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                          >
                            -30%
                          </div>
                          <div className="w-[58px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                            <div className="self-stretch h-6 relative">
                              <img
                                className="absolute cursor-pointer top-[0px] left-[0px] w-6 h-6 overflow-hidden z-[2]"
                                loading="lazy"
                                alt=""
                                onClick={handleCompareClick(product.id)}
                                src={CravnitImg}
                              />
                              <img
                                className="absolute cursor-pointer top-[0px] left-[34px] w-6 h-6 overflow-hidden z-[2]"
                                loading="lazy"
                                alt=""
                                src={
                                  isFavorite(product.id) ? LikeImg1 : LikeImg
                                }
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
                        <div className="flex flex-row items-start justify-start py-0 md:px-12 mq450:pl-5 mq450:pr-5 mq450:box-border">
                          <img
                            className="md:w-[133px] md:h-[133px] w-[114px] h-[114px] xl:h-[181px] xl:w-[181px] relative object-cover mix-blend-multiply z-[2]"
                            loading="lazy"
                            alt=""
                            src={product.img}
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 md:px-3 text-lg text-[#202020]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                          <div className="xl:w-[283px] md:w-[167px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[30px] z-[2]">
                              <NavLink
                                to={`/product/${product.id}`}
                                className="self-stretch flex flex-col items-start justify-start gap-[10px]"
                              >
                                <div className="self-stretch relative font-semibold">
                                  <p className="m-0">{`Анализатор мочи `}</p>
                                  <p className="m-0">MIND UA-66</p>
                                </div>
                                <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[5px] text-xs text-[#7A7687]">
                                  <div className="relative inline-block min-w-[90px]">
                                    Артикул: 213134
                                  </div>
                                  <div className="relative inline-block min-w-[58px]">
                                    В наличии
                                  </div>
                                </div>
                              </NavLink>
                              <div className="relative font-semibold inline-block min-w-[112px]">
                                {product.price}
                              </div>
                            </div>
                          </div>
                          <Button
                            className="self-stretch text-nowrap md:text-[16px] text-[12px] h-[41px] text-[#088269] z-[2]"
                            disableElevation
                            variant="outlined"
                            onClick={() => handleAddToCart(product)}
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
                            Добавить в корзину
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col gap-[10px]">
              {favorites.map((product) => (
                <div key={product.id}>
                  <div
                    className={`w-full flex flex-row items-start justify-start text-left text-sm text-color3 font-l1 `}
                  >
                    <div className="flex-1 w-full rounded-3xs flex flex-row items-start justify-start pt-0 px-0 pb-[13px] gap-[20px] border-[1px] border-solid border-[#E5E2EE]">
                      <div className="self-stretch xl:w-[320px] md:w-[180px] w-[168px]  rounded-t-3xs rounded-b-none bg-color flex flex-col items-start justify-start pt-[13px] px-3.5 pb-[33px] gap-[21px] z-[1] border-[1px] border-solid border-[#E5E2EE]">
                        <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
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
                            } w-[100px] text-nowrap h-[27px] rounded-41xl text-[#59599A] border-[#59599A] bg-[#E6E6FD] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                          >
                            Хит продаж
                          </div>
                          <div
                            className={`${
                              product.type === 3 ? "" : "hidden"
                            } w-[55px] h-[27px] rounded-41xl text-[#AD7B00] border-[#AD7B00] bg-[#FFE095] box-border flex flex-row items-center justify-center z-[2] border-[1px] border-solid`}
                          >
                            -30%
                          </div>
                          <div className="w-[58px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                            <div className="self-stretch h-6 relative">
                              <img
                                className="absolute cursor-pointer top-[0px] left-[0px] w-6 h-6 overflow-hidden z-[2]"
                                loading="lazy"
                                alt=""
                                onClick={handleCompareClick(product.id)}
                                src={CravnitImg}
                              />
                              <img
                                className="absolute cursor-pointer top-[0px] left-[34px] w-6 h-6 overflow-hidden z-[2]"
                                loading="lazy"
                                alt=""
                                src={
                                  isFavorite(product.id) ? LikeImg1 : LikeImg
                                }
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
                        <div className="flex-1 xl:py-[20px] py-[15px] flex flex-col items-start h-full justify-between">
                          <NavLink
                            to={`/product/${product.id}`}
                            className="xl:w-[283px] md:w-[180px] w-[149px] flex flex-row items-start justify-start py-0 px-[3px] box-border"
                          >
                            <div className="flex-1 flex flex-col items-start justify-start gap-[30px] z-[2]">
                              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                                <div className="self-stretch relative font-semibold">
                                  <p className="m-0">{`Анализатор мочи `}</p>
                                  <p className="m-0">MIND UA-66</p>
                                </div>
                                <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[5px] text-xs text-[#7A7687]">
                                  <div className="relative inline-block min-w-[0090px]">
                                    Артикул: 213134
                                  </div>
                                  <div className="relative inline-block min-w-[58px]">
                                    В наличии
                                  </div>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                          <div className="w-full flex md:flex-row flex-col justify-between mq765:gap-[14px] items-start md:items-center">
                            <div className="relative font-semibold inline-block min-w-[112px]">
                              {product.price}
                            </div>
                            <Button
                              className="self-stretch  md:w-[250px] w-[147px] md:text-[16px] text-[12px] text-nowrap h-[41px] text-[#088269] z-[2]"
                              disableElevationonClick={() =>
                                handleAddToCart(product)
                              }
                              variant="outlined"
                              sx={{
                                textTransform: "none",
                                color: "#088269",
                                borderColor: "#d5d1e1",
                                borderRadius: "50px",
                                "&:hover": { borderColor: "#d5d1e1" },
                                height: 41,
                              }}
                            >
                              Добавить в корзину
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
