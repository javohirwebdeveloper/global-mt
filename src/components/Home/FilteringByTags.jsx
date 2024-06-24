import React from "react";

export const FilteringByTags = () => {
  return (
    <div className="inline-flex flex-col items-start gap-2.5 absolute top-[78px] left-[65px]">
      <div className="relative w-fit mt-[-1.00px] opacity-50 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]">
        Хиты продаж
      </div>
      <div className="relative w-fit opacity-50 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]">
        Новинки
      </div>
      <div className="relative w-fit opacity-50 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]">
        Акции
      </div>
    </div>
  );
};