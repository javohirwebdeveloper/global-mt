import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Photo1 from '../../assets/phtoto.png'
import Photo4 from '../../assets/photo-6.png'
import Photo2 from '../../assets/photo-4.png'
import Photo3 from '../../assets/Photo-8.png'
import Photo6 from '../../assets/photo-7.png'
import Photo7 from '../../assets/photo-5.png'
import Photo5 from '../../assets/photo.png'
import { NavLink } from "react-router-dom";

export const Categories = () => {

  useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className="absolute w-[1310px] h-[699px] top-[690px] left-[65px] bg-x-1l-ubo-z">
      <div className="absolute w-[1310px] h-[618px] top-[81px] left-0">
        <div data-aos="fade-right" className="absolute  w-[322px] h-[304px] top-0 left-0">
          <div className="relative w-80 h-[304px] hover:scale-105 cursor-pointer duration-200 rounded-[10px]">
            <div className="absolute w-80 h-[304px] top-0 left-0 rounded-[10px] border border-solid border-[#e5e2ee]">
              <div className="relative h-[220px] -top-px -left-px bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]" />
            </div>
            <img className="absolute w-[207px] h-[190px] top-[15px] left-[57px]" alt="Phtoto" src={Photo1} />
            <div className="absolute w-[248px] h-11 top-60 left-[25px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Дерматологическое оборудование
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="h-[304px] top-[314px] left-0 absolute w-[322px]">
          <div className="relative hover:scale-105 cursor-pointer duration-200 w-80 h-[304px] rounded-[10px]">
            <div className="absolute w-80 h-[304px] top-0 left-0 rounded-[10px] border border-solid border-[#e5e2ee]">
              <div className="relative h-[220px] -top-px -left-px bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]" />
            </div>
            <img
              className="absolute w-[156px] h-[175px] top-[22px] left-[82px] object-cover"
              alt="Photo"
              src={Photo2}
            />
            <div className="absolute w-[248px] h-[22px] top-[251px] left-[25px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Ветеринарное оборудование
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="h-[618px] top-0 left-[330px] absolute w-[322px]">
          <div className="relative hover:scale-105 cursor-pointer duration-200 w-80 h-[618px] rounded-[10px]">
            <div className="absolute w-80 h-[618px] top-0 left-0 rounded-[10px] border border-solid border-[#e5e2ee]">
              <div className="relative h-[534px] -top-px -left-px bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]" />
            </div>
            <img className="absolute w-[174px] h-[488px] top-0 left-[54px]" alt="Photo" src={Photo3} />
            <div className="absolute w-[248px] h-11 top-[554px] left-[25px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Дерматологическое оборудование
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="h-[304px] top-0 left-[660px] absolute w-[322px]">
          <div className="relative hover:scale-105 cursor-pointer duration-200 w-80 h-[304px] rounded-[10px]">
            <div className="absolute w-80 h-[304px] top-0 left-0 rounded-[10px] border border-solid border-[#e5e2ee]">
              <div className="relative h-[220px] -top-px -left-px bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]" />
            </div>
            <img className="absolute w-[170px] h-[201px] top-[19px] left-[76px]" alt="Photo" src={Photo4} />
            <div className="absolute w-[156px] h-11 top-60 left-[26px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Оборудование для анастезиологии
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="h-[304px] top-[314px] left-[660px] absolute w-[322px]">
          <div className="relative hover:scale-105 cursor-pointer duration-200 w-80 h-[304px] rounded-[10px]">
            <div className="absolute w-80 h-[304px] top-0 left-0 rounded-[10px] border border-solid border-[#e5e2ee]">
              <div className="relative h-[220px] -top-px -left-px bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]" />
            </div>
            <img
              className="absolute w-[173px] h-[173px] top-[23px] left-[73px] object-cover"
              alt="Photo"
              src={Photo1}
            />
            <div className="absolute w-[184px] h-11 top-60 left-[25px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Оборудование для анастезиологии
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="h-[304px] top-0 left-[990px] absolute w-[322px]">
          <div className="relative hover:scale-105 cursor-pointer duration-200 w-80 h-[304px] rounded-[10px]">
            <div className="absolute w-80 h-[304px] top-0 left-0 rounded-[10px] border border-solid border-[#e5e2ee]">
              <div className="relative h-[220px] -top-px -left-px bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]" />
            </div>
            <img
              className="absolute w-[172px] h-[172px] top-6 left-[75px] object-cover"
              alt="Photo"
              src={Photo6}
            />
            <div className="absolute w-[184px] h-11 top-60 left-[26px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Мебель для медецинских целей
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="h-[304px] top-[314px] left-[990px] absolute w-[322px]">
          <div className="relative hover:scale-105 cursor-pointer duration-200 w-80 h-[304px] rounded-[10px]">
            <div className="absolute w-80 h-[304px] top-0 left-0 rounded-[10px] border border-solid border-[#e5e2ee]">
              <div className="relative h-[220px] -top-px -left-px bg-z-vq-cz-3 rounded-[10px_10px_0px_0px] border border-solid border-[#e5e2ee]" />
            </div>
            <img className="absolute w-[223px] h-[141px] top-[39px] left-12" alt="Photo" src={Photo7} />
            <div className="absolute w-[248px] h-11 top-60 left-[25px] font-1440-t1 font-[number:var(--1440-t1-font-weight)] text-ws-j7-it text-[length:var(--1440-t1-font-size)] tracking-[var(--1440-t1-letter-spacing)] leading-[var(--1440-t1-line-height)] [font-style:var(--1440-t1-font-style)]">
              Дерматологическое оборудование
            </div>
          </div>
        </div>
      </div>
      <NavLink to="/catalog" data-aos="fade-right"  className="duration-200 text-x-1l-ubo-z hover:bg-[#41AB95]  cursor-pointer box-border inline-flex gap-2.5 px-[30px] py-[11px] absolute top-0 left-[1150px] bg-tx-u7vg items-center justify-center rounded-[50px]">
        <div className="relative w-fit mt-[-1.00px] font-1440-l1 font-[number:var(--1440-l1-font-weight)]  text-[length:var(--1440-l1-font-size)] tracking-[var(--1440-l1-letter-spacing)] leading-[var(--1440-l1-line-height)] [font-style:var(--1440-l1-font-style)]">
          Все категории
        </div>
      </NavLink>
      <div data-aos="fade-right" className="absolute h-9 -top-px left-0 font-1440-h2 font-[number:var(--1440-h2-font-weight)] text-ws-j7-it text-[length:var(--1440-h2-font-size)] tracking-[var(--1440-h2-letter-spacing)] leading-[var(--1440-h2-line-height)] whitespace-nowrap [font-style:var(--1440-h2-font-style)]">
        Популярные категории
      </div>
    </div>
  );
};