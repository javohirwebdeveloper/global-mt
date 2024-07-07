import React from "react";
import Ellipse from "../assets/Guarantees/Ellipse.svg";
import StarRatings from "react-star-ratings";
import Right1x from "../assets/right1x.svg";
import Right2x from "../assets/right2x.svg";
import Left1x from "../assets/left1x.svg";
import Left2x from "../assets/left2x.svg";
import { Form } from "../components/Home/Form";
import { Footer } from "../components/About/Footer";
const Reviews = () => {
  return (
    <>
      <div className="max-w-[1440px] xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full">
        <h2 className=" xl:text-[48px] md:text-[34px] text-[28px] xl:mb-[40px] mb-[20px] ">
          Отзывы
        </h2>
        <div className="grid md:grid-cols-2 w-full gap-[10px]">
          <div className="w-full border-[#E5E2EE] border rounded-[10px] bg-white xl:h-[288px] md:h-[351px] flex flex-col xl:gap-[25px] md:gap-[20px] xl:px-[25px] md:py-[20px] md:px-[20px] py-[15px] px-[15px] ">
            <div className="flex justify-between">
              <div className="flex xl:gap-[20px] gap-[15px]">
                <img
                  src={Ellipse}
                  className="xl:w-[64px] xl:h-[64px] w-[48px] h-[48px]"
                  alt=""
                />
                <div>
                  <h2 className="xl:text-[18px] text-[16px] text-[#202020]">
                    ООО Название компании
                  </h2>
                  <h2 className="text-[#7A7687] xl:text-[12px] text-[10px]">
                    Михаил Булич Андреевич, Директор
                  </h2>
                  <StarRatings
                    rating={4}
                    starDimension="16px"
                    starRatedColor="#FFAC0C"
                    starSpacing="2px"
                  />
                </div>
              </div>
              <h2 className="text-[#202020] xl:inline hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
            <div>
              <h2 className="xl:text-[16px] xl:leading-[22.4px] md:leading-[16.52px] leading-[14.16px] md:text-[14px] text-[12px] text-[#7A7687] ">
                Каждый из нас понимает очевидную вещь: понимание сути
                ресурсосберегающих технологий создаёт необходимость включения в
                производственный план целого ряда внеочередных мероприятий с
                учётом комплекса новых принципов формирования
                материально-технической и кадровой базы. Господа, повышение
                уровня гражданского сознания играет определяющее значение для
                стандартных подходов. План целого ряда внеочередных мероприятий
                с учётом комплекса.
              </h2>
              <h2 className="text-[#202020] block mt-[20px] xl:hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
          </div>{" "}
          <div className="w-full border-[#E5E2EE] border rounded-[10px] bg-white xl:h-[288px] md:h-[351px] flex flex-col xl:gap-[25px] md:gap-[20px] xl:px-[25px] md:py-[20px] md:px-[20px] py-[15px] px-[15px] ">
            <div className="flex justify-between">
              <div className="flex xl:gap-[20px] gap-[15px]">
                <img
                  src={Ellipse}
                  className="xl:w-[64px] xl:h-[64px] w-[48px] h-[48px]"
                  alt=""
                />
                <div>
                  <h2 className="xl:text-[18px] text-[16px] text-[#202020]">
                    ООО Название компании
                  </h2>
                  <h2 className="text-[#7A7687] xl:text-[12px] text-[10px]">
                    Михаил Булич Андреевич, Директор
                  </h2>
                  <StarRatings
                    rating={4}
                    starDimension="16px"
                    starRatedColor="#FFAC0C"
                    starSpacing="2px"
                  />
                </div>
              </div>
              <h2 className="text-[#202020] xl:inline hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
            <div>
              <h2 className="xl:text-[16px] xl:leading-[22.4px] md:leading-[16.52px] leading-[14.16px] md:text-[14px] text-[12px] text-[#7A7687] ">
                Не следует, однако, забывать, что граница обучения кадров, а
                также свежий взгляд на привычные вещи — безусловно открывает
                новые горизонты для новых принципов формирования.
              </h2>
              <h2 className="text-[#202020] block mt-[20px] xl:hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
          </div>{" "}
          <div className="w-full border-[#E5E2EE] border rounded-[10px] bg-white xl:h-[288px] md:h-[351px] flex flex-col xl:gap-[25px] md:gap-[20px] xl:px-[25px] md:py-[20px] md:px-[20px] py-[15px] px-[15px] ">
            <div className="flex justify-between">
              <div className="flex xl:gap-[20px] gap-[15px]">
                <img
                  src={Ellipse}
                  className="xl:w-[64px] xl:h-[64px] w-[48px] h-[48px]"
                  alt=""
                />
                <div>
                  <h2 className="xl:text-[18px] text-[16px] text-[#202020]">
                    ООО Название компании
                  </h2>
                  <h2 className="text-[#7A7687] xl:text-[12px] text-[10px]">
                    Михаил Булич Андреевич, Директор
                  </h2>
                  <StarRatings
                    rating={4}
                    starDimension="16px"
                    starRatedColor="#FFAC0C"
                    starSpacing="2px"
                  />
                </div>
              </div>
              <h2 className="text-[#202020] xl:inline hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
            <div>
              <h2 className="xl:text-[16px] xl:leading-[22.4px] md:leading-[16.52px] leading-[14.16px] md:text-[14px] text-[12px] text-[#7A7687] ">
                Не следует, однако, забывать, что граница обучения кадров, а
                также свежий взгляд на привычные вещи — безусловно открывает
                новые горизонты для новых принципов формирования.
              </h2>
              <h2 className="text-[#202020] block mt-[20px] xl:hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
          </div>{" "}
          <div className="w-full border-[#E5E2EE] border rounded-[10px] bg-white xl:h-[288px] md:h-[351px] flex flex-col xl:gap-[25px] md:gap-[20px] xl:px-[25px] md:py-[20px] md:px-[20px] py-[15px] px-[15px] ">
            <div className="flex justify-between">
              <div className="flex xl:gap-[20px] gap-[15px]">
                <img
                  src={Ellipse}
                  className="xl:w-[64px] xl:h-[64px] w-[48px] h-[48px]"
                  alt=""
                />
                <div>
                  <h2 className="xl:text-[18px] text-[16px] text-[#202020]">
                    ООО Название компании
                  </h2>
                  <h2 className="text-[#7A7687] xl:text-[12px] text-[10px]">
                    Михаил Булич Андреевич, Директор
                  </h2>
                  <StarRatings
                    rating={4}
                    starDimension="16px"
                    starRatedColor="#FFAC0C"
                    starSpacing="2px"
                  />
                </div>
              </div>
              <h2 className="text-[#202020] xl:inline hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
            <div>
              <h2 className="xl:text-[16px] xl:leading-[22.4px] md:leading-[16.52px] leading-[14.16px] md:text-[14px] text-[12px] text-[#7A7687] ">
                Каждый из нас понимает очевидную вещь: понимание сути
                ресурсосберегающих технологий создаёт необходимость включения в
                производственный план целого ряда внеочередных мероприятий с
                учётом комплекса новых принципов формирования
                материально-технической и кадровой базы.
              </h2>
              <h2 className="text-[#202020] block mt-[20px] xl:hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
          </div>{" "}
          <div className="w-full border-[#E5E2EE] border rounded-[10px] bg-white xl:h-[288px] md:h-[351px] flex flex-col xl:gap-[25px] md:gap-[20px] xl:px-[25px] md:py-[20px] md:px-[20px] py-[15px] px-[15px] ">
            <div className="flex justify-between">
              <div className="flex xl:gap-[20px] gap-[15px]">
                <img
                  src={Ellipse}
                  className="xl:w-[64px] xl:h-[64px] w-[48px] h-[48px]"
                  alt=""
                />
                <div>
                  <h2 className="xl:text-[18px] text-[16px] text-[#202020]">
                    ООО Название компании
                  </h2>
                  <h2 className="text-[#7A7687] xl:text-[12px] text-[10px]">
                    Михаил Булич Андреевич, Директор
                  </h2>
                  <StarRatings
                    rating={4}
                    starDimension="16px"
                    starRatedColor="#FFAC0C"
                    starSpacing="2px"
                  />
                </div>
              </div>
              <h2 className="text-[#202020] xl:inline hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
            <div>
              <h2 className="xl:text-[16px] xl:leading-[22.4px] md:leading-[16.52px] leading-[14.16px] md:text-[14px] text-[12px] text-[#7A7687] ">
                Не следует, однако, забывать, что граница обучения кадров, а
                также свежий взгляд на привычные вещи — безусловно открывает
                новые горизонты для новых принципов формирования. Каждый из нас
                понимает очевидную вещь: понимание сути ресурсосберегающих
                технологий создаёт.
              </h2>
              <h2 className="text-[#202020] block mt-[20px] xl:hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
          </div>
          <div className="w-full border-[#E5E2EE] border rounded-[10px] bg-white xl:h-[288px] md:h-[351px] flex flex-col xl:gap-[25px] md:gap-[20px] xl:px-[25px] md:py-[20px] md:px-[20px] py-[15px] px-[15px] ">
            <div className="flex justify-between">
              <div className="flex xl:gap-[20px] gap-[15px]">
                <img
                  src={Ellipse}
                  className="xl:w-[64px] xl:h-[64px] w-[48px] h-[48px]"
                  alt=""
                />
                <div>
                  <h2 className="xl:text-[18px] text-[16px] text-[#202020]">
                    ООО Название компании
                  </h2>
                  <h2 className="text-[#7A7687] xl:text-[12px] text-[10px]">
                    Михаил Булич Андреевич, Директор
                  </h2>
                  <StarRatings
                    rating={4}
                    starDimension="16px"
                    starRatedColor="#FFAC0C"
                    starSpacing="2px"
                  />
                </div>
              </div>
              <h2 className="text-[#202020] xl:inline hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
            <div>
              <h2 className="xl:text-[16px] xl:leading-[22.4px] md:leading-[16.52px] leading-[14.16px] md:text-[14px] text-[12px] text-[#7A7687] ">
                Каждый из нас понимает очевидную вещь: понимание сути
                ресурсосберегающих технологий создаёт необходимость включения в
                производственный план целого ряда внеочередных мероприятий с
                учётом комплекса новых принципов формирования
                материально-технической и кадровой базы. Господа, повышение
                уровня гражданского сознания играет определяющее значение для
                стандартных подходов. План целого ряда внеочередных мероприятий
                с учётом комплекса.
              </h2>
              <h2 className="text-[#202020] block mt-[20px] xl:hidden xl:text-[12px] text-[10px]">
                14.03.2023
              </h2>
            </div>
          </div>{" "}
        </div>
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
      <Form />
      <Footer />
    </>
  );
};

export default Reviews;
