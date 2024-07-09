import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { categories, products, brands } from "../../../public/data";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Menu,
} from "@mui/material";
import AuthModal from "../AuthModal";

import Logo from "../../assets/logo.svg";
import PhoneImg from "../../assets/phone.svg";
import BurgerImg1 from "../../assets/burger.svg";
import DownImage from "../../assets/13--down.svg";
import BurgerImg from "../../assets/17--burger.svg";
import CallImg from "../../assets/Call.svg";
import SearchImg from "../../assets/24--search.svg";
import SearchImg1 from "../../assets/24--search1.svg";
import BasketImg from "../../assets/24--basket.svg";
import LocationImg from "../../assets/13--location.svg";
import LikeImg from "../../assets/24--favourites.svg";
import LoginImg from "../../assets/24--login.svg";
import CravnitImg from "../../assets/comparison.svg";
import LocationImg1 from "../../assets/location.svg";
import HomeImg from "../../assets/home.svg";
import CatalogImg from "../../assets/catalog.svg";
import CrossImg from "../../assets/cross.svg";
import RightImg from "../../assets/right.svg";
const Header1 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const navigate = useNavigate();
  const { isAuthenticated, email, logout } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);
  const [SelectedMenu, setSelectedMenu] = useState(0);
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
    navigate(`/Каталог/${category}`);
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
    <div className="w-full mx-auto z-50 bg-color flex flex-col items-start justify-start pt-2.5 pb-0 box-border xl:gap-[24.5px] gap-[10px] leading-[normal] tracking-[normal] text-left text-sm text-[#202020] font-t2">
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-xs">
        <div className="w-full self-stretch mq805:hidden flex flex-row items-start justify-start py-0 box-border max-w-full ">
          <div className="flex-1 max-w-[1440px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
              <NavLink
                to={`/О компании`}
                className="[text-decoration:none] duration-200 cursor-pointer relative font-medium inline-block min-w-[68px]"
              >
                О компании
              </NavLink>
              <NavLink
                to={`/Доставка`}
                className="[text-decoration:none] duration-200 cursor-pointer relative font-medium inline-block min-w-[55px]"
              >
                Доставка
              </NavLink>
              <NavLink
                to={`/Оплата`}
                className="[text-decoration:none] duration-200 cursor-pointer relative font-medium inline-block min-w-[43px]"
              >
                Оплата
              </NavLink>
              <NavLink
                to={`/Гарантии`}
                className="[text-decoration:none] duration-200 cursor-pointer relative font-medium inline-block min-w-[54px]"
              >
                Гарантии
              </NavLink>
              <NavLink
                to={`/Блог`}
                className="[text-decoration:none] duration-200 cursor-pointer relative font-medium inline-block min-w-[28px]"
              >
                Блог
              </NavLink>
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
        <div className="hidden mq805:flex xl:px-[65px] sm:px-[20px] px-[15px] mx-auto  justify-between w-full max-w-full">
          <img src={Logo} className="w-[74px]" alt="" />
          <div className="flex gap-[20px]">
            <img src={PhoneImg} className="w-[24px]" alt="" />
            <img
              src={BurgerImg1}
              onClick={() => setMenuOpen(true)}
              className="w-[24px]"
              alt=""
            />
          </div>
        </div>
        <div className="self-stretch block mq790:hidden h-px relative bg-[#E5E2EE]" />
      </div>

      <div className="max-w-[1440px]  w-full mx-auto self-stretch flex flex-row items-start justify-start py-0 box-border ">
        <div className="flex-1 max-w-[1440px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto flex flex-row xl:items-start items-center justify-between gap-[20px]">
          <div className="xl:w-[915px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[35px] max-w-full mq450:gap-[17px] mq1150:flex-wrap">
              <div className="flex-1  flex flex-row items-start justify-start xl:gap-[50px] gap-[31px] max-w-full">
                <NavLink to={`/`} className={`mq805:hidden`}>
                  <img
                    className="self-stretch xl:w-24 w-[73px] relative overflow-hidden shrink-0 min-h-[41px]"
                    loading="lazy"
                    alt=""
                    src={Logo}
                  />
                </NavLink>
                <div className="flex-1 border-2 z-50 bg-[#D5D1E1] h-[32px] xl:h-[42px] rounded-[50px] flex flex-row items-center justify-start p-px box-border max-w-[614px] mq1280:max-w-[403px] mq805:max-w-[345px] mq490:max-w-[345px]">
                  <div className="mq1280:w-[146px] mq805:w-[117px] h-[30px] xl:h-[39px] bg-[#EFEFEF] rounded-[50px] flex flex-row items-start justify-start relative">
                    <div
                      className={`${
                        isSearchOpen && searchTerm
                          ? ""
                          : "-translate-y-[140%] opacity-0"
                      } absolute z-50 h-[403px] overflow-y-auto bg-white top-10 duration-200 flex flex-col mq390:w-[315px] w-[345px] items-start gap-2.5 p-[15px] bg-o-hk-1mn rounded-[5px] border border-solid border-[#e5e2ee] custom-scrollbar`}
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
                                      <NavLink
                                        to={`/product/${product.id}`}
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
                                      </NavLink>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                    <div
                      className={`absolute duration-300 overflow-hidden top-full left-0 z-50 w-[345px] bg-white border-gray-300 rounded-[5px] shadow-lg ${
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
                    </div>
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        if (isCategoryOpen) {
                          setIsCategoryOpen(false);
                        } else {
                          setIsCategoryOpen(true);
                        }
                      }}
                      className={`categroies all-[unset] duration-200 cursor-pointer box-border flex-col items-center justify-center gap-2 mq600:px-[10px] px-[15px] h-[30px] xl:h-[39px] ${
                        isCategoryOpen ? "bg-[#088269]" : "bg-[#efefef]"
                      } inline-flex rounded-[50px] mq600:w-[117px] w-[146px]`}
                    >
                      <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                        <div
                          className={`${
                            isCategoryOpen ? "text-white" : "text-ML-tw-1j"
                          } relative text-nowrap  w-fit mq600:text-[12px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]`}
                        >
                          Все категории
                        </div>
                        <img
                          className="relative mq600:w-[10px] mq600:h-[10px] w-[13px] h-[13px]"
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
                      className="w-full h-[30px] mq600:text-[12px] xl:h-[39px] placeholder:text-[#7A7687] pl-[30px] rounded-r-[50px] -ml-[15px] bg-[#F8F7F3] outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-center w-[68px] -ml-[18px]">
                    <img
                      className="xl:w-6 xl:h-6 h-[17px] w-[17px] cursor-pointer relative overflow-hidden shrink-0"
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
              <div className="xl:flex duration-200 cursor-pointer flex-col hidden items-start justify-start pt-[5px] px-0 pb-0 text-xs">
                <div className="relative font-medium">
                  <p className="m-0">Пн-Пт с 09:00-19:00</p>
                  <p className="m-0">Сб-Вс - выходной</p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-[281px] w-[145px] mq790:hidden flex flex-row items-center justify-between text-xs">
            <div className="flex hover:text-[#202020_!important] text-[#7A7687_!important] cursor-pointer flex-col items-start justify-start xl:gap-[4px]">
              {isAuthenticated ? (
                <NavLink
                  to="/Личный кабинет"
                  className="xl:h-[42px] xl:w-[42px] w-[20px] h-[20px] text-[19px] relative overflow-hidden shrink-0 flex items-center justify-center rounded-full bg-[#E1EFE6] text-[#23473B]"
                >
                  {getUserInitial(email)}
                </NavLink>
              ) : (
                <div className="xl:w-[35px] w-[20px] flex flex-col items-center gap-y-1 justify-start py-0 xl:px-[5px] box-border">
                  <img
                    className="xl:h-6 xl:w-6 h-[20px] w-[20px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    onClick={handleOpenModal}
                    src={LoginImg}
                  />
                  <div
                    className="relative font-medium hidden xl:inline-block duration-200 cursor-pointer min-w-[35px]"
                    onClick={handleOpenModal}
                  >
                    {isAuthenticated ? "" : "Войти"}
                  </div>
                </div>
              )}
            </div>
            <div className="xl:w-[65px] w-[20px] hover:text-[#202020_!important] text-[#7A7687_!important] cursor-pointer flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-start justify-start py-0 xl:px-5">
                <img
                  className="xl:h-6 xl:w-6 h-[20px] w-[20px] relative"
                  loading="lazy"
                  alt=""
                  src={LikeImg}
                />
              </div>
              <div className="relative font-medium hidden xl:inline-block duration-200 cursor-pointer min-w-[65px]">
                Избранное
              </div>
            </div>
            <div className="xl:w-[57px] w-[20px] hover:text-[#202020_!important] text-[#7A7687_!important] cursor-pointer flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-start justify-start py-0 xl:px-4">
                <img
                  className="xl:h-6 xl:w-6 h-[20px] w-[20px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={CravnitImg}
                />
              </div>
              <div className="relative font-medium hidden xl:inline-block duration-200 cursor-pointer min-w-[57px]">
                Сравнить
              </div>
            </div>
            <div className="xl:w-[57px] w-[20px] hover:text-[#202020_!important] text-[#7A7687_!important] cursor-pointer flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 xl:px-3">
                <img
                  className="xl:h-6 xl:w-6 h-[20px] w-[20px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={BasketImg}
                />
              </div>
              <div className="relative font-medium hidden xl:inline-block duration-200 cursor-pointer">
                Корзина
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch  flex flex-col items-start justify-start gap-[10px] text-gray">
        <div className="self-stretch mq805:hidden h-px relative bg-[#E5E2EE]" />
        <div className="max-w-[1440px] mq805:hidden xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full self-stretch flex flex-row items-center xl:items-start justify-start py-0 box-border">
          <div className="flex-1 flex flex-row items-center xl:items-start justify-between gap-[20px]">
            <div className="max-w-[719px] w-full flex flex-col items-start justify-center xl:justify-start xl:pt-[11px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start xl:gap-[25px] gap-[15px]">
                <NavLink
                  to="/Каталог"
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
                  <div className="relative hover:text-[#088269_!important] mq1280:text-[12px] cursor-pointer duration-200 font-semibold inline-block min-w-[56px]">
                    Каталог
                  </div>
                </NavLink>
                <NavLink
                  to={`/Производители`}
                  className="relative hover:text-[#088269_!important] mq1280:text-[12px] cursor-pointer duration-200 font-semibold inline-block min-w-[109px]"
                >
                  Производители
                </NavLink>
                <NavLink
                  to={`/Кабинеты под ключ`}
                  className="relative text-nowrap font-semibold mq1280:text-[12px] hover:text-[#088269_!important] cursor-pointer duration-200"
                >
                  Кабинеты под ключ
                </NavLink>
                <NavLink
                  to="/Услуги"
                  className="[text-decoration:none] mq1280:text-[12px] hover:text-[#088269_!important] cursor-pointer duration-200 relative font-semibold text-[inherit] inline-block min-w-[47px]"
                >
                  Услуги
                </NavLink>
                <NavLink
                  to={`/Акции`}
                  className="[text-decoration:none] mq1280:text-[12px] hover:text-[#088269_!important] cursor-pointer duration-200 relative font-semibold text-[inherit] inline-block min-w-[43px]"
                >
                  Акции
                </NavLink>
                <div className="relative font-semibold mq1280:text-[12px] hover:text-[#088269_!important] cursor-pointer duration-200 inline-block min-w-[92px]">
                  Покупателям
                </div>
                <NavLink
                  to={`/Контакты`}
                  className="[text-decoration:none] mq1280:text-[12px] hover:text-[#088269_!important] cursor-pointer duration-200 relative font-semibold text-[inherit] inline-block min-w-[66px]"
                >
                  Контакты
                </NavLink>
              </div>
            </div>
            <div
              className={`w-full xl:hidden flex flex-row items-center justify-start gap-[3px] leading-[normal] tracking-[normal] text-left text-[12px] text-[#202020] font-manrope`}
            >
              <div className="flex flex-col items-start justify-center px-0 pb-0">
                <div className="relative leading-[17px] font-semibold inline-block min-w-[45px]">
                  Москва
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pb-0 pr-[7px] pl-0">
                <img
                  className="w-[13px] h-[13px]"
                  loading="lazy"
                  alt=""
                  src={LocationImg}
                />
              </div>
              <img
                className="h-8 w-8 relative"
                loading="lazy"
                alt=""
                src={CallImg}
              />
            </div>
            <div className="w-[437px] hidden xl:flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
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
                      src={LocationImg1}
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
                className="h-[41px] xl:flex-[0.8636] hidden min-w-[113px] mq450:flex-1"
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

      <div
        className={`${
          MenuOpen ? "block" : "hidden"
        } w-full h-full fixed bg-[#F8F7F3] pt-[10px] z-50 top-0 left-0`}
      >
        <div
          className={`w-full relative ${
            SelectedMenu === 3 ? "flex" : "hidden"
          } flex-col items-start overflow-auto h-full -mt-[10px] justify-start pt-0 px-0 pb-[89px] box-border gap-[17px] leading-[normal] tracking-[normal] text-left text-sm text-[#202020] font-manrope`}
        >
          <div
            className={`self-stretch flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border gap-[14px] max-w-full text-left text-base text-[#202020] font-manrope`}
          >
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                <img
                  className="h-6 w-6 rotate-180 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
                  loading="lazy"
                  alt=""
                  onClick={() => {
                    setSelectedMenu(0);
                  }}
                  src={RightImg}
                />
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[101px]">
                  Информация
                </a>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  onClick={() => {
                    setMenuOpen(false);
                    setSelectedMenu(0);
                  }}
                  src={CrossImg}
                />
              </div>
            </div>
            <div className="self-stretch h-px relative bg-[#E5E2EE]" />
          </div>
          <div
            className={`w-full flex flex-col items-start justify-start gap-[17px] leading-[normal] tracking-[normal] text-left text-sm text-[#202020] font-manrope `}
          >
            <div className="flex flex-row items-start justify-start py-0 px-[15px]">
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[65px]">
                Вакансии
              </a>
            </div>
            <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
            <NavLink
              to={`/Отзывы`}
              className="flex flex-row items-start justify-start py-0 px-[15px]"
            >
              <div className="relative font-medium inline-block min-w-[52px]">
                Отзывы
              </div>
            </NavLink>
            <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
            <NavLink
              to={`/Контакты`}
              className="flex flex-row items-start justify-start py-0 px-[15px]"
            >
              <NavLink
                to={`/Контакты`}
                className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[64px]"
              >
                Контакты
              </NavLink>
            </NavLink>
            <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
          </div>
        </div>
        <div
          className={`w-full relative ${
            SelectedMenu === 2 ? "flex" : "hidden"
          } flex-col items-start overflow-auto h-full -mt-[10px] justify-start pt-0 px-0 pb-[89px] box-border gap-[17px] leading-[normal] tracking-[normal] text-left text-sm text-[#202020] font-manrope`}
        >
          <div
            className={`self-stretch flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border gap-[14px] max-w-full text-left text-base text-[#202020] font-manrope`}
          >
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                <img
                  className="h-6 w-6 rotate-180 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
                  loading="lazy"
                  alt=""
                  onClick={() => {
                    setSelectedMenu(0);
                  }}
                  src={RightImg}
                />
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[101px]">
                  Информация
                </a>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  onClick={() => {
                    setMenuOpen(false);
                    setSelectedMenu(0);
                  }}
                  src={CrossImg}
                />
              </div>
            </div>
            <div className="self-stretch h-px relative bg-[#E5E2EE]" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="relative font-medium inline-block min-w-[64px]">
              Доставка
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="relative font-medium inline-block min-w-[50px]">
              Оплата
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <NavLink
            to={`/Акции`}
            className="flex flex-row items-start justify-start py-0 px-[15px]"
          >
            <div className="relative font-medium inline-block min-w-[42px]">
              Акции
            </div>
          </NavLink>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="relative font-medium inline-block min-w-[63px]">
              Гарантии
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="relative font-medium inline-block min-w-[107px]">
              Производители
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <NavLink
            to={`/Блог`}
            className="flex flex-row items-start justify-start py-0 px-[15px]"
          >
            <div className="relative font-medium inline-block min-w-[32px]">
              Блог
            </div>
          </NavLink>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="relative font-medium inline-block min-w-[46px]">
              Услуги
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="relative font-medium inline-block min-w-[91px]">
              Покупателям
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="relative font-medium inline-block min-w-[93px]">
              Сертификаты
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="relative font-medium whitespace-pre-wrap">
              Партнерские программы
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="relative font-medium inline-block min-w-[122px]">
              Оптовые продажи
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
          <div className="w-[79px] h-[19px] flex flex-row items-start justify-start py-0 px-[15px] box-border">
            <div className="self-stretch flex-1 relative font-medium">
              Лизинг
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 h-px relative bg-[#E5E2EE] max-w-full" />
          </div>
        </div>
        <div
          className={`w-full ${
            SelectedMenu === 1 ? "flex" : "hidden"
          } flex-col items-start justify-start gap-[17px] leading-[normal] tracking-[normal] text-left text-sm text-[#202020] font-manrope `}
        >
          <section className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full text-left text-sm text-[#202020] font-manrope">
            <div className=" self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[19px] max-w-full">
                <div className="flex-1 overflow-hidden border-2 z-50 bg-[#D5D1E1] h-[32px] xl:h-[42px] rounded-[50px] flex flex-row items-center justify-start p-px box-border w-[302px]">
                  <div
                    className={`${
                      isSearchOpen && searchTerm
                        ? ""
                        : "-translate-y-[140%] opacity-0"
                    } absolute z-50 h-[403px] overflow-y-auto bg-white top-10 duration-200 flex flex-col mq390:w-[315px] w-[345px] items-start gap-2.5 p-[15px] bg-o-hk-1mn rounded-[5px] border border-solid border-[#e5e2ee] custom-scrollbar`}
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
                                    <NavLink
                                      to={`/product/${product.id}`}
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
                                    </NavLink>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                  <div
                    onClick={() => setIsCategoryOpen(false)}
                    className="search w-full flex items-center font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-ML-tw-1j text-[length:var(--1440-l2-font-size)] tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]"
                  >
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
                      className="w-full h-[30px] mq600:text-[12px] xl:h-[39px] placeholder:text-[#7A7687] pl-[10px] rounded-r-[50px]  bg-[#F8F7F3] outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-center w-[68px] -ml-[18px]">
                    <img
                      className="xl:w-6 xl:h-6 h-[17px] w-[17px] ml-3 cursor-pointer relative overflow-hidden shrink-0"
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
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    onClick={() => {
                      setSelectedMenu(0);
                    }}
                    src={CrossImg}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2 pr-[3px] pl-[15px] box-border max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[8px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[224px] max-w-full">
                  <NavLink
                    to={`/Каталог/Реанимация`}
                    onClick={() => {
                      setSelectedMenu(0);
                      setMenuOpen(false);
                    }}
                    className="relative font-medium inline-block min-w-[84px]"
                  >
                    Реанимация
                  </NavLink>
                  <div className="self-stretch h-px relative bg-[#E5E2EE]" />
                  <NavLink
                    to={`/Каталог/Хирургия`}
                    onClick={() => {
                      setSelectedMenu(0);
                      setMenuOpen(false);
                    }}
                    className="relative font-medium inline-block min-w-[64px]"
                  >
                    Хирургия
                  </NavLink>
                </div>
                <div className="h-[50px] w-1 relative rounded-[5px] bg-[#E5E2EE]" />
              </div>
            </div>
            <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-[15px] pb-2 box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
            <NavLink
              to={`/Каталог/Офтальмология`}
              onClick={() => {
                setSelectedMenu(0);
                setMenuOpen(false);
              }}
              className="flex flex-row items-start justify-start pt-0 px-[15px] pb-2"
            >
              <div className="relative font-medium inline-block min-w-[109px]">
                Офтальмология
              </div>
            </NavLink>
            <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-[15px] pb-2 box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
            <NavLink
              to={`/Каталог/Лабораторная диагностика`}
              onClick={() => {
                setSelectedMenu(0);
                setMenuOpen(false);
              }}
              className="flex flex-row items-start justify-start pt-0 px-[15px] pb-2"
            >
              <div className="relative font-medium">
                Лабораторная диагностика
              </div>
            </NavLink>
            <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-[15px] pb-2 box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
            <NavLink
              to={`/Каталог/Акушерство и Гинекология`}
              onClick={() => {
                setSelectedMenu(0);
                setMenuOpen(false);
              }}
              className="flex flex-row items-start justify-start pt-0 px-[15px] pb-2"
            >
              <div className="relative font-medium inline-block min-w-[83px]">
                Акушерство
              </div>
            </NavLink>
            <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-[15px] pb-2 box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
            <NavLink
              to={`/Каталог/Акушерство и Гинекология`}
              onClick={() => {
                setSelectedMenu(0);
                setMenuOpen(false);
              }}
              className="flex flex-row items-start justify-start pt-0 px-[15px] pb-2"
            >
              <div className="relative font-medium inline-block min-w-[87px]">
                Гинекология
              </div>
            </NavLink>
            <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-[15px] pb-2 box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
            <NavLink
              to={`/Каталог/Гистология`}
              onClick={() => {
                setSelectedMenu(0);
                setMenuOpen(false);
              }}
              className="flex flex-row items-start justify-start pt-0 px-[15px] pb-2"
            >
              <div className="relative font-medium inline-block min-w-[79px]">
                Гистология
              </div>
            </NavLink>
            <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-[15px] pb-2 box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
            <NavLink
              to={`/Каталог/Косметология`}
              onClick={() => {
                setSelectedMenu(0);
                setMenuOpen(false);
              }}
              className="flex flex-row items-start justify-start pt-0 px-[15px] pb-2"
            >
              <div className="relative font-medium inline-block min-w-[97px]">
                Косметология
              </div>
            </NavLink>
            <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-[15px] pb-2 box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
            <NavLink
              to={`/Каталог/Оториноларингология`}
              onClick={() => {
                setSelectedMenu(0);
                setMenuOpen(false);
              }}
              className="flex flex-row items-start justify-start pt-0 px-[15px] pb-2"
            >
              <div className="relative font-medium">Оториноларингология</div>
            </NavLink>
            <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
              <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
            </div>
          </section>
          <NavLink
            to={`/Каталог/Рентгенология и томография`}
            onClick={() => {
              setSelectedMenu(0);
              setMenuOpen(false);
            }}
            className="flex flex-row items-start justify-start py-0 px-[15px]"
          >
            <div className="relative font-medium">
              Рентгенология и томография
            </div>
          </NavLink>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 relative bg-[#E5E2EE] max-w-full" />
          </div>
        </div>
        <div
          className={`w-full ${
            SelectedMenu === 0 ? "flex" : "hidden"
          } flex-col items-start justify-start gap-[15.8px] leading-[normal] tracking-[normal] text-left text-sm text-[#202020] font-manrope`}
        >
          <div className="flex xl:px-[65px] sm:px-[20px] px-[15px] mx-auto  justify-between w-full max-w-full">
            <img src={Logo} className="w-[74px]" alt="" />
            <div className="flex gap-[20px]">
              <img src={PhoneImg} className="w-[24px]" alt="" />
              <img
                src={CrossImg}
                onClick={() => setMenuOpen(false)}
                className="w-[24px]"
                alt=""
              />
            </div>
          </div>
          <div className="self-stretch bg-[#E5E4ED] flex flex-row items-start justify-between p-[15px] box-border max-w-full gap-[20px]">
            <div className="h-[49px] w-[375px] relative bg-color3 hidden max-w-full" />
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-[13px] h-[13px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/13-location.svg"
                />
              </div>
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[52px] z-[1]">
                Москва
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-xs text-[#7A7687]">
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[58px] z-[1]">
                Изменить
              </a>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative font-semibold inline-block min-w-[128px]">
                    +7(495)000-00-00
                  </div>
                  <div className="relative text-xs font-semibold inline-block min-w-[73px] whitespace-nowrap">
                    info@mail.ru
                  </div>
                </div>
                <div className="relative text-xs font-medium text-[#7A7687] text-right">
                  <p className="m-0">Пн-Пт с 09:00-19:00</p>
                  <p className="m-0">Сб-Вс - выходной</p>
                </div>
              </div>
              <div className="relative text-xs font-medium text-[#7A7687]">
                г. Москва, ул. Московская, д. 35
              </div>
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 relative bg-color max-w-full" />
          </div>
          <div
            onClick={() => {
              setSelectedMenu(1);
            }}
            className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[15px] box-border max-w-full"
          >
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative font-semibold inline-block min-w-[115px]">
                  Каталог товаров
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                loading="lazy"
                alt=""
                src={RightImg}
              />
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 relative bg-color max-w-full" />
          </div>
          <div
            onClick={() => {
              setSelectedMenu(2);
            }}
            className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[15px] box-border max-w-full"
          >
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative font-medium inline-block min-w-[88px]">
                  Информация
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                loading="lazy"
                alt=""
                src={RightImg}
              />
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 relative bg-color max-w-full" />
          </div>
          <div
            onClick={() => {
              setSelectedMenu(3);
            }}
            className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[15px] box-border max-w-full"
          >
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative font-medium inline-block min-w-[64px]">
                  Контакты
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                loading="lazy"
                alt=""
                src={RightImg}
              />
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 relative bg-color max-w-full" />
          </div>
          <NavLink
            to={`/О компании`}
            onClick={() => setMenuOpen(false)}
            className="flex flex-row items-start justify-start py-0 px-[15px]"
          >
            <div className="relative font-medium inline-block min-w-[38px]">
              О нас
            </div>
          </NavLink>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 relative bg-color max-w-full" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="relative font-medium inline-block min-w-[76px]">
              Сравнение
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="self-stretch flex-1 relative bg-color max-w-full" />
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-[#F8F7F3] z-50 bottom-0 fixed mq790:flex hidden flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-xs text-[#7A7687] font-t2`}
      >
        <div className="flex-1  overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[10px] max-w-full">
          <div className="self-stretch h-px relative" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="w-[47px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={HomeImg}
                  />
                </div>
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[47px]">
                  Главная
                </a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="w-[47px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={CatalogImg}
                  />
                </div>
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[47px]">
                  Каталог
                </a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="w-[49px] flex flex-row items-start justify-start py-0 px-3 box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={BasketImg}
                  />
                </div>
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[49px]">
                  Корзина
                </a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="flex flex-row items-start justify-start py-0 px-5">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={LikeImg}
                  />
                </div>
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[65px]">
                  Избранное
                </a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="w-[35px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={LoginImg}
                  />
                </div>
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[35px]">
                  Войти
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
