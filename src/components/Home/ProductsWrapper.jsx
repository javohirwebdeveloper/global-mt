import React from "react";
import { FilteringByTags } from "./FilteringByTags";
import { Navigation } from "./Navigation";
import { Products } from "./Products";

export const ProductsWrapper = () => {
  return (
    <div className="absolute w-[1440px] h-[603px] top-[2974px] left-0 bg-x-1l-ubo-z overflow-hidden">
      <Navigation />
      <Products />
      <FilteringByTags />
      <div className="absolute h-9 top-px left-[65px] font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-ws-j7-it text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] whitespace-nowrap [font-style:var(--1440-h2-font-style)]">
        Каталог товаров
      </div>
    </div>
  );
};