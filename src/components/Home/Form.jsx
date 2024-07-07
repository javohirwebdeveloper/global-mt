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
    <div className="max-w-[1440px] w-full xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto ">
      <div className="flex flex-col-reverse lg:flex-row gap-3">
        <div className="w-full h-80 lg:h-auto">
          <YMaps apikey="db81466a-d9c7-44dd-9078-c65b363da1c8">
            <Map
              state={mapState}
              width="100%"
              height="100%"
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
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full p-4 lg:p-8 bg-white rounded-lg"
        >
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Остались вопросы?</h1>
            <p className="text-gray-700">
              Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
              координаты и наш менеджер перезвонит вам через 10 минут
            </p>
          </div>

          <div className="space-y-4">
            <TextField
              className="w-full"
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
              className="w-full"
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
              className="w-full"
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
              className="w-full"
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

          <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
            <Button
              className="w-full lg:w-auto"
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
            <div className="text-xs text-gray-600">
              <span>
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях
              </span>
              <span className="text-green-500">
                {" "}
                Политики конфиденциальности
              </span>
              <span>.</span>
            </div>
          </div>
        </form>
      </div>
      <Snackbar
        open={submitted}
        message="отправил"
        autoHideDuration={2000}
        onClose={() => setSubmitted(false)}
      />
    </div>
  );
};
