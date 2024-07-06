import React, { useState } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
} from "@mui/material";
import { products } from "../../public/data";
import Img1 from "../assets/BrandPage/1.png";
import Img2 from "../assets/BrandPage/2.png";
const BrandPage = () => {
  const [burger, setBurger] = useState(4);
  return (
    <>
      <div
        className={`max-w-[1440px] md:mt-[99px] sm:mt-[50px] mt-[40px] md:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-col items-start justify-start gap-[40px] leading-[normal] tracking-[normal] text-left text-[48px] text-[#202020] font-l1 mq675:gap-[20px] `}
      >
        <h1 className="m-0 relative text-inherit leading-[53px] font-medium font-inherit inline-block max-w-full mq450:text-[29px] mq450:leading-[32px] mq750:text-[38px] mq750:leading-[42px]">
          Медецинское оборудование Draeger
        </h1>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[422px] min-h-[389px] mq450:min-w-full"
            loading="lazy"
            alt=""
            src={Img1}
          />
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[422px] min-h-[389px] mq450:min-w-full"
            loading="lazy"
            alt=""
            src={Img2}
          />
        </div>
        <main className="self-stretch flex flex-col items-end justify-start gap-[147px] max-w-full text-left text-base text-[#202020] font-l1 mq450:gap-[37px] mq675:gap-[73px]">
          <div className="w-[670px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[17px] max-w-full">
            <div className="self-stretch relative leading-[140%] font-medium">{`Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник. `}</div>
            <div className="self-stretch relative leading-[140%] font-medium">{`Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник. `}</div>
          </div>
          <section className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-11xl text-[#202020] font-l1">
            <div className="w-[1150px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[43px] max-w-full mq675:gap-[21px]">
              <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq450:text-lg mq450:leading-[22px] mq750:text-[24px] mq750:leading-[29px]">
                Оборудование Draeger
              </h1>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[5px] text-sm">
                <Button
                  className="h-[41px] flex-1 min-w-[199px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#202020",
                    fontSize: "14",
                    background: "#fff",
                    border: "#d5d1e1 solid 1px",
                    borderRadius: "50px",
                    "&:hover": { background: "#fff" },
                    height: 41,
                  }}
                >
                  Дерматологическое оборудование
                </Button>
                <Button
                  className="h-[41px] w-[264px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#202020",
                    fontSize: "14",
                    background: "#fff",
                    border: "#d5d1e1 solid 1px",
                    borderRadius: "50px",
                    "&:hover": { background: "#fff" },
                    width: 264,
                    height: 41,
                  }}
                >
                  Ветеринарное оборудование
                </Button>
                <div className="rounded-[50px] bg-color flex flex-row items-start justify-start py-[9px] px-[30px] whitespace-nowrap border-[1px] border-solid border-lavender-200">
                  <div className="relative font-semibold">
                    Мебель медицинская
                  </div>
                </div>
                <Button
                  className="h-[41px] w-44"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#202020",
                    fontSize: "14",
                    background: "#fff",
                    border: "#d5d1e1 solid 1px",
                    borderRadius: "50px",
                    "&:hover": { background: "#fff" },
                    width: 176,
                    height: 41,
                  }}
                >
                  Анестезиология
                </Button>
                <Button
                  className="h-[41px] w-[153px]"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#088269",
                    fontSize: "14",
                    borderColor: "#d5d1e1",
                    borderRadius: "50px",
                    "&:hover": { borderColor: "#d5d1e1" },
                    width: 153,
                    height: 41,
                  }}
                >
                  Показать все
                </Button>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full text-sm">
              <div className="w-80 flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <FormControl
                    className="self-stretch h-[52px] font-l1 font-medium text-base text-[#202020]"
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
                          src="/20-arrow--down.png"
                          style={{ marginRight: "18px" }}
                        />
                      )}
                    >
                      <MenuItem>Направления</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="self-stretch rounded-3xs flex flex-col items-start justify-start py-[13px] pr-0.5 pl-3.5 gap-[15px] border-[1px] border-solid border-color1">
                    <div className="w-80 h-[809px] relative rounded-3xs box-border hidden border-[1px] border-solid border-color1" />
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-[15px] pl-[5px]">
                      <FormControl
                        className="h-[38px] flex-1 font-l1 font-medium text-base text-[#202020] w-auto"
                        variant="standard"
                        sx={{
                          borderTopWidth: "0px",
                          borderRightWidth: "0px",
                          borderBottomWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRadius: "0px 0px 0px 0px",
                          width: "98.25783972125436%",
                          height: "38px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "38px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "38px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "38px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "38px",
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
                              src="/20-arrow--up.png"
                              style={{}}
                            />
                          )}
                        >
                          <MenuItem>Фильтр по товарам</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="w-[290px] flex flex-row items-start justify-start pt-0 px-[5px] pb-5 box-border">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                          <div className="relative inline-block min-w-[35px]">
                            Цена
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <img
                              className="w-[13px] h-[13px] relative overflow-hidden shrink-0"
                              alt=""
                              src="/13-arrow--up.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] z-[1] text-xs text-color4">
                          <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                <div className="relative inline-block min-w-[19px]">
                                  От:
                                </div>
                                <TextField
                                  className="[border:none] bg-[transparent] self-stretch h-[30px] font-l1 text-sm text-[#202020]"
                                  placeholder="20.000"
                                  variant="standard"
                                  sx={{
                                    "& .MuiInputBase-root": {
                                      height: "30px",
                                      fontSize: "14px",
                                    },
                                    "& .MuiInputBase-input": {
                                      color: "#202020",
                                    },
                                  }}
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                <div className="relative inline-block min-w-[20px]">
                                  До:
                                </div>
                                <TextField
                                  className="[border:none] bg-[transparent] self-stretch h-[30px] font-l1 text-sm text-[#202020]"
                                  placeholder="950.000"
                                  variant="standard"
                                  sx={{
                                    "& .MuiInputBase-root": {
                                      height: "30px",
                                      fontSize: "14px",
                                    },
                                    "& .MuiInputBase-input": {
                                      color: "#202020",
                                    },
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="self-stretch h-[13px] relative max-w-full overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/progress-bar.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start py-0 pr-3 pl-0 gap-[15px] z-[1]">
                      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[5px] gap-[20px]">
                        <div className="relative inline-block min-w-[50px]">
                          Страна
                        </div>
                        <img
                          className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/13-arrow--up-1.svg"
                        />
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-[39px] font-l1 text-sm text-color4"
                        placeholder="Поиск по стране"
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <img
                              width="17px"
                              height="17px"
                              src="/17-search.svg"
                            />
                          ),
                        }}
                        sx={{
                          "& fieldset": { borderColor: "#e5e2ee" },
                          "& .MuiInputBase-root": {
                            height: "39px",
                            backgroundColor: "#fff",
                            paddingRight: "15px",
                            borderRadius: "50px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#7a7687" },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-0 pl-[5px]">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] z-[1]">
                          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[174px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                            <input
                              className="m-0 h-5 w-5 relative"
                              type="checkbox"
                            />
                            <div className="relative inline-block min-w-[71px]">
                              Австралия
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[189px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                            <input
                              className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                              type="checkbox"
                            />
                            <div className="relative inline-block min-w-[56px]">
                              Австрия
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[182px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                            <input
                              className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                              type="checkbox"
                            />
                            <div className="relative inline-block min-w-[63px]">
                              Беларусь
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[190px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                            <input
                              className="m-0 h-5 w-5 relative"
                              type="checkbox"
                            />
                            <div className="relative inline-block min-w-[55px]">
                              Бельгия
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[134px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                            <input
                              className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                              type="checkbox"
                            />
                            <div className="relative inline-block min-w-[111px]">
                              Великобритания
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[180px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                            <input
                              className="m-0 h-5 w-5 relative"
                              type="checkbox"
                            />
                            <div className="relative inline-block min-w-[65px]">
                              Германия
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[188px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                            <input
                              className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                              type="checkbox"
                            />
                            <div className="relative inline-block min-w-[57px]">
                              Израиль
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[187px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                            <input
                              className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                              type="checkbox"
                            />
                            <div className="relative inline-block min-w-[58px]">
                              Испания
                            </div>
                          </div>
                        </div>
                        <div className="h-[70px] w-1 relative rounded-8xs bg-color1 z-[1]" />
                      </div>
                    </div>
                    <div className="w-[290px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                        <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 gap-[15px] z-[1]">
                          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                            <div className="relative inline-block min-w-[74px]">
                              Состояние
                            </div>
                            <img
                              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/13-arrow--up-2.svg"
                            />
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[202px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                              <input
                                className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color3"
                                type="checkbox"
                              />
                              <div className="relative inline-block min-w-[43px]">
                                Новый
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[110px] pl-0 gap-[15px] mq450:pr-5 mq450:box-border">
                              <input
                                className="m-0 h-5 w-5 relative"
                                type="checkbox"
                              />
                              <div className="relative">Демонстрационный</div>
                            </div>
                          </div>
                        </div>
                        <FormControl
                          className="self-stretch h-[39px] font-l1 text-sm text-[#202020] z-[1]"
                          variant="standard"
                          sx={{
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "0px 0px 0px 0px",
                            width: "100%",
                            height: "39px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "39px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "39px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "39px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "39px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              color: "#202020",
                              fontSize: 14,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
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
                                width="13px"
                                height="13px"
                                src="/13-arrow--down.svg"
                                style={{}}
                              />
                            )}
                          >
                            <MenuItem>Назначение</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                        <FormControl
                          className="self-stretch h-[39px] font-l1 text-sm text-[#202020] z-[1]"
                          variant="standard"
                          sx={{
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "0px 0px 0px 0px",
                            width: "100%",
                            height: "39px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "39px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "39px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "39px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "39px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              color: "#202020",
                              fontSize: 14,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
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
                                width="13px"
                                height="13px"
                                src="/13-arrow--down-1.svg"
                                style={{}}
                              />
                            )}
                          >
                            <MenuItem>Комплектация</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
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
              <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[637px] max-w-full text-color4 mq750:min-w-full">
                <div className="self-stretch rounded-8xs overflow-hidden flex flex-col items-center justify-center py-[9px] px-[19px] border-[1px] border-solid border-color1">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq675:flex-wrap">
                    <FormControl
                      className="h-[19px] w-[139px] font-l1 text-sm text-[#202020]"
                      variant="standard"
                      sx={{
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "14.787234042553193%",
                        height: "19px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "19px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "19px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "19px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "19px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          color: "#202020",
                          fontSize: 14,
                          fontWeight: "Regular",
                          fontFamily: "Manrope",
                          textAlign: "left",
                          p: "0 !important",
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
                            width="13px"
                            height="13px"
                            src="/13-arrow--down-2.svg"
                            style={{}}
                          />
                        )}
                      >
                        <MenuItem>По популярности</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <div className="flex flex-row items-center justify-start gap-[140px] mq450:gap-[70px]">
                      <div className="flex flex-row items-center justify-start gap-[15px]">
                        <div className="relative inline-block min-w-[63px]">
                          Показать
                        </div>
                        <FormControl
                          className="h-[19px] w-8 font-l1 text-sm text-[#202020]"
                          variant="standard"
                          sx={{
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "0px 0px 0px 0px",
                            width: "32px",
                            height: "19px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "19px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "19px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "19px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "19px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              color: "#202020",
                              fontSize: 14,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
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
                                width="13px"
                                height="13px"
                                src="/13-arrow--down-3.svg"
                                style={{}}
                              />
                            )}
                          >
                            <MenuItem>36</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[10px]">
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                          loading="lazy"
                          alt=""
                          src="/20-burger.svg"
                        />
                        <img
                          className="h-5 w-5 relative min-h-[20px]"
                          loading="lazy"
                          alt=""
                          src="/20-table.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px_8px] min-h-[1054px]">
                  {products.map((product) => (
                    <div key={product.id}>
                      <div
                        className={`w-80 flex flex-row items-start justify-start text-left text-sm text-color3 font-l1 `}
                      >
                        <div className="flex-1 rounded-3xs flex flex-col items-start justify-start pt-0 px-0 pb-[13px] gap-[20px] border-[1px] border-solid border-color1">
                          <div className="self-stretch h-[522px] relative rounded-3xs box-border hidden border-[1px] border-solid border-color1" />
                          <div className="self-stretch rounded-t-3xs rounded-b-none bg-color flex flex-col items-start justify-start pt-[13px] px-3.5 pb-[33px] gap-[21px] z-[1] border-[1px] border-solid border-color1">
                            <div className="w-80 h-[279px] relative rounded-t-3xs rounded-b-none bg-color box-border hidden border-[1px] border-solid border-color1" />
                            <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
                              <div className="w-[79px] rounded-41xl bg-honeydew box-border flex flex-row items-start justify-start py-0.5 px-[9px] z-[2] border-[1px] border-solid border-color3">
                                <div className="relative font-semibold inline-block min-w-[59px]">
                                  Новинка
                                </div>
                              </div>
                              <div className="w-[58px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                                <div className="self-stretch h-6 relative">
                                  <img
                                    className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden z-[2]"
                                    loading="lazy"
                                    alt=""
                                    src={``}
                                  />
                                  <img
                                    className="absolute top-[0px] left-[34px] w-6 h-6 overflow-hidden z-[2]"
                                    loading="lazy"
                                    alt=""
                                    src={`favourites`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 px-12 mq450:pl-5 mq450:pr-5 mq450:box-border">
                              <img
                                className="h-[181px] w-[181px] relative object-cover mix-blend-multiply z-[2]"
                                loading="lazy"
                                alt=""
                                src={`photo`}
                              />
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 text-lg text-[#202020]">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                              <div className="w-[283px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[30px] z-[2]">
                                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                                    <div className="self-stretch relative font-semibold">
                                      <p className="m-0">{`Анализатор мочи `}</p>
                                      <p className="m-0">MIND UA-66</p>
                                    </div>
                                    <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[5px] text-xs text-color4">
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
                              </div>
                              <Button
                                className="self-stretch h-[41px] z-[2]"
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-sm">
          <div className="w-[328px] flex flex-row items-start justify-start gap-[5px] max-w-full">
            <div className="h-8 w-8 rounded-lg bg-color box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-color1">
              <img
                className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/17-two--arrow-left.svg"
              />
            </div>
            <div className="h-8 w-8 rounded-lg bg-color box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-color1">
              <img
                className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/17-arrow--left.svg"
              />
            </div>
            <div className="rounded-lg bg-color3 flex flex-row items-start justify-start py-[6.5px] px-[13px] text-color">
              <div className="relative font-semibold inline-block min-w-[6px]">
                1
              </div>
            </div>
            <div className="flex-[0.6] rounded-lg bg-color flex flex-row items-start justify-start py-[5px] pr-2.5 pl-[11px] border-[1px] border-solid border-color1">
              <div className="relative font-semibold inline-block min-w-[9px]">
                2
              </div>
            </div>
            <div className="flex-[0.6] rounded-lg bg-color flex flex-row items-start justify-start py-[5px] pr-2.5 pl-[11px] border-[1px] border-solid border-color1">
              <div className="relative font-semibold inline-block min-w-[9px]">
                3
              </div>
            </div>
            <div className="flex-[0.8] rounded-lg bg-color flex flex-row items-start justify-start py-[7px] px-2.5 text-[13px] font-open-sans">
              <div className="relative font-semibold inline-block min-w-[11px]">
                ...
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-color flex flex-row items-start justify-start py-[5px] pr-[7px] pl-2 border-[1px] border-solid border-color1">
              <div className="relative font-semibold inline-block min-w-[15px]">
                10
              </div>
            </div>
            <div className="h-8 w-8 rounded-lg bg-color box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-color1">
              <img
                className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/17-arrow--right.svg"
              />
            </div>
            <div className="h-8 w-8 rounded-lg bg-color box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-color1">
              <img
                className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/17-two--arrow-right.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandPage;
