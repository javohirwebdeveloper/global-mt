import React from "react";
import { Contacts } from "./Contacts";
import { DivWrapper } from "./DivWrapper";
import { Frame } from "./Frame";
import { FrameWrapper } from "./FrameWrapper";
import { Group } from "./Group";
import { GroupWrapper } from "./GroupWrapper";
import { List } from "./List";
import { ListWrapper } from "./ListWrapper";

export const Footer = () => {
  return (
    <footer className="absolute w-[1440px] h-[636px] top-[7626px] left-0 bg-tx-u7vg">
      <p className="absolute top-[599px] left-[338px] opacity-60 font-1440-t3 font-[number:var(--1440-t3-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-t3-font-size)] tracking-[var(--1440-t3-letter-spacing)] leading-[var(--1440-t3-line-height)] [font-style:var(--1440-t3-font-style)]">
        Информация на данном сайте носит справочный характер и не является публичной офертой, определяемой положениями
        Статьи 437 Гражданского кодекса Российской Федерации
      </p>
      <p className="absolute w-[153px] top-[583px] left-[65px] font-1440-t3 font-[number:var(--1440-t3-font-weight)] text-x-1l-ubo-z text-[length:var(--1440-t3-font-size)] tracking-[var(--1440-t3-letter-spacing)] leading-[var(--1440-t3-line-height)] [font-style:var(--1440-t3-font-style)]">
        © 2022 Медоборудование Все права защищены
      </p>
      <Frame />
      <FrameWrapper />
      <DivWrapper />
      <Group />
      <GroupWrapper />
      <div className="absolute w-[1310px] h-px top-[435px] left-[65px] bg-m-b-3t-zi" />
      <Contacts />
      <List />
      <ListWrapper />
    </footer>
  );
};