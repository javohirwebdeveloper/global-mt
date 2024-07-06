import React, { useState } from "react";
import { products } from "../../public/data";
import { FaChevronRight } from "react-icons/fa6";
import { categories } from "../../public/data";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Comprehensive } from "../components/Home/Comprehensive";
import { ProductsWrapper } from "../components/Home/ProductsWrapper";
import { Clients } from "../components/Home/Clients";
import { Brands } from "../components/Home/Brands";
import { About } from "../components/Home/About";
import { News } from "../components/Home/News";
import { Form } from "../components/Home/Form";
import { Subscription } from "../components/Home/Subscription";
import { Footer } from "../components/Home/Footer";
import { Offers } from "../components/Home/Offers";
const Catalog = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const product1 = products.find((p) => p.id === 151);
  const product2 = products.find((p) => p.id === 152);
  const product3 = products.find((p) => p.id === 153);
  const product4 = products.find((p) => p.id === 154);
  const product5 = products.find((p) => p.id === 155);
  const product6 = products.find((p) => p.id === 156);
  const product7 = products.find((p) => p.id === 157);
  const product8 = products.find((p) => p.id === 158);
  const product9 = products.find((p) => p.id === 159);
  const product10 = products.find((p) => p.id === 160);
  const navigate = useNavigate();

  return (
    <div className="bg-color">
      <article className="bg-color pt-[20px]">
        <div className="max-w-[1440px] w-full mx-auto  md:px-[65px] sm:px-[20px] px-[15px] ">
          <div className="mt-[19px]  relative flex space-x-[10px] flex-row items-start justify-start leading-[normal] tracking-[normal]">
            <main className="flex-1 rounded-3xs flex flex-col items-start justify-start pt-[13px] pb-[15px] pr-[13px] pl-[19px] gap-[12px] text-left text-sm text-[#202020] font-l2 border-[1px] border-solid border-[#E5E2EE]">
              <div className="w-80 h-[595px] relative rounded-3xs box-border hidden border-[1px] border-solid border-[#E5E2EE]" />
              <div className="flex flex-row items-start justify-start pt-0 pb-[3px] pr-5 pl-0 text-base">
                <div className="relative leading-[140%] font-medium inline-block min-w-[104px] z-[1]">
                  Направления
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2 pr-1.5 pl-0">
                <div className="h-px flex-1 relative bg-[#E5E2EE] z-[1]" />
              </div>
              <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-[12px] text-left text-sm text-[#202020] font-l2">
                {categories.map((category, index) => {
                  const encodedCategory = encodeURIComponent(category);
                  return (
                    <div
                      onClick={() => navigate(`/Каталог/${encodedCategory}`)}
                      key={index}
                      className={` hover:text-[#088269] cursor-pointer duration-200 self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]`}
                    >
                      <div className={`relative inline-block min-w-[83px]`}>
                        {category}
                      </div>
                      <p className={`text-[13px] duration-200`}>
                        <FaChevronRight />
                      </p>
                    </div>
                  );
                })}
              </section>
            </main>
            <section className="h-[1246px] max-w-[981px] w-full grid grid-cols-3 grid-rows-4 gap-[10px]">
              <NavLink
                to={`/product/${product1.id}`}
                className="row-span-1 col-span-1 h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%] bg-white w-full flex justify-center items-center">
                  <img
                    src={product1.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {product1.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${product2.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={product2.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {product2.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${product3.id}`}
                className="row-span-2 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[88%] bg-white w-full flex justify-center items-center">
                  <img
                    src={product3.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {product3.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${product4.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%] bg-white w-full flex justify-center items-center">
                  <img
                    src={product4.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {product4.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${product5.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%] bg-white w-full flex justify-center items-center">
                  <img
                    src={product5.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {product5.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${product6.id}`}
                className="row-span-2 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[88%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={product6.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {product6.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${product7.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={product7.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {product7.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${product8.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={product8.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {product8.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${product9.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={product9.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {product9.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${product10.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={product10.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {product10.name}
                </div>
              </NavLink>
            </section>
          </div>
        </div>
      </article>
      <div className="mx-auto w-[1440px]">
        <Comprehensive />
      </div>
      <div className="mx-auto w-[1440px]">
        <Offers />
      </div>
      <ProductsWrapper />
      <Clients />
      <Brands />
      <About />
      <News />
      <div className="mx-auto w-[1440px]">
        <Form />
      </div>
      <Subscription />
      <Footer />
    </div>
  );
};

export default Catalog;
