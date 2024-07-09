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
import Table2 from "../assets/catalog/4-1.svg";
import Burger2 from "../assets/catalog/1-1.svg";
import { Brands } from "../components/Home/Brands";
import { About } from "../components/Home/About";
import { Form } from "../components/Home/Form";
import { Footer } from "../components/Home/Footer";
import { NavLink } from "react-router-dom";
import { Comprehensive } from "../components/Home/Comprehensive";
import { Offers } from "../components/Home/Offers";
import { ProductsWrapper } from "../components/Home/ProductsWrapper";
import { News } from "../components/Home/News";
import { Subscription } from "../components/Home/Subscription";
const Category = () => {
  const [burger, setBurger] = useState(4);
  const [FilterSettings, setFilterSetttings] = useState(false);
  const [category, setCategory] = useState("All");
  const [all, setAll] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [minPrice, setMinPrice] = useState(10000);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleFavoriteClick = (product) => {
    dispatch(addToFavorites(product));
  };
  const handleCompareClick = (product) => {
    dispatch(addToCompare(product));
  };
  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  const isFavorite = (productId) => {
    return favorites.some((product) => product.id === productId);
  };
  useEffect(() => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  }, [category]);

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.price1 >= minPrice && product.price1 <= maxPrice
    );
    setFilteredProducts(filtered);
  }, [minPrice, maxPrice]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
  return (
    <>
      {FilterSettings ? (
        <div className=" fixed z-50 bg-[#F8F7F3] top-0 h-full overflow-auto !text-[12px] left-0 w-full flex flex-col items-start justify-start gap-[10px]">
          <div className="py-[15px] w-full px-[10px] flex justify-between items-center bg-[#E5E4ED] ">
            <div className="text-[12px]">Фильтр</div>
            <img
              src={CrossImg}
              onClick={() => setFilterSetttings(false)}
              alt=""
            />
          </div>
          <div className="self-stretch flex flex-col items-start -mt-[10px] justify-start gap-[5px]">
            <FormControl
              className="self-stretch h-[52px] font-l1 font-medium text-base text-[#202020]"
              variant="standard"
              sx={{
                borderColor: "#e5e2ee",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "10px",
                width: "100%",
                height: "52px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "52px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "52px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "52px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "52px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#202020",
                  fontSize: 16,
                  fontWeight: "Medium",
                  fontFamily: "Manrope",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "20px",
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
                    width="20px"
                    height="20px"
                    src={DownArrow}
                    style={{ marginRight: "18px" }}
                  />
                )}
              >
                <MenuItem>Направления</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="self-stretch rounded-3xs flex flex-col items-start justify-start py-[13px] pr-0.5 pl-3.5 gap-[15px] border-[1px] border-solid border-[#E5E2EE]">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-[15px] pl-[5px]">
                <FormControl
                  className="h-[38px] flex-1 font-l1 font-medium text-base text-[#202020] w-auto"
                  variant="standard"
                  sx={{
                    borderTopWidth: "0px",
                    borderRightWidth: "0px",
                    borderBottomWidth: "0px",
                    borderLeftWidth: "0px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "98.25783972125436%",
                    height: "38px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "38px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "38px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "38px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "38px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#202020",
                      fontSize: 16,
                      fontWeight: "Medium",
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
                        width="20px"
                        height="20px"
                        className="-rotate-180"
                        src={DownArrow}
                        style={{}}
                      />
                    )}
                  >
                    <MenuItem>Фильтр по товарам</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <div className="xl:w-[290px] md:w-[210px] flex flex-row items-start justify-start pt-0 px-[5px] pb-5 box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                    <div className="relative inline-block min-w-[35px]">
                      Цена
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <img
                        className="w-[20px] h-[20px] rotate-180  relative overflow-hidden shrink-0"
                        alt=""
                        src={DownArrow}
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[15px] z-[1] text-xs text-[#7A7687]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="relative inline-block min-w-[19px]">
                            От:
                          </div>
                          <TextField
                            className="[border:none] bg-[transparent] self-stretch h-[30px] font-l1 text-sm text-[#202020]"
                            placeholder="10 000"
                            variant="standard"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                            sx={{
                              "& .MuiInputBase-root": {
                                height: "30px",
                                fontSize: "14px",
                              },
                              "& .MuiInputBase-input": {
                                color: "#202020",
                              },
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="relative inline-block min-w-[20px]">
                            До:
                          </div>
                          <TextField
                            className="[border:none] bg-[transparent] self-stretch h-[30px] font-l1 text-sm text-[#202020]"
                            placeholder="1 000 000"
                            variant="standard"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                            sx={{
                              "& .MuiInputBase-root": {
                                height: "30px",
                                fontSize: "14px",
                              },
                              "& .MuiInputBase-input": {
                                color: "#202020",
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <Slider
                      value={[minPrice, maxPrice]}
                      onChange={(_, newValue) => {
                        setMinPrice(newValue[0]);
                        setMaxPrice(newValue[1]);
                      }}
                      min={10000}
                      max={1000000}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      sx={{
                        color: "#088269",
                        "& .MuiSlider-thumb": {
                          borderColor: "#088269",
                        },
                        "& .MuiSlider-track": {
                          bgcolor: "#088269",
                        },
                        "& .MuiSlider-rail": {
                          bgcolor: "#088269",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-3 pl-0 gap-[15px] z-[1]">
                <div className="self-stretch flex flex-row items-center justify-between py-0 px-[5px] gap-[20px]">
                  <div className="relative inline-block min-w-[50px]">
                    Страна
                  </div>
                  <img
                    className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/13-arrow--up-1.svg"
                  />
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[39px] font-l1 text-sm text-[#7A7687]"
                  placeholder="Поиск по стране"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img width="17px" height="17px" src={SearchImg} />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#e5e2ee" },
                    "& .MuiInputBase-root": {
                      height: "39px",
                      backgroundColor: "#fff",
                      paddingRight: "15px",
                      borderRadius: "50px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#7a7687" },
                  }}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-0 pl-[5px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12px] z-[1]">
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                      <input className="m-0 h-5 w-5 relative" type="checkbox" />
                      <div className="relative inline-block min-w-[71px]">
                        Австралия
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                      <input
                        className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                        type="checkbox"
                      />
                      <div className="relative inline-block min-w-[56px]">
                        Австрия
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                      <input
                        className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                        type="checkbox"
                      />
                      <div className="relative inline-block min-w-[63px]">
                        Беларусь
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                      <input className="m-0 h-5 w-5 relative" type="checkbox" />
                      <div className="relative inline-block min-w-[55px]">
                        Бельгия
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                      <input
                        className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                        type="checkbox"
                      />
                      <div className="relative inline-block min-w-[111px]">
                        Великобритания
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                      <input className="m-0 h-5 w-5 relative" type="checkbox" />
                      <div className="relative inline-block min-w-[65px]">
                        Германия
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0  pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                      <input
                        className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                        type="checkbox"
                      />
                      <div className="relative inline-block min-w-[57px]">
                        Израиль
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0  pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                      <input
                        className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                        type="checkbox"
                      />
                      <div className="relative inline-block min-w-[58px]">
                        Испания
                      </div>
                    </div>
                  </div>
                  <div className="h-[70px] w-1 relative rounded-8xs bg-[#E5E2EE] z-[1]" />
                </div>
              </div>
              <div className="w-[290px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                  <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[15px] z-[1]">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                      <div className="relative inline-block min-w-[74px]">
                        Состояние
                      </div>
                      <img
                        className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/13-arrow--up-2.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[202px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[43px]">
                          Новый
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[110px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 relative"
                          type="checkbox"
                        />
                        <div className="relative">Демонстрационный</div>
                      </div>
                    </div>
                  </div>
                  <FormControl
                    className="self-stretch h-[39px] font-l1 text-sm text-[#202020] z-[1]"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "100%",
                      height: "39px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "39px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "39px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "39px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "39px",
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
                          src="/13-arrow--down.svg"
                          style={{}}
                        />
                      )}
                    >
                      <MenuItem>Назначение</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <FormControl
                    className="self-stretch h-[39px] font-l1 text-sm text-[#202020] z-[1]"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "100%",
                      height: "39px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "39px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "39px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "39px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "39px",
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
                          src="/13-arrow--down-1.svg"
                          style={{}}
                        />
                      )}
                    >
                      <MenuItem>Комплектация</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
            <Button
              className="h-[41px] w-[120px]"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#202020",
                fontSize: "14",
                borderColor: "#d5d1e1",
                borderRadius: "50px",
                "&:hover": { borderColor: "#d5d1e1" },
                width: 120,
                height: 41,
              }}
            >
              Сбросить
            </Button>
            <Button
              className="h-[41px] flex-1"
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
              Показать
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
      <section
        className="max-w-[1440px] mt-[10px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto
self-stretch flex flex-col items-start justify-start gap-[25px]  text-left text-11xl text-[#202020] font-l1"
      >
        <div className="max-w-[1150px] w-full flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[43px] mq675:gap-[21px]">
          <div className="self-stretch flex flex-wrap overflow-auto w-full gap-[5px] text-sm xl:w-[1091px]">
            <Button
              className="!h-[41px] flex-grow border-[#d5d1e1] text-nowrap min-w-[199px]"
              disableElevation
              onClick={() => setCategory("Реанимация")}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#202020",
                fontSize: "14",
                background: "#fff",
                paddingLeft: 15,
                paddingRight: 15,
                border: "#d5d1e1 solid 1px",
                borderRadius: "50px",
                "&:hover": { background: "#fff" },
                height: 41,
                maxWidth: 306,
              }}
            >
              Дерматологическое оборудование
            </Button>
            <Button
              className="h-[41px] text-nowrap flex-grow min-w-[199px]"
              disableElevation
              onClick={() => setCategory("Хирургия")}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#202020",
                fontSize: "14",
                background: "#fff",
                border: "#d5d1e1 solid 1px",
                borderRadius: "50px",
                "&:hover": { background: "#fff" },
                height: 41,
              }}
            >
              Ветеринарное оборудование
            </Button>
            <Button
              className="h-[41px] text-nowrap flex-grow min-w-[199px]"
              onClick={() => setCategory("Офтальмология")}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#202020",
                fontSize: "14",
                background: "#fff",
                border: "#d5d1e1 solid 1px",
                borderRadius: "50px",
                "&:hover": { background: "#fff" },
                height: 41,
              }}
            >
              Мебель медицинская
            </Button>
            <Button
              className="h-[41px] text-nowrap flex-grow min-w-[176px]"
              onClick={() => setCategory("Лабораторная диагностика")}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#202020",
                fontSize: "14",
                background: "#fff",
                border: "#d5d1e1 solid 1px",
                borderRadius: "50px",
                "&:hover": { background: "#fff" },
                height: 41,
              }}
            >
              Анестезиология
            </Button>
            {all !== "All" ? (
              <Button
                className="h-[41px] text-nowrap flex-grow min-w-[153px]"
                onClick={() => setAll("All")}
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
                  maxWidth: 184,
                }}
              >
                Показать все
              </Button>
            ) : (
              <>
                <Button
                  className="h-[41px] text-nowrap flex-grow min-w-[153px]"
                  onClick={() => setAll("")}
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
                    width: 144,
                  }}
                >
                  Скрыть
                </Button>
                <Button
                  className="h-[41px] text-nowrap flex-grow min-w-[199px]"
                  onClick={() => setCategory("Акушерство и Гинекология")}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#202020",
                    fontSize: "14",
                    background: "#fff",
                    border: "#d5d1e1 solid 1px",
                    borderRadius: "50px",
                    "&:hover": { background: "#fff" },
                    height: 41,
                  }}
                >
                  Мебель медицинская
                </Button>
                <Button
                  className="h-[41px] text-nowrap flex-grow min-w-[199px]"
                  onClick={() => setCategory("Гистология")}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#202020",
                    fontSize: "14",
                    background: "#fff",
                    border: "#d5d1e1 solid 1px",
                    borderRadius: "50px",
                    "&:hover": { background: "#fff" },
                    height: 41,
                  }}
                >
                  Дерматологическое оборудование
                </Button>
                <Button
                  className="h-[41px] text-nowrap flex-grow min-w-[199px]"
                  onClick={() => setCategory("Косметология")}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#202020",
                    fontSize: "14",
                    background: "#fff",
                    border: "#d5d1e1 solid 1px",
                    borderRadius: "50px",
                    "&:hover": { background: "#fff" },
                    height: 41,
                    textWrap: "nowrap",
                  }}
                >
                  Ветеринарное оборудование
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="self-stretch flex flex-col md:flex-row items-start justify-start gap-[10px] max-w-full text-sm">
          <div className="xl:w-80 md:w-[236px] hidden md:flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <FormControl
                className="self-stretch h-[52px] font-l1 font-medium text-base text-[#202020]"
                variant="standard"
                sx={{
                  borderColor: "#e5e2ee",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "10px",
                  width: "100%",
                  height: "52px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "52px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "52px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "52px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "52px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#202020",
                    fontSize: 16,
                    fontWeight: "Medium",
                    fontFamily: "Manrope",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "20px",
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
                      width="20px"
                      height="20px"
                      src={DownArrow}
                      style={{ marginRight: "18px" }}
                    />
                  )}
                >
                  <MenuItem>Направления</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className="self-stretch rounded-3xs flex flex-col items-start justify-start py-[13px] pr-0.5 pl-3.5 gap-[15px] border-[1px] border-solid border-[#E5E2EE]">
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-[15px] pl-[5px]">
                  <FormControl
                    className="h-[38px] flex-1 font-l1 font-medium text-base text-[#202020] w-auto"
                    variant="standard"
                    sx={{
                      borderTopWidth: "0px",
                      borderRightWidth: "0px",
                      borderBottomWidth: "0px",
                      borderLeftWidth: "0px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "98.25783972125436%",
                      height: "38px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#202020",
                        fontSize: 16,
                        fontWeight: "Medium",
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
                          width="20px"
                          height="20px"
                          className="-rotate-180"
                          src={DownArrow}
                          style={{}}
                        />
                      )}
                    >
                      <MenuItem>Фильтр по товарам</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="xl:w-[290px] md:w-[210px] flex flex-row items-start justify-start pt-0 px-[5px] pb-5 box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                      <div className="relative inline-block min-w-[35px]">
                        Цена
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <img
                          className="w-[20px] h-[20px] rotate-180  relative overflow-hidden shrink-0"
                          alt=""
                          src={DownArrow}
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[15px] z-[1] text-xs text-[#7A7687]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="relative inline-block min-w-[19px]">
                              От:
                            </div>
                            <TextField
                              className="[border:none] bg-[transparent] self-stretch h-[30px] font-l1 text-sm text-[#202020]"
                              placeholder="10 000"
                              variant="standard"
                              value={minPrice}
                              onChange={handleMinPriceChange}
                              sx={{
                                "& .MuiInputBase-root": {
                                  height: "30px",
                                  fontSize: "14px",
                                },
                                "& .MuiInputBase-input": {
                                  color: "#202020",
                                },
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="relative inline-block min-w-[20px]">
                              До:
                            </div>
                            <TextField
                              className="[border:none] bg-[transparent] self-stretch h-[30px] font-l1 text-sm text-[#202020]"
                              placeholder="1 000 000"
                              variant="standard"
                              value={maxPrice}
                              onChange={handleMaxPriceChange}
                              sx={{
                                "& .MuiInputBase-root": {
                                  height: "30px",
                                  fontSize: "14px",
                                },
                                "& .MuiInputBase-input": {
                                  color: "#202020",
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <Slider
                        value={[minPrice, maxPrice]}
                        onChange={(_, newValue) => {
                          setMinPrice(newValue[0]);
                          setMaxPrice(newValue[1]);
                        }}
                        min={10000}
                        max={1000000}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        sx={{
                          color: "#088269",
                          "& .MuiSlider-thumb": {
                            borderColor: "#088269",
                          },
                          "& .MuiSlider-track": {
                            bgcolor: "#088269",
                          },
                          "& .MuiSlider-rail": {
                            bgcolor: "#088269",
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start py-0 pr-3 pl-0 gap-[15px] z-[1]">
                  <div className="self-stretch flex flex-row items-center justify-between py-0 px-[5px] gap-[20px]">
                    <div className="relative inline-block min-w-[50px]">
                      Страна
                    </div>
                    <img
                      className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/13-arrow--up-1.svg"
                    />
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[39px] font-l1 text-sm text-[#7A7687]"
                    placeholder="Поиск по стране"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img width="17px" height="17px" src={SearchImg} />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e5e2ee" },
                      "& .MuiInputBase-root": {
                        height: "39px",
                        backgroundColor: "#fff",
                        paddingRight: "15px",
                        borderRadius: "50px",
                        fontSize: "14px",
                      },
                      "& .MuiInputBase-input": { color: "#7a7687" },
                    }}
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-0 pl-[5px]">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[12px] z-[1]">
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 relative"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[71px]">
                          Австралия
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[56px]">
                          Австрия
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[63px]">
                          Беларусь
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 relative"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[55px]">
                          Бельгия
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[111px]">
                          Великобритания
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 relative"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[65px]">
                          Германия
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start py-0  pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[57px]">
                          Израиль
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start py-0  pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[58px]">
                          Испания
                        </div>
                      </div>
                    </div>
                    <div className="h-[70px] w-1 relative rounded-8xs bg-[#E5E2EE] z-[1]" />
                  </div>
                </div>
                <div className="w-[290px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                    <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[15px] z-[1]">
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                        <div className="relative inline-block min-w-[74px]">
                          Состояние
                        </div>
                        <img
                          className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/13-arrow--up-2.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[202px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                          <input
                            className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                            type="checkbox"
                          />
                          <div className="relative inline-block min-w-[43px]">
                            Новый
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[110px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                          <input
                            className="m-0 h-5 w-5 relative"
                            type="checkbox"
                          />
                          <div className="relative">Демонстрационный</div>
                        </div>
                      </div>
                    </div>
                    <FormControl
                      className="self-stretch h-[39px] font-l1 text-sm text-[#202020] z-[1]"
                      variant="standard"
                      sx={{
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "100%",
                        height: "39px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "39px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "39px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "39px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "39px",
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
                            src="/13-arrow--down.svg"
                            style={{}}
                          />
                        )}
                      >
                        <MenuItem>Назначение</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <FormControl
                      className="self-stretch h-[39px] font-l1 text-sm text-[#202020] z-[1]"
                      variant="standard"
                      sx={{
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "100%",
                        height: "39px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "39px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "39px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "39px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "39px",
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
                            src="/13-arrow--down-1.svg"
                            style={{}}
                          />
                        )}
                      >
                        <MenuItem>Комплектация</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
              <Button
                className="h-[41px] w-[120px]"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#202020",
                  fontSize: "14",
                  borderColor: "#d5d1e1",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#d5d1e1" },
                  width: 120,
                  height: 41,
                }}
              >
                Сбросить
              </Button>
              <Button
                className="h-[41px] flex-1"
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
                Показать
              </Button>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[9px]  max-w-full text-[#7A7687] mq750:min-w-full">
            <div
              onClick={() => setFilterSetttings(true)}
              className="md:hidden border border-[#E5E2EE] rounded-[5px] gap-[8px] flex justify-center items-center h-[41px] w-full"
            >
              <span>
                <img src={FilterImg} alt="" />
              </span>
              <span>Фильтр</span>
            </div>
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
                  <div className="flex flex-row items-center justify-start gap-[15px]">
                    <div className="relative inline-block min-w-[63px]">
                      Показать
                    </div>
                    <FormControl
                      className="h-[19px] w-8 font-l1 text-sm text-[#202020]"
                      variant="standard"
                      sx={{
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "32px",
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
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        IconComponent={() => (
                          <img
                            width="13px"
                            height="13px"
                            src={DownArrow}
                            style={{}}
                          />
                        )}
                      >
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                        <MenuItem value={27}>27</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={33}>33</MenuItem>
                        <MenuItem value={36}>36</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
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
              <div className="self-stretch grid xl:grid-cols-3 grid-cols-2 gap-[10px_8px] ">
                {displayedProducts.map((product) => (
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
                {displayedProducts.map((product) => (
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
                                disableElevation
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
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
      <Comprehensive />
      <Offers />
      <ProductsWrapper />
      <Brands />
      <News />
      <Form />
      <Subscription />
      <Footer />
    </>
  );
};

export default Category;
