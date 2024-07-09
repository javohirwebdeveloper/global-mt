import React, { useState } from "react";
import CrossImg from "../../assets/20--cross.svg";
import PlusImg from "../../assets/20--plus.svg";
import ArrowImg from "../../assets/13--arrow.svg";

export const About = () => {
  const [isHovered, setIsHovered] = useState(1);

  const sections = [
    {
      id: 1,
      title: "О компании",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
    {
      id: 2,
      title: "Преимущества сотрудников",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
    {
      id: 3,
      title: "Достижения компании",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
    {
      id: 4,
      title: "Карьерный рост",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
  ];

  return (
    <div className="mt-[150px] w-full bg-tx-u7vg py-10 h-[668px]">
      <div className="container max-w-[1440px]  mx-auto flex md:flex-row flex-col justify-between  xl:px-[65px] sm:px-[20px] px-[15px] ">
        <div className="text-x-1l-ubo-z font-1440-h2 md:w-[650px] w-full md:mt-[60px] mt-[20px] text-[18px] md:text-[30px]">
          Информация о компании
        </div>
        <div className="flex flex-col gap-4 md:w-[650px] w-full mt-[60px]">
          {sections.map((section) => (
            <div
              key={section.id}
              onMouseEnter={() => setIsHovered(section.id)}
              className={`cursor-pointer border-t duration-700 ${
                isHovered === section.id ? "h-[251px]" : "h-[74px]"
              } overflow-hidden pt-4`}
            >
              <div className="flex justify-between items-center">
                <div className="text-x-1l-ubo-z md:text-[18px] text-[16px] font-1440-h3">
                  {section.title}
                </div>
                <div
                  onClick={() => setIsHovered(0)}
                  className={`md:w-8 md:h-8 w-[27px] h-[27px] flex justify-center items-center ${
                    isHovered === section.id ? "bg-white" : "bg-transparent"
                  } border border-white rounded-full transition-all duration-200`}
                >
                  <img
                    className={`md:w-5 md:h-5 w-[17px] h-[17px] ${
                      isHovered === section.id ? "" : "rotate-90"
                    }`}
                    alt="Toggle"
                    src={isHovered === section.id ? CrossImg : PlusImg}
                  />
                </div>
              </div>
              <p
                className={`${
                  isHovered === section.id ? "block" : "hidden"
                } opacity-80 text-x-1l-ubo-z md:text-[16px] text-[12px] font-1440-t1 mt-[24px] mb-[40px]`}
              >
                {section.content}
              </p>
              {isHovered === section.id && (
                <div className="flex items-center gap-2">
                  <div className="text-x-1l-ubo-z font-1440-l1">Подробнее</div>
                  <img className="w-3 h-3" alt="Arrow" src={ArrowImg} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
