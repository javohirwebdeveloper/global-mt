import React from "react";

export const Navigation = () => {
  return (
    <div className="w-[980px] top-[562px] left-[395px] absolute h-[41px]">
      <button className="all-[unset] box-border inline-flex gap-2.5 px-[30px] py-[11px] absolute top-0 left-[842px] bg-tx-u7vg items-center justify-center rounded-[50px]">
        <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Все товары
        </div>
      </button>
      <div className="inline-flex items-center gap-2.5 absolute top-0 left-0">
        <div className="relative w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1]">
          <div className="relative w-[17px] h-[17px] top-3 left-3 rotate-90">
            <img
              className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
              alt="Element arrow left"
              src="left.svg"
            />
          </div>
        </div>
        <div className="relative w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1] rotate-180">
          <div className="relative w-[17px] h-[17px] top-3 left-3 rotate-90">
            <img
              className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
              alt="Element arrow right"
              src="right.svg"
            />
          </div>
        </div>
      </div>
      <button className="all-[unset] box-border flex w-[249px] gap-2.5 px-[30px] py-[11px] absolute top-0 left-[583px] border border-solid border-[#d5d1e1] items-center justify-center rounded-[50px]">
        <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-tx-u7vg text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Бесплатная консультация
        </div>
      </button>
    </div>
  );
};