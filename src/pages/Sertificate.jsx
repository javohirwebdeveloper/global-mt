import React, { useState } from "react";
import CrossImg from "../assets/20--cross.svg";
import PlusImg from "../assets/Delivery/plus.svg";
import ArrowImg from "../assets/Delivery/cross.svg";
import { ProductsWrapper } from "../components/Home/ProductsWrapper";
import { Footer } from "../components/About/Footer";
import { Form } from "../components/Home/Form";
const Sertificate = () => {
  const [isHovered, setIsHovered] = useState(1);

  return (
    <>
      <div className="  mx-auto flex justify-between max-w-[1440px] xl:mt-[99px] md:mt-[50px] sm:mt-[40px] mt-[20px] xl:px-[65px] sm:px-[20px] px-[15px] w-full ">
        <div className="text-[#202020] font-1440-h2 w-[660px] mt-[60px] text-[30px]">
          <div className="max-w-[395px] w-full font-[600] xl:text-[48px] md:text-[34px] text-[28px]">
            Сертификаты
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[650px] mt-[60px]">
          <div
            onMouseEnter={() => setIsHovered(1)}
            className={`cursor-pointer border-t border-[#D5D1E1] duration-700 ${
              isHovered === 1 ? "h-[590px]" : "h-[74px]"
            } overflow-hidden pt-4`}
          >
            <div className="flex justify-between items-center">
              <div className="text-[#202020] font-1440-h3 font-[600]">
                Медицинские инструменты
              </div>
              <div
                onClick={() => setIsHovered(0)}
                className={`w-8 h-8 flex justify-center items-center ${
                  isHovered === 1
                    ? "bg-[#088269] "
                    : "bg-transparent border-[#D5D1E1]"
                } border  rounded-full transition-all duration-200`}
              >
                <img
                  className={`w-[14px] h-[14px]`}
                  alt="Toggle"
                  src={isHovered === 1 ? ArrowImg : PlusImg}
                />
              </div>
            </div>
            <p
              className={`${
                isHovered === 1 ? "block" : "hidden"
              } text-[#07745E] font-1440-t1 mt-[24px] mb-[40px]`}
            >
              <span>
                Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12
                октября 2015 г.
              </span>
              <span>
                Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
              </span>
              <span>
                Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г
              </span>
              <span>
                Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября
                2018 г.
              </span>
              <span>
                Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018
                года
              </span>
              <span>
                Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015
                г.
              </span>
              <span>
                Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.
              </span>
              <span>Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.</span>
              <span>Гигрометры ВИТ Свидетельство об утверждении</span>
              <span>
                Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017 г.
              </span>
              <span>
                {" "}
                Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.
              </span>
              <span>
                Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018 г.
              </span>
              <span>
                Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18 марта 2020
                г.
              </span>
              <span>Емкости-контейнеры РУ № ФСР 2012/13095 ч.1</span>
              <span>Электроды медицинские РУ № ФСЗ 2012/12612</span>
              <span>
                Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая 2012 г.
              </span>
              <span>
                Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ 2011/11287 от
                27 декабря 2011 г.
              </span>
              <span>Термометр медицинский РУ № ФСЗ 2011/10572</span>
              <span>
                Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27 августа
                2019 г.
              </span>
              <span>
                Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от 13
                февраля 2018 г.
              </span>
              <span>
                Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от 13
                января 2017 г.
              </span>
            </p>
          </div>

          <div
            onMouseEnter={() => setIsHovered(2)}
            className={`cursor-pointer border-t border-[#D5D1E1] duration-700 ${
              isHovered === 2 ? "h-[590px]" : "h-[74px]"
            } overflow-hidden pt-4`}
          >
            <div className="flex justify-between items-center">
              <div className="text-[#202020] font-1440-h3 font-[600]">
                Материалы для гинекологии и урологии
              </div>
              <div
                onClick={() => setIsHovered(0)}
                className={`w-8 h-8 flex justify-center items-center ${
                  isHovered === 2
                    ? "bg-[#088269] "
                    : "bg-transparent border-[#D5D1E1]"
                } border  rounded-full transition-all duration-200`}
              >
                <img
                  className={`w-[14px] h-[14px]`}
                  alt="Toggle"
                  src={isHovered === 2 ? ArrowImg : PlusImg}
                />
              </div>
            </div>
            <p
              className={`${
                isHovered === 2 ? "block" : "hidden"
              } text-[#07745E] font-1440-t1 mt-[24px] mb-[40px]`}
            >
              <span>
                Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12
                октября 2015 г.
              </span>
              <span>
                Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
              </span>
              <span>
                Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г
              </span>
              <span>
                Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября
                2018 г.
              </span>
              <span>
                Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018
                года
              </span>
              <span>
                Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015
                г.
              </span>
              <span>
                Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.
              </span>
              <span>Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.</span>
              <span>Гигрометры ВИТ Свидетельство об утверждении</span>
              <span>
                Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017 г.
              </span>
              <span>
                {" "}
                Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.
              </span>
              <span>
                Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018 г.
              </span>
              <span>
                Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18 марта 2020
                г.
              </span>
              <span>Емкости-контейнеры РУ № ФСР 2012/13095 ч.1</span>
              <span>Электроды медицинские РУ № ФСЗ 2012/12612</span>
              <span>
                Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая 2012 г.
              </span>
              <span>
                Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ 2011/11287 от
                27 декабря 2011 г.
              </span>
              <span>Термометр медицинский РУ № ФСЗ 2011/10572</span>
              <span>
                Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27 августа
                2019 г.
              </span>
              <span>
                Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от 13
                февраля 2018 г.
              </span>
              <span>
                Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от 13
                января 2017 г.
              </span>
            </p>
          </div>

          <div
            onMouseEnter={() => setIsHovered(3)}
            className={`cursor-pointer border-t border-[#D5D1E1] duration-700 ${
              isHovered === 3 ? "h-[590px]" : "h-[74px]"
            } overflow-hidden pt-4`}
          >
            <div className="flex justify-between items-center">
              <div className="text-[#202020] font-1440-h3 font-[600]">
                Материалы для инъекционных процедур
              </div>
              <div
                onClick={() => setIsHovered(0)}
                className={`w-8 h-8 flex justify-center items-center ${
                  isHovered === 3
                    ? "bg-[#088269] "
                    : "bg-transparent border-[#D5D1E1]"
                } border  rounded-full transition-all duration-200`}
              >
                <img
                  className={`w-[14px] h-[14px]`}
                  alt="Toggle"
                  src={isHovered === 3 ? ArrowImg : PlusImg}
                />
              </div>
            </div>
            <p
              className={`${
                isHovered === 3 ? "block" : "hidden"
              } text-[#07745E] font-1440-t1 mt-[24px] mb-[40px]`}
            >
              <span>
                Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12
                октября 2015 г.
              </span>
              <span>
                Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
              </span>
              <span>
                Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г
              </span>
              <span>
                Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября
                2018 г.
              </span>
              <span>
                Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018
                года
              </span>
              <span>
                Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015
                г.
              </span>
              <span>
                Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.
              </span>
              <span>Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.</span>
              <span>Гигрометры ВИТ Свидетельство об утверждении</span>
              <span>
                Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017 г.
              </span>
              <span>
                {" "}
                Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.
              </span>
              <span>
                Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018 г.
              </span>
              <span>
                Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18 марта 2020
                г.
              </span>
              <span>Емкости-контейнеры РУ № ФСР 2012/13095 ч.1</span>
              <span>Электроды медицинские РУ № ФСЗ 2012/12612</span>
              <span>
                Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая 2012 г.
              </span>
              <span>
                Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ 2011/11287 от
                27 декабря 2011 г.
              </span>
              <span>Термометр медицинский РУ № ФСЗ 2011/10572</span>
              <span>
                Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27 августа
                2019 г.
              </span>
              <span>
                Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от 13
                февраля 2018 г.
              </span>
              <span>
                Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от 13
                января 2017 г.
              </span>
            </p>
          </div>

          <div
            onMouseEnter={() => setIsHovered(4)}
            className={`cursor-pointer border-t border-[#D5D1E1] duration-700 ${
              isHovered === 4 ? "h-[590px]" : "h-[74px]"
            } overflow-hidden pt-4`}
          >
            <div className="flex justify-between items-center">
              <div className="text-[#202020] font-1440-h3 font-[600]">
                Перевязочные материалы
              </div>
              <div
                onClick={() => setIsHovered(0)}
                className={`w-8 h-8 flex justify-center items-center ${
                  isHovered === 4
                    ? "bg-[#088269] "
                    : "bg-transparent border-[#D5D1E1]"
                } border  rounded-full transition-all duration-200`}
              >
                <img
                  className={`w-[14px] h-[14px]`}
                  alt="Toggle"
                  src={isHovered === 4 ? ArrowImg : PlusImg}
                />
              </div>
            </div>
            <p
              className={`${
                isHovered === 4 ? "block" : "hidden"
              } text-[#07745E] font-1440-t1 mt-[24px] mb-[40px]`}
            >
              <span>
                Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12
                октября 2015 г.
              </span>
              <span>
                Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
              </span>
              <span>
                Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г
              </span>
              <span>
                Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября
                2018 г.
              </span>
              <span>
                Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018
                года
              </span>
              <span>
                Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015
                г.
              </span>
              <span>
                Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.
              </span>
              <span>Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.</span>
              <span>Гигрометры ВИТ Свидетельство об утверждении</span>
              <span>
                Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017 г.
              </span>
              <span>
                {" "}
                Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.
              </span>
              <span>
                Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018 г.
              </span>
              <span>
                Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18 марта 2020
                г.
              </span>
              <span>Емкости-контейнеры РУ № ФСР 2012/13095 ч.1</span>
              <span>Электроды медицинские РУ № ФСЗ 2012/12612</span>
              <span>
                Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая 2012 г.
              </span>
              <span>
                Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ 2011/11287 от
                27 декабря 2011 г.
              </span>
              <span>Термометр медицинский РУ № ФСЗ 2011/10572</span>
              <span>
                Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27 августа
                2019 г.
              </span>
              <span>
                Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от 13
                февраля 2018 г.
              </span>
              <span>
                Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от 13
                января 2017 г.
              </span>
            </p>
          </div>
        </div>
      </div>
      <ProductsWrapper />
      <Form />
      <Footer />
    </>
  );
};

export default Sertificate;
