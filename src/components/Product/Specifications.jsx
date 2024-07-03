import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button } from "@mui/material";
import Component from "./Component";
import Carousel1 from "../../assets/carousel/carousel1.png";
import StarRatings from "react-star-ratings";
import Carousel2 from "../../assets/carousel/carousel2.png";
import Carousel3 from "../../assets/carousel/carousel3.png";
import Carousel4 from "../../assets/carousel/carousel4.png";
import { IoMdCheckmark } from "react-icons/io";
import GroupImg from "../../assets/carousel/Group.svg";
import Slider from "react-slick";
const Specifications = () => {
  const [openModal, setOpenModal] = useState(false);
  const [select, setSelect] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const [openSection, setOpenSection] = useState(2);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: false,
  };
  return (
    <div
      className={`w-full mt-[60px] flex flex-col items-start justify-start gap-[50px] leading-[normal] tracking-[normal] text-left text-lg text-[#07745E]1 font-t2 mq725:gap-[25px]`}
    >
      <div className="self-stretch rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start pt-[13px] px-0 pb-2 gap-[10px] max-w-full border-[1px] border-solid border-color2">
        <header className="pt-0 px-6 max-w-full text-left bottom-0 text-sm text-[#7A7687] font-t2">
          <div className="flex flex-row h-full bottom-0 items-end justify-start gap-[25px] max-w-full mq725:hidden">
            <div
              onClick={() => setOpenSection(1)}
              className={`relative font-semibold ${
                openSection == 1
                  ? "text-[#202020] border-b-2 border-[#07745E]"
                  : "text-[#7A7687]"
              }  whitespace-nowrap z-[1] duration-200 cursor-pointer h-[35px]`}
            >
              Описание оборудования
            </div>
            <div
              onClick={() => setOpenSection(2)}
              className={`relative font-semibold ${
                openSection == 2
                  ? "text-[#202020] border-b-2 border-[#07745E]"
                  : "text-[#7A7687]"
              }  whitespace-nowrap z-[1] duration-200 cursor-pointer h-[35px]`}
            >
              Характеристики и документы
            </div>
            <div
              onClick={() => setOpenSection(3)}
              className={`relative font-semibold ${
                openSection == 3
                  ? "text-[#202020] border-b-2 border-[#07745E]"
                  : "text-[#7A7687]"
              }  whitespace-nowrap z-[1] duration-200 cursor-pointer h-[35px]`}
            >
              Услуги и сервис
            </div>
            <div
              onClick={() => setOpenSection(4)}
              className={`relative font-semibold ${
                openSection == 4
                  ? "text-[#202020] border-b-2 border-[#07745E]"
                  : "text-[#7A7687]"
              }  whitespace-nowrap z-[1] duration-200 cursor-pointer h-[35px]`}
            >
              Оптовым покупателям
            </div>
            <div
              onClick={() => setOpenSection(5)}
              className={`relative font-semibold ${
                openSection == 5
                  ? "text-[#202020] border-b-2 border-[#07745E]"
                  : "text-[#7A7687]"
              }  whitespace-nowrap z-[1] duration-200 cursor-pointer h-[35px]`}
            >
              Отзывы 4
            </div>
          </div>
        </header>
        <section className={`${openSection == 1 ? "block" : "hidden"}`}>
          <div className="self-stretch h-[216px] bg-[white] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border gap-[10px] max-w-full z-[1]">
            <div className="self-stretch h-[214px] relative bg-[white] hidden" />
            <div className="mt-[-22px] self-stretch h-3 relative shrink-0">
              <div className="absolute top-[1px] left-[0px] bg-lavender w-[1308px] h-px z-[2]" />
              <div className="absolute top-[0px] left-[24px] rounded-sm bg-color w-[170px] h-0.5 z-[3]" />
            </div>
            <div className="w-[1262px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full shrink-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2]">
                  Описание оборудования
                </h3>
                <div className="self-stretch relative text-xs font-medium text-[#7A7687] z-[2]">
                  Биохимический анализатор Mindr UA-66 оснащен открытой
                  платформой для загрузки образцов и отлично размещается на
                  столе в кабинете врача. Функциональная сочетаемость с
                  дополнительным модулем ISE обеспечивает увеличение
                  «скорострельности» прибора от 100 до 300 обработанных пробирок
                  с биоматериалом в час, а также позволит замерять показатели K,
                  Na, Cl и Li в плазме, моче, цереброспинальной жидкости вместе
                  с другими важными параметрами исследования.
                </div>
              </div>
            </div>
            <div className="w-[1262px] flex flex-row items-start justify-start pt-0 px-6 pb-[17px] box-border max-w-full shrink-0 text-xs text-[#7A7687]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
                <div className="self-stretch relative font-medium z-[2]">
                  Прибор интуитивно понятен в использовании и техобслуживании,
                  экономен в части финансовых затрат не реагенты. Что важно,
                  калибровка системы аналогична той, что установлена на более
                  современной аппаратуре, и это – идеальный вариант для
                  небольших лабораторий, поскольку емкость погрузчика для проб
                  меньше, чем у мощного оборудования.
                </div>
                <div className="self-stretch relative font-medium z-[2]">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative bg-lavender shrink-0 z-[2]" />
          </div>
          <div className="w-[512px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-xs text-[#07745E]">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="relative font-medium inline-block min-w-[50px] z-[1]">
                Новинки
              </div>
              <div className="relative font-medium inline-block min-w-[93px] z-[1]">
                Получить прайс
              </div>
              <div className="relative font-medium inline-block min-w-[104px] z-[1]">
                Условия доставки
              </div>
              <div className="relative font-medium inline-block min-w-[97px] z-[1]">
                Способы оплаты
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${
            openSection == 2 ? "block" : "hidden"
          } self-stretch box-border flex flex-col items-start justify-start  px-0 pb-2 gap-[10px] max-w-full text-left text-sm text-[#7A7687] font-t2`}
        >
          <div className="self-stretch h-[216px] bg-[white] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border gap-[20px] max-w-full z-[1] text-lg text-[#07745E]1 mq1000:h-auto">
            <div className="self-stretch h-[214px] relative bg-[white] hidden" />
            <div className="mt-[-22px] self-stretch h-0.5 relative shrink-0">
              <div className="absolute top-[1px] left-[0px] bg-lavender w-[1308px] h-px z-[2]" />
              <div className="absolute top-[0px] left-[219px] rounded-sm bg-color w-[203px] h-0.5 z-[3]" />
            </div>
            <div className="w-[1091px] flex flex-row items-start justify-start pt-0 px-6 box-border max-w-full shrink-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
                <h3 className="m-0 text-[#202020_!important] w-[470px] relative text-inherit font-semibold font-inherit flex items-center max-w-full z-[2]">
                  Технические характеристики
                </h3>
                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-xs text-[#7A7687] mq1000:flex-wrap">
                  <div className="w-[407px] flex flex-row items-start justify-start gap-[5px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[10px] min-w-[195px] mq450:flex-1">
                      <div className="relative whitespace-pre-wrap z-[2]">
                        Вес оборудования . . . . . . . . . . .
                      </div>
                      <div className="relative whitespace-pre-wrap z-[2]">{`Детектор   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . `}</div>
                      <div className="relative whitespace-pre-wrap z-[2]">
                        Время сканирования . . . . . . . . .
                      </div>
                      <div className="relative whitespace-pre-wrap z-[2]">
                        Размер фокусного пятна . . . . . .
                      </div>
                      <div className="relative whitespace-pre-wrap z-[2]">
                        Динамический диапазон . . . . . .
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[135px] text-[#07745E]1">
                      <div className="relative font-medium inline-block min-w-[30px] z-[2]">
                        90 кг
                      </div>
                      <div className="relative font-medium z-[2]">
                        CsI - на основе аморфного кремния
                      </div>
                      <div className="relative font-medium inline-block min-w-[124px] z-[2]">
                        PAN стандарт - 12 сек
                      </div>
                      <div className="relative font-medium inline-block min-w-[19px] z-[2]">
                        0.6
                      </div>
                      <div className="relative font-medium z-[2]">
                        16 бит (65 536 градации серого)
                      </div>
                    </div>
                  </div>
                  <div className="w-[407px] flex flex-row items-start justify-start gap-[3px] max-w-full mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[128px]">
                      <div className="relative whitespace-pre-wrap z-[2]">
                        Рабочее напряжение . . . . . . . . .
                      </div>
                      <div className="relative whitespace-pre-wrap z-[2]">
                        Максимальный ток . . . . . . . . . . .
                      </div>
                      <div className="relative whitespace-pre-wrap z-[2]">
                        Гарантия . . . . . . . . . . . . . . . . . .
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[135px] text-[#07745E]1">
                      <div className="relative font-medium inline-block min-w-[30px] z-[2]">
                        90 кг
                      </div>
                      <div className="relative font-medium z-[2]">
                        CsI - на основе аморфного кремния
                      </div>
                      <div className="relative font-medium inline-block min-w-[124px] z-[2]">
                        PAN стандарт - 12 сек
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative bg-lavender shrink-0 z-[2]" />
          </div>
          <div className="w-[512px] flex flex-row items-start justify-start mt-[5px] py-0 px-6 box-border max-w-full text-xs text-[#07745E]">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="relative cursor-pointer font-medium inline-block min-w-[50px] z-[1]">
                Новинки
              </div>
              <div className="relative cursor-pointer font-medium inline-block min-w-[93px] z-[1]">
                Получить прайс
              </div>
              <div className="relative cursor-pointer font-medium inline-block min-w-[104px] z-[1]">
                Условия доставки
              </div>
              <div className="relative cursor-pointer font-medium inline-block min-w-[97px] z-[1]">
                Способы оплаты
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${
            openSection == 3 ? "block" : "hidden"
          } self-stretch box-border overflow-hidden flex flex-col items-start justify-start px-0 pb-2 gap-[10px] max-w-full text-left text-sm text-[#202020] font-t2`}
        >
          <div className="self-stretch h-[352px] bg-[white] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border gap-[20px] max-w-full z-[1] text-lg text-[#07745E]1">
            <div className="self-stretch h-[350px] relative bg-[white] hidden" />
            <div className="mt-[-22px] self-stretch h-0.5 relative shrink-0">
              <div className="absolute top-[1px] left-[0px] bg-lavender w-[1308px] h-px z-[2]" />
              <div className="absolute top-[0px] left-[447px] rounded-sm bg-color w-[110px] h-0.5 z-[3]" />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-6 shrink-0">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2]">
                Услуги и сервис
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pr-[22px] pl-6 box-border max-w-full shrink-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
                <Slider
                  ref={sliderRef}
                  {...settings}
                  className=" w-[1260px] gap-[10px] "
                >
                  <Component serviceIcons={Carousel1} prop="Апробация" />
                  <Component
                    serviceIcons={Carousel2}
                    prop="Помощь в подборе оборудования"
                  />
                  <Component
                    serviceIcons={Carousel3}
                    prop="Помощь инженеров в настройке"
                  />
                  <Component
                    serviceIcons={Carousel4}
                    prop="Пуско-наладочные работы"
                  />
                </Slider>
                <div className="w-[1241px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <Button
                    className="h-[41px] w-[135px] z-[2]"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#f8f7f3",
                      fontSize: "14",
                      background: "#088269",
                      borderRadius: "50px",
                      "&:hover": { background: "#088269" },
                      width: 135,
                      height: 41,
                    }}
                  >
                    Все услуги
                  </Button>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative bg-lavender shrink-0 z-[2]" />
          </div>
          <div className="w-[512px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-xs text-[#07745E]">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="relative font-medium inline-block min-w-[50px] z-[1]">
                Новинки
              </div>
              <div className="relative font-medium inline-block min-w-[93px] z-[1]">
                Получить прайс
              </div>
              <div className="relative font-medium inline-block min-w-[104px] z-[1]">
                Условия доставки
              </div>
              <div className="relative font-medium inline-block min-w-[97px] z-[1]">
                Способы оплаты
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${
            openSection == 4 ? "block" : "hidden"
          } self-stretch box-border overflow-hidden flex flex-col items-start justify-start px-0 pb-2 gap-[9px] max-w-full text-left text-sm text-[#7A7687] font-t2`}
        >
          <div className="self-stretch h-[231px] bg-[white] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border gap-[20px] max-w-full z-[1] text-lg text-[#07745E]1">
            <div className="self-stretch h-[229px] relative bg-[white] hidden" />
            <div className="mt-[-22px] self-stretch h-0.5 relative shrink-0">
              <div className="absolute top-[1px] left-[0px] bg-lavender w-[1308px] h-px z-[2]" />
              <div className="absolute top-[0px] left-[582px] rounded-sm bg-color w-[156px] h-0.5 z-[3]" />
            </div>
            <div className="w-[1262px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full shrink-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2]">
                  Оптовым покупателям
                </h3>
                <div className="self-stretch relative text-xs font-medium text-[#7A7687] z-[2]">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </div>
              </div>
            </div>
            <div className="w-[1262px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full shrink-0 text-sm">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
                <div className="relative font-semibold inline-block min-w-[73px] z-[2]">
                  Заголовок
                </div>
                <div className="self-stretch relative text-xs font-medium text-[#7A7687] z-[2]">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-xs text-teal">
              <div className="flex flex-row items-start justify-start py-0 px-6">
                <div className="relative font-medium z-[2]">
                  Реквизиты для оформеления заказа
                </div>
              </div>
              <div className="self-stretch h-px relative bg-lavender z-[2]" />
            </div>
          </div>
          <div className="w-[512px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-xs text-[#07745E]">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="relative font-medium inline-block min-w-[50px] z-[1]">
                Новинки
              </div>
              <div className="relative font-medium inline-block min-w-[93px] z-[1]">
                Получить прайс
              </div>
              <div className="relative font-medium inline-block min-w-[104px] z-[1]">
                Условия доставки
              </div>
              <div className="relative font-medium inline-block min-w-[97px] z-[1]">
                Способы оплаты
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${
            openSection == 5 ? "block" : "hidden"
          } self-stretch box-border overflow-hidden flex flex-col items-start justify-start px-0 pb-2 gap-[9px] max-w-full text-left text-sm text-[#7A7687] font-t2`}
        >
          <div className="self-stretch h-[425px] bg-[white] flex flex-col items-end justify-start pt-[21px] px-0 pb-0 box-border gap-[20px] max-w-full z-[1] text-lg text-[#07745E]1 mq1050:h-auto">
            <div className="self-stretch h-[423px] relative bg-[white] hidden" />
            <div className="mt-[-22px] self-stretch h-0.5 relative shrink-0">
              <div className="absolute top-[1px] left-[0px] bg-lavender w-[1308px] h-px z-[2]" />
              <div className="absolute top-[0px] left-[763px] rounded-sm bg-color w-[67px] h-0.5 z-[3]" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[5px] pr-[23px] pl-6 box-border max-w-full shrink-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
                <div className="self-stretch flex flex-col items-start  gap-[12px] max-w-full">
                  <div className="absolute">
                    <h3 className="m-0 text-[#202020_!important] relative text-inherit font-semibold font-inherit inline-block min-w-[68px] z-[2]">
                      Отзывы
                      <span className="text-[#7A7687_!important] ml-[5px]">
                        4
                      </span>
                    </h3>

                    <div className="w-[441px] cursor-pointer flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-24.5px] text-3xs">
                      <div
                        onMouseEnter={() => setOpenModal(true)}
                        onMouseLeave={() => setOpenModal(false)}
                        className="w-[213px] flex flex-col items-start justify-start gap-[5px] z-[3]"
                      >
                        <div className="self-stretch rounded-[50px] flex flex-col items-start justify-start py-[3px] px-[9px] border-[1px] border-solid border-color2">
                          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                            <div className="flex flex-row items-center justify-start gap-[5px]">
                              <div className="relative font-medium inline-block min-w-[91px]">
                                Сначала полезные
                              </div>
                              <img
                                className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src="/13-sorting.svg"
                              />
                            </div>
                            <img
                              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/13-arrow--up.svg"
                            />
                          </div>
                        </div>
                        <div
                          className={` ${
                            openModal ? " flex" : "hidden"
                          } self-stretch rounded-3xs bg-[white] flex-col items-start justify-start py-2 px-[9px] border-[1px] border-solid border-color2`}
                        >
                          <div
                            onClick={() => setSelect(1)}
                            className="self-stretch w-full py-1 hover:bg-slate-100 flex flex-row items-start justify-between gap-[20px]"
                          >
                            <div className="relative inline font-medium  min-w-[91px]">
                              Сначала полезные
                            </div>
                            <IoMdCheckmark
                              className={`text-[#088269] ${
                                select == 1 ? "inline" : "hidden"
                              }`}
                            />
                          </div>
                          <div
                            onClick={() => setSelect(2)}
                            className="self-stretch w-full py-1 hover:bg-slate-100 flex flex-row items-start justify-between gap-[20px]"
                          >
                            <div className="relative font-medium inline-block min-w-[74px]">
                              Сначала новые
                            </div>
                            <IoMdCheckmark
                              className={`text-[#088269] ${
                                select == 2 ? "inline" : "hidden"
                              }`}
                            />
                          </div>
                          <div
                            onClick={() => setSelect(3)}
                            className="self-stretch w-full py-1 hover:bg-slate-100 flex flex-row items-start justify-between gap-[20px]"
                          >
                            <div className="relative font-medium">
                              Сначала с высокой оценкой
                            </div>
                            <IoMdCheckmark
                              className={`text-[#088269] ${
                                select == 3 ? "inline" : "hidden"
                              }`}
                            />
                          </div>
                          <div
                            onClick={() => setSelect(4)}
                            className="self-stretch w-full py-1 hover:bg-slate-100 flex flex-row items-start justify-between gap-[20px]"
                          >
                            <div className="relative font-medium inline-block min-w-[128px]">
                              Сначала с низкой оценкой
                            </div>
                            <IoMdCheckmark
                              className={`text-[#088269] ${
                                select == 4 ? "inline" : "hidden"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[25px] max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border relative min-w-[611px] max-w-full mq725:min-w-full">
                      <div className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] rounded-8xs box-border flex flex-row items-start justify-start pt-[13px] px-[15px] pb-[22px] gap-[16px] max-w-full z-[2] text-sm border-[1px] border-solid border-color2 mq1000:flex-wrap">
                        <div className="h-[131px] w-[940px] relative rounded-8xs box-border hidden max-w-full border-[1px] border-solid border-color2" />
                        <img
                          className="h-[31px] w-[31px] relative z-[1]"
                          loading="lazy"
                          alt=""
                          src={GroupImg}
                        />
                        <div className="w-[812px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px]">
                            <div className="flex flex-row items-end justify-start gap-[15px]">
                              <div className="relative text-[#202020] font-semibold inline-block min-w-[105px] z-[1]">
                                Тишкова Дарья
                              </div>
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px] text-3xs text-gray">
                                <div className="flex flex-row items-center justify-start gap-[6px]">
                                  <div className="flex flex-row items-start justify-start gap-[3px] z-[1]">
                                    <StarRatings
                                      rating={5}
                                      starDimension="13px"
                                      starRatedColor="#FFAC0C"
                                      starSpacing="4px"
                                    />
                                  </div>
                                  <div className="relative leading-[9px] font-medium inline-block min-w-[16px] z-[1]">
                                    5.0
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch relative text-xs font-medium text-[#7A7687] z-[1]">
                              Но синтетическое тестирование, в своём
                              классическом представлении, допускает внедрение
                              поэтапного и последовательного развития общества.
                              В рамках спецификации современных стандартов,
                              сторонники тоталитаризма в науке будут
                              функционально разнесены.
                            </div>
                            <div className="relative text-3xs font-medium text-gray text-[#202020] inline-block min-w-[72px] z-[1]">
                              12 января 2023
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[296px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border text-xs text-gray">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                          <div className="w-[81px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                            <div className="self-stretch w-[140px] flex flex-row items-start justify-start gap-[4px] z-[2]">
                              <StarRatings
                                rating={4}
                                starDimension="13px"
                                starRatedColor="#FFAC0C"
                                starSpacing="4px"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row items-end justify-start gap-[2px]">
                            <div className="relative font-medium inline-block min-w-[18px] z-[2]">
                              4.0
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[2px] text-[#7A7687]">
                              <div className="relative font-medium inline-block min-w-[5px] z-[2]">
                                /
                              </div>
                              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                                <div className="relative font-medium inline-block min-w-[18px] z-[2]">
                                  5.0
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px]">
                          <div className="h-px flex-1 relative bg-lavender z-[2]" />
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-start gap-[15px]">
                          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
                            <div className="relative font-medium inline-block min-w-[43px] z-[2]">
                              5 звезд
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                            <div className="self-stretch h-1 relative">
                              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-goldenrod-200 w-full h-full z-[2]" />
                              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-goldenrod-100 w-[179px] h-1 z-[3]" />
                            </div>
                          </div>
                          <div className="relative font-medium inline-block min-w-[12px] z-[2]">
                            12
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
                          <div className="flex-1 flex flex-row items-end justify-start gap-[15px]">
                            <div className="relative font-medium inline-block min-w-[51px] z-[2]">
                              4 звезды
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                              <div className="self-stretch h-1 relative">
                                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-goldenrod-200 w-full h-full z-[2]" />
                                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-goldenrod-100 w-[113px] h-1 z-[3]" />
                              </div>
                            </div>
                          </div>
                          <div className="relative font-medium inline-block min-w-[8px] z-[2]">
                            8
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
                          <div className="flex-1 flex flex-row items-end justify-start gap-[15px]">
                            <div className="relative font-medium inline-block min-w-[51px] z-[2]">
                              3 звезды
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                              <div className="self-stretch h-1 relative">
                                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-goldenrod-200 w-full h-full z-[2]" />
                                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-goldenrod-100 w-[43px] h-1 z-[3]" />
                              </div>
                            </div>
                          </div>
                          <div className="relative font-medium inline-block min-w-[7px] z-[2]">
                            2
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
                          <div className="flex-1 flex flex-row items-end justify-start gap-[15px]">
                            <div className="relative font-medium inline-block min-w-[51px] z-[2]">
                              2 звезды
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                              <div className="self-stretch h-1 relative rounded-8xs bg-goldenrod-200 z-[2]" />
                            </div>
                          </div>
                          <div className="relative font-medium inline-block min-w-[8px] z-[2]">
                            0
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-start gap-[19.5px]">
                          <div className="relative font-medium inline-block min-w-[47px] z-[2]">
                            1 звезда
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                            <div className="self-stretch h-1 relative rounded-8xs bg-goldenrod-200 z-[2]" />
                          </div>
                          <div className="relative font-medium inline-block min-w-[8px] z-[2]">
                            0
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full text-sm">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full mq725:min-w-full">
                      <div className="self-stretch rounded-8xs box-border flex flex-col items-start justify-start pt-[13px] px-[15px] pb-[22px] gap-[11px] max-w-full z-[2] border-[1px] border-solid border-color2">
                        <div className="w-[940px] h-[131px] relative rounded-8xs box-border hidden max-w-full border-[1px] border-solid border-color2" />
                        <div className="w-[859px] flex flex-col items-start justify-start gap-[4px] max-w-full">
                          <div className="flex flex-row items-end justify-start gap-[15.5px]">
                            <img
                              className="h-[31px] w-[31px] relative z-[1]"
                              alt=""
                              src={GroupImg}
                            />
                            <div className="flex flex-col text-[#202020] items-start justify-end pt-0 px-0 pb-1.5">
                              <div className="relative font-semibold inline-block min-w-[121px] z-[1]">
                                Тепляков Максим
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px] text-3xs text-gray">
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px] text-3xs text-gray">
                                <div className="flex flex-row items-center justify-start gap-[6px]">
                                  <div className="flex flex-row items-start justify-start gap-[3px] z-[1]">
                                    <StarRatings
                                      rating={5}
                                      starDimension="13px"
                                      starRatedColor="#FFAC0C"
                                      starSpacing="4px"
                                    />
                                  </div>
                                  <div className="relative leading-[9px] font-medium inline-block min-w-[16px] z-[1]">
                                    5.0
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-xs text-[#7A7687]">
                            <div className="w-[812px] relative font-medium flex items-center shrink-0 max-w-full z-[1]">
                              Но синтетическое тестирование, в своём
                              классическом представлении, допускает внедрение
                              поэтапного и последовательного развития общества.
                              В рамках спецификации современных стандартов,
                              сторонники тоталитаризма в науке будут
                              функционально разнесены.
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start text-[#202020]  justify-start py-0 px-[47px] text-3xs text-gray">
                          <div className="relative font-medium inline-block min-w-[74px] z-[1]">
                            03 января 2023
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="h-[41px] w-[295px] z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#f8f7f3",
                        fontSize: "14",
                        background: "#088269",
                        borderRadius: "50px",
                        "&:hover": { background: "#088269" },
                        width: 295,
                        height: 41,
                      }}
                    >
                      Оставить отзыв
                    </Button>
                  </div>
                </div>
                <div className="w-[969px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <Button
                    className="h-[41px] w-[155px] z-[2]"
                    disableElevation
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#088269",
                      fontSize: "14",
                      borderColor: "#d5d1e1",
                      borderRadius: "50px",
                      "&:hover": { borderColor: "#d5d1e1" },
                      width: 155,
                      height: 41,
                    }}
                  >
                    Показать еще
                  </Button>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative bg-lavender shrink-0 z-[2]" />
          </div>
          <footer className="w-[512px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-left text-xs text-[#07745E] font-t2">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="relative font-medium inline-block min-w-[50px] z-[1]">
                Новинки
              </div>
              <div className="relative font-medium inline-block min-w-[93px] z-[1]">
                Получить прайс
              </div>
              <div className="relative font-medium inline-block min-w-[104px] z-[1]">
                Условия доставки
              </div>
              <div className="relative font-medium inline-block min-w-[97px] z-[1]">
                Способы оплаты
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Specifications;
