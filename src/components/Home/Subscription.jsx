import React from "react";

export const Subscription = () => {
  return (
    <div className="absolute w-[1440px] h-[276px] top-[7350px] left-0 bg-x-7rs-fx border border-solid border-[#e5e4ed]">
      <div className="absolute w-[544px] h-[206px] top-[34px] left-[724px]">
        <div className="absolute w-[540px] h-[83px] top-[123px] left-0">
          <div className="inline-flex items-center gap-2.5 absolute top-[63px] left-0">
            <div className="relative w-5 h-5 bg-x-1l-ubo-z rounded-[3px] border border-solid border-[#d5d1e1]" />
            <p className="relative w-fit font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ws-j7-it text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
              Я даю согласие на обработку своих персональных данных.
            </p>
          </div>
          <div className="inline-flex flex-col items-start gap-1.5 absolute top-0 left-0">
            <div className="inline-flex items-center gap-[271px] pl-[25px] pr-0 py-px relative flex-[0_0_auto] bg-x-1l-ubo-z rounded-[50px] overflow-hidden border border-solid border-[#d5d1e1]">
              <div className="relative w-fit font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-ML-tw-1j text-[length:var(--1440-l2-font-size)] tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]">
                Введите email
              </div>
              <button className="all-[unset] box-border inline-flex gap-2.5 px-[30px] py-[11px] relative flex-[0_0_auto] bg-tx-u7vg items-center justify-center rounded-[50px]">
                <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                  Подписаться
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-14 left-0 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ML-tw-1j text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]">
          Акции, скидки, распродажи ждут!
        </div>
        <p className="absolute top-0 left-0 font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-ws-j7-it text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] whitespace-nowrap [font-style:var(--1440-h2-font-style)]">
          Подпишитесь и будьте в курсе!
        </p>
      </div>
      <img className="absolute w-[571px] h-[276px] -top-px left-[65px]" alt="Vector" src="vector.svg" />
    </div>
  );
};