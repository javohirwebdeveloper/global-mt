import React from "react";
import Symbol from '../../assets/symbol.png'
import Symbol1 from '../../assets/symbol-1.png'
import Symbol3 from '../../assets/symbol-2.png'
import Symbol2 from '../../assets/symbol-3.png'
import Offer from "./Offer";

export const Offers = () => {
  return (
    <div
      className={`mt-[150px] bg-color w-[1310px] mx-auto overflow-hidden flex flex-col items-start justify-start gap-[40px] leading-[normal] tracking-[normal] text-left text-11xl text-[#202020] font-t1 mq675:gap-[20px] `}
    >
      <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq450:text-[18px] mq450:leading-[22px] mq750:text-[24px] mq750:leading-[29px]">
        Почему выбирают нас?
      </h2>
      <section className="w-[1310px] overflow-x-auto flex flex-row items-start justify-start gap-[10px] max-w-full text-center text-base text-color1 font-t1">
        <Offer symbol={Symbol} prop="Быстрая  доставка" />
        <Offer
          symbol={Symbol2}
          prop="Гибкая система скидок"
          symbolIconPadding="99px 20px 82px"
        />
        <Offer
          symbol={Symbol1}
          prop="Гибкая система скидок"
          symbolIconPadding="99px 20px 82px"
        />
        <Offer
          symbol={Symbol3}
          prop="Лет на рынке"
          symbolIconPadding="102.4px 65px 93px"
        />
      </section>
    </div>
  );
};


