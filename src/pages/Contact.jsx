import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import LocationImg from "../assets/Contact/location.svg";
import MailImg from "../assets/Contact/mail.svg";
import PhoneImg from "../assets/Contact/phone.svg";
import TelegramImg from "../assets/Contact/telegram.svg";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import markerIcon from "../assets/marker.svg";
import TimeImg from "../assets/Contact/time.svg";
import VectorImg from "../assets/Contact/Vector.svg";
import VkImg from "../assets/Contact/vk.svg";
import { Footer } from "../components/About/Footer";
const Contact = () => {
  const mapState = {
    center: [41.311151, 69.279737],
    zoom: 13,
  };
  return (
    <>
      <div
        className={`max-w-[1440px] xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-col items-start justify-start gap-[10px] leading-[normal] tracking-[normal] text-left text-[48px] text-[#202020] font-t2 mq675:gap-[20px] `}
      >
        <div className="flex flex-row items-start justify-start py-0 px-px">
          <h1 className="m-0 relative text-inherit leading-[53px] font-medium font-inherit mq450:text-[29px] mq450:leading-[32px] mq750:text-[38px] mq750:leading-[42px]">
            Контакты
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[11px] max-w-full text-lg">
          <div className="flex-1 rounded-3xs bg-[#FFFFFF] box-border flex flex-row items-start justify-start py-[38px] px-10 min-w-[422px] max-w-full border-[1px] border-solid border-[#E5E2EE] mq450:min-w-full mq675:pt-[25px] mq675:pb-[25px] mq675:box-border">
            <div className="w-[493px] flex flex-col items-start justify-start gap-[30px] max-w-full z-[1]">
              <div className="flex flex-col items-start justify-start gap-[25px] max-w-full text-11xl">
                <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit mq450:text-lg mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px]">
                  ООО Глобал Медикал Трейд
                </h2>
                <div className="flex flex-col items-start justify-start gap-[15px] max-w-full text-base text-color">
                  <div className="flex flex-row items-start justify-start gap-[5px]">
                    <img
                      className="h-5 w-5 relative"
                      loading="lazy"
                      alt=""
                      src={LocationImg}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-[#7A7687] leading-[140%] font-medium">
                        Юридический адрес:
                      </div>
                      <div className="relative leading-[140%] font-medium text-[#202020]">
                        Россия, г. Москва, ул. Докукина, 8, стр. 2
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[5px]">
                    <img
                      className="h-5 w-5 relative"
                      loading="lazy"
                      alt=""
                      src={LocationImg}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-[#7A7687] leading-[140%] font-medium">
                        Фактический адрес:
                      </div>
                      <div className="relative leading-[140%] font-medium text-[#202020]">
                        Россия, г. Москва, ул. Докукина, 8, стр. 2
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[5px]">
                    <img
                      className="h-5 w-5 relative"
                      loading="lazy"
                      alt=""
                      src={TimeImg}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-[#7A7687] leading-[140%] font-medium inline-block min-w-[117px]">
                        Режим работы:
                      </div>
                      <div className="flex flex-col items-start justify-start text-[#202020]">
                        <div className="relative leading-[140%] font-medium whitespace-nowrap">{`Пн-Пт с 09:00-19:00 `}</div>
                        <div className="relative leading-[140%] font-medium">
                          Сб-Вс - выходной
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
                <div className="h-[25px] relative font-semibold inline-block max-w-full">{`Звоните. Звонки по России бесплатны: `}</div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-base text-color">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[5px] max-w-full mq675:flex-wrap">
                    <img
                      className="h-5 w-5 relative"
                      loading="lazy"
                      alt=""
                      src={PhoneImg}
                    />
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[304px] max-w-full">
                      <div className="relative text-[#7A7687] leading-[140%] font-medium inline-block min-w-[84px]">
                        Телефоны:
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[22px] text-[#202020] mq675:flex-wrap">
                        <div className="relative leading-[140%] font-medium">
                          8-800-000-00-00
                        </div>
                        <div className="relative leading-[140%] font-medium whitespace-nowrap">
                          +7-000-000-00-00
                        </div>
                        <div className="relative leading-[140%] font-medium whitespace-nowrap">
                          +7-495-000-00-00
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[5px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={MailImg}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[140%] font-medium inline-block text-[#7A7687] min-w-[65px]">
                        Пишите:{" "}
                      </div>
                      <div className="relative leading-[140%] font-medium text-[#202020] inline-block min-w-[95px] whitespace-nowrap">
                        info@mail.ru
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[70px] max-w-full mq450:gap-[35px] mq675:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[25px]">
                  <div className="relative font-semibold inline-block min-w-[101px]">{`Реквизиты: `}</div>
                  <div className="flex flex-row items-center justify-start gap-[30px] text-base text-[#7A7687]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[140%] font-medium inline-block min-w-[34px]">
                        ИНН
                      </div>
                      <div className="relative leading-[140%] font-medium text-[#202020] inline-block min-w-[85px]">
                        9717039181
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[140%] font-medium inline-block min-w-[42px]">
                        ОГРН
                      </div>
                      <div className="relative leading-[140%] font-medium text-[#202020] inline-block min-w-[116px]">
                        1167746796986
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[27px]">
                  <div className="relative font-semibold inline-block min-w-[128px]">
                    Мы в соцсетях
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="h-[37px] w-[37px] relative min-h-[37px]"
                      loading="lazy"
                      alt=""
                      src={VkImg}
                    />
                    <img
                      className="h-[37px] w-[37px] relative min-h-[37px]"
                      loading="lazy"
                      alt=""
                      src={TelegramImg}
                    />
                    <img
                      className="h-[37px] w-[37px] relative min-h-[37px]"
                      loading="lazy"
                      alt=""
                      src={VectorImg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xs bg-[#FFFFFF] box-border flex flex-col items-start justify-start py-[38px] px-[39px] gap-[138px] max-w-full text-11xl border-[1px] border-solid border-[#E5E2EE] mq450:gap-[34px] mq675:gap-[69px] mq675:pt-[25px] mq675:pb-[25px] mq675:box-border">
            <div className="w-[650px] h-[632px] relative rounded-3xs bg-[#FFFFFF] box-border hidden max-w-full border-[1px] border-solid border-[#E5E2EE]" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq675:gap-[20px]">
              <div className="w-[417px] flex flex-col items-start justify-start gap-[25px] max-w-full">
                <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full z-[1] mq450:text-lg mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px]">
                  Бесплатная консультация
                </h2>
                <div className="self-stretch relative text-base leading-[140%] font-medium text-[#7A7687] z-[1]">
                  Оставьте свои координаты и наш менеджер перезвонит вам через
                  10 минут
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-sm text-color">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[31px] font-t2 text-sm text-[#7A7687]"
                  placeholder="Ваше имя"
                  variant="standard"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "31px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#7a7687" },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[31px] font-t2 text-sm text-[#7A7687]"
                  placeholder="Ваш телефон"
                  variant="standard"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "31px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#7a7687" },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[31px] font-t2 text-sm text-[#7A7687]"
                  placeholder="Ваш email"
                  variant="standard"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "31px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#7a7687" },
                  }}
                />
                <div className="relative opacity-60 text-[#7A7687] inline-block min-w-[78px] z-[1]">
                  Ваш вопрос
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-xs text-[#7A7687] mq675:gap-[20px]">
              <div className="self-stretch h-px relative bg-slategray z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full mq675:flex-wrap">
                <Button
                  className="h-[41px] w-[134px] z-[1]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#f8f7f3",
                    fontSize: "14",
                    background: "#088269",
                    borderRadius: "50px",
                    "&:hover": { background: "#088269" },
                    width: 134,
                    height: 41,
                  }}
                >
                  Отправить
                </Button>
                <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[264px] max-w-full">
                  <div className="self-stretch relative font-medium z-[1]">
                    <span>
                      Нажимая «Отправить», я соглашаюсь c обработкой
                      персональных данных на условиях
                    </span>
                    <span className="text-[#202020]">{` `}</span>
                    <span className="text-teal">
                      Политики конфиденциальности
                    </span>
                    <span>.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-3xs border overflow-hidden border-[#E5E2EE] w-full h-[208px] md:h-[264px] xl:h-[389px] box-border relative max-w-full  mq450:box-border">
          <YMaps apikey="db81466a-d9c7-44dd-9078-c65b363da1c8">
            <Map
              state={mapState}
              width="100%"
              height="100%"
              options={{
                suppressMapOpenBlock: true,
              }}
            >
              <Placemark
                geometry={[41.311151, 69.279737]}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: markerIcon,
                  iconImageSize: [42, 42],
                }}
              />
            </Map>
          </YMaps>
          <div className=" absolute bottom-0 w-full flex justify-end pr-[20px] pb-[20px]">
            <Button
              className="h-[41px] w-[155px] z-[2]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#f8f7f3",
                fontSize: "14",
                background: "#088269",
                borderRadius: "50px",
                "&:hover": { background: "#088269" },
                width: 155,
                height: 41,
              }}
            >
              Пункт выдачи
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
