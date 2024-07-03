import React, { useState } from "react";
import { Button } from "@mui/material";
import CameraImg from "../../assets/Profile/camera.svg";
import CrossImg from "../../assets/20--cross.svg";

const Root3 = ({ className = "", onCancel, onImageSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div
      className={`max-w-[500px] w-full rounded-3xs bg-color box-border overflow-hidden flex flex-col items-end justify-start pt-[18px] px-6 pb-[23px] gap-[49px] leading-[normal] tracking-[normal] border-[1px] border-solid border-color1 ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-lg text-[#202020] font-l2 mq450:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
          <a className="[text-decoration:none] w-[343px] relative font-semibold text-[inherit] inline-block shrink-0 max-w-[calc(100%_-_40px)]">
            Выбор изображения профиля
          </a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-5 h-5 cursor-pointer relative overflow-hidden shrink-0"
              loading="lazy"
              onClick={onCancel}
              alt=""
              src={CrossImg}
            />
          </div>
        </div>
        <div className="self-stretch rounded-3xs flex flex-col items-center justify-center py-[75px] px-5 text-sm text-[#7A7687] border-[1px] border-dashed border-[#E5E2EE]">
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <div className="relative">Перетащите фотографию сюда, или</div>
            <label>
              <div className="flex flex-row items-start justify-start gap-[5px] text-teal">
                <img
                  className="h-5 w-5 cursor-pointer relative min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src={CameraImg}
                />
                <div className="relative font-semibold inline-block min-w-[106px]">
                  <input type="file" hidden onChange={handleFileChange} />
                  <h2 className="cursor-pointer text-[#088269] text-[14px] font-[600]">
                    Выберите файл
                  </h2>
                </div>
              </div>
            </label>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px">
        <Button
          className="h-[41px] w-[109px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#f8f7f3",
            fontSize: "14",
            background: "#088269",
            borderRadius: "50px",
            "&:hover": { background: "#088269" },
            width: 109,
            height: 41,
          }}
          onClick={onCancel}
        >
          Отменить
        </Button>
      </div>
    </div>
  );
};

export default Root3;
