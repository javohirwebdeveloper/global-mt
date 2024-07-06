import { useMemo } from "react";
import PropTypes from "prop-types";

const Group = ({ className = "", prop, prop1, prop2, prop3, propMinWidth }) => {
  const groupStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 rounded-3xs bg-[white] box-border flex flex-col items-start justify-start pt-7 px-[30px] pb-[77px] gap-[15px] min-w-[322px] max-w-full text-left text-lg text-[#202020] font-t1 border-[1px] border-solid border-[#E5E2EE] ${className}`}
      style={groupStyle}
    >
      <div className="w-[220px] relative font-semibold inline-block z-[1]">
        {prop}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full text-base text-[#7A7687] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[27px]">
          <div className="relative leading-[140%] font-medium inline-block min-w-[11px] z-[1]">
            1.
          </div>
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <div className="relative leading-[140%] font-medium inline-block min-w-[14px] z-[1]">
              2.
            </div>
            <div className="relative leading-[140%] font-medium inline-block min-w-[14px] z-[1]">
              3.
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[226px] max-w-full">
          <div className="self-stretch relative leading-[140%] font-medium z-[1]">
            {prop1}
          </div>
          <div className="relative leading-[140%] font-medium inline-block max-w-full z-[1]">
            {prop2}
          </div>
          <div className="relative leading-[140%] font-medium z-[1]">
            {prop3}
          </div>
        </div>
      </div>
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Group;
