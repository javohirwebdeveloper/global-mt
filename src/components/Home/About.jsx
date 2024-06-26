import React, {useState} from "react";

export const About = () => {
  const [isHovered, setIsHovered] = useState(1);
  return (
    <div className="absolute w-[1440px] h-[668px] top-[5074px] left-0 bg-tx-u7vg">
      <div className="absolute h-9 top-[117px] left-[65px] font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] whitespace-nowrap [font-style:var(--1440-h2-font-style)]">
        Информация о компании
      </div>
      <div className="absolute w-[650px] h-[447px] top-[100px] left-[725px]">
        <img className="absolute w-[650px] h-px -top-px left-0 object-cover" alt="Line" src="line.svg" />
        <img className="top-[242px] absolute w-[650px] h-px left-0 object-cover" alt="Line" src="line.svg" />
        <img className="top-[317px] absolute w-[650px] h-px left-0 object-cover" alt="Line" src="line.svg" />
        <img className="top-[392px] absolute w-[650px] h-px left-0 object-cover" alt="Line" src="line.svg" />
        <div className="absolute w-[652px] h-8 top-[265px] left-0">
          <div className="absolute h-[25px] top-[3px] left-0 font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
            Преимущества сотрудников
          </div>
          <div className="absolute w-8 h-8 top-0 left-[618px] rounded-[40px] overflow-hidden border border-solid border-[#e1dfe7] -rotate-90">
            <img className="absolute w-5 h-5 top-1.5 left-1.5 rotate-90" alt="Element plus" src="plus.svg" />
          </div>
        </div>
        <div className="absolute w-[650px] h-[199px] top-[22px] left-0">
          <div className="absolute w-8 h-8 top-0 left-[618px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden -rotate-90">
            <img className="absolute w-5 h-5 top-1.5 left-1.5 rotate-90" alt="Element cross" src="cross.svg" />
          </div>
          <div className="inline-flex flex-col items-start gap-10 absolute top-[3px] left-0">
            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
                О компании
              </div>
              <p className="relative w-[600px] opacity-80 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
                Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и
                последовательного развития общества.&nbsp;&nbsp; В рамках спецификации современных стандартов,
                сторонники тоталитаризма в науке будут функционально разнесены.
              </p>
            </div>
            <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Подробнее
              </div>
              <img className="relative w-[13px] h-[13px]" alt="Element arrow" src="arrow.svg" />
            </div>
          </div>
        </div>
        <div className="top-[340px] absolute w-[652px] h-8 left-0">
          <div className="absolute h-[25px] top-[3px] left-0 font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
            Достижения компании
          </div>
          <div className="absolute w-8 h-8 top-0 left-[618px] rounded-[40px] overflow-hidden border border-solid border-[#e1dfe7] -rotate-90">
            <img className="absolute w-5 h-5 top-1.5 left-1.5 rotate-90" alt="Element plus" src="plus.svg" />
          </div>
        </div>
        <div className="top-[415px] absolute w-[652px] h-8 left-0">
          <div className="absolute h-[25px] top-[3px] left-0 font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
            Карьерный рост
          </div>
          <div className="absolute w-8 h-8 top-0 left-[618px] rounded-[40px] overflow-hidden border border-solid border-[#e1dfe7] -rotate-90">
            <img className="absolute w-5 h-5 top-1.5 left-1.5 rotate-90" alt="Element plus" src="plus.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};