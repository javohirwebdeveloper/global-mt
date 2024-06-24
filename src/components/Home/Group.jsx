import React from "react";

export const Group = () => {
  return (
    <div className="absolute w-[102px] h-[53px] top-[451px] left-[395px]">
      <div className="absolute top-0 left-0 font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
        Мы в соцсетях
      </div>
      <div className="inline-flex items-center gap-2.5 absolute top-[29px] left-0">
        <img className="relative w-6 h-6" alt="Element vk" src="vk.svg" />
        <img className="relative w-6 h-6" alt="Element telegram" src="telegram.svg" />
        <img className="relative w-6 h-6" alt="Element whatsapp" src="whatsapp.svg" />
      </div>
    </div>
  );
};