import { useMemo } from "react";
import PropTypes from "prop-types";

const Offer = ({ className = "", subtract, prop }) => {
  return (
    <div
      className={`flex-1 rounded-3xs box-border flex flex-col h-[320px] items-center justify-center gap-[30px] min-w-[240px] max-w-[320px] text-center text-base text-[#202020] font-t1 border-[1px] border-solid border-[#E5E2EE] ${className}`}
    >
      <div className="w-80 h-80 relative rounded-3xs box-border hidden border-[1px] border-solid border-color1" />
      <div className="flex flex-row items-start justify-end py-0 pr-[30px] pl-[31px]">
        <img
          className="h-[74px] w-[56.5px] relative z-[1]"
          loading="lazy"
          alt=""
          src={subtract}
        />
      </div>
      <div className="w-[118px] relative leading-[140%] font-medium flex items-center justify-center z-[1]">
        {prop}
      </div>
    </div>
  );
};

Offer.propTypes = {
  className: PropTypes.string,
  subtract: PropTypes.string,
  prop: PropTypes.string,
};

export default Offer;
