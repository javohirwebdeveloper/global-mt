import React from "react";
import { Button } from "@mui/material";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import markerIcon from "../assets/marker.svg";
import Offer1 from "../assets/Delivery/1.svg";
import Offer2 from "../assets/Delivery/2.svg";
import Offer3 from "../assets/Delivery/3.svg";
import Offer4 from "../assets/Delivery/4.svg";
import Offer from "../components/Delivery/Offer";
import { About } from "../components/Home/About";
import { About1 } from "../components/Delivery/About1";
import { Form1 } from "../components/Delivery/Form1";
import { Subscription } from "../components/Home/Subscription";
import { Footer } from "../components/Home/Footer";
const Delivery = () => {
  const mapState = {
    center: [41.311151, 69.279737],
    zoom: 13,
  };
  return (
    <>
      <div
        className={`max-w-[1440px]  xl:px-[65px] sm:px-[20px] px-[15px] mx-auto mt-[99px] w-full flex flex-col items-start justify-start gap-[40px] leading-[normal] tracking-[normal] text-left text-[48px] text-[#202020] font-t1 mq675:gap-[20px]`}
      >
        <h1 className="m-0 w-[650px] max-h-[338px] h-full relative text-inherit leading-[53px] font-medium font-inherit inline-block max-w-full mq450:text-[29px] mq450:leading-[32px] mq750:text-[38px] mq750:leading-[42px]">
          Информация о доставке
        </h1>
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
        <footer className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-base text-[#202020] font-t1">
          <div className="w-[670px] relative leading-[140%] font-medium inline-block shrink-0 max-w-full box-border pl-5">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись с
            вызовом, требующим обновления приборов в различных направлениях, от
            установок компьютерной томографии до ультразвуковых сканеров и ЛОР
            комбайнов. Переход на полностью цифровую платформу при диагностике и
            лечении заболеваний также стал серьёзным испытанием для большинства
            больниц и частных клиник.
          </div>
        </footer>
      </div>
      <div
        className={`max-w-[1440px]  xl:px-[65px] sm:px-[20px] px-[15px]  mx-auto w-full flex flex-col items-start justify-start gap-[40px] leading-[normal] tracking-[normal] text-left text-11xl text-[#202020] font-t1 mq675:gap-[20px]`}
      >
        <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq450:text-[18px] mq450:leading-[22px] mq750:text-[24px] mq750:leading-[29px]">
          С нами выгодно и удобно
        </h2>
        <section className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[10px] text-center text-base text-[#202020] font-t1">
          <Offer subtract={Offer1} prop="Доставка по всей России" />
          <div className="flex-1 h-[320px] rounded-3xs box-border flex flex-col items-center justify-center gap-[37px] min-w-[240px] max-w-[320px] border-[1px] border-solid border-[#E5E2EE]">
            <div className="w-[155px] flex flex-row items-start justify-start py-0 px-[45px] box-border">
              <div className="flex-1 flex flex-row items-start justify-between pt-5 px-0 pb-0 relative gap-[20px] z-[1]">
                <img src={Offer2} className="max-w-[65px] w-full" alt="" />
              </div>
            </div>
            <div className="w-[155px] relative leading-[140%] font-medium flex items-center justify-center z-[1]">
              Собственный склад с продукцией
            </div>
          </div>
          <div className="flex-1 rounded-3xs box-border flex flex-col items-center justify-center h-[320px] gap-[31px] min-w-[240px] max-w-[320px] border-[1px] border-solid border-[#E5E2EE]">
            <img src={Offer3} className="max-w-[65px] w-full" alt="" />

            <div className="w-[148px] relative leading-[140%] font-medium flex items-center justify-center z-[1]">
              Весь товар сертифицирован
            </div>
          </div>
          <Offer subtract={Offer4} prop="Безопасные способы оплаты" />
        </section>
        <div className="self-stretch flex flex-row items-start justify-end">
          <Button
            className="h-[41px] w-[250px]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#f8f7f3",
              fontSize: "14",
              background: "#088269",
              borderRadius: "50px",
              "&:hover": { background: "#088269" },
              width: 250,
              height: 41,
            }}
          >
            Проверить статус доставки
          </Button>
        </div>
      </div>
      <div
        className={`max-w-[1440px] mt-[150px] mx-auto  xl:px-[65px] sm:px-[20px] px-[15px]  w-full overflow-hidden flex flex-row items-start justify-between leading-[normal] tracking-[normal] gap-[20px] text-left text-11xl text-[#202020] font-t1 lg:flex-wrap`}
      >
        <div className="w-[540px] flex flex-col items-start justify-start gap-[25px] min-w-[540px] max-w-full lg:flex-1 mq750:min-w-full">
          <h2 className="m-0 w-[366px] relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq750:text-[24px] mq750:leading-[29px] mq450:text-lg mq450:leading-[22px]">
            Правила получения товара в пункте выдачи
          </h2>
          <div className="self-stretch relative text-base leading-[140%] font-medium">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись с
            вызовом, требующим обновления приборов
            <span className="tracking-[0.01em]">.</span>
          </div>
        </div>
        <div className="w-[650px] flex flex-col items-start justify-start gap-[25px] min-w-[650px] max-w-full text-lg lg:flex-1 mq750:min-w-full">
          <div className="self-stretch h-px relative bg-color2" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
            <a className="[text-decoration:none] relative font-semibold text-[inherit]">
              Подготовить документы
            </a>
            <div className="self-stretch relative text-base leading-[140%] font-medium text-[#7A7687]">
              Предварительно ознакомиться с условиями выдачи грузов на сайте и
              подготовьте нужные документы
            </div>
          </div>
          <div className="self-stretch h-px relative bg-color2" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
            <div className="relative font-semibold">Проверка упаковки</div>
            <div className="self-stretch relative text-base leading-[140%] font-medium text-[#7A7687]">
              При получении необходимо внимательно осмотреть упаковку груза на
              наличие механических повреждений и нарушений целостности упаковки
            </div>
          </div>
          <div className="self-stretch h-px relative bg-color2" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
            <div className="relative font-semibold">Проверка товара</div>
            <div className="self-stretch relative text-base leading-[140%] font-medium text-[#7A7687]">
              Вскрыть каждую упаковку и проверите товар по количеству согласно
              накладной поставщика и на наличие повреждений товара внутри тары
            </div>
          </div>
        </div>
      </div>
      <About />
      <div
        className={`max-w-[1440px] mt-[184px]  xl:px-[65px] sm:px-[20px] px-[15px]  mx-auto w-full overflow-hidden flex flex-col items-start justify-start gap-[10px] leading-[normal] tracking-[normal] text-left text-[10px] text-color2 font-t1`}
      >
        <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full text-left text-11xl text-[#202020] font-t1">
          <div className="flex-1 flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border min-w-[422px] max-w-full mq450:min-w-full">
            <h2 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-inherit mq450:text-lg mq450:leading-[22px] mq750:text-[24px] mq750:leading-[29px]">
              <span>Вы сможете забрать оборудование </span>
              <span className="text-teal text-[#088269]">самостоятельно</span>
              <span> из нашего офиса</span>
            </h2>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[422px] max-w-full mq450:min-w-full mq675:flex-wrap">
            <div
              className={`flex-1 flex flex-col items-start justify-start pt-[25px] px-[25px] pb-7 box-border relative gap-[15px] min-w-[208px] text-left text-lg text-[#202020] font-t1`}
            >
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-[white] box-border border-[1px] border-solid border-[#E5E2EE]" />
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[84px] z-[1]">
                Контакты
              </a>
              <div className="flex flex-col items-start justify-start gap-[2px] text-base text-[#7A7687]">
                <div className="relative leading-[140%] font-medium z-[1]">
                  +7 (000) 000-00-00
                </div>
                <div className="relative leading-[140%] font-medium inline-block min-w-[95px] whitespace-nowrap z-[1]">
                  info@mail.ru
                </div>
              </div>
            </div>
            <div
              className={`flex-1 flex flex-col items-start justify-start pt-[25px] px-[25px] pb-7 box-border relative gap-[15px] min-w-[208px] text-left text-lg text-[#202020] font-t1`}
            >
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-[white] box-border border-[1px] border-solid border-[#E5E2EE]" />
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[84px] z-[1]">
                Режим работы
              </a>
              <div className="flex flex-col items-start justify-start gap-[2px] text-base text-[#7A7687]">
                <div className="relative leading-[140%] font-medium z-[1]">
                  пн-пт: 09:00-19:00
                </div>
                <div className="relative leading-[140%] font-medium inline-block min-w-[95px] whitespace-nowrap z-[1]">
                  сб-вс: выходной
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded-3xs border overflow-hidden border-[#E5E2EE] w-full h-[389px] box-border relative max-w-full mq450:pt-[204px] mq450:box-border">
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
                className="h-[41px] text-nowrap px-[25px_!important] z-[2]"
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
                Построить маршрут
              </Button>
            </div>
          </div>
        </div>
      </div>
      <About1 />
      <Form1 />
      <Subscription />
      <Footer />
    </>
  );
};

export default Delivery;
