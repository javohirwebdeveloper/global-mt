import React, {useState} from "react";
import CrossImg from '../../assets/20--cross.svg'
import PlusImg from '../../assets/20--plus.svg'
import ArrowImg from '../../assets/13--arrow.svg'
export const About = () => {
  const [isHovered, setIsHovered] = useState(1);
  return (
    <div className="absolute w-[1440px] h-[668px] top-[5074px] left-0 bg-tx-u7vg">
      <div className="absolute h-9 top-[117px] left-[65px] font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] whitespace-nowrap [font-style:var(--1440-h2-font-style)]">
        Информация о компании
      </div>
      <div className="absolute w-[650px] h-[447px] top-[100px] left-[725px]">
        <div onMouseEnter={()=> setIsHovered(1)} className={`${isHovered == 1 ? 'h-[251px]':'h-[74px]'} cursor-pointer border-b duration-700 w-[650px] pb-[22px] left-0 overflow-hidden pt-[25px]`}>
          <div className="inline-flex flex-col items-start gap-10 top-[3px] left-0">
            <div className="inline-flex w-full flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="flex justify-between w-[650px] items-center">
                <div className="relative w-fit mt-[-1.00px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
                О компании
              </div>
              <div onClick={() => setIsHovered(0)} className={`right-0 w-8 h-8 top-0 left-[618px] duration-300 flex justify-center items-center ${isHovered == 1 ? 'bg-white':'bg-transparent'} border border-white duration-200 rounded-[40px] overflow-hidden -rotate-90`}>
            <img className=" w-5 h-5 rotate-90" alt="Element cross" src={isHovered == 1 ? CrossImg : PlusImg} />
          </div>
          </div>
              <p className={`${isHovered == 1 ? '':'hidden'} duration-700 relative w-[600px] opacity-80 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]`}>
                Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и
                последовательного развития общества.&nbsp;&nbsp; В рамках спецификации современных стандартов,
                сторонники тоталитаризма в науке будут функционально разнесены.
              </p>
            </div>
            <div className={`  inline-flex items-center gap-[5px] flex-[0_0_auto]`}>
              <div className=" w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Подробнее
              </div>
              <img className=" w-[13px] h-[13px] cursor-pointer" alt="Element arrow" src={ArrowImg} />
            </div>
          </div>
        </div>
         <div onMouseEnter={()=> setIsHovered(2)} className={`${isHovered == 2 ? 'h-[251px]':'h-[74px]'} cursor-pointer border-b duration-700 w-[650px] pb-[22px] left-0 overflow-hidden pt-[25px]`}>
          <div className="inline-flex flex-col items-start gap-10 top-[3px] left-0">
            <div className="inline-flex w-full flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="flex justify-between w-[650px] items-center">
                <div className="relative w-fit mt-[-1.00px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
                Преимущества сотрудников
              </div>
              <div onClick={() => setIsHovered(0)} className={`right-0 w-8 h-8 top-0 left-[618px] duration-300 flex justify-center items-center ${isHovered == 2 ? 'bg-white':'bg-transparent'} border border-white duration-200 rounded-[40px] overflow-hidden -rotate-90`}>
            <img className=" w-5 h-5 rotate-90" alt="Element cross" src={isHovered == 2 ? CrossImg : PlusImg} />
          </div>
          </div>
              <p className={`${isHovered == 2 ? '':'hidden'} duration-700 duration-300relative w-[600px] opacity-80 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)] overflow-hidden`}>
                Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и
                последовательного развития общества.&nbsp;&nbsp; В рамках спецификации современных стандартов,
                сторонники тоталитаризма в науке будут функционально разнесены.
              </p>
            </div>
            <div className={`${isHovered == 2 ? 'duration-1000':'h-0 opacity-0'}  inline-flex items-center gap-[5px] relative flex-[0_0_auto]`}>
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Подробнее
              </div>
              <img className="relative w-[13px] h-[13px] cursor-pointer" alt="Element arrow" src={ArrowImg} />
            </div>
          </div>
        </div>
         <div onMouseEnter={()=> setIsHovered(3)} className={`${isHovered == 3 ? 'h-[251px]':'h-[74px]'} cursor-pointer border-b duration-700 w-[650px] pb-[22px] left-0 overflow-hidden pt-[25px]`}>
          <div className="inline-flex flex-col items-start gap-10 top-[3px] left-0">
            <div className="inline-flex w-full flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="flex justify-between w-[650px] items-center">
                <div className="relative w-fit mt-[-1.00px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
                Достижения компании
              </div>
              <div onClick={() => setIsHovered(0)} className={`right-0 w-8 h-8 top-0 left-[618px] duration-300 flex justify-center items-center ${isHovered == 3 ? 'bg-white':'bg-transparent'} border border-white duration-200 rounded-[40px] overflow-hidden -rotate-90`}>
            <img className=" w-5 h-5 rotate-90" alt="Element cross" src={isHovered == 3 ? CrossImg : PlusImg} />
          </div>
          </div>
              <p className={`${isHovered == 3 ? '':'hidden'} duration-700 duration-300relative w-[600px] opacity-80 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)] overflow-hidden`}>
                Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и
                последовательного развития общества.&nbsp;&nbsp; В рамках спецификации современных стандартов,
                сторонники тоталитаризма в науке будут функционально разнесены.
              </p>
            </div>
            <div className={`${isHovered == 3 ? 'duration-1000':'h-0 opacity-0'}  inline-flex items-center gap-[5px] relative flex-[0_0_auto]`}>
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Подробнее
              </div>
              <img className="relative w-[13px] h-[13px] cursor-pointer" alt="Element arrow" src={ArrowImg} />
            </div>
          </div>
        </div>
         <div onMouseEnter={()=> setIsHovered(4)} className={`${isHovered == 4 ? 'h-[251px]':'h-[74px]'} cursor-pointer border-b duration-700 w-[650px] pb-[22px] left-0 overflow-hidden pt-[25px]`}>
          <div className="inline-flex flex-col items-start gap-10 top-[3px] left-0">
            <div className="inline-flex w-full flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="flex justify-between w-[650px] items-center">
                <div className="relative w-fit mt-[-1.00px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
                Карьерный рост
              </div>
              <div onClick={() => setIsHovered(0)} className={`right-0 w-8 h-8 top-0 left-[618px] duration-300 flex justify-center items-center ${isHovered == 4 ? 'bg-white':'bg-transparent'} border border-white duration-200 rounded-[40px] overflow-hidden -rotate-90`}>
            <img className=" w-5 h-5 rotate-90" alt="Element cross" src={isHovered == 4 ? CrossImg : PlusImg} />
          </div>
          </div>
              <p className={`${isHovered == 4 ? '':'hidden'} duration-700 duration-300relative w-[600px] opacity-80 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)] overflow-hidden`}>
                Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и
                последовательного развития общества.&nbsp;&nbsp; В рамках спецификации современных стандартов,
                сторонники тоталитаризма в науке будут функционально разнесены.
              </p>
            </div>
            <div className={`${isHovered == 4 ? 'duration-1000':'h-0 opacity-0'}  inline-flex items-center gap-[5px] relative flex-[0_0_auto]`}>
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Подробнее
              </div>
              <img className="relative w-[13px] h-[13px] cursor-pointer" alt="Element arrow" src={ArrowImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};