import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../assets/logo.svg";
import DownImage from "../../assets/13--down.svg";
import BurgerImg from "../../assets/17--burger.svg";
import SearchImg from "../../assets/24--search.svg";
import SearchImg1 from "../../assets/24--search1.svg";
import { categories, products, brands } from "../../../public/data";
import { NavLink, useNavigate } from "react-router-dom";
import BasketImg from "../../assets/24--basket.svg";
import LocationImg from "../../assets/13--location.svg";
import LikeImg from "../../assets/24--favourites.svg";
import LoginImg from "../../assets/24--login.svg";
import CravnitImg from "../../assets/comparison.svg";

import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import AuthModal from "../AuthModal";

const Header1 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const navigate = useNavigate();
  const { isAuthenticated, email, logout } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const savedImage = localStorage.getItem("profileImage");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSearch = () => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filteredBrands = brands.filter((brand) =>
      brand.name.toLowerCase().includes(lowercasedTerm)
    );
    const filteredCategories = categories.filter((category) =>
      category.toLowerCase().includes(lowercasedTerm)
    );
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(lowercasedTerm)
    );

    setSearchResults({
      brands: filteredBrands,
      categories: filteredCategories,
      products: filteredProducts,
    });
    setIsSearchOpen(searchTerm !== "");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryClick = (category) => {
    setIsCategoryOpen(false);
    navigate(`/catalog/${category}`);
  };
  const getUserInitial = (email) => {
    if (savedImage) {
      return (
        <img
          src={savedImage}
          alt="Profile"
          className="rounded-full w-[42px] h-[42px]"
        />
      );
    } else {
      return email ? email.charAt(0).toUpperCase() : "";
    }
  };
  return (
    <div
      className={` bg-color flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border gap-[24.5px] leading-[normal] tracking-[normal] text-left text-sm text-[#202020] font-t2 `}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-xs">
        <div className="w-[1440px] mx-auto self-stretch flex flex-row items-start justify-start py-0 px-[65px] box-border max-w-full mq800:pl-8 mq800:pr-8 mq800:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
              <NavLink
                to={`/about`}
                className="[text-decoration:none] duration-200 cursor-pointer relative font-medium inline-block min-w-[68px]"
              >
                О компании
              </NavLink>
              <a className="[text-decoration:none] duration-200 cursor-pointer relative font-medium inline-block min-w-[55px]">
                Доставка
              </a>
              <a className="[text-decoration:none] duration-200 cursor-pointer relative font-medium inline-block min-w-[43px]">
                Оплата
              </a>
              <a className="[text-decoration:none] duration-200 cursor-pointer relative font-medium inline-block min-w-[54px]">
                Гарантии
              </a>
              <a className="[text-decoration:none] duration-200 cursor-pointer relative font-medium inline-block min-w-[28px]">
                Блог
              </a>
            </div>
            <div className="flex flex-row duration-200 cursor-pointer items-start justify-start gap-[45px] mq450:gap-[22px]">
              <a className="[text-decoration:none] relative font-medium inline-block min-w-[71px] whitespace-nowrap">
                info@mail.ru
              </a>
              <div className="relative font-medium">
                г. Москва, ул. Московская, д. 35
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative bg-[#E5E2EE]" />
      </div>
      <div className="w-[1440px] mx-auto self-stretch flex flex-row items-start justify-start py-0 px-[65px] box-border max-w-full mq800:pl-8 mq800:pr-8 mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap">
          <div className="w-[915px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[35px] max-w-full mq450:gap-[17px] mq1150:flex-wrap">
              <div className="flex-1 flex flex-row items-start justify-start gap-[50px] max-w-full mq800:flex-wrap mq800:gap-[25px] mq800:min-w-full">
                <NavLink to={`/`}>
                  <img
                    className="self-stretch w-24 relative max-h-full overflow-hidden shrink-0 min-h-[41px]"
                    loading="lazy"
                    alt=""
                    src={Logo}
                  />
                </NavLink>
                <div className="flex-1 border-2 bg-[#D5D1E1] h-[42px] rounded-[50px] flex flex-row items-center justify-start p-px box-border relative min-w-[399px] max-w-full mq800:flex-wrap mq800:min-w-full">
                  <div
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    onMouseLeave={() => setIsCategoryOpen(false)}
                    className="w-[146px] h-[39px] bg-[#EFEFEF] rounded-[50px] flex flex-row items-start justify-start relative"
                  >
                    <div
                      className={` absolute duration-300  overflow-hidden top-full left-0 z-20 w-[345px] bg-white  border-gray-300 rounded-[5px] shadow-lg ${
                        isCategoryOpen ? "h-[490px]" : "h-0"
                      }`}
                    >
                      <ul className={`${isCategoryOpen ? "" : "opacity-0"}`}>
                        {categories.map((category, index) => (
                          <li
                            key={index}
                            onClick={() => handleCategoryClick(category)}
                            className="px-4 py-[6px] hover:bg-gray-200 cursor-pointer"
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>{" "}
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        if (isCategoryOpen) {
                          setIsCategoryOpen(false);
                        } else {
                          setIsCategoryOpen(true);
                        }
                      }}
                      className={`categroies all-[unset] duration-200 cursor-pointer box-border flex-col items-center justify-center gap-2 px-[15px] h-[39px] ${
                        isCategoryOpen ? "bg-[#088269]" : "bg-[#efefef]"
                      }  inline-flex rounded-[50px] w-[146px]`}
                    >
                      <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                        <div
                          className={` ${
                            isCategoryOpen ? "text-white" : "text-ML-tw-1j"
                          } relative text-nowrap w-fit font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]`}
                        >
                          Все категории
                        </div>

                        <img
                          className="relative w-[13px] h-[13px]"
                          alt="Element down"
                          src={DownImage}
                        />
                      </div>
                    </button>
                  </div>
                  <div
                    onClick={() => setIsCategoryOpen(false)}
                    className="search w-full flex items-center font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-ML-tw-1j text-[length:var(--1440-l2-font-size)] tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]"
                  >
                    <div
                      className={`${
                        isSearchOpen && searchTerm
                          ? ""
                          : "-translate-y-[120%] opacity-0"
                      } absolute z-50 h-[403px] overflow-y-auto  bg-white top-10 duration-200 flex flex-col w-[345px] items-start gap-2.5 p-[15px] bg-o-hk-1mn rounded-[5px] border border-solid border-[#e5e2ee] custom-scrollbar`}
                    >
                      {searchResults.brands?.length === 0 &&
                        searchResults.categories?.length === 0 &&
                        searchResults.products?.length === 0 && (
                          <div className="mt-4">
                            <p>No results found.</p>
                          </div>
                        )}
                      <div className="flex w-full flex-col items-start gap-5 relative flex-[0_0_auto]">
                        {searchResults.brands &&
                          searchResults.brands.length > 0 && (
                            <div className="flex flex-col items-start gap-5 flex-[0_0_auto]">
                              <div className="relative w-[315px]">
                                <div className="absolute top-0 left-0">
                                  <div className="text-[#7A7687] text-[length:var(--375-t3-font-size)] leading-[var(--375-t3-line-height)] whitespace-nowrap mt-[-1px] font-375-t3 font-[number:var(--375-t3-font-weight)] tracking-[var(--375-t3-letter-spacing)]">
                                    Бренд
                                  </div>
                                  <div className="relative w-[315px] h-px bg-x-4o-5s-te mt-2" />
                                </div>
                                <div className="flex flex-col border-t border-[#E5E2EE] pt-4 items-start gap-2.5 mt-8">
                                  {searchResults.brands.map((brand, index) => (
                                    <div
                                      key={index}
                                      className="w-full h-[45px] cursor-pointer hover:bg-[#08826a14] inline-flex items-center gap-2.5"
                                    >
                                      <img
                                        className="w-[49px] h-[19px] object-cover"
                                        alt="Rectangle"
                                        src={brand.img}
                                      />
                                      <div className="font-375-l2 text-x-6cqplh text-[length:var(--375-l2-font-size)] tracking-[var(--375-l2-letter-spacing)] leading-[var(--375-l2-line-height)]">
                                        {brand.name}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        {searchResults.categories &&
                          searchResults.categories.length > 0 && (
                            <div className="flex flex-col items-start gap-5 flex-[0_0_auto]">
                              <div className="relative w-[315px]">
                                <div className="absolute top-0 left-0">
                                  <div className="text-[#7A7687] text-[length:var(--375-t3-font-size)] leading-[var(--375-t3-line-height)] whitespace-nowrap mt-[-1px] font-375-t3 font-[number:var(--375-t3-font-weight)] tracking-[var(--375-t3-letter-spacing)]">
                                    Подкатегория
                                  </div>
                                  <div className="relative w-[315px] h-px bg-x-4o-5s-te mt-2" />
                                </div>
                                <div className="flex flex-col items-start gap-2.5 mt-8 border-t border-[#E5E2EE] pt-4">
                                  {searchResults.categories.map(
                                    (category, index) => (
                                      <div
                                        key={index}
                                        className="text-x-6cqplh w-full flex items-center h-[35px] cursor-pointer hover:bg-[#08826a14] text-[length:var(--375-l2-font-size)] leading-[var(--375-l2-line-height)] font-375-l2 tracking-[var(--375-l2-letter-spacing)]"
                                      >
                                        {category}
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        {searchResults.products &&
                          searchResults.products.length > 0 && (
                            <div className="flex flex-col items-start gap-5 flex-[0_0_auto]">
                              <div className="relative w-[315px]">
                                <div className="absolute top-0 left-0">
                                  <div className="text-[#7A7687] text-[length:var(--375-t3-font-size)] leading-[var(--375-t3-line-height)] whitespace-nowrap mt-[-1px] font-375-t3 font-[number:var(--375-t3-font-weight)] tracking-[var(--375-t3-letter-spacing)]">
                                    Бренд
                                  </div>
                                  <div className="relative w-[315px] h-px bg-x-4o-5s-te mt-2" />
                                </div>
                                <div className="flex flex-col border-t border-[#E5E2EE] pt-4 items-start mt-8">
                                  {searchResults.products.map(
                                    (product, index) => (
                                      <div
                                        key={index}
                                        className="inline-flex pl-1 items-center gap-2.5 h-[45px] w-full cursor-pointer hover:bg-[#08826a14] duration-200"
                                      >
                                        <img
                                          className="w-[30px] h-[30px]"
                                          alt="Rectangle"
                                          src={product.img}
                                        />
                                        <div className="font-375-l2 text-x-6cqplh text-[length:var(--375-l2-font-size)] tracking-[var(--375-l2-letter-spacing)] leading-[var(--375-l2-line-height)]">
                                          {product.name}
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Поиск"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        handleSearch();
                        if (searchTerm) {
                          handleSearch();
                        } else {
                          setIsSearchOpen(false);
                        }
                      }}
                      onKeyPress={handleKeyPress}
                      className="w-full h-[39px] placeholder:text-[#7A7687] pl-[30px] rounded-r-[50px] -ml-[15px] bg-white outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-center w-[68px] -ml-[18px]">
                    <img
                      className="w-6 h-6 cursor-pointer relative overflow-hidden shrink-0 "
                      loading="lazy"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={() => {
                        if (searchTerm === "") {
                          setIsSearchOpen(false);
                        } else {
                          handleSearch();
                          setIsSearchOpen(true);
                        }
                      }}
                      alt=""
                      src={isHovered ? SearchImg1 : SearchImg}
                    />
                  </div>
                </div>
              </div>
              <div className="flex duration-200 cursor-pointer flex-col items-start justify-start pt-[5px] px-0 pb-0 text-xs">
                <div className="relative font-medium">
                  <p className="m-0">{`Пн-Пт с 09:00-19:00 `}</p>
                  <p className="m-0">Сб-Вс - выходной</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[281px] flex flex-row items-center justify-start gap-[25px] text-xs">
            <div className="flex hover:text-[#202020_!important] text-[#7A7687_!important] cursor-pointer flex-col items-start justify-start gap-[4px]">
              {isAuthenticated ? (
                <NavLink
                  to="/profile"
                  className="h-[42px] w-[42px] text-[19px] relative overflow-hidden shrink-0 flex items-center justify-center rounded-full bg-[#E1EFE6] text-[#23473B]"
                >
                  {getUserInitial(email)}
                </NavLink>
              ) : (
                <div className="w-[35px] flex flex-col items-center gap-y-1 justify-start py-0 px-[5px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    onClick={handleOpenModal}
                    src={LoginImg}
                  />
                  <div
                    className="relative font-medium inline-block duration-200 cursor-pointer min-w-[35px]"
                    onClick={handleOpenModal}
                  >
                    {isAuthenticated ? "" : "Войти"}
                  </div>
                </div>
              )}
            </div>
            <div className="flex-1 hover:text-[#202020_!important] text-[#7A7687_!important] cursor-pointer flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-start justify-start py-0 px-5">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={LikeImg}
                />
              </div>
              <div className="relative font-medium inline-block duration-200 cursor-pointer min-w-[65px]">
                Избранное
              </div>
            </div>
            <div className="flex-1 hover:text-[#202020_!important] text-[#7A7687_!important] cursor-pointer flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-start justify-start py-0 px-4">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={CravnitImg}
                />
              </div>
              <div className="relative font-medium inline-block duration-200 cursor-pointer min-w-[57px]">
                Сравнить
              </div>
            </div>
            <div className="w-[49px] hover:text-[#202020_!important] text-[#7A7687_!important] cursor-pointer flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={BasketImg}
                />
              </div>
              <div className="relative font-medium inline-block duration-200 cursor-pointer min-w-[49px]">
                Корзина
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-gray">
        <div className="self-stretch h-px relative bg-[#E5E2EE]" />
        <div className="w-[1440px] mx-auto self-stretch flex flex-row items-start justify-start py-0 px-[65px] box-border max-w-full mq800:pl-8 mq800:pr-8 mq800:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap">
            <div className="w-[719px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[25px] mq800:flex-wrap">
                <NavLink
                  to="/catalog"
                  className="flex flex-row items-start justify-start gap-[5px]"
                >
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={BurgerImg}
                    />
                  </div>
                  <div className="relative hover:text-[#088269_!important] cursor-pointer duration-200 font-semibold inline-block min-w-[56px]">
                    Каталог
                  </div>
                </NavLink>
                <div className="relative hover:text-[#088269_!important] cursor-pointer duration-200 font-semibold inline-block min-w-[109px]">
                  Производители
                </div>
                <div className="relative font-semibold hover:text-[#088269_!important] cursor-pointer duration-200">
                  Кабинеты под ключ
                </div>
                <a className="[text-decoration:none] hover:text-[#088269_!important] cursor-pointer duration-200 relative font-semibold text-[inherit] inline-block min-w-[47px]">
                  Услуги
                </a>
                <a className="[text-decoration:none] hover:text-[#088269_!important] cursor-pointer duration-200 relative font-semibold text-[inherit] inline-block min-w-[43px]">
                  Акции
                </a>
                <div className="relative font-semibold hover:text-[#088269_!important] cursor-pointer duration-200 inline-block min-w-[92px]">
                  Покупателям
                </div>
                <a className="[text-decoration:none] hover:text-[#088269_!important] cursor-pointer duration-200 relative font-semibold text-[inherit] inline-block min-w-[66px]">
                  Контакты
                </a>
              </div>
            </div>
            <div className="w-[437px] flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[11px] pb-0 pr-[7px] pl-0">
                <div className="flex flex-row items-start justify-start gap-[3px]">
                  <div className="relative font-semibold hover:text-[#088269_!important] cursor-pointer duration-200 inline-block min-w-[52px]">
                    Москва
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-[13px] h-[13px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={LocationImg}
                    />
                  </div>
                </div>
              </div>
              <Button
                className="h-[41px] hover:text-[#088269_!important] cursor-pointer duration-200 flex-1 min-w-[109px]"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontSize: "14",
                  color: "#202020",
                  borderColor: "#d5d1e1",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#d5d1e1" },
                  height: 41,
                }}
              >
                +7(495)000-00-00
              </Button>
              <Button
                className="h-[41px] flex-[0.8636] min-w-[113px] mq450:flex-1"
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
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative bg-[#E5E2EE]" />
      </div>
      <AuthModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default Header1;
