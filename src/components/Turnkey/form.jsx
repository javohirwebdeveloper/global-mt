import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const TurnkeyForm = () => {
  return (
    <div
      className={`max-w-[1440px] xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto w-full flex flex-row items-start justify-start leading-[normal] tracking-[normal]`}
    >
      <section className="flex-1 rounded-3xs bg-[white] box-border flex flex-row flex-wrap items-start justify-start py-[18px] xl:pl-[40px] xl:pr-[99px] pr-6 pl-5 gap-[80px] pt-[40px] max-w-full text-left text-xl text-[#202020] font-t2 border-[1px] border-solid border-[#E5E2EE] mq450:gap-[40px]">
        <div className="h-[129px] w-[728px] relative rounded-3xs bg-[white] box-border hidden max-w-full border-[1px] border-solid border-[#E5E2EE]" />
        <h2 className="m-0 xl:text-[32px] xl:max-w-[406px] w-full max-w-[269px] relative text-inherit leading-[120%] font-medium font-inherit flex items-center shrink-0 z-[1] mq450:text-[16px] mq450:leading-[19px]">
          Закажите у нас комплеское оснащение
        </h2>
        <div className="flex-1 flex flex-col items-end justify-start xl:gap-[40px] gap-[20px] min-w-[216px] max-w-full text-3xs text-slategray">
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-[27px] font-t2 text-[12px] text-slategray"
            placeholder="Ваш телефон"
            variant="standard"
            sx={{
              "& .MuiInputBase-root": { height: "27px", fontSize: "12px" },
              "& .MuiInputBase-input": { color: "#7a7687" },
            }}
          />
          <div className="self-stretch flex flex-row items-start justify-start gap-[19px] mq450:flex-wrap">
            <Button
              className="h-[33px] w-[94px] z-[1]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#f8f7f3",
                fontSize: "12",
                background: "#088269",
                borderRadius: "50px",
                "&:hover": { background: "#088269" },
                width: 94,
                height: 33,
              }}
            >
              Заказать
            </Button>
            <div className="max-w-[406px] text-[#7A7687] w-full xl:text-[12px] flex-1 relative font-medium inline-block min-w-[143px] z-[1]">
              <span>{`Нажимая «Заказать», я соглашаюсь c обработкой персональных данных на условиях `}</span>
              <span className="text-teal text-color1">
                Политики конфиденциальности
              </span>
              <span>.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TurnkeyForm;
