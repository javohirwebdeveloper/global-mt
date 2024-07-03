const Ategory1 = ({ className = "", photo, prop }) => {
  return (
    <div
      className={`self-stretch hover:scale-105 cursor-pointer duration-200 z-[40] h-[304px] w-[320px] flex flex-col items-start justify-start pt-[23px] px-[25px] pb-5 relative gap-[44px] text-left text-base text-[#202020] font-t1 mq450:gap-[22px] ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs box-border border-[1px] border-solid border-[#E5E2EE]" />
        <div className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none bg-color2 box-border w-80 h-[220px] z-[1] border-[1px] border-solid border-[#E5E2EE]" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[49px] pl-12 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-[173px] w-[173px] relative object-cover mix-blend-multiply z-[2]"
          loading="lazy"
          alt=""
          src={photo}
        />
      </div>
      <div className="w-[184px] relative leading-[140%] font-medium flex items-center z-[2]">
        {prop}
      </div>
    </div>
  );
};

export default Ategory1;
