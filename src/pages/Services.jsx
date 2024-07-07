import React from "react";
import Component from "../components/Services/Component";
import Img1 from "../assets/Services/1.png";
import DownImg from "../assets/Services/download.svg";
import Img2 from "../assets/Services/2.png";
import Img3 from "../assets/Services/3.png";
import Img4 from "../assets/Services/4.png";
import Img5 from "../assets/Services/5.png";
import Img6 from "../assets/Services/6.png";
import Img7 from "../assets/Services/7.png";
import Img8 from "../assets/Services/8.png";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import { Sertificates } from "../components/About/Sertificates";
import { Form } from "../components/Home/Form";
import { Footer } from "../components/About/Footer";
const Services = () => {
  return (
    <>
      <div
        className={`max-w-[1440px] md:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-col items-start justify-start gap-[10px] leading-[normal] tracking-[normal] `}
      >
        <h2 className="text-[48px] ">Услуги</h2>

        <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full text-left text-lg text-[#202020] font-t1">
          <div className="flex-1 rounded-3xs bg-[white] box-border flex flex-row items-start justify-start py-0 pr-0 pl-[23px] gap-[15px] min-w-[422px] max-w-full border-[1px] border-solid border-lavender mq450:min-w-full mq525:flex-wrap mq525:pl-5 mq525:pr-5 mq525:pb-5 mq525:box-border">
            <div className="self-stretch w-[650px] relative rounded-3xs bg-[white] box-border hidden max-w-full border-[1px] border-solid border-lavender" />
            <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[224px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <a className="[text-decoration:none] w-[277px] relative font-semibold text-[inherit] flex items-center z-[1]">
                  Апробация
                </a>
                <div className="self-stretch flex flex-col items-start justify-start gap-[93px] text-xs text-[#7A7687] mq450:gap-[46px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative inline-block min-w-[98px] z-[1]">
                      Описание услуги
                    </div>
                    <div className="w-[345px] relative text-base leading-[140%] font-medium inline-block max-h-[110px] [word-break:break-word] z-[1]">{`Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. `}</div>
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
            </div>
            <img
              className="h-[350px] w-[265px] relative rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none object-cover z-[1] mq525:flex-1"
              loading="lazy"
              alt=""
              src={Img1}
            />
          </div>
          <Component
            prop="Помощь в подборе оборудования"
            prop1="Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. "
            rectangle={Img2}
          />
        </section>
        <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
          <Component
            prop="Помощь инженеров в настройке"
            prop1="Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. "
            rectangle={Img3}
          />
          <Component
            prop="Пуско-наладочные работы"
            prop1="Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. "
            rectangle={Img4}
          />
        </section>
        <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
          <Component
            prop="Обучение работе с оборудованием"
            prop1="Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. "
            rectangle={Img5}
          />
          <Component
            prop="Подменный аппарат"
            prop1="Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. "
            rectangle={Img6}
          />
        </section>
        <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
          <Component
            prop="Работа с учебными центрами повышения квалификации медицинского персонала"
            prop1="Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения. "
            rectangle={Img7}
          />
          <Component
            prop="Организация обучения врачей на собственной территории"
            prop1="Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних. "
            rectangle={Img8}
          />
        </section>
      </div>
      <div
        className={`max-w-[1440px] md:mt-[171px] sm:mt-[120px] mt-[60px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-row items-start justify-between leading-[normal] tracking-[normal] gap-[20px] text-left text-11xl text-[#202020] font-t1 mq975:flex-wrap `}
      >
        <div className="w-[290px] flex flex-col items-start justify-start gap-[25px] min-w-[290px] mq975:flex-1">
          <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit mq450:text-[18px] mq450:leading-[22px] mq950:text-[24px] mq950:leading-[29px]">
            Цифры и факты
          </h2>
          <div className="self-stretch relative text-base opacity-50 leading-[140%] font-medium text-gray">
            Мы работаем на результат и продаём только качественную продукцию
          </div>
        </div>
        <div className="w-[650px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[650px] max-w-full text-29xl text-[#202020]1 mq700:min-w-full mq975:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="w-[352px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px]">
              <div className="relative text-[#088269] leading-[53px] font-medium inline-block min-w-[115px] mq450:text-10xl mq450:leading-[32px] mq950:text-19xl mq950:leading-[42px]">
                7 лет
              </div>
              <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-base text-[#202020]">
                <div className="relative leading-[140%] font-medium inline-block min-w-[70px]">
                  на рынке
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative bg-color2" />
            <div className="w-[591px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
              <div className="relative text-[#088269] leading-[53px] font-medium inline-block min-w-[116px] mq450:text-10xl mq450:leading-[32px] mq950:text-19xl mq950:leading-[42px]">
                964+
              </div>
              <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-base text-[#202020]">
                <div className="relative leading-[140%] font-medium">
                  оригинальной продукции со всего мира
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative bg-color2" />
            <div className="w-[596px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
              <div className="relative text-[#088269] leading-[53px] font-medium inline-block min-w-[83px] mq450:text-10xl mq450:leading-[32px] mq950:text-19xl mq950:leading-[42px]">
                23+
              </div>
              <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-base text-[#202020]">
                <div className="relative leading-[140%] font-medium">
                  международных сертификатов качества
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative bg-color2" />
            <div className="w-[482px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
              <div className="relative text-[#088269] leading-[53px] font-medium mq450:text-10xl mq450:leading-[32px] mq950:text-19xl mq950:leading-[42px]">
                2452+
              </div>
              <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-base text-[#202020]">
                <div className="relative leading-[140%] font-medium">
                  товаров всегда в наличии
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`max-w-[1440px] md:mt-[171px] sm:mt-[120px] mt-[60px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-row items-start justify-between leading-[normal] tracking-[normal] gap-[20px] text-left text-11xl text-gray font-h2 mq1250:flex-wrap`}
      >
        <h2 className="m-0 w-[575px] relative text-inherit leading-[120%] font-medium font-inherit inline-block shrink-0 max-w-full mq450:text-lg mq450:leading-[22px] mq750:text-[24px] mq750:leading-[29px]">
          <span>Вы сможете</span>
          <span className="text-teal text-[#088269]">оставить заявку</span>
          <span> на услуги и скачать бланк для заполнения</span>
        </h2>
        <form className="m-0 w-[650px] flex flex-row items-start justify-start gap-[10px] min-w-[650px] max-w-full mq750:flex-wrap mq750:min-w-full mq1250:flex-1">
          <FormControl
            className="h-[74px] flex-[0.8438] font-h2 font-semibold text-lg text-gray min-w-[208px] w-auto mq450:flex-1"
            variant="standard"
            sx={{
              borderColor: "#e5e2ee",
              borderStyle: "SOLID",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              width: "49.23076923076923%",
              height: "74px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "74px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "74px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "74px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "74px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#202020",
                fontSize: 18,
                fontWeight: "SemiBold",
                fontFamily: "Manrope",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "24px",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="30px"
                  height="30px"
                  src={DownImg}
                  className="p-[5px] border border-[#D5D1E1] rounded-[5px]"
                  style={{ marginRight: "29px" }}
                />
              )}
            >
              <MenuItem>Бланк для заполнения</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className="flex-1 flex flex-col items-end justify-start gap-[26px] min-w-[208px]">
            <FormControl
              className="self-stretch  h-[74px] font-h2 font-semibold text-lg text-gray"
              variant="standard"
              sx={{
                borderColor: "#e5e2ee",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                width: "100%",
                height: "74px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "74px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "74px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "74px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "74px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#202020",
                  fontSize: 18,
                  fontWeight: "SemiBold",
                  fontFamily: "Manrope",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "24px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="30px"
                    height="30px"
                    className="p-[5px] border border-[#D5D1E1] rounded-[5px]"
                    src={DownImg}
                    style={{ marginRight: "29px" }}
                  />
                )}
              >
                <MenuItem>Заполненная форма</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <Button
              className="w-[174px] h-[41px]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#f8f7f3",
                fontSize: "14",
                background: "#088269",
                borderRadius: "50px",
                "&:hover": { background: "#088269" },
                width: 174,
                height: 41,
              }}
            >
              Оставить заявку
            </Button>
          </div>
        </form>
      </div>
      <Sertificates />
      <Form />
      <Footer />
    </>
  );
};

export default Services;
