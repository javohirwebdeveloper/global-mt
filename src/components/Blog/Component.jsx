import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Component = ({ serviceIcons, prop }) => {
  return (
    <div
      className={`self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start gap-[30px] max-w-full text-left text-lg text-[#202020] font-t1 border-[1px] border-solid border-[#E5E2EE] mq900:flex-wrap`}
    >
      <div className="self-stretch w-[980px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-[#E5E2EE]" />
      <img
        className="w-[430px] relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs max-h-full object-cover max-w-full z-[1] mq900:flex-1"
        loading="lazy"
        alt=""
        src={serviceIcons}
      />
      <div className="w-[474px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[474px] max-w-full mq675:min-w-full mq900:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[71px] max-w-full mq675:gap-[35px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
            <div className="w-[425px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
              <div className="self-stretch relative font-semibold z-[1]">
                Что такое инфузомат (инфузионный насос)
              </div>
              <div className="relative text-xs text-[#7A7687] inline-block min-w-[60px] z-[1]">
                14.03.2023
              </div>
            </div>
            <div className="self-stretch relative text-base leading-[140%] font-medium text-[#7A7687] whitespace-pre-wrap z-[1]">
              {prop}
            </div>
          </div>
          <Button
            className="w-[138px] h-[41px] z-[1]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#088269",
              fontSize: "14",
              borderColor: "#d5d1e1",
              borderRadius: "50px",
              "&:hover": { borderColor: "#d5d1e1" },
              width: 138,
              height: 41,
            }}
          >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Component;
