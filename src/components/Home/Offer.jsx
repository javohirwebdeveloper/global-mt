import { useMemo } from "react";

const Offer = ({ className = "", symbol, prop, symbolIconPadding }) => {
  const offerStyle = useMemo(() => {
    return {
      padding: symbolIconPadding,
    };
  }, [symbolIconPadding]);

  return (
    <div
      className={` w-full xl:h-[320px] md:h-[175px] h-[168px] shrink-0 flex flex-col items-center justify-center box-border relative gap-[15px] md:gap-[25px] xl:gap-[42px] text-center text-base text-[#202020] font-t1 ${className}`}
      style={offerStyle}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs box-border border-[1px] border-solid border-color2" />
      <img
        className="xl:h-[75px] md:h-[44.22px] h-[42.41px]  max-w-[66.6px] relative z-[1]"
        loading="lazy"
        alt=""
        src={symbol}
      />
      <div className="relative xl:text-[16px] md:text-[14px] text-[12px] leading-[140%] font-medium whitespace-pre-wrap z-[1]">
        {prop}
      </div>
    </div>
  );
};

export default Offer;
