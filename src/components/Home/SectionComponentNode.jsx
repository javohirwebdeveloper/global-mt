import React from "react";

export const SectionComponentNode = () => {
  return (
    <div className="inline-flex flex-col items-center gap-5 pt-0 pb-[15px] px-0 relative flex-[0_0_auto] rounded-[10px] border border-solid border-[#e5e2ee]">
      <div className="relative w-80 h-[279px]">
        <div className="relative h-[279px]">
          <div className="absolute w-80 h-[279px] top-0 left-0 bg-z-vq-cz-3 border border-solid border-[#e5e2ee]">
            <img
              className="absolute w-[181px] h-[181px] top-[26209px] left-[25356px] object-cover"
              alt="Photo"
              src="photo-5.png"
            />
          </div>
          <div className="inline-flex items-center gap-[153px] absolute top-[15px] left-[15px]">
            <div className="inline-flex items-center justify-center gap-2 px-2.5 py-1 relative flex-[0_0_auto] bg-[#e1efe6] rounded-[60px] border border-solid border-[#088269]">
              <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-[#088269] text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                Новинка
              </div>
            </div>
            <div className="inline-flex items-start gap-2.5 px-0 py-0.5 relative flex-[0_0_auto]">
              <img
                className="mb-[-26193.00px] mr-[-25076.00px] relative w-6 h-6"
                alt="Card icon"
                src="comparison.svg"
              />
              <div className="relative w-6 h-6">
                <img
                  className="absolute top-[26193px] left-[25076px] w-6 h-6"
                  alt="Element favourites"
                  src="favourites.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[30px] pl-[3px] pr-0 py-0 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[277px] mt-[-1.00px] font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-ws-j7-it text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
              Анализатор мочи <br />
              MIND UA-66
            </div>
            <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
              <div className="mt-[-1.00px] font-1440-t3 font-[number:var(--1440-t3-font-weight)] text-ML-tw-1j text-[length:var(--1440-t3-font-size)] relative w-fit tracking-[var(--1440-t3-letter-spacing)] leading-[var(--1440-t3-line-height)] [font-style:var(--1440-t3-font-style)]">
                Артикул: 213134
              </div>
              <div className="relative w-fit font-1440-t3 font-[number:var(--1440-t3-font-weight)] text-ML-tw-1j text-[length:var(--1440-t3-font-size)] tracking-[var(--1440-t3-letter-spacing)] leading-[var(--1440-t3-line-height)] [font-style:var(--1440-t3-font-style)]">
                В наличии
              </div>
            </div>
          </div>
          <div className="relative w-fit font-1440-h3 font-[number:var(--1440-h3-font-weight)] text-ws-j7-it text-[length:var(--1440-h3-font-size)] tracking-[var(--1440-h3-letter-spacing)] leading-[var(--1440-h3-line-height)] [font-style:var(--1440-h3-font-style)]">
            300 000 руб.
          </div>
        </div>
        <button className="all-[unset] box-border items-start gap-2.5 px-20 py-[11px] relative flex-[0_0_auto] border border-solid border-[#d5d1e1] inline-flex rounded-[50px]">
          <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-tx-u7vg text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
            Добавить в корзину
          </div>
        </button>
      </div>
    </div>
  );
};