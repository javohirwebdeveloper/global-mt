import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import DownImage from "../../assets/13--down.svg";
import BurgerImg from "../../assets/17--burger.svg";
import SearchImg from "../../assets/24--search.svg";
import { categories, products, brands } from "../../../public/data";
import { NavLink, useNavigate } from 'react-router-dom';
import BasketImg from '../../assets/24--basket.svg'
import LocationImg from '../../assets/13--location.svg'
import LikeImg from '../../assets/24--favourites.svg'
import LoginImg from '../../assets/24--login.svg'
import CravnitImg from '../../assets/comparison.svg'

export const Header = ({ onClose }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const navigate = useNavigate();
  const handleSearch = () => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filteredBrands = brands.filter(brand =>
      brand.name.toLowerCase().includes(lowercasedTerm)
    );
    const filteredCategories = categories.filter(category =>
      category.toLowerCase().includes(lowercasedTerm)
    );
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(lowercasedTerm) 
    );

    setSearchResults({
      brands: filteredBrands,
      categories: filteredCategories,
      products: filteredProducts
    });

    setIsSearchOpen(true); 
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  const handleCategoryClick = (category) => {
    setIsCategoryOpen(false);
    navigate(`/catalog/${category}`);
  };
  return (
    <header className="absolute w-[1440px] h-[193px] top-0 left-0 bg-x-1l-ubo-z">
      <div className="absolute w-[1440px] h-px top-48 left-0 bg-m-b-3t-zi" />
      <button className="all-[unset] box-border inline-flex gap-2 px-5 py-[11px] absolute top-[141px] left-[1023px] border border-solid border-[#d5d1e1] items-center justify-center rounded-[50px]">
        <div className="mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          +7(495)000-00-00
        </div>
      </button>
      <div className="inline-flex items-center justify-center gap-[3px] absolute top-[152px] left-[938px]">
        <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Москва
        </div>
        <img
          className="relative w-[13px] h-[13px]"
          alt="Element location"
          src={LocationImg}
        />
      </div>
      <div className="inline-flex items-center gap-[25px] absolute top-[152px] left-[65px]">
        <NavLink to={`/category`} className="cursor-pointer inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
          <img
            className="relative w-[17px] h-[17px]"
            alt="Element burger"
            src={BurgerImg}
          />
          <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] hover:text-tx-u7vg cursor-pointer duration-200 text-ws-j7-it text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
            Каталог
          </div>
        </NavLink>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Производители
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Кабинеты под ключ
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Услуги
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Акции
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Покупателям
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Контакты
        </div>
      </div>
      <div className="absolute w-[1440px] h-px top-[130px] left-0 bg-m-b-3t-zi" />
      <div className="inline-flex items-end gap-[25px] absolute top-[62px] left-[1094px]">
        <div className="text-[#7A7687] hover:text-[#000] duration-200 cursor-pointer inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Element login"
            src={LoginImg}
          />
          <div className="relative w-fit font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Войти
          </div>
        </div>
        <div className="text-[#7A7687] hover:text-[#000] duration-200 cursor-pointer inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Element favourites"
            src={LikeImg}
          />
          <div className="relative w-fit font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Избранное
          </div>
        </div>
        <div className="text-[#7A7687] hover:text-[#000] duration-200 cursor-pointer inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Element comparison"
            src={CravnitImg}
          />
          <div className="relative w-fit font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Сравнить
          </div>
        </div>
        <div className="text-[#7A7687] hover:text-[#000] duration-200 cursor-pointer inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Element basket"
            src={BasketImg}
          />
          <div className="relative w-fit font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Корзина
          </div>
        </div>
      </div>
      <p className="absolute top-[67px] left-[860px] font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ML-tw-1j text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
        Пн-Пт с 09:00-19:00 <br />
        Сб-Вс - выходной
      </p>
      <div className="absolute w-[616px] h-[41px] top-[63px] left-[211px]">
        <div className="relative w-[614px] h-[41px] bg-hc-0j-in rounded-[50px]">























        <div className={`${isSearchOpen ? '' : '-translate-y-[120%] opacity-0'} h-[403px] overflow-y-auto  bg-white top-10 duration-200 flex flex-col w-[345px] items-start gap-2.5 p-[15px] relative bg-o-hk-1mn rounded-[5px] border border-solid border-[#e5e2ee] custom-scrollbar`}>
  {searchResults.brands?.length === 0 && searchResults.categories?.length === 0 && searchResults.products?.length === 0 && (
    <div className="mt-4">
      <p>No results found.</p>
    </div>
  )}
  <div className="flex w-full flex-col items-start gap-5 relative flex-[0_0_auto]">
    {searchResults.brands && searchResults.brands.length > 0 && (
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
              <div key={index} className="w-full h-[45px] cursor-pointer hover:bg-[#08826a14] inline-flex items-center gap-2.5">
                <img className="w-[49px] h-[19px] object-cover" alt="Rectangle" src={brand.img} />
                <div className="font-375-l2 text-x-6cqplh text-[length:var(--375-l2-font-size)] tracking-[var(--375-l2-letter-spacing)] leading-[var(--375-l2-line-height)]">
                  {brand.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
    {searchResults.categories && searchResults.categories.length > 0 && (
      <div className="flex flex-col items-start gap-5 flex-[0_0_auto]">
        <div className="relative w-[315px]">
          <div className="absolute top-0 left-0">
            <div className="text-[#7A7687] text-[length:var(--375-t3-font-size)] leading-[var(--375-t3-line-height)] whitespace-nowrap mt-[-1px] font-375-t3 font-[number:var(--375-t3-font-weight)] tracking-[var(--375-t3-letter-spacing)]">
              Подкатегория
            </div>
            <div className="relative w-[315px] h-px bg-x-4o-5s-te mt-2" />
          </div>
          <div className="flex flex-col items-start gap-2.5 mt-8 border-t border-[#E5E2EE] pt-4">
            {searchResults.categories.map((category, index) => (
              <div key={index} className="text-x-6cqplh w-full flex items-center h-[35px] cursor-pointer hover:bg-[#08826a14] text-[length:var(--375-l2-font-size)] leading-[var(--375-l2-line-height)] font-375-l2 tracking-[var(--375-l2-letter-spacing)]">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
    {searchResults.products && searchResults.products.length > 0 && (
      <div className="flex flex-col items-start gap-5 flex-[0_0_auto]">
        <div className="relative w-[315px]">
          <div className="absolute top-0 left-0">
            <div className="text-[#7A7687] text-[length:var(--375-t3-font-size)] leading-[var(--375-t3-line-height)] whitespace-nowrap mt-[-1px] font-375-t3 font-[number:var(--375-t3-font-weight)] tracking-[var(--375-t3-letter-spacing)]">
              Бренд
            </div>
            <div className="relative w-[315px] h-px bg-x-4o-5s-te mt-2" />
          </div>
          <div className="flex flex-col border-t border-[#E5E2EE] pt-4 items-start mt-8">
            {searchResults.products.map((product, index) => (
              <div key={index} className="inline-flex pl-1 items-center gap-2.5 h-[45px] w-full cursor-pointer hover:bg-[#08826a14] duration-200">
                <img className="w-[30px] h-[30px]" alt="Rectangle" src={product.img} />
                <div className="font-375-l2 text-x-6cqplh text-[length:var(--375-l2-font-size)] tracking-[var(--375-l2-letter-spacing)] leading-[var(--375-l2-line-height)]">
                  {product.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
</div>










          <div className="absolute w-[565px] h-[39px] top-px left-px bg-x-1l-ubo-z rounded-[50px]">
            <div onClick={() => setIsCategoryOpen(false)} className="absolute search top-2.5 left-[161px] w-full font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-ML-tw-1j text-[length:var(--1440-l2-font-size)] tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]">
              <input
                type="text"
                placeholder="Поиск"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full placeholder:text-[#7A7687] h-full bg-transparent outline-none"
              />
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
              className={`categroies z-50 all-[unset] duration-200 cursor-pointer box-border flex-col items-center justify-center gap-2 px-[15px] py-2.5 absolute top-0 left-0 ${
                isCategoryOpen ? "bg-[#088269]" : "bg-[#efefef]"
              }  inline-flex rounded-[50px]`}
            >
              <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                <div
                  className={` ${
                    isCategoryOpen ? "text-white" : "text-ML-tw-1j"
                  } relative w-fit font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]`}
                >
                  Все категории
                </div>
                <div className={` absolute top-full left-0 mt-2 z-20 w-[400px] bg-white border border-gray-300 rounded-md shadow-lg duration-300 ${isCategoryOpen ? "duration-200 -translate-y-[0]" : "duration-200 opacity-0 -translate-y-[120%]"}`}>
                  <ul>
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className="px-4 border-t py-[6px] hover:bg-gray-200 cursor-pointer"
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  className="relative w-[13px] h-[13px]"
                  alt="Element down"
                  src={DownImage}
                />
              </div>
            </button>
          </div>
          <img
            className="searchBtn absolute cursor-pointer top-2 left-[576px] w-6 h-6"
            alt="Element search"
            onClick={() => {handleSearch()
              setIsSearchOpen(true);
            }}
            src={SearchImg}
          />
        </div>
      </div>
      <img
        className="absolute w-24 h-[41px] top-[63px] left-[65px]"
        alt="Logo"
        src={Logo}
      />
      <div className="absolute w-[1440px] h-px top-9 left-0 bg-m-b-3t-zi" />
      <div className="flex w-[1310px] items-center justify-between absolute top-2.5 left-[65px]">
        <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
          <div className="font-1440-t2 font-[number:var(--1440-t2-font-weight)] hover:text-black duration-200 cursor-pointer text-ML-tw-1j text-[length:var(--1440-t2-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            О компании
          </div>
          <div className="font-1440-t2 font-[number:var(--1440-t2-font-weight)] hover:text-black duration-200 cursor-pointer text-ML-tw-1j text-[length:var(--1440-t2-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Доставка
          </div>
          <div className="font-1440-t2 font-[number:var(--1440-t2-font-weight)] hover:text-black duration-200 cursor-pointer text-ML-tw-1j text-[length:var(--1440-t2-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Оплата
          </div>
          <div className="font-1440-t2 font-[number:var(--1440-t2-font-weight)] hover:text-black duration-200 cursor-pointer text-ML-tw-1j text-[length:var(--1440-t2-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Гарантии
          </div>
          <div className="font-1440-t2 font-[number:var(--1440-t2-font-weight)] hover:text-black duration-200 cursor-pointer text-ML-tw-1j text-[length:var(--1440-t2-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Блог
          </div>
        </div>
        <div className="inline-flex items-center gap-[45px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ML-tw-1j text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            info@mail.ru
          </div>
          <p className="relative w-fit mt-[-1.00px] font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ML-tw-1j text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            г. Москва, ул. Московская, д. 35
          </p>
        </div>
      </div>
      <button className="all-[unset] box-border inline-flex gap-2.5 px-[30px] py-[11px] absolute top-[141px] left-[1201px] bg-tx-u7vg items-center justify-center rounded-[50px]">
        <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Заказать звонок
        </div>
      </button>
    </header>
  );
};
