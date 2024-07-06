import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Component = ({ className = "", prop, prop1, rectangle }) => {
  return (
    <div
      className={`flex-1 rounded-3xs bg-[white] box-border flex flex-row items-start justify-start py-0 pr-0 pl-[23px] gap-[15px] min-w-[422px] max-w-full text-left text-lg text-[#202020] font-t1 border-[1px] border-solid border-lavender mq450:min-w-full mq525:flex-wrap mq525:pl-5 mq525:pr-5 mq525:pb-5 mq525:box-border ${className}`}
    >
      <div className="self-stretch w-[650px] relative rounded-3xs bg-[white] box-border hidden max-w-full border-[1px] border-solid border-lavender" />
      <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[224px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[93px] mq450:gap-[46px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
            <h3 className="m-0 w-[319px] relative text-inherit font-semibold font-inherit inline-block z-[1]">
              {prop}
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-xs text-[#7A7687]">
              <div className="relative inline-block min-w-[98px] z-[1]">
                Описание услуги
              </div>
              <div className="w-[345px] relative text-base leading-[140%] font-medium inline-block max-h-[110px] [word-break:break-word] z-[1]">
                {prop1}
              </div>
            </div>
          </div>
          <Button
            className="w-[123px] h-[41px] z-[1]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#088269",
              fontSize: "14",
              borderColor: "#d5d1e1",
              borderRadius: "50px",
              "&:hover": { borderColor: "#d5d1e1" },
              width: 123,
              height: 41,
            }}
          >
            Заказать
          </Button>
        </div>
      </div>
      <img
        className="h-[350px] w-[265px] relative rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none object-cover z-[1] mq525:flex-1"
        loading="lazy"
        alt=""
        src={rectangle}
      />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  rectangle: PropTypes.string,
};

export default Component;
