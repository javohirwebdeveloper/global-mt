import React, { useState } from "react";
import CrossImg from "../../assets/20--cross.svg";
import PlusImg from "../../assets/Delivery/plus.svg";
import ArrowImg from "../../assets/Delivery/cross.svg";

export const About1 = () => {
  const [isHovered, setIsHovered] = useState(1);

  const sections = [
    {
      id: 1,
      title: "Юридические лица",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
    {
      id: 2,
      title: "Индивидуальные предприниматели",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
    {
      id: 3,
      title: "Физические лица",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
  ];

  return (
    <div className="mt-[150px] w-full bg-[#E5E4ED] py-10 h-[534px]">
      <div className="container  mx-auto flex justify-between  md:px-[65px] sm:px-[20px] px-[15px] ">
        <div className="text-[#202020] font-1440-h2 w-[660px] mt-[60px] text-[30px]">
          <div className="max-w-[395px] w-full font-[600]">
            Документы, необходимые для получения груза
          </div>
          <div className="max-w-[540px] mt-[25px] w-full text-[16px] font-[500]">
            По копиям доверенностей и доверенностям с незаполненными
            обязательными реквизитами отгрузка не производится
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[650px] mt-[60px]">
          {sections.map((section) => (
            <div
              key={section.id}
              onMouseEnter={() => setIsHovered(section.id)}
              className={`cursor-pointer border-t border-[#D5D1E1] duration-700 ${
                isHovered === section.id ? "h-[251px]" : "h-[74px]"
              } overflow-hidden pt-4`}
            >
              <div className="flex justify-between items-center">
                <div className="text-[#202020] font-1440-h3 font-[600]">
                  {section.title}
                </div>
                <div
                  onClick={() => setIsHovered(0)}
                  className={`w-8 h-8 flex justify-center items-center ${
                    isHovered === section.id
                      ? "bg-[#088269] "
                      : "bg-transparent border-[#D5D1E1]"
                  } border  rounded-full transition-all duration-200`}
                >
                  <img
                    className={`w-[14px] h-[14px]`}
                    alt="Toggle"
                    src={isHovered === section.id ? ArrowImg : PlusImg}
                  />
                </div>
              </div>
              <p
                className={`${
                  isHovered === section.id ? "block" : "hidden"
                } opacity-80 text-[#202020] font-1440-t1 mt-[24px] mb-[40px]`}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
