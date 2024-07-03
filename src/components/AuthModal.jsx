import React from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import CrossImg from "../assets/20--cross.svg";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.30)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "10px",
    padding: "0",
    border: "none",
  },
};

const AuthModal = ({ isOpen, onRequestClose }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Неверный адрес электронной почты")
        .required("Обязательно"),
      password: Yup.string()
        .min(6, "Пароль должен содержать не менее 6 символов")
        .required("Обязательно"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      window.location.reload();
    },
  });

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={customStyles}
      className="modal-content w-full h-full flex justify-center items-center"
    >
      <div
        className={`max-w-[500px] w-full rounded-[10px] bg-[white] z-50 box-border overflow-hidden flex flex-col items-start justify-start pt-[18px] px-0 pb-0 gap-[30px] leading-[normal] tracking-[normal] text-left text-lg text-[#202020] font-t1`}
      >
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[25px] pb-2.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="relative font-semibold text-[inherit] inline-block min-w-[115px]">
              Регистрация
            </div>
            <div
              className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 cursor-pointer"
              onClick={onRequestClose}
            >
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={CrossImg}
              />
            </div>
          </div>
        </div>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
          <form
            className="m-0 flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full"
            onSubmit={formik.handleSubmit}
          >
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
                    <label
                      htmlFor="email"
                      className=" text-[#7A7687] text-left inline-block min-w-[71px]"
                    ></label>
                    <input
                      id="email"
                      name="email"
                      placeholder="Ваш email*"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className="self-stretch relative outline-none h-[31px] border-b border-[#7A7687] text-[14px] pb-[11px] bg-transparent text-[#7A7687]"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-xs">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
                    <label
                      htmlFor="password"
                      className=" text-left inline-block min-w-[56px]"
                    ></label>
                    <input
                      id="password"
                      name="password"
                      placeholder="Пароль*"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      className="self-stretch relative outline-none h-[31px] border-b border-[#7A7687] text-[14px] pb-[11px] bg-transparent text-[#7A7687]"
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500 text-xs">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <Button
                type="submit"
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
              >
                Регистрация
              </Button>
            </div>
            <div className="w-[335px] flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
              <input
                className="m-0 h-5 w-5 relative rounded-[3px] box-border border-[1px] border-solid border-color5"
                type="checkbox"
                required
              />
              <div className="flex-1 relative text-xs font-medium font-t1 text-left inline-block min-w-[198px]">
                <span className="text-[#7A7687]">
                  Я соглашаюсь c обработкой персональных данных на условиях
                </span>
                <span className="text-[#7A7687]">{` `}</span>
                <span className="text-teal text-[#088269]">
                  Политики конфиденциальности.
                </span>
              </div>
            </div>
          </form>
        </section>
        <div className="self-stretch bg-color2 flex flex-row items-start justify-center py-[17px] px-5 gap-[10px] text-base text-[#7A7687] mq294:flex-wrap">
          <div className="relative leading-[140%] font-medium">
            Вы уже зарегистрированы?
          </div>
          <div
            className="relative leading-[140%] font-medium text-[#07745E] inline-block min-w-[47px] cursor-pointer"
            onClick={onRequestClose}
          >
            Войти
          </div>
        </div>
      </div>
    </Modal>
  );
};



export default AuthModal;
