import React from "react";
import { Button } from "@mui/material";
import Svg1 from "../assets/Guarantees/1.svg";
import Svg2 from "../assets/Guarantees/2.svg";
import Svg3 from "../assets/Guarantees/3.svg";
import Svg4 from "../assets/Guarantees/4.svg";
import { Form } from "../components/Home/Form";
import { Footer } from "../components/About/Footer";
const Guarantees = () => {
  return (
    <>
      <div
        className={`max-w-[1440px] xl:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-col items-start justify-start gap-[80px] leading-[normal] tracking-[normal] text-left text-[48px] text-[#202020] font-t1 mq450:gap-[20px] mq725:gap-[40px]`}
      >
        <div className="w-[670px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[40px] max-w-full mq725:gap-[20px]">
          <h1 className="m-0 relative text-inherit leading-[53px] font-medium font-inherit mq450:text-[29px] mq450:leading-[32px] mq1000:text-[38px] mq1000:leading-[42px]">
            Гарантии
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-base">
            <div className="self-stretch relative leading-[140%] font-medium">{`Регулярное сервисное обслуживание медицинской техники – залог ее надежной, беспроблемной эксплуатации, а также продолжительного срока службы. Периодическая диагностика позволяет выявить любые неисправности, отклонения от нормального рабочего режима на самых ранних сроках. Это предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам. `}</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
              <div className="self-stretch relative leading-[140%] font-medium">
                Являясь авторизованным дилером брендов, продукция которых
                представлена в каталоге, компания:
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[25px] box-border max-w-full">
                <div className="flex-1 relative leading-[140%] font-medium inline-block max-w-full">
                  <ol className="m-0 font-inherit text-inherit pl-[21px]">
                    <li className="mb-0">
                      Предоставляет услуги сервисного и гарантийного
                      обслуживания.
                    </li>
                    <li className="mb-0">
                      Осуществляет поставку оригинальных запчастей и
                      комплектующих.
                    </li>
                    <li>
                      Обучает медицинский персонал работе с современным
                      высокотехнологичным оборудованием.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="w-[637px] relative leading-[140%] font-medium inline-block max-w-full">
              Глобал Медикал Трейд является надежным поставщиком медицинского
              оборудовани, предлагая своим клиентам качественную продукцию по
              лучшей цене. Наша компания гарантирует всем клиентам возможность
              воспользоваться услугами квалифицированных мастеров в установке,
              пуско-наладке, сервисном и техническом обслуживании приобретенного
              оборудования.
            </div>
          </div>
        </div>
        <section className="grid xl:grid-cols-4 grid-cols-2 gap-[10px] w-full ">
          <div className="w-full flex flex-col justify-center items-center xl:gap-[31px] gap-[12px] xl:h-[320px] md:h-[175px] h-[168px] rounded-[10px] border border-[#E5E2EE]">
            <img src={Svg1} alt="" />
            <h2 className="xl:text-[16px] text-center text-[#202020] xl:max-w-[181px] md:max-w-[151px] max-w-[125px] md:text-[14px] text-[12px]">
              Установка, настройка и пуско-наладка медтехники
            </h2>
          </div>
          <div className="w-full flex flex-col justify-center items-center xl:gap-[31px] gap-[12px] xl:h-[320px] md:h-[175px] h-[168px] rounded-[10px] border border-[#E5E2EE]">
            <img src={Svg2} alt="" />
            <h2 className="xl:text-[16px] text-center text-[#202020] xl:max-w-[208px] md:max-w-[162px] max-w-[133px] md:text-[14px] text-[12px]">
              Сервисное обслуживание медицинской техники любой комплектации
            </h2>
          </div>
          <div className="w-full flex flex-col justify-center items-center xl:gap-[31px] gap-[12px] xl:h-[320px] md:h-[175px] h-[168px] rounded-[10px] border border-[#E5E2EE]">
            <img src={Svg3} alt="" />
            <h2 className="xl:text-[16px] text-center text-[#202020] xl:max-w-[205px] md:max-w-[140px] max-w-[124px] md:text-[14px] text-[12px]">
              Гарантийное и постгарантийное обслуживание
            </h2>
          </div>
          <div className="w-full flex flex-col justify-center items-center xl:gap-[31px] gap-[12px] xl:h-[320px] md:h-[175px] h-[168px] rounded-[10px] border border-[#E5E2EE]">
            <img src={Svg4} alt="" />
            <h2 className="xl:text-[16px] text-center text-[#202020] xl:max-w-[181px] md:max-w-[218px] max-w-[157px] md:text-[117px] text-[12px]">
              Диагностика и проведение профилактических работ
            </h2>
          </div>
        </section>
        <footer className="self-stretch rounded-3xs bg-color1 box-border flex flex-row items-start justify-between pt-[38px] pb-[43px] pr-[60px] pl-10 max-w-full gap-[20px] text-left text-11xl text-color font-t1 border-[1px] border-solid border-[#E5E2EE] mq725:pr-[30px] mq725:box-border mq1050:flex-wrap">
          <div className="h-[264px] w-[1309px] relative rounded-3xs bg-color1 box-border hidden max-w-full border-[1px] border-solid border-[#E5E2EE]" />
          <h2 className="m-0 w-[347px] relative text-inherit leading-[120%] font-medium font-inherit flex items-center shrink-0 max-w-full z-[1] mq450:text-lg mq450:leading-[22px] mq1000:text-5xl mq1000:leading-[29px]">
            Внимание!
          </h2>
          <div className="w-[589px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[589px] max-w-full text-base mq725:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch relative leading-[140%] font-medium z-[1]">
                Рассмотрение заявки на замену товара осуществляется в срок до 30
                дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ,
                при условии предоставления документов, перечисленных в договоре.
              </div>
              <div className="self-stretch relative leading-[140%] font-medium whitespace-pre-wrap z-[1]">
                Оформление гарантийного случая осуществляется согласно
                Гражданскому кодексу РФ, при условии предоставления документов,
                перечисленных в договоре и при наличии заявления с указанием
                причины возврата, оформленного надлежащим образом.
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default Guarantees;
