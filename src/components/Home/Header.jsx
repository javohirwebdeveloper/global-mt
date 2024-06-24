import React from "react";
import Logo from "../../assets/logo.svg"
import DownImage from '../../assets/13--down.svg'
import BurgerImg from '../../assets/17--burger.svg'
export const Header = () => {
  return (
    <header className="absolute w-[1440px] h-[193px] top-0 left-0 bg-x-1l-ubo-z">
      <div className="absolute w-[1440px] h-px top-48 left-0 bg-m-b-3t-zi" />
      <button className="all-[unset] box-border inline-flex gap-2 px-5 py-[11px] absolute top-[141px] left-[1023px] border border-solid border-[#d5d1e1] items-center justify-center rounded-[50px]">
        <div className="mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          +7(495)000-00-00
        </div>
      </button>
      <div className="inline-flex items-center justify-center gap-[3px] absolute top-[152px] left-[938px]">
        <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Москва
        </div>
        <img
          className="relative w-[13px] h-[13px]"
          alt="Element location"
          src="location.svg"
        />
      </div>
      <div className="inline-flex items-center gap-[25px] absolute top-[152px] left-[65px]">
        <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
          <img
            className="relative w-[17px] h-[17px]"
            alt="Element burger"
            src={BurgerImg}
          />
          <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] hover:text-tx-u7vg cursor-pointer duration-200 text-ws-j7-it text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
            Каталог
          </div>
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Производители
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Кабинеты под ключ
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Услуги
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Акции
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Покупателям
        </div>
        <div className="font-1440-l1 hover:text-tx-u7vg cursor-pointer duration-200 font-[number:var(--1440-l1-font-weight)] text-ws-j7-it text-[length:var(--1440-l1-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Контакты
        </div>
      </div>
      <div className="absolute w-[1440px] h-px top-[130px] left-0 bg-m-b-3t-zi" />
      <div className="inline-flex items-end gap-[25px] absolute top-[62px] left-[1094px]">
        <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Element login"
            src="login.svg"
          />
          <div className="relative w-fit font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ML-tw-1j text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Войти
          </div>
        </div>
        <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Element favourites"
            src="favourites.svg"
          />
          <div className="relative w-fit font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ML-tw-1j text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Избранное
          </div>
        </div>
        <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Element comparison"
            src="comparison.svg"
          />
          <div className="relative w-fit font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ML-tw-1j text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Сравнить
          </div>
        </div>
        <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Element basket"
            src="basket.svg"
          />
          <div className="relative w-fit font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ML-tw-1j text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Корзина
          </div>
        </div>
      </div>
      <p className="absolute top-[67px] left-[860px] font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ML-tw-1j text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
        Пн-Пт с 09:00-19:00 <br />
        Сб-Вс - выходной
      </p>
      <div className="absolute w-[616px] h-[41px] top-[63px] left-[211px]">
        <div className="relative w-[614px] h-[41px] bg-hc-0j-in rounded-[50px]">
          <div className="absolute w-[565px] h-[39px] top-px left-px bg-x-1l-ubo-z rounded-[50px]">
            <div className="absolute top-2.5 left-[161px] font-1440-l2 font-[number:var(--1440-l2-font-weight)] text-ML-tw-1j text-[length:var(--1440-l2-font-size)] tracking-[var(--1440-l2-letter-spacing)] leading-[var(--1440-l2-line-height)] [font-style:var(--1440-l2-font-style)]">
              Поиск
            </div>
            <button className="all-[unset] box-border flex-col items-center justify-center gap-2 px-[15px] py-2.5 absolute top-0 left-0 bg-[#efefef] inline-flex rounded-[50px]">
              <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                <div className="relative w-fit font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-ML-tw-1j text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
                  Все категории
                </div>
                <img
                  className="relative w-[13px] h-[13px]"
                  alt="Element down"
                  src={DownImage}
                />
              </div>
            </button>
          </div>
          <img
            className="absolute top-2 left-[576px] w-6 h-6"
            alt="Element search"
            src="search.svg"
          />
        </div>
      </div>
      <img
        className="absolute w-24 h-[41px] top-[63px] left-[65px]"
        alt="Logo"
        src={Logo}
      />
      <div className="absolute w-[1440px] h-px top-9 left-0 bg-m-b-3t-zi" />
      <div className="flex w-[1310px] items-center justify-between absolute top-2.5 left-[65px]">
        <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
          <div className="font-1440-t2 font-[number:var(--1440-t2-font-weight)] hover:text-black duration-200 cursor-pointer text-ML-tw-1j text-[length:var(--1440-t2-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            О компании
          </div>
          <div className="font-1440-t2 font-[number:var(--1440-t2-font-weight)] hover:text-black duration-200 cursor-pointer text-ML-tw-1j text-[length:var(--1440-t2-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Доставка
          </div>
          <div className="font-1440-t2 font-[number:var(--1440-t2-font-weight)] hover:text-black duration-200 cursor-pointer text-ML-tw-1j text-[length:var(--1440-t2-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Оплата
          </div>
          <div className="font-1440-t2 font-[number:var(--1440-t2-font-weight)] hover:text-black duration-200 cursor-pointer text-ML-tw-1j text-[length:var(--1440-t2-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Гарантии
          </div>
          <div className="font-1440-t2 font-[number:var(--1440-t2-font-weight)] hover:text-black duration-200 cursor-pointer text-ML-tw-1j text-[length:var(--1440-t2-font-size)] relative w-fit mt-[-1.00px] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            Блог
          </div>
        </div>
        <div className="inline-flex items-center gap-[45px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ML-tw-1j text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            info@mail.ru
          </div>
          <p className="relative w-fit mt-[-1.00px] font-1440-t2 font-[number:var(--1440-t2-font-weight)] text-ML-tw-1j text-[length:var(--1440-t2-font-size)] tracking-[var(--1440-t2-letter-spacing)] leading-[var(--1440-t2-line-height)] [font-style:var(--1440-t2-font-style)]">
            г. Москва, ул. Московская, д. 35
          </p>
        </div>
      </div>
      <button className="all-[unset] box-border inline-flex gap-2.5 px-[30px] py-[11px] absolute top-[141px] left-[1201px] bg-tx-u7vg items-center justify-center rounded-[50px]">
        <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Заказать звонок
        </div>
      </button>
    </header>
  );
};