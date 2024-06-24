import React from "react";

export const Frame = () => {
  return (
    <div className="inline-flex flex-col items-start gap-2.5 absolute top-[451px] left-[1165px]">
      <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
        Способы оплаты
      </div>
      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
        <img className="relative w-[49px] h-[30px]" alt="Mastercard" src="mastercard.svg" />
        <img className="relative w-[63px] h-5" alt="Visa" src="visa.svg" />
        <img className="relative w-[66px] h-5" alt="Mir" src="mir.svg" />
      </div>
    </div>
  );
};