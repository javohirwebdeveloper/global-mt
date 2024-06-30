import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import markerIcon from "../../assets/marker.svg";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
export const Form = ({ className = "" }) => {
  const mapState = {
    center: [41.311151, 69.279737],
    zoom: 13,
  };

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

      <div className="flex-1 flex flex-row items-start justify-start gap-[10px] w-[650px] h-[612px] mq1350:flex-wrap">
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
              sx={{
                "& .MuiInputBase-root": { height: "31px", fontSize: "14px" },
                "& .MuiInputBase-input": { color: "#7a7687" },
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-[31px] font-t2 text-sm text-color3 z-[1]"
              placeholder="Ваш телефон"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "31px", fontSize: "14px" },
                "& .MuiInputBase-input": { color: "#7a7687" },
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-[31px] font-t2 text-sm text-color3 z-[1]"
              placeholder="Ваш email"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "31px", fontSize: "14px" },
                "& .MuiInputBase-input": { color: "#7a7687" },
              }}
            />
            <textarea
              className="[border:none] bg-[transparent] h-[116px] w-auto [outline:none] self-stretch flex flex-col items-start justify-start font-t2 text-sm text-color3 z-[1]"
              placeholder="Ваш вопрос"
              rows={6}
              cols={29}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-xs text-color3 mq800:flex-wrap">
            <Button
              className="h-[41px] w-[134px] z-[1]"
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
      </div>
    </div>
  );
};