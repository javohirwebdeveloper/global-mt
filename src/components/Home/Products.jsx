import React from "react";
import { Div } from "./Div";
import { Product } from "./Product";
import { ProductWrapper } from "./ProductWrapper";
import { SectionComponentNode } from "./SectionComponentNode";

export const Products = () => {
  return (
    <div className="inline-flex items-start gap-2.5 absolute top-0 left-[395px]">
      <Product />
      <ProductWrapper />
      <Div />
      <SectionComponentNode />
    </div>
  );
};