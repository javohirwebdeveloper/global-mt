import React from "react";
import Symbol from '../../assets/symbol.png'
import Symbol1 from '../../assets/symbol-1.png'
import Symbol3 from '../../assets/symbol-2.png'
import Symbol2 from '../../assets/symbol-3.png'
export const Offers = () => {
  return (
    <div className="absolute w-[1310px] h-[396px] top-[2428px] left-[65px] bg-x-1l-ubo-z">
      <div className="inline-flex items-start gap-2.5 absolute top-[76px] left-0">
        <div className="relative w-[322px] h-80">
          <div className="relative w-80 h-80 rounded-[10px] border border-solid border-[#e5e2ee]">
            <div className="absolute h-[22px] top-[204px] left-[87px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] text-center tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] whitespace-nowrap [font-style:var(--1440-t1-font-style)]">
              Быстрая&nbsp;&nbsp;доставка
            </div>
            <img className="absolute w-[37px] h-[75px] top-[87px] left-[140px]" alt="Symbol" src={Symbol} />
          </div>
        </div>
        <div className="relative w-[322px] h-80">
          <div className="relative w-80 h-80 rounded-[10px] border border-solid border-[#e5e2ee]">
              <div className="relative h-[73px]">
                <img className="absolute w-[66px] h-[73px] top-24 left-[126px]" alt="Symbol" src={Symbol2} />
            </div>
            <div className="absolute w-[148px] h-11 top-[193px] left-[85px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] text-center tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Весь товар сертифицирован
            </div>
          </div>
        </div>
        <div className="relative w-[322px] h-80">
          <div className="relative w-80 h-80 rounded-[10px] border border-solid border-[#e5e2ee]">
            <img className="absolute w-[66px] h-[59px] top-24 left-[126px]" alt="Symbol" src={Symbol1} />
            <div className="absolute w-[148px] h-11 top-[193px] left-[85px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] text-center tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Гибкая система скидок
            </div>
          </div>
        </div>
        <div className="relative w-[322px] h-80 mr-[-2.00px]">
          <div className="relative w-80 h-80 rounded-[10px] border border-solid border-[#e5e2ee]">
            <img className="absolute w-[33px] h-[58px] top-[101px] left-[150px]" alt="Symbol" src={Symbol3} />
            <div className="absolute w-[190px] h-[22px] top-[204px] left-16 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] text-center tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Лет на рынке
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-9 -top-px left-0 font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-ws-j7-it text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] whitespace-nowrap [font-style:var(--1440-h2-font-style)]">
        Почему выбирают нас?
      </div>
    </div>
  );
};