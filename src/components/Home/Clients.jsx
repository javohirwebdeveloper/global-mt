import React from "react";
import './clients.css'
import { products } from "../../../public/data";
import { NavLink } from "react-router-dom";
export const Clients = () => {
  
  return (
    <div className="absolute w-[1440px] h-[686px] top-[3727px] left-0 bg-x-7rs-fx overflow-hidden">
      <div className="marquee inline-flex items-start gap-2.5 absolute top-[306px] left-[-100px]">
        {products.map((product, index) => (<NavLink key={index} to={`/product/${index}`} className="relative w-[322px] h-[280px]">
          <div className="relative w-80 h-[280px] bg-x-1l-ubo-z rounded-[10px] border border-solid border-[#e1dfe7]">
            <div className="absolute w-80 h-[196px] top-0 left-0 bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]">
              <img
                className="w-[140px] h-[104px] top-[45px] left-[99px] absolute object-cover"
                alt="Image"
                src={product.img}
              />
            </div>
            <p className="absolute w-[226px] top-[215px] left-6 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              {product.name}
            </p>
          </div>
        </NavLink>))}
      </div>
      <div className="absolute w-[544px] h-[106px] top-[100px] left-[725px]">
        <div className="relative w-[540px] h-[106px]">
          <div className="absolute w-[540px] h-[106px] top-0 left-0 font-1440-h1 font-[number:var(--1440-h1-font-weight)] text-ws-j7-it text-[length:var(--1440-h1-font-size)] tracking-[var(--1440-h1-letter-spacing)] leading-[var(--1440-h1-line-height)] [font-style:var(--1440-h1-font-style)]">
            БОЛЕЕ <br />
            УСПЕШНЫХ ПРОЕКТОВ
          </div>
          <div className="absolute h-[53px] top-0 left-[174px] font-1440-h1 font-[number:var(--1440-h1-font-weight)] text-tx-u7vg text-[length:var(--1440-h1-font-size)] tracking-[var(--1440-h1-letter-spacing)] leading-[var(--1440-h1-line-height)] whitespace-nowrap [font-style:var(--1440-h1-font-style)]">
            5000
          </div>
        </div>
      </div>
      <div className="absolute h-9 top-[99px] left-[65px] font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-ws-j7-it text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] whitespace-nowrap [font-style:var(--1440-h2-font-style)]">
        Наши клиенты
      </div>
    </div>
  );
};