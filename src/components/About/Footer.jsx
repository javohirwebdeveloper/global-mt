import React from "react";
import MasterCard from "../../assets/mastercard.svg";
import Visa from "../../assets/visa.svg";
import Mir from "../../assets/mir.svg";
import Vk from "../../assets/24--vk.svg";
import Telegram from "../../assets/24--telegram.svg";
import Whatsappimg from "../../assets/24--whatsapp.svg";
import LogoImg from "../../assets/logo1.svg";
import Arrow13 from "../../assets/13--arrow.svg";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className=" xl:mt-[150px] md:mt-[99px] sm:mt-[50px] mt-[40px] w-full h-[636px] left-0 bg-tx-u7vg">
      <div
        className={`max-w-[1440px] xl:px-[65px] sm:px-[20px] px-[15px] bg-color1 overflow-hidden flex flex-col items-start justify-start pt-10 mx-auto pb-5 box-border gap-[60px] leading-[normal] tracking-[normal] text-left text-xs text-[#F8F7F3] font-t3 mq450:gap-[15px] mq800:gap-[30px] mq800:pl-8 mq800:pr-8 mq800:box-border `}
      >
        <section className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-sm text-[#F8F7F3] font-t3 mq1350:flex-wrap">
          <div className="w-[210px] flex flex-col items-start justify-start gap-[15px]">
            <div className="relative font-semibold inline-block min-w-[92px]">
              Покупателям
            </div>
            <div className="self-stretch h-px relative bg-color" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative inline-block min-w-[78px]">
                  О компании
                </div>
                <NavLink
                  to={`/Сертификаты`}
                  className="relative inline-block min-w-[91px]"
                >
                  Сертификаты
                </NavLink>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[64px]">
                  Вакансии
                </a>
                <NavLink
                  to={`/Гарантии`}
                  className="relative inline-block min-w-[62px]"
                >
                  Гарантии
                </NavLink>
                <div className="relative inline-block min-w-[46px]">Услуги</div>
                <NavLink
                  to={`/Акции`}
                  className="relative inline-block min-w-[41px]"
                >
                  Акции
                </NavLink>
                <div className="relative inline-block min-w-[63px]">
                  Доставка
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[49px]">
                  Оплата
                </a>
                <div className="relative inline-block min-w-[55px]">
                  Возврат
                </div>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[26px]">
                  FAQ
                </a>
                <div className="relative inline-block min-w-[48px]">Лизинг</div>
                <div className="relative inline-block min-w-[51px]">Отзывы</div>
                <NavLink
                  to={`/Блог`}
                  className="relative inline-block min-w-[32px]"
                >
                  Блог
                </NavLink>
              </div>
            </div>
          </div>
          <div className="w-[650px] flex flex-col items-start justify-start gap-[15px] max-w-full">
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[56px]">
              Каталог
            </a>
            <div className="self-stretch h-px relative bg-color2" />
            <div className="flex flex-row items-start justify-start gap-[60px] max-w-full mq800:flex-wrap mq800:gap-[30px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative inline-block min-w-[83px]">
                  Реанимация
                </div>
                <div className="relative inline-block min-w-[63px]">
                  Хирургия
                </div>
                <div className="relative inline-block min-w-[107px]">
                  Офтальмология
                </div>
                <div className="relative">Лабораторная диагностика</div>
                <div className="relative">Акушерство и Гинекология</div>
                <div className="relative inline-block min-w-[77px]">
                  Гистология
                </div>
                <div className="relative inline-block min-w-[96px]">
                  Косметология
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative">Орториноларингология</div>
                <div className="relative">Рентгенология и томография</div>
                <div className="relative inline-block min-w-[106px]">
                  Стрерилизация
                </div>
                <div className="relative">Физиотерапия и реабилитация</div>
                <div className="relative">Функциональная диагностика</div>
                <div className="relative inline-block min-w-[82px]">
                  Эндоскопия
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[57px]">
                  Новинки
                </a>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[83px]">
                  Распродажи
                </a>
                <div className="relative inline-block min-w-[129px]">
                  Кабинеты под ключ
                </div>
                <div className="relative inline-block min-w-[110px]">
                  Скачать каталог
                </div>
              </div>
            </div>
          </div>
          <div className="w-[210px] flex flex-col items-start justify-start gap-[15px]">
            <NavLink
              to={`/Контакты`}
              className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[66px]"
            >
              Контакты
            </NavLink>
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch h-px relative bg-color2" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative font-semibold inline-block min-w-[48px]">
                    Адрес:
                  </div>
                  <div className="relative leading-[19.56px]">{`г. Москва, ул. Московская, д. 35 `}</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="relative font-semibold inline-block min-w-[101px]">
                  Карта проезда
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-[13px] h-[13px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={Arrow13}
                  />
                </div>
              </div>
              <div className="relative">
                <p className="m-0">График работы:</p>
                <p className="m-0">{`Пн-Пт с 09:00-19:00, `}</p>
                <p className="m-0">Сб-Вс - выходной</p>
              </div>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative inline-block min-w-[121px] whitespace-nowrap">
                  +7 000-000-00-00
                </div>
                <div className="relative inline-block min-w-[121px] whitespace-nowrap">
                  +7 495-000-00-00
                </div>
                <div className="relative inline-block min-w-[114px]">
                  8 800-000-00-00
                </div>
                <div className="relative inline-block min-w-[81px] whitespace-nowrap">
                  info@mail.ru
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-left text-sm text-[#F8F7F3] font-t3">
          <div className="self-stretch h-px relative bg-color2" />
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[10px] text-xs">
              <img
                className="w-[95.8px] h-[41px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={LogoImg}
              />
              <div className="relative">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="relative font-semibold inline-block min-w-[100px]">
                Мы в соцсетях
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={Vk}
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={Telegram}
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={Whatsappimg}
                />
              </div>
            </div>
            <div className="w-[735px] flex flex-row items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq800:flex-wrap mq800:gap-[50px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative">Партнерская программа</div>
                <div className="relative inline-block min-w-[120px]">
                  Оптовые продажи
                </div>
                <div className="relative inline-block min-w-[71px]">
                  Реквизиты
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[48px] min-w-[305px] max-w-full mq450:flex-wrap mq800:gap-[24px]">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative">Политика конфиденциальности</div>
                  <div className="relative">Условия соглашения</div>
                  <div className="relative inline-block min-w-[80px]">
                    Карта сайта
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[136px]">
                  <div className="relative font-semibold inline-block min-w-[116px]">
                    Способы оплаты
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <img
                      className="h-[30px] w-[49px] relative"
                      loading="lazy"
                      alt=""
                      src={MasterCard}
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <img
                        className="self-stretch h-5 relative max-w-full overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={Visa}
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <img
                        className="self-stretch h-5 relative max-w-full overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={Mir}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap">
          <div className="w-[153px] relative inline-block shrink-0">
            © 2022 Медоборудование Все права защищены
          </div>
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-[#F8F7F3]smoke">
            <div className="relative">
              Информация на данном сайте носит справочный характер и не является
              публичной офертой, определяемой положениями Статьи 437
              Гражданского кодекса Российской Федерации
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
