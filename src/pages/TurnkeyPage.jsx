import React from "react";
import Turnkeypage from "../assets/turnkeypage.png";
import TurnkeyForm from "../components/Turnkey/form";
import { About } from "../components/Home/About";
import { Form } from "../components/Home/Form";
import { Subscription } from "../components/Home/Subscription";
import { Footer } from "../components/Home/Footer";
const TurnkeyPage = () => {
  return (
    <>
      <div
        className={`max-w-[1440px] xl:mt-[99px] md:mt-[50px] sm:mt-[50px] mt-[20px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-col items-start justify-start gap-[40px] leading-[normal] tracking-[normal] mq725:gap-[20px]`}
      >
        <section className="max-w-[944px] w-full relative text-29xl leading-[110%] font-medium font-t2 text-[#202020] text-left inline-block box-border pr-5 mq450:text-[29px] mq450:leading-[32px] mq975:text-[38px] mq975:leading-[42px]">
          Комплексное оснащение палаты реанимации и интенсивной терапии
        </section>
        <img
          className="self-stretch xl:h-[389px] md:h-[215px] h-[207px] w-full relative rounded-3xs overflow-hidden object-cover"
          alt=""
          src={Turnkeypage}
        />
        <footer className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-base text-[#202020] font-t2">
          <div className="max-w-[670px] w-full flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[12px]">
            <div className="self-stretch relative leading-[140%] font-medium">{`Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник. `}</div>
            <div className="self-stretch relative text-xs font-medium text-[#07745E]">
              Скачать каталог "Стандарты оснащения отделений"
            </div>
          </div>
        </footer>
        <section className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start pt-[13px] px-0 gap-[14px] max-w-full text-left text-sm text-[#202020] font-t2 border-[1px] border-solid border-[#E5E2EE]">
          <div className="flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative font-semibold z-[1]">
                Стандарты оснащения
              </div>
              <div className="relative font-semibold text-[#202020]1 inline-block min-w-[110px] z-[1]">
                Список товаров
              </div>
            </div>
          </div>
          <div className="self-stretch flex bg-[white] pb-[26px] flex-col items-start justify-start gap-[20px] max-w-full text-xs text-[#202020]1">
            <div className="self-stretch h-0.5 relative">
              <div className="absolute top-[1px] left-[0px] bg-[#E5E2EE] w-full h-[0.5px] z-[1]" />
            </div>
            <div className="max-w-[1217px]  w-full flex flex-row items-start justify-start py-0 px-6 box-border">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1000:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[7px] min-w-[409px] max-w-full mq725:min-w-full mq1000:flex-1">
                  <div className="flex flex-col items-start justify-start gap-[10px] max-w-[calc(100%_-_18px)] text-[#202020]">
                    <div className="relative font-medium z-[2]">
                      <span className="text-[#7A7687]">1.‎ ‎ </span>‎ Аппарат
                      искусственной вентиляции лёгких
                    </div>
                    <div className="relative font-medium inline-block max-w-full z-[2]">
                      <span className="text-[#7A7687]">2.‎ ‎ </span>‎ Аппарат
                      искусственной вентиляции легких транспортный
                    </div>
                    <div className="relative font-medium z-[2]">
                      <span className="text-[#7A7687]">3.‎ ‎ </span>‎
                      Дыхательный мешок для ручной искусственной вентиляции
                      легких
                    </div>
                    <div className="relative font-medium z-[2]">
                      <span className="text-[#7A7687]">4.‎ ‎ </span>‎ Монитор
                      пациента на 5 параметров
                    </div>
                    <div className="relative font-medium z-[2]">
                      <span className="text-[#7A7687]">5.‎ ‎ </span>‎ Монитор
                      пациента на 8 параметров
                    </div>
                    <div className="relative font-medium inline-block min-w-[105px] z-[2]">
                      <span className="text-[#7A7687]">6.‎ ‎ </span>‎ Шприцевой
                      насос
                    </div>
                    <div className="relative font-medium inline-block min-w-[118px] z-[2]">
                      <span className="text-[#7A7687]">7.‎ ‎ </span>‎
                      Инфузионный насос
                    </div>
                    <div className="relative font-medium z-[2]">
                      <span className="text-[#7A7687]">8.‎ ‎ </span>‎ Набор для
                      интубации трахеи
                    </div>
                    <div className="relative font-medium inline-block min-w-[95px] z-[2]">
                      <span className="text-[#7A7687]">9.‎ ‎ </span>‎
                      Дефибриллятор
                    </div>
                  </div>
                </div>
                <div className="max-w-[534px] w-full flex flex-row items-start justify-start gap-[10px] min-w-[534px] mq725:flex-wrap mq725:min-w-full mq1000:flex-1">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[200px] max-w-full text-[#202020]">
                    <div className="relative font-medium z-[2]">
                      <span className="text-[#7A7687]">10.‎ ‎ </span>‎Матрац
                      термостабилизирующий
                    </div>
                    <div className="relative font-medium z-[2]">
                      <span className="text-[#7A7687]">11.‎ ‎ </span>
                      ‎Автоматический анализатор газов крови
                    </div>
                    <div className="relative font-medium inline-block min-w-[120px] z-[2]">
                      <span className="text-[#7A7687]">12.‎ ‎ </span>
                      ‎Электрокардиограф
                    </div>
                    <div className="relative font-medium z-[2]">
                      <span className="text-[#7A7687]">13.‎ ‎ </span>
                      ‎Транспортируемый рентгеновский аппарат
                    </div>
                    <div className="relative font-medium inline-block max-w-full z-[2]">
                      <span className="text-[#7A7687]">14.‎ ‎ </span>‎
                      Портативный ультразвуковой диагностический аппарат
                    </div>
                    <div className="relative font-medium z-[2]">
                      <span className="text-[#7A7687]">15.‎ ‎ </span>‎Кровать
                      трёхсекционная с ограждением
                    </div>
                    <div className="relative font-medium inline-block min-w-[74px] z-[2]">
                      <span className="text-[#7A7687]">16.‎ ‎ </span>
                      ‎Кровать-вес
                    </div>
                    <div className="relative font-medium z-[2]">
                      <span className="text-[#7A7687]">17.‎ ‎ </span>
                      ‎Электроэнцефалограф 8-канальный
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start relative">
                      <div className="relative font-medium z-[2]">
                        <span className="text-[#7A7687]">18.‎ ‎ </span>
                        ‎Пневмокомпрессорная профилактика тромбоэмболических
                        осложнений и лимфостаза
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <TurnkeyForm />
      <About />
      <Form />
      <Subscription />
      <Footer />
    </>
  );
};

export default TurnkeyPage;
