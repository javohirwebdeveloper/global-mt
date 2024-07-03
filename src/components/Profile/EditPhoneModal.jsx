import React, { useState } from "react";

import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const EditPhoneModal = ({ currentPhoneNumber, onSave }) => {
  const [newPhoneNumber, setNewPhoneNumber] = useState(currentPhoneNumber);

  const handleSave = () => {
    localStorage.setItem("phoneNumber", newPhoneNumber);
    onSave();
  };
  return (
    <div
      className={`max-w-[500px] w-full rounded-[10px] bg-color box-border overflow-hidden flex flex-col items-start justify-start pt-[18px] px-6 pb-[23px] gap-[125px] leading-[normal] tracking-[normal] border-[1px] border-solid border-color1`}
    >
      <section className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-lg text-color3 font-l1 mq450:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
          <a className="[text-decoration:none] w-[343px] relative font-semibold text-[inherit] inline-block shrink-0 max-w-[calc(100%_-_40px)]">
            Введите номер телефона
          </a>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/20-cross.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-xs">
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-[31px] font-l1 text-sm text-color2"
            placeholder="Ваш телефон*"
            value={newPhoneNumber}
            onChange={(e) => setNewPhoneNumber(e.target.value)}
            variant="standard"
            sx={{
              "& .MuiInputBase-root": { height: "31px", fontSize: "14px" },
              "& .MuiInputBase-input": { color: "#7a7687" },
            }}
          />
          <div className="w-[438px] flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
            <input className="m-0 h-5 w-5 relative" type="checkbox" />
            <div className="flex-1 relative font-medium inline-block min-w-[265px] max-w-full">
              <span>{`Я подтверждаю, что данные введены корректно, и даю свое согласие на обработку моих `}</span>
              <span className="text-teal">персональных данных</span>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start gap-[25px] text-left text-sm text-color2 font-l1">
        <Button
          className="self-stretch h-[41px] mq400:pl-5 mq400:pr-5 mq400:box-border"
          disableElevation
          onClick={handleSave}
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
        >
          Сохранить
        </Button>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px]"></div>
      </section>
    </div>
  );
};

export default EditPhoneModal;
