import React from "react";
import "./clients.css";
import { products } from "../../../public/data";
import { NavLink } from "react-router-dom";

export const Clients = () => {
  return (
    <div className="mt-[150px] w-full  xl:px-[65px] sm:px-[20px] px-[15px]  h-[686px] bg-x-7rs-fx overflow-hidden">
      <div className="flex flex-col items-center justify-start h-full">
        <div className="flex mq770:flex-col mq770:gap-[50px] justify-between items-start w-full px-10 mq770:mt-[50px] mt-[100px] mb-[100px]">
          <div className="text-ws-j7-it text-[30px] font-1440-h2">
            Наши клиенты
          </div>
          <div className="text-left">
            <div className="text-ws-j7-it font-1440-h1 text-[28px] xl:text-[48px] leading-[var(--1440-h1-line-height)]">
              БОЛЕЕ <span className="text-[#088269]">5000</span>
              <br />
              УСПЕШНЫХ ПРОЕКТОВ
            </div>
          </div>
        </div>
        <div className="marquee flex gap-32 md:gap-2.5 overflow-hidden">
          {products.map((product, index) => (
            <NavLink
              key={index}
              to={`/product/${product.id}`}
              className="relative w-[322px] mq770:w-[208px] mq770:h-[236px] h-[280px]"
            >
              <div className="relative w-80 h-[280px] bg-x-1l-ubo-z rounded-[10px] border border-solid border-[#e1dfe7]">
                <div className="w-80 h-[196px] bg-z-vq-cz-3 rounded-t-lg border border-solid border-[#e5e2ee] flex items-center justify-center">
                  <img
                    className="w-[140px] h-[104px] object-cover"
                    alt="Product"
                    src={product.img}
                  />
                </div>
                <NavLink
                  to={`/product/${product.id}`}
                  className="absolute w-[226px] top-[215px] left-6 font-1440-t1 text-ws-j7-it"
                >
                  {product.name}
                </NavLink>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
