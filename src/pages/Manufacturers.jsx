import React from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { brands } from "../../public/data";
import FilterImg from "../assets/filter.svg";
import Arrow from "../assets/right1x.svg";
import Right1x from "../assets/right1x.svg";
import Right2x from "../assets/right2x.svg";
import Left1x from "../assets/left1x.svg";
import Left2x from "../assets/left2x.svg";
import Arrow2 from "../assets/24--search.svg";
import { ProductsWrapper } from "../components/Home/ProductsWrapper";
import { Offers } from "../components/Home/Offers";
import { News } from "../components/Home/News";
import { About } from "../components/Home/About";
import { Form } from "../components/Home/Form";
import { Subscription } from "../components/Home/Subscription";
import { Footer } from "../components/Home/Footer";
import { NavLink } from "react-router-dom";
const Manufacturers = () => {
  return (
    <>
      <div
        className={`max-w-[1440px] xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-row flex-wrap items-start justify-start gap-[10px] leading-[normal] tracking-[normal] text-left text-base text-[#202020] font-t1 `}
      >
        <div className="w-full mq765:flex hidden justify-center items-center gap-2 border border-[#E5E2EE] rounded-[5px] h-[41px]">
          <img src={FilterImg} className="w-[17px] h-[17px]" alt="" />
          <span>Фильтр</span>
        </div>
        <div className="flex-1 md:flex hidden xl:max-w-[320px] md:max-w-[236px] w-full flex-row items-start justify-start gap-[10px]  mq525:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] ">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <FormControl
                className="self-stretch h-[52px] font-t1 font-medium text-base text-[#202020]"
                variant="standard"
                sx={{
                  borderColor: "#e5e2ee",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "10px",
                  width: "100%",
                  height: "52px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "52px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "52px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "52px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "52px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#202020",
                    fontSize: 16,
                    fontWeight: "Medium",
                    fontFamily: "Manrope",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "20px",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="20px"
                      height="20px"
                      className="-rotate-90"
                      src={Arrow}
                      style={{ marginRight: "14px" }}
                    />
                  )}
                >
                  <MenuItem>Направления</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className="self-stretch rounded-3xs flex flex-col items-start justify-start pt-[13px] pb-[18px] pr-0.5 pl-3.5 gap-[15px] border-[1px] border-solid border-[#E5E2EE]">
                <div className="w-80 h-[370px] relative rounded-3xs box-border hidden border-[1px] border-solid border-[#E5E2EE]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[5px]">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="relative leading-[140%] font-medium inline-block min-w-[60px] z-[1]">
                      Страны
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-5 h-5 -rotate-90 relative overflow-hidden shrink-0 object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src={Arrow}
                      />
                    </div>
                  </div>
                </div>
                <TextField
                  className="[border:none] bg-[transparent] md:w-[216px] xl:w-[291px] !md:h-[33px] xl:h-[39px] font-t1 text-sm text-[#7A7687] z-[1]"
                  placeholder="Поиск по стране"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img width="17px" height="17px" src={Arrow2} />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#e5e2ee" },
                    "& .MuiInputBase-root": {
                      backgroundColor: "#fff",
                      paddingRight: "12px",
                      borderRadius: "50px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#7a7687" },
                  }}
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] text-sm">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[7px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[12px] z-[1]">
                      <div className="self-stretch flex flex-row items-end justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 relative"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[71px]">
                          Австралия
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start py-0  pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-[#E5E2EE]"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[56px]">
                          Австрия
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start  pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-[#E5E2EE]"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[63px]">
                          Беларусь
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 relative"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[55px]">
                          Бельгия
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-[#E5E2EE]"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[111px]">
                          Великобритания
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 relative"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[65px]">
                          Германия
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-[#E5E2EE]"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[57px]">
                          Израиль
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start py-0 pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                        <input
                          className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-[#E5E2EE]"
                          type="checkbox"
                        />
                        <div className="relative inline-block min-w-[58px]">
                          Испания
                        </div>
                      </div>
                    </div>
                    <div className="h-[70px] w-1 relative rounded-[5px] bg-color2 z-[1]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
              <Button
                className="h-[41px] w-[120px]"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#202020",
                  fontSize: "14",
                  borderColor: "#d5d1e1",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#d5d1e1" },
                  width: 120,
                  height: 41,
                }}
              >
                Сбросить
              </Button>
              <Button
                className="h-[41px] flex-1"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#f8f7f3",
                  fontSize: "14",
                  background: "#088269",
                  borderRadius: "50px",
                  "&:hover": { background: "#088269" },
                  height: 41,
                }}
              >
                Показать
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[422px] max-w-full mq450:min-w-full">
          <div className="grid xl:grid-cols-3 grid-cols-2 gap-[10px] w-full">
            {brands.map((brand, index) => (
              <NavLink
                to={`/Страница бренда`}
                key={index}
                className="relative w-full xl:h-[280px] rounded-[10px] overflow-hidden md:h-[216px] h-[164px]"
              >
                <div className="relative w-full h-full bg-[#F8F7F3]  border border-solid border-[#e5e2ee]">
                  <div className="w-full items-center flex justify-center bg-[#F8F7F3] h-[70%] top-0 left-0 bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]">
                    <img
                      className="xl:w-[217px] xl:h-[102px] md:w-[157px] md:h-[73px] w-[132px] h-[61px] object-cover"
                      alt="Cropped"
                      src={brand.img}
                    />
                  </div>
                  <p className="xl:w-[217px] xl:py-[20px] xl:px-[25px] md:py-[15px] md:px-[15px] py-[7px] px-[13px] md:w-[157px] xl:text-[16px] md:text-[14px] text-[12px] w-[132px] top-[215px] left-6 font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
                    {brand.name}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="self-stretch mt-[40px] max-w-[328px] mx-auto w-full flex flex-row items-start justify-center py-0 px-5 box-border text-sm">
            <div className="w-[328px] flex flex-row items-start justify-start gap-[5px] max-w-full">
              <div className="h-8 w-8 rounded-lg bg-[#ffffff] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE]">
                <img
                  className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={Left2x}
                />
              </div>
              <div className="h-8 w-8 rounded-lg bg-[#ffffff] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE]">
                <img
                  className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={Left1x}
                />
              </div>
              <div className="rounded-lg bg-[#088269] flex flex-row items-start justify-start py-[6.5px] px-[13px] text-color">
                <div className="relative font-semibold inline-block min-w-[6px]">
                  1
                </div>
              </div>
              <div className="flex-[0.6] rounded-lg bg-[#FFFFFF] flex flex-row items-start justify-start py-[5px] pr-2.5 pl-[11px] border-[1px] border-solid border-[#E5E2EE]">
                <div className="relative font-semibold inline-block min-w-[9px]">
                  2
                </div>
              </div>
              <div className="flex-[0.6] rounded-lg bg-[#FFFFFF] flex flex-row items-start justify-start py-[5px] pr-2.5 pl-[11px] border-[1px] border-solid border-[#E5E2EE]">
                <div className="relative font-semibold inline-block min-w-[9px]">
                  3
                </div>
              </div>
              <div className="flex-[0.8] rounded-lg bg-[#FFFFFF] flex flex-row items-start justify-start py-[7px] px-2.5 text-[13px] font-open-sans">
                <div className="relative font-semibold inline-block min-w-[11px]">
                  ...
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-[#FFFFFF] flex flex-row items-start justify-start py-[5px] pr-[7px] pl-2 border-[1px] border-solid border-[#E5E2EE]">
                <div className="relative font-semibold inline-block min-w-[15px]">
                  10
                </div>
              </div>
              <div className="h-8 w-8 rounded-lg bg-[#FFFFFF] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE]">
                <img
                  className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={Right1x}
                />
              </div>
              <div className="h-8 w-8 rounded-lg bg-[#FFFFFF] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE]">
                <img
                  className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={Right2x}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductsWrapper />
      <Offers />
      <News />
      <About />
      <Form />
      <Subscription />
      <Footer />
    </>
  );
};

export default Manufacturers;
