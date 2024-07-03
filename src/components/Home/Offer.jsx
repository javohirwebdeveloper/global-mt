import { useMemo } from "react";

const Offer = ({ className = "", symbol, prop, symbolIconPadding }) => {
  const offerStyle = useMemo(() => {
    return {
      padding: symbolIconPadding,
    };
  }, [symbolIconPadding]);

  return (
    <div
      className={` w-[320px] h-[320px] shrink-0 flex flex-col items-center justify-start pt-[88px] pb-[93px] pr-[21px] pl-5 box-border relative gap-[42px] text-center text-base text-[#202020] font-t1 ${className}`}
      style={offerStyle}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs box-border border-[1px] border-solid border-color2" />
      <div className="flex flex-row items-start justify-end py-0 pr-[52px] pl-[53px]">
        <img
          className="h-[75px] max-w-[66.6px] relative z-[1]"
          loading="lazy"
          alt=""
          src={symbol}
        />
      </div>
      <div className="relative leading-[140%] font-medium whitespace-pre-wrap z-[1]">
        {prop}
      </div>
    </div>
  );
};

export default Offer;
