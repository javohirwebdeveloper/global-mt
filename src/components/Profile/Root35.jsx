import React, { useState, useEffect } from "react";
import { Button, Modal, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Root35 = ({ className = "", onSave }) => {
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
    <Modal open={open} onClose={handleClose}>
      <div
        className={`w-full flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-lg text-color3 font-l2 ${className}`}
      >
        <div className="flex-1 rounded-[10px] bg-color box-border overflow-hidden flex flex-col items-start justify-start pt-[18px] px-6 pb-[23px] gap-[30px] max-w-full border-[1px] border-solid border-color1">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="relative font-semibold">Изменить пароль</div>
              <div
                className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0"
                onClick={handleClose}
              >
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/close.svg"
                />
              </div>
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full text-sm text-color2">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
                    <div className="relative inline-block min-w-[114px]">
                      Текущий пароль*
                    </div>
                    <Field
                      as={TextField}
                      variant="outlined"
                      type="password"
                      name="currentPassword"
                      fullWidth
                    />
                    <ErrorMessage
                      name="currentPassword"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
                    <div className="relative inline-block min-w-[100px]">
                      Новый пароль*
                    </div>
                    <Field
                      as={TextField}
                      variant="outlined"
                      type="password"
                      name="newPassword"
                      fullWidth
                    />
                    <ErrorMessage
                      name="newPassword"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
                    <div className="relative">Повторите новый пароль*</div>
                    <Field
                      as={TextField}
                      variant="outlined"
                      type="password"
                      name="confirmPassword"
                      fullWidth
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500"
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
    </Modal>
  );
};

Root35.propTypes = {
  className: PropTypes.string,
  onSave: PropTypes.func.isRequired,
};

export default Root35;
