import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import CrossImg from "../../assets/20--cross.svg";
const Root4 = ({
  className = "",
  imageSrc,
  croppedImage,
  onCancel,
  onApply,
}) => {
  const cropperRef = useRef(null);

  const handleCrop = () => {
    const croppedImageData = cropperRef.current.cropper
      .getCroppedCanvas()
      .toDataURL();
    onApply(croppedImageData);
  };

  return (
    <div
      className={`max-w-[500px] w-full rounded-[10px] bg-color box-border overflow-hidden flex flex-col items-end justify-start pt-[18px] px-6 pb-[23px] gap-[40px] leading-[normal] tracking-[normal] text-left text-lg text-[#202020] font-h3 border-[1px] border-solid border-color1 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <a className="[text-decoration:none] relative font-semibold text-[inherit]">
          Редактирование фотографии профиля
        </a>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <img
            className="w-5 h-5 cursor-pointer relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            onClick={onCancel}
            src={CrossImg}
          />
        </div>
      </div>
      <div className="self-stretch h-[450px] relative">
        <Cropper
          src={imageSrc}
          style={{ height: 450, width: 450 }}
          aspectRatio={1 / 1}
          guides={false}
          cropBoxMovable={true}
          cropBoxResizable={true}
          ref={cropperRef}
          viewMode={2}
          dragMode="move"
          initialAspectRatio={1}
          autoCropArea={1}
          checkOrientation={false}
        />
      </div>
      <div className="w-[277px] flex flex-row items-start justify-start gap-[10px]">
        <Button
          className="h-[41px] w-[129px]"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#088269",
            fontSize: "14",
            borderColor: "#d5d1e1",
            borderRadius: "50px",
            "&:hover": { borderColor: "#d5d1e1" },
            width: 129,
            height: 41,
          }}
          onClick={onCancel}
        >
          Отменить
        </Button>
        <Button
          className="h-[41px] flex-1"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#f8f7f3",
            fontSize: "14",
            background: "#088269",
            borderRadius: "50px",
            "&:hover": { background: "#088269" },
            height: 41,
          }}
          onClick={handleCrop}
        >
          Применить
        </Button>
      </div>
    </div>
  );
};

export default Root4;
