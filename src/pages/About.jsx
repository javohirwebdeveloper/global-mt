import React, { useState } from "react";
import Rectangle from "../assets/About/Rectangle.png";
import Rectangle2 from "../assets/About/Rectangle2.png";
import Rectangle3 from "../assets/About/Rectangle3.png";
import Rectangle4 from "../assets/About/Rectangle4.png";
import Rectangle5 from "../assets/About/Rectangle5.png";
import LeftArrow from "../assets/17--arrow---right.svg";
import { Clients } from "../components/Home/Clients";
import { Offers } from "../components/Home/Offers";
import { Brands } from "../components/Home/Brands";
import { Sertificates } from "../components/About/Sertificates";
import { Form } from "../components/Home/Form";
import { Footer } from "../components/About/Footer";

const About = () => {
  const [selectedImage, setSelectedImage] = useState(1);
  const handleNext = () => {
    if (selectedImage < 3) {
      setSelectedImage(selectedImage + 1);
    }
  };
  const handlePrev = () => {
    if (selectedImage > 1) {
      setSelectedImage(selectedImage - 1);
    }
  };
  return (
    <>
      <div
        className={`max-w-[1440px] mx-auto w-full  md:px-[65px] sm:px-[20px] px-[15px]  overflow-hidden flex flex-col items-start justify-start gap-[20px] leading-[normal] tracking-[normal] mq750:gap-[20px]`}
      >
        <img
          className="self-stretch relative rounded-[10px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={Rectangle}
        />
        <section className="self-stretch mt-[20px] flex flex-row items-start justify-between max-w-full gap-[140px] text-left text-[48px] text-[#202020] font-t1 lg:flex-wrap">
          <h1 className="m-0 relative text-inherit leading-[53px] font-medium font-inherit inline-block shrink-0 max-w-full mq450:text-[29px] mq450:leading-[32px] mq1050:text-[38px] mq1050:leading-[42px]">
            Глобал медикал трейд
          </h1>
          <div className="w-[651px] flex flex-col items-start justify-start gap-[13px] min-w-[651px] shrink-0 max-w-full text-base lg:flex-1 mq750:min-w-full">
            <div className="self-stretch relative leading-[140%] font-medium pr-px">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись с
              вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров и
              ЛОР комбайнов. Переход на полностью цифровую платформу при
              диагностике и лечении заболеваний также стал серьёзным испытанием
              для большинства больниц и частных клиник.
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
              <div className="flex-1 relative leading-[140%] font-medium inline-block max-w-full">
                Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать
                специалистам всю необходимую помощь в деле поставок медицинского
                оборудования. Наш каталог включает передовое оборудование от
                лучших производителей России, Европы, Азии и США.
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className={`max-w-[1440px] md:mt-[171px] sm:mt-[120px] mt-[60px] md:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-row items-start justify-between leading-[normal] tracking-[normal] gap-[20px] text-left text-11xl text-[#202020] font-t1 mq975:flex-wrap `}
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
        className={`w-full mt-[150px] flex flex-row items-start justify-start leading-[normal] tracking-[normal]`}
      >
        <section className="flex-1 bg-color1 flex flex-row items-start justify-start py-20  md:px-[65px] sm:px-[20px] px-[15px]  box-border gap-[60px] max-w-full text-left text-11xl text-color font-t1 lg:flex-wrap lg:gap-[30px] lg:pl-8 lg:pr-8 lg:box-border mq750:gap-[15px] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border">
          <div className="h-[505px] w-[1440px] relative bg-color1 hidden max-w-full" />
          <img
            className="w-[600px] relative rounded-[10px] max-h-full object-cover max-w-full z-[1] lg:flex-1"
            loading="lazy"
            alt=""
            src={Rectangle2}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[25px] min-w-[422px] max-w-full mq750:min-w-full">
            <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit z-[1] mq450:text-[18px] mq450:leading-[22px] mq1050:text-[24px] mq1050:leading-[29px]">
              Наши партнёры
            </h2>
            <div className="self-stretch h-[198px] relative text-base leading-[140%] font-medium inline-block z-[1]">
              Нашими партнёрами являются наиболее серьёзные игроки на мировом
              рынке профильного оборудования. Это позволяет нам наладить
              долгосрочное и успешное сотрудничество, добиться лучших цен для
              государственных учреждений здравоохранения, медицинских центров,
              лабораторий, а также ветеринарных клиник и кабинетов. Купить
              нужную вам технику по оптимальным ценам, выбрать подходящую модель
              устройства в рамках бюджета в нашей компании окажется намного
              проще. Мы поддерживаем скидки и особые предложения для наших
              партнёров, предлагаем оформление аппаратов в лизинг и готовы
              предоставить системы в рассрочку на выгодных условиях.
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-[1440px] mt-[150px] w-full  md:px-[65px] sm:px-[20px] px-[15px]  mx-auto">
        <div
          className={`w-full overflow-hidden flex flex-row items-start justify-start gap-[120px] leading-[normal] tracking-[normal] text-left text-11xl text-[#202020] font-l2 mq450:gap-[30px] mq725:gap-[60px] mq1050:flex-wrap `}
        >
          <div className="w-[540px] flex flex-col items-start justify-start gap-[25px] min-w-[540px] max-w-full mq725:min-w-full mq1050:flex-1">
            <h2 className="m-0 w-[429px] relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq450:text-[18px] mq450:leading-[22px] mq1000:text-[24px] mq1000:leading-[29px]">
              Опытные сотрудники из производственных компаний
            </h2>
            <div className="self-stretch relative text-base leading-[140%] font-medium">
              Наши сотрудники имеют огромный опыт работы в сложных условиях, в
              том числе в разгар пандемии COVID–19. В этот период мы осуществили
              поставки медицинских аппаратов в новейшие клиники Минобороны в
              различных регионах страны.
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[422px] max-w-full text-base mq450:min-w-full mq725:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[279px] max-w-full mq450:gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-end pt-[281px] px-5 pb-5 relative gap-[2px] mq450:pt-[183px] mq450:box-border">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-3xs w-[430px] h-[261px] object-cover"
                    loading="lazy"
                    alt=""
                    src={`${selectedImage == 1 ? Rectangle3 : ""} ${
                      selectedImage == 2 ? Rectangle4 : ""
                    }${selectedImage == 3 ? Rectangle5 : ""}`}
                  />
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs box-border z-[1] border-[1px] border-solid border-lavender" />
                </div>
                <div className="w-[174px] relative leading-[140%] font-medium inline-block z-[2]">
                  Константин Константинопольский
                </div>
                <div className="relative text-sm text-color z-[2]">
                  Основатель компании
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div
                    onClick={handlePrev}
                    className="flex rounded-full cursor-pointer flex-row w-[41px] h-[41px] border border-[#D5D1E1] hover:border-[#088269] duration-200 items-center justify-center"
                  >
                    <img
                      className="h-[17px] w-[17px] relative rounded-21xl overflow-hidden shrink-0 min-h-[41px]"
                      loading="lazy"
                      alt=""
                      src={LeftArrow}
                    />
                  </div>
                  <div
                    onClick={handleNext}
                    className="flex rounded-full cursor-pointer flex-row w-[41px] h-[41px] border border-[#D5D1E1] hover:border-[#088269] duration-200 items-center justify-center"
                  >
                    <img
                      className="h-[17px] w-[17px] rotate-180 relative rounded-21xl overflow-hidden shrink-0 object-contain min-h-[41px]"
                      loading="lazy"
                      alt=""
                      src={LeftArrow}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[366px] w-[210px] flex flex-col items-start justify-start gap-[10px] min-w-[210px] mq725:flex-1">
              <img
                className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src={`${selectedImage == 1 ? Rectangle4 : ""} ${
                  selectedImage == 2 ? Rectangle3 : ""
                }${selectedImage == 3 ? Rectangle3 : ""}`}
              />
              <img
                className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src={`${selectedImage == 1 ? Rectangle5 : ""} ${
                  selectedImage == 2 ? Rectangle5 : ""
                }${selectedImage == 3 ? Rectangle4 : ""}`}
              />
            </div>
          </div>
        </div>
      </div>
      <Clients />
      <div className="mx-auto w-[1440px]">
        <Offers />
      </div>
      <Brands />
      <Sertificates />
      <Form />
      <Footer />
    </>
  );
};

export default About;
