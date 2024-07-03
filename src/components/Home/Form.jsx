import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import markerIcon from "../../assets/marker.svg";
import { TextField, Button, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Обязательно для заполнения"),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Неверный формат номера")
    .required("Обязательно для заполнения"),
  email: Yup.string()
    .email("Неверный формат email")
    .required("Обязательно для заполнения"),
  question: Yup.string().required("Обязательно для заполнения"),
});

export const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const mapState = {
    center: [41.311151, 69.279737],
    zoom: 13,
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      question: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setSubmitted(true);
      resetForm();
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    },
  });

  return (
    <div className="mt-[150px] space-x-[10px] mx-auto flex h-[612px] pl-[65px]">
      <YMaps apikey="db81466a-d9c7-44dd-9078-c65b363da1c8">
        <Map
          state={mapState}
          width="650px"
          height="612px"
          options={{
            suppressMapOpenBlock: true,
          }}
        >
          <Placemark
            geometry={[41.311151, 69.279737]}
            options={{
              iconLayout: "default#image",
              iconImageHref: markerIcon,
              iconImageSize: [42, 42],
            }}
          />
        </Map>
      </YMaps>

      <form
        onSubmit={formik.handleSubmit}
        className="flex-1 flex flex-row items-start justify-start gap-[10px] w-[650px] h-[612px] mq1350:flex-wrap"
      >
        <div className="flex-[0.8769] flex flex-col items-start justify-start p-10 box-border relative gap-[40px] min-w-[422px] max-w-full mq800:gap-[20px] mq800:pt-[26px] mq800:pb-[26px] mq800:box-border mq800:min-w-full mq1350:flex-1">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-color6 box-border border-[1px] border-solid border-color7" />
          <div className="w-[417px] flex flex-col items-start justify-start gap-[25px] max-w-full">
            <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit z-[1] mq450:text-lg mq450:leading-[22px] mq800:text-5xl mq800:leading-[29px]">
              Остались вопросы?
            </h1>
            <div className="self-stretch relative text-base leading-[140%] font-medium text-color3 z-[1]">
              Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
              координаты и наш менеджер перезвонит вам через 10 минут
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-[31px] font-t2 text-sm text-color3 z-[1]"
              placeholder="Ваше имя"
              variant="standard"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{
                "& .MuiInputBase-root": { height: "31px", fontSize: "14px" },
                "& .MuiInputBase-input": { color: "#7a7687" },
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-[31px] font-t2 text-sm text-color3 z-[1]"
              placeholder="Ваш телефон"
              variant="standard"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              sx={{
                "& .MuiInputBase-root": { height: "31px", fontSize: "14px" },
                "& .MuiInputBase-input": { color: "#7a7687" },
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-[31px] font-t2 text-sm text-color3 z-[1]"
              placeholder="Ваш email"
              variant="standard"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{
                "& .MuiInputBase-root": { height: "31px", fontSize: "14px" },
                "& .MuiInputBase-input": { color: "#7a7687" },
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] max-h-[60px_!important] w-auto [outline:none] flex flex-col items-start justify-start font-t2 text-sm text-color3 "
              placeholder="Ваш вопрос"
              variant="standard"
              name="question"
              value={formik.values.question}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.question && Boolean(formik.errors.question)}
              helperText={formik.touched.question && formik.errors.question}
              multiline
              rows={6}
              sx={{
                "& .MuiInputBase-input": { color: "#7a7687" },
              }}
            />
          </div>
          <div className="self-stretch flex mt-[76px] flex-row items-start justify-start gap-[30px] max-w-full text-xs text-color3 mq800:flex-wrap">
            <Button
              className="h-[41px] w-[134px]"
              type="submit"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#f8f7f3",
                fontSize: "14",
                background: "#088269",
                borderRadius: "50px",
                "&:hover": { background: "#088269" },
                width: 134,
                height: 41,
              }}
            >
              Отправить
            </Button>
            <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[264px] max-w-full">
              <div className="self-stretch relative font-medium z-[1]">
                <span>
                  Нажимая «Отправить», я соглашаюсь c обработкой персональных
                  данных на условиях
                </span>
                <span className="text-color5">{` `}</span>
                <span className="text-color1">Политики конфиденциальности</span>
                <span>.</span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Snackbar
        open={submitted}
        message="отправил"
        autoHideDuration={2000}
        onClose={() => setSubmitted(false)}
      />
    </div>
  );
};
