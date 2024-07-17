import React, { useState, useEffect } from "react";
import DownImage from "../../assets/right1x.svg";
import { RxCross2 } from "react-icons/rx";
import { Modal, Button, TextField } from "@mui/material";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  organizationType: Yup.string().required("Тип организации обязателен"),
  inn: Yup.string()
    .required("ИНН обязателен")
    .matches(/^\d+$/, "ИНН должен содержать только цифры"),
  companyName: Yup.string().required("Название компании обязательно"),
  address: Yup.string().required("Адрес доставки обязателен"),
  website: Yup.string()
    .url("Введите корректный URL")
    .required("Сайт обязателен"),
  email: Yup.string()
    .email("Введите корректный email")
    .required("Email обязателен"),
  position: Yup.string().required("Должность обязательна"),
});

const EditPayerDataModal2 = ({ open, onClose, onSave }) => {
  const [initialValues, setInitialValues] = useState({
    organizationType: "",
    inn: "",
    companyName: "",
    address: "",
    website: "",
    email: "",
    position: "",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("payerData2")) || {};
    setInitialValues(storedData);
  }, [open]);

  const handleSubmit = (values, { setSubmitting }) => {
    localStorage.setItem("payerData2", JSON.stringify(values));
    onSave(values);
    onClose();
    setSubmitting(false);
  };

  return (
    <Modal open={open} onClose={onClose} className="w-full">
      <div
        className={`flex justify-center items-center w-full mx-auto h-full leading-[normal] tracking-[normal]`}
      >
        <section className="flex-1 xl:max-w-[500px] md:max-w-[358px] max-w-[345px] w-full rounded-[10px] bg-white box-border flex flex-col items-start justify-start pt-[18px] px-6 pb-[23px] gap-[40px] text-left text-lg text-gray font-t2 border-[1px] border-solid border-[#7A7687]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative font-semibold">Добавление плательщика</div>
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="m-0 self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
                <FormControl
                  className="self-stretch h-8 font-t2 text-sm text-gray"
                  variant="standard"
                  error={touched.organizationType && errors.organizationType}
                >
                  <InputLabel color="primary">Тип организации</InputLabel>
                  <Field
                    as={Select}
                    name="organizationType"
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img src={DownImage} className="rotate-90" alt="down" />
                    )}
                  >
                    <MenuItem value="">Выберите тип организации</MenuItem>
                    <MenuItem value="Юридическое лицо">
                      Юридическое лицо
                    </MenuItem>
                  </Field>
                  {touched.organizationType && errors.organizationType && (
                    <FormHelperText>{errors.organizationType}</FormHelperText>
                  )}
                </FormControl>

                <Field
                  as={TextField}
                  name="inn"
                  placeholder="ИНН*"
                  variant="standard"
                  fullWidth
                  error={touched.inn && errors.inn}
                  helperText={touched.inn && errors.inn}
                />

                <Field
                  as={TextField}
                  name="companyName"
                  placeholder="Название*"
                  variant="standard"
                  fullWidth
                  error={touched.companyName && errors.companyName}
                  helperText={touched.companyName && errors.companyName}
                />

                <Field
                  as={TextField}
                  name="address"
                  placeholder="Адрес доставки*"
                  variant="standard"
                  fullWidth
                  error={touched.address && errors.address}
                  helperText={touched.address && errors.address}
                />

                <Field
                  as={TextField}
                  name="website"
                  placeholder="Сайт*"
                  variant="standard"
                  fullWidth
                  error={touched.website && errors.website}
                  helperText={touched.website && errors.website}
                />

                <Field
                  as={TextField}
                  name="email"
                  placeholder="Контактный Email*"
                  variant="standard"
                  fullWidth
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                />

                <Field
                  as={TextField}
                  name="position"
                  placeholder="Должность*"
                  variant="standard"
                  fullWidth
                  error={touched.position && errors.position}
                  helperText={touched.position && errors.position}
                />

                <div className="w-[427px] flex flex-row items-start justify-start gap-[15px] max-w-full mq454:flex-wrap">
                  <div className="w-[127px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
                    <Button
                      type="submit"
                      className="self-stretch h-[41px]"
                      disableElevation
                      variant="contained"
                      disabled={isSubmitting}
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
                  </div>
                  <div className="relative text-xs font-medium font-t2 text-left">
                    <p className="m-0">
                      <span className="text-slategray !text-[#7A7687]">
                        Нажимая «Добавить», я соглашаюсь c обработкой
                        персональных данных на условиях
                      </span>
                      <span className="text-gray">{` `}</span>
                    </p>
                    <p className="m-0">
                      <span className="text-teal text-[#088269]">
                        Политики конфиденциальности
                      </span>
                      <span className="text-slategray">.</span>
                    </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </Modal>
  );
};

EditPayerDataModal2.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditPayerDataModal2;
