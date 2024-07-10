import React, { useState } from "react";
import CrossImg from "../../assets/20--cross.svg";
import { Button } from "@mui/material";
const EditPayerDataModal = ({ currentData, onSave, onClose }) => {
  const [newData, setNewData] = useState(currentData);

  const handleSave = () => {
    localStorage.setItem("payerData", JSON.stringify(newData));
    onSave();
  };

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="modal xl:w-[500px] py-[20px] xl:px-25px px-[20px] xl:h-[645px] md:w-[358px] md:h-[635px] rounded-[10px]  w-[345px] h-[575px] bg-white ">
        <div className="flex w-full justify-between">
          <h2 className="font-[600] xl:text-[18px] text-[16px] ">
            Персональные данные
          </h2>
          <img
            src={CrossImg}
            onClick={onClose}
            className="cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex flex-col xl:mt-[40px] mt-[30px] xl:gap-[25px] md:gap-[30px] gap-[20px] w-full">
          <input
            type="text"
            className="w-full xl:text-[14px] text-[12px] pb-[11px] border-b border-[#D7D6DB] outline-none"
            name="firstName"
            value={newData.firstName}
            onChange={handleChange}
            placeholder="Имя*"
          />
          <input
            type="text"
            className="w-full xl:text-[14px] text-[12px] pb-[11px] border-b border-[#D7D6DB] outline-none"
            name="lastName"
            value={newData.lastName}
            onChange={handleChange}
            placeholder="Фамилия*"
          />
        </div>
        <div>
          <h2 className="xl:text-[18px] text-[16px] font-[600] xl:mt-[40px] mt-[30px]">
            Социальные сети
          </h2>
          <div className="flex flex-col xl:mt-[40px] mt-[30px] xl:gap-[25px] md:gap-[30px] gap-[20px] w-full">
            <input
              type="text"
              name="vk"
              value={newData.vk}
              onChange={handleChange}
              className="w-full xl:text-[14px] text-[12px] pb-[11px] border-b border-[#D7D6DB] outline-none"
              placeholder="Вконтакте"
            />
            <input
              type="text"
              name="insta"
              value={newData.insta}
              onChange={handleChange}
              className="w-full xl:text-[14px] text-[12px] pb-[11px] border-b border-[#D7D6DB] outline-none"
              placeholder="Instagram"
            />
            <input
              type="text"
              name="face"
              value={newData.face}
              onChange={handleChange}
              className="w-full xl:text-[14px] text-[12px] pb-[11px] border-b border-[#D7D6DB] outline-none"
              placeholder="Facebook"
            />
            <input
              type="text"
              name="ok"
              value={newData.ok}
              onChange={handleChange}
              className="w-full xl:text-[14px] text-[12px] pb-[11px] border-b border-[#D7D6DB] outline-none"
              placeholder="Одноклассники"
            />
            <input
              type="text"
              name="twit"
              value={newData.twit}
              onChange={handleChange}
              className="w-full xl:text-[14px] text-[12px] pb-[11px] border-b border-[#D7D6DB] outline-none"
              placeholder="Твиттер"
            />
          </div>
        </div>

        <div className=" xl:mt-[40px] mt-[30px] xl:flex-row flex flex-col gap-[15px] ">
          <Button
            className="self-stretch h-[41px]"
            disableElevation
            variant="contained"
            onClick={handleSave}
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
            Добавить
          </Button>
          <div className="xl:text-[12px] text-[10px] max-w-[285px] w-full">
            Нажимая «Добавить», я соглашаюсь c обработкой персональных данных на
            условиях{" "}
            <span className="text-[#088269]">Политики конфиденциальности.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPayerDataModal;
