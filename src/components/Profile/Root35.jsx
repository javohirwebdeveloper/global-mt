import React, { useState, useEffect } from "react";
import { Button, Modal, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Root35 = ({ className = "", onSave, onClose }) => {
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .required("Текущий пароль обязателен.")
      .oneOf([user.password], "Текущий пароль введен неверно."),
    newPassword: Yup.string()
      .required("Новый пароль обязателен.")
      .min(6, "Новый пароль должен содержать не менее 6 символов."),
    confirmPassword: Yup.string()
      .required("Подтверждение пароля обязательно.")
      .oneOf([Yup.ref("newPassword"), null], "Пароли не совпадают."),
  });

  const handleSubmit = (values, { resetForm }) => {
    user.password = values.newPassword;
    localStorage.setItem("user", JSON.stringify(user));
    onSave();
    handleClose();
    resetForm();
  };

  return (
    <div className="w-full fixed h-full flex justify-center items-center">
      <div
        className={`xl:max-w-[500px] md:max-w-[358px] max-w-[345px]  w-full flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-lg text-[#202020] font-l2 `}
      >
        <div className="flex-1 rounded-[10px] bg-white box-border   overflow-hidden flex flex-col items-start justify-start xl:px-[25px] px-[20px] py-[20px] gap-[30px] max-w-full border-[1px] border-solid border-[#E5E2EE]">
          <div className="self-stretch flex flex-row items-start justify-start box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="relative font-semibold">Изменить пароль</div>
              <div
                className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0"
                onClick={onClose}
              >
                <RxCross2
                  onClick={onClose}
                  className="cursor-pointer hover:text-[#07745E]"
                />
              </div>
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, handleBlur, handleChange, errors, touched }) => (
              <Form className="self-stretch flex flex-col items-start justify-start xl:gap-[25px] gap-[15px] max-w-full text-sm text-color2">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
                    <input
                      placeholder="Текущий пароль"
                      className="bg-[transparent] w-full xl:text-[14px] text-[12px] xl:pb-[11px] pb-[10px] outline-none text-[#7A7687] border-b"
                      type="password"
                      name="currentPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="currentPassword"
                      component="div"
                      className="text-red-500 text-[10px]"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
                    <input
                      className="bg-[transparent] w-full xl:text-[14px] text-[12px] xl:pb-[11px] pb-[10px] outline-none text-[#7A7687] border-b"
                      placeholder="Новый пароль*"
                      variant="outlined"
                      type="password"
                      name="newPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="newPassword"
                      component="div"
                      className="text-red-500 text-[10px]"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
                    <input
                      className="bg-[transparent] w-full xl:text-[14px] text-[12px] xl:pb-[11px] pb-[10px] outline-none text-[#7A7687] border-b"
                      variant="outlined"
                      type="password"
                      placeholder="Подтвердите пароль*"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-[10px]"
                    />
                  </div>
                </div>
                <Button
                  className="self-stretch h-[41px] mq400:pl-5 mq400:pr-5 mq400:box-border"
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
                  type="submit"
                  disabled={isSubmitting}
                >
                  Сохранить
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

Root35.propTypes = {
  className: PropTypes.string,
  onSave: PropTypes.func.isRequired,
};

export default Root35;
