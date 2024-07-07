import React from "react";
import Component from "../components/Blog/Component";
import Blog1 from "../assets/Blog/1.png";
import Blog2 from "../assets/Blog/2.png";
import Blog3 from "../assets/Blog/3.png";
import Blog4 from "../assets/Blog/4.png";
import Right1x from "../assets/right1x.svg";
import Right2x from "../assets/right2x.svg";
import Left1x from "../assets/left1x.svg";
import Left2x from "../assets/left2x.svg";
import RightI from "../assets/Blog/right.svg";
import { Subscription } from "../components/Home/Subscription";
import { Footer } from "../components/Home/Footer";
const Blog = () => {
  return (
    <>
      <div
        className={`max-w-[1440px] xl:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-col items-start justify-start gap-[40px] leading-[normal] tracking-[normal] text-left text-[48px] text-[#202020] font-t1 mq675:gap-[20px] `}
      >
        <h1 className="m-0 relative text-inherit leading-[53px] font-medium font-inherit inline-block min-w-[110px] mq450:text-[29px] mq450:leading-[32px] mq900:text-[38px] mq900:leading-[42px]">
          Блог
        </h1>
        <main className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full text-left text-sm text-[#202020] font-t1">
          <div className="w-80 rounded-3xs box-border flex flex-col items-start justify-start pt-[13px] pb-[18px] pr-[13px] pl-[19px] gap-[12px] border-[1px] border-solid border-[#E5E2EE]">
            <div className="w-80 h-[497px] relative rounded-3xs box-border hidden border-[1px] border-solid border-[#E5E2EE]" />
            <div className="flex flex-row items-start justify-start pt-0 pb-[3px] pr-5 pl-0 text-base">
              <div className="relative leading-[140%] font-medium inline-block min-w-[104px] z-[1]">
                Направления
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2 pr-1.5 pl-0">
              <div className="h-px flex-1 relative bg-[#E5E2EE] z-[1]" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative inline-block min-w-[83px]">
                  Реанимация
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative inline-block min-w-[63px]">
                  Хирургия
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative inline-block min-w-[107px]">
                  Офтальмология
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative">Лабораторная диагностика</div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative">Акушерство и Гинекология</div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative inline-block min-w-[77px]">
                  Гистология
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative inline-block min-w-[96px]">
                  Косметология
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative">Оториноларингология</div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative">Рентгенология и томография</div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative inline-block min-w-[97px]">
                  Стерилизация
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative">Физиотерапия и реабилитация</div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="relative">Функциональная диагностика</div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={RightI}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
              <div className="relative inline-block min-w-[82px]">
                Эндоскопия
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 object-contain min-h-[20px]"
                loading="lazy"
                alt=""
                src={RightI}
              />
            </div>
          </div>
          <section className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[637px] max-w-full mq675:min-w-full">
            <Component
              serviceIcons={Blog1}
              prop="Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь."
            />
            <Component
              serviceIcons={Blog2}
              prop="Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт."
            />
            <Component
              serviceIcons={Blog3}
              prop="Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь."
            />
            <Component
              serviceIcons={Blog4}
              prop="Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт."
            />
          </section>
        </main>
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
      <Subscription />
      <Footer />
    </>
  );
};

export default Blog;
