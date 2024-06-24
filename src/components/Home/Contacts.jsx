import React from "react";

export const Contacts = () => {
  return (
    <div className="absolute w-[214px] h-[335px] top-10 left-[1165px]">
      <div className="inline-flex flex-col items-start gap-[5px] absolute top-[244px] left-0">
        <div className="relative w-fit mt-[-1.00px] font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l2-font-size)] tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]">
          +7 000-000-00-00
        </div>
        <div className="relative w-fit font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l2-font-size)] tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]">
          +7 495-000-00-00
        </div>
        <div className="font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l2-font-size)] relative w-fit tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]">
          8 800-000-00-00
        </div>
        <div className="relative w-fit font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l2-font-size)] tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]">
          info@mail.ru
        </div>
      </div>
      <p className="absolute top-[162px] left-0 font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l2-font-size)] tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]">
        График работы:
        <br />
        Пн-Пт с 09:00-19:00, <br />
        Сб-Вс - выходной
      </p>
      <div className="inline-flex items-center gap-2 absolute top-[118px] left-0">
        <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Карта проезда
        </div>
        <img className="relative w-[13px] h-[13px]" alt="Element arrow" src="arrow.svg" />
      </div>
      <div className="inline-flex flex-col items-start gap-[5px] absolute top-[50px] left-0">
        <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Адрес:
        </div>
        <p className="relative w-fit font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l2-font-size)] tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]">
          г. Москва, ул. Московская, д. 35
        </p>
      </div>
      <div className="absolute w-[210px] h-px top-[34px] left-0 bg-m-b-3t-zi" />
      <div className="absolute top-0 left-0 font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
        Контакты
      </div>
    </div>
  );
};