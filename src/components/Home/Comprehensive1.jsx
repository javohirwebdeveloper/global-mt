const Comprehensive1 = ({ className = "", photo, prop }) => {
  return (
    <div
      className={`xl:h-[579px] md:h-[423px] w-[236px] h-[410px] carousel-item md:w-[430px] flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border relative xl:gap-[20px] md:gap-[15px] gap-[9px] max-w-full text-left text-base text-[#202020] font-t1 ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs box-border border-[1px] border-solid border-color2" />
      <img
        className="self-stretch flex-1 relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={photo}
      />
      <div className="flex flex-row items-start justify-start py-0 px-[25px]">
        <div className="relative leading-[140%] font-medium z-[1]">{prop}</div>
      </div>
    </div>
  );
};

export default Comprehensive1;
