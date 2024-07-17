import React from "react";
import Vector from "../../assets/Rectangle1.png";
import { Button } from "@mui/material";
export const Subscription = () => {
  return (
    <div className="xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px]  bg-color2 h-[276px] left-0">
      <section
        className={`self-stretch max-w-[1440px] h-full mx-auto overflow-hidden flex flex-row items-start justify-end py-[35px] pt-0 px-[175px] box-border relative text-left text-11xl text-color5 font-t2 mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:pl-[87px] mq1125:pr-[87px] mq1125:box-border`}
      >
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border border-[1px] border-solid border-color2" />
        <div className="w-[540px] z-40 flex flex-col items-start justify-start gap-[45px] max-w-full  mq800:gap-[22px]">
          <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit mq450:text-lg mq450:leading-[22px] mq800:text-5xl mq800:leading-[29px]">
              Подпишитесь и будьте в курсе!
            </h1>
            <div className="relative text-base leading-[140%] font-medium text-color3">
              Акции, скидки, распродажи ждут!
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-sm text-color3">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch rounded-31xl bg-color overflow-hidden flex flex-row items-center justify-between py-0 pr-0.5 pl-[23px] gap-[20px] border-[1px] border-solid border-color4">
                <input
                  placeholder="Введите email"
                  className="relative inline-block outline-none bg-transparent h-full w-full"
                />
                <Button
                  className="h-[41px] w-[151px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#f8f7f3",
                    fontSize: "14",
                    background: "#088269",
                    borderRadius: "50px",
                    "&:hover": { background: "#088269" },
                    width: 151,
                    height: 41,
                  }}
                >
                  Подписаться
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[10px] max-w-full text-xs text-color5">
              <input className="m-0 h-5 w-5 relative" type="checkbox" />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-[calc(100%_-_30px)]">
                <div className="relative font-medium">
                  Я даю согласие на обработку своих персональных данных.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[547.7px] w-[595.9px] absolute !m-[0] bottom-[-141.8px] left-[53.6px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src={Vector}
        />
      </section>
    </div>
  );
};

