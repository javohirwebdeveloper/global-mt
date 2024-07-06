import React from "react";
import Group from "../components/Payment/Group";
import { Footer } from "../components/About/Footer";
import { Form } from "../components/Home/Form";
const Payment = () => {
  return (
    <>
      <div
        className={`max-w-[1440px] md:mt-[99px] sm:mt-[50px] mt-[40px] md:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-col items-start justify-start gap-[150px] leading-[normal] tracking-[normal] mq450:gap-[37px] mq675:gap-[75px]`}
      >
        <section className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-29xl text-[#202020] font-t1 mq675:gap-[20px]">
          <h1 className="m-0 relative text-inherit leading-[53px] font-medium font-inherit mq450:text-10xl mq450:leading-[32px] mq750:text-19xl mq750:leading-[42px]">
            Оплата
          </h1>
          <div className="w-[670px] relative text-base leading-[140%] font-medium inline-block max-w-full box-border pr-5">{`Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. `}</div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full text-lg">
            <div className="flex-1 rounded-3xs bg-[white] box-border flex flex-col items-start justify-start pt-7 px-[30px] pb-[33px] gap-[15px] min-w-[322px] max-w-full border-[1px] border-solid border-[#E5E2EE]">
              <div className="w-[220px] relative font-semibold inline-block z-[1]">
                Оплата наличными
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full z-[1] text-base text-[#7A7687]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[11px]">
                    1.
                  </div>
                  <div className="flex-1 relative leading-[140%] font-medium inline-block min-w-[222px] max-w-full">{`Также как постоянное обеспечение нашей деятельности требует определения `}</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full mq450:flex-wrap">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[14px]">
                    2.
                  </div>
                  <div className="flex-1 relative leading-[140%] font-medium inline-block min-w-[222px] max-w-full">{`Требующим обновления приборов в различных направлениях, от установок компьютерной томографии `}</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7px] max-w-full">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[14px]">
                    3.
                  </div>
                  <div className="relative leading-[140%] font-medium">{`Также как постоянное обеспечение нашей `}</div>
                </div>
              </div>
            </div>
            <Group
              prop="Безналичный расчет"
              prop1="Также как постоянное обеспечение нашей деятельности требует определения "
              prop2="Также как постоянное обеспечение нашей "
              prop3="Также как постоянное"
            />
            <div className="flex-1 rounded-3xs bg-[white] box-border flex flex-col items-start justify-start py-7 px-[30px] gap-[15px] min-w-[322px] max-w-full border-[1px] border-solid border-[#E5E2EE]">
              <div className="w-[302px] relative font-semibold inline-block z-[1]">
                Оплата банковской картой
              </div>
              <div className="w-[354px] flex flex-row items-start justify-start gap-[7px] max-w-full text-base text-[#7A7687] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[49px]">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[11px] z-[1]">
                    1.
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative leading-[140%] font-medium inline-block min-w-[14px] z-[1]">
                      2.
                    </div>
                    <div className="relative leading-[140%] font-medium inline-block min-w-[14px] z-[1]">
                      3.
                    </div>
                    <div className="relative leading-[140%] font-medium inline-block min-w-[14px] z-[1]">
                      4.
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[216px] max-w-full">
                  <div className="self-stretch relative leading-[140%] font-medium z-[1]">{`Требующим обновления приборов в различных направлениях, от установок компьютерной томографии `}</div>
                  <div className="relative leading-[140%] font-medium z-[1]">{`Также как постоянное обеспечение нашей `}</div>
                  <div className="relative leading-[140%] font-medium z-[1]">
                    Также как постоянное
                  </div>
                  <div className="relative leading-[140%] font-medium z-[1]">{`Также как постоянное обеспечение `}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[890px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[40px] max-w-full text-left text-29xl text-[#7A7687]1 font-t1 mq450:gap-[20px]">
          <h1 className="m-0 relative text-inherit leading-[53px] font-medium font-inherit mq450:text-10xl mq450:leading-[32px] mq750:text-19xl mq750:leading-[42px]">
            Порядок возврата денежных средств
          </h1>
          <div className="w-[650px] relative text-base leading-[140%] font-medium inline-block max-w-full">{`Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. `}</div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full text-lg mq750:flex-wrap">
            <div className="flex-1 rounded-3xs bg-[white] box-border flex flex-col items-start justify-start pt-7 px-[30px] pb-[60px] gap-[15px] max-w-full border-[1px] border-solid border-[#E5E2EE]">
              <div className="w-[220px] relative font-semibold inline-block z-[1]">
                При оплате наличными
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full text-base text-[#7A7687]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[11px] z-[1]">
                    1.
                  </div>
                  <div className="flex-1 relative leading-[140%] font-medium inline-block min-w-[226px] max-w-full z-[1]">{`Также как постоянное обеспечение нашей деятельности требует определения `}</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full mq450:flex-wrap">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[14px] z-[1]">
                    2.
                  </div>
                  <div className="flex-1 relative leading-[140%] font-medium inline-block min-w-[226px] max-w-full z-[1]">{`Требующим обновления приборов в различных направлениях, от установок компьютерной томографии `}</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-[white] box-border flex flex-col items-start justify-start pt-7 px-[30px] pb-[33px] gap-[15px] max-w-full border-[1px] border-solid border-[#E5E2EE]">
              <div className="relative font-semibold z-[1]">
                При оплате банковской картой
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full z-[1] text-base text-[#7A7687]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[11px]">
                    1.
                  </div>
                  <div className="flex-1 relative leading-[140%] font-medium inline-block min-w-[226px] max-w-full">{`Также как постоянное обеспечение нашей деятельности требует определения `}</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7px] max-w-full">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[14px]">
                    2.
                  </div>
                  <div className="relative leading-[140%] font-medium">{`Также как постоянное обеспечение нашей `}</div>
                </div>
                <div className="w-[351px] flex flex-row items-start justify-start gap-[7px] max-w-full mq450:flex-wrap">
                  <div className="relative leading-[140%] font-medium inline-block min-w-[14px]">
                    3.
                  </div>
                  <div className="flex-1 relative leading-[140%] font-medium inline-block min-w-[214px] max-w-full">{`Требующим обновления приборов в различных направлениях, от установок компьютерной томографии `}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[890px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[40px] max-w-full text-left text-29xl text-[#7A7687]1 font-t1 mq450:gap-[20px]">
          <h1 className="m-0 relative text-inherit leading-[53px] font-medium font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[32px] mq750:text-19xl mq750:leading-[42px]">
            Условия поставок
          </h1>
          <div className="w-[650px] relative text-base leading-[140%] font-medium inline-block max-w-full">{`Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. `}</div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
            <Group
              prop="Лизинг"
              prop1="Также как постоянное обеспечение нашей деятельности требует определения "
              prop2="Также как постоянное"
              prop3="Требующим обновления приборов в различных направлениях, от установок компьютерной томографии "
              propMinWidth="unset"
            />
            <Group
              prop="Рассрочка"
              prop1="Требующим обновления приборов в различных направлениях, от установок компьютерной томографии "
              prop2="Также как постоянное "
              prop3="Также как постоянное обеспечение нашей "
              propMinWidth="371px"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Payment;
