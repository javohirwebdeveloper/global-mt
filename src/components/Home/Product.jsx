import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Product = ({ className = "", photo }) => {
  return (
    <div
      className={`w-80 rounded-3xs box-border shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[13px] gap-[20px] text-left text-sm text-teal font-h3 border-[1px] border-solid border-color1 ${className}`}
    >
      <div className="self-stretch h-[279px] relative">
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <div className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none bg-color4 box-border w-full h-full border-[1px] border-solid border-color1" />
          <img
            className="absolute h-[64.87%] w-[56.56%] top-[22.58%] right-[23.75%] bottom-[12.54%] left-[19.69%] max-w-full overflow-hidden max-h-full object-cover mix-blend-multiply z-[1]"
            loading="lazy"
            alt=""
            src={photo}
          />
        </div>
        <div className="absolute top-[15px] left-[15px] w-[290px] flex flex-row items-start justify-between gap-[20px] z-[2]">
          <div className="w-[79px] rounded-41xl bg-honeydew box-border flex flex-row items-start justify-start py-0.5 px-[9px] border-[1px] border-solid border-teal">
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[59px]">
              Новинка
            </a>
          </div>
          <div className="flex flex-row items-start justify-start py-0.5 px-0 gap-[10px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/card-icon-2.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/card-icon.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 text-lg text-color2">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
          <div className="w-[283px] flex flex-col items-start justify-start py-0 px-[3px] box-border gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative font-semibold">
                <p className="m-0">{`Анализатор мочи `}</p>
                <p className="m-0">MIND UA-66</p>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[5px] text-xs text-color3">
                <div className="relative inline-block min-w-[90px]">
                  Артикул: 213134
                </div>
                <div className="relative inline-block min-w-[58px]">
                  В наличии
                </div>
              </div>
            </div>
            <div className="relative font-semibold inline-block min-w-[112px]">
              300 000 руб.
            </div>
          </div>
          <Button
            className="self-stretch h-[41px]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#088269",
              fontSize: "14",
              borderColor: "#d5d1e1",
              borderRadius: "50px",
              "&:hover": { borderColor: "#d5d1e1" },
              height: 41,
            }}
          >
            Добавить в корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  photo: PropTypes.string,
};
export default Product;