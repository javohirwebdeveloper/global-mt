const Component = ({ className = "", serviceIcons, prop }) => {
  return (
    <div
      className={`h-[204px] w-[308px] rounded-8xs box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] z-[2] text-left text-base text-[#202020] font-t2 border-[1px] border-solid border-color2 ${className}`}
    >
      <div className="self-stretch h-[204px] relative rounded-8xs box-border hidden border-[1px] border-solid border-color2" />
      <img
        className="self-stretch flex-1 relative rounded-t-8xs rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={serviceIcons}
      />
      <div className="flex flex-row items-start justify-start py-0 px-[18px]">
        <div className="relative leading-[140%] font-medium inline-block min-w-[86px] z-[1]">
          {prop}
        </div>
      </div>
    </div>
  );
};

export default Component;
