import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import EditImg from "../assets/Profile/edit.svg";
import EditImg2 from "../assets/Profile/edit2.svg";
import Vector from "../assets/Profile/Vector.svg";
import Vector5 from "../assets/Profile/Vector5.svg";
import DownImage from "../assets/right1x.svg";
import Root4 from "../components/Profile/Root4";
import Root3 from "../components/Profile/Root3";
import Vector2 from "../assets/Profile/Vector2.svg";
import { Button } from "@mui/material";
import Vector3 from "../assets/Profile/Vector3.svg";
import Vector4 from "../assets/Profile/Vector4.svg";
import EditPhoneModal from "../components/Profile/EditPhoneModal";
import EditEmailModal from "../components/Profile/EditEmailModal";
import EditPayerDataModal from "../components/Profile/EditPayerDataModal";
import { Modal } from "@mui/material";
import Root35 from "../components/Profile/Root35";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.10)",
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
const Profile = () => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const { isAuthenticated, email, logout } = useContext(AuthContext);
  const [editMenuVisible, setEditMenuVisible] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPayerDataModalOpen, setIsPayerDataModalOpen] = useState(false);
  const [IsEditModalOpen, setIsEditModalOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const [payerData, setPayerData] = useState({
    firstName: "",
    lastName: "",
    vk: "",
  });
  const saveddPayerData = JSON.parse(localStorage.getItem("payerData"));

  const savedPhoneNumber = localStorage.getItem("phoneNumber");
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }

    const savedPayerData = JSON.parse(localStorage.getItem("payerData"));
    if (savedPayerData) {
      setPayerData(savedPayerData);
    }
  }, []);
  const handleImageSelect = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
      setIsSelecting(false);
      setIsEditing(true);
    };
    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsSelecting(false);
    setSelectedImage(null);
    setCroppedImage(null);
  };

  const handleApply = (croppedImageData) => {
    localStorage.setItem("profileImage", croppedImageData);
    setProfileImage(croppedImageData);
    setCroppedImage(croppedImageData);
    setIsEditing(false);
  };

  const handleDeleteProfilePicture = () => {
    localStorage.removeItem("profileImage");
    setProfileImage(null);
  };

  const getUserInitial = (email) => {
    return email ? email.charAt(0).toUpperCase() : "";
  };

  const getFirstAndLastName = (email) => {
    if (email) {
      const parts = email.split("@")[0].split(".");
      return {
        firstName: parts[0] ? capitalize(parts[0]) : "",
        lastName: parts[1] ? capitalize(parts[1]) : "",
      };
    }
    return { firstName: "", lastName: "" };
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const handlePhoneEdit = () => {
    setIsPhoneModalOpen(true);
  };

  const handleEmailEdit = () => {
    setIsEmailModalOpen(true);
  };

  const handlePayerDataEdit = () => {
    setIsPayerDataModalOpen(true);
  };

  const handlePhoneSave = () => {
    setIsPhoneModalOpen(false);
  };

  const handleEmailSave = () => {
    setIsEmailModalOpen(false);
  };

  const handlePayerDataSave = () => {
    setIsPayerDataModalOpen(false);
  };

  const { firstName, lastName } = getFirstAndLastName(user.email);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const handlePasswordEdit = () => {
    setIsPasswordModalOpen(true);
  };

  const handlePasswordSave = () => {
    setIsPasswordModalOpen(false);
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto w-full relative bg-color overflow-hidden flex flex-col items-start justify-start  xl:px-[65px] sm:px-[20px] px-[15px] xl:mt-[99px] md:mt-[50px] mt-[20px]  box-border gap-[150px] leading-[normal] tracking-[normal] text-left text-sm text-color5 font-l1 mq750:gap-[75px] mq750:pl-8 mq750:pr-8 mq750:box-border mq1050:h-auto mq450:gap-[37px]">
        <div className="w-[848px] flex flex-col items-start justify-start gap-[100px] shrink-0 max-w-full mq1050:gap-[50px] mq450:gap-[25px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-[80px] text-color8 mq1050:flex-wrap">
            {profileImage ? (
              <div className=" relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-full  w-[210px] h-[210px] mq1050:w-[150px] mq1050:h-[150px] mq450:w-[100px] mq450:h-[100px] "
                />
                <div
                  onMouseEnter={() => setEditMenuVisible(true)}
                  onMouseLeave={() => setEditMenuVisible(false)}
                  className="flex absolute flex-col items-center justify-center w-full bottom-3"
                >
                  <div className="h-8 w-8 relative cursor-pointer rounded-31xl bg-[#07745E] flex flex-col items-center box-border justify-center pt-1  z-[2]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src={EditImg}
                    />
                    <div
                      className={`${
                        editMenuVisible ? "flex" : "hidden"
                      } flex-row absolute  top-8 items-start z-40 bg-white justify-end py-0 text-xs text-[#202020]`}
                    >
                      <div className="rounded-[5px] bg-white overflow-hidden flex flex-col items-start justify-start py-2 px-[11px] z-[2] border-[1px] border-solid border-[#E5E2EE]">
                        <div
                          className="w-full h-[20px] hover:bg-[#E5E2EE] cursor-pointer relative inline-block min-w-[87px]"
                          onClick={() => setIsSelecting(true)}
                        >
                          Редактировать
                        </div>
                        <div
                          className="relative h-[20px] w-full hover:bg-[#E5E2EE] cursor-pointer text-firebrick text-[#C13515] inline-block min-w-[78px]"
                          onClick={handleDeleteProfilePicture}
                        >
                          Удалить фото
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-[210px] flex flex-col items-end justify-start min-w-[210px] mq1050:flex-1">
                <div
                  className={` self-stretch w-[210px] h-[210px] rounded-481xl bg-[#E1EFE6] rounded-[50%] flex flex-col items-center justify-start pt-[61px] pb-2.5 pr-5 pl-[21px] gap-[19px]`}
                >
                  <h1 className="m-0 relative text-inherit leading-[110%] font-medium font-inherit inline-block z-[1] mq1050:text-[40px] mq1050:leading-[53px] mq450:text-5xl mq450:leading-[35px]">
                    {getUserInitial(email)}
                  </h1>

                  <div
                    onMouseEnter={() => setEditMenuVisible(true)}
                    onMouseLeave={() => setEditMenuVisible(false)}
                    className="flex flex-col items-center justify-start"
                  >
                    <div className="h-8 w-8 cursor-pointer rounded-31xl bg-[#07745E] flex flex-col items-center box-border justify-center pt-1  z-[2]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={EditImg}
                      />
                    </div>
                    <div
                      className={`${
                        editMenuVisible ? "flex" : "hidden"
                      } flex-row items-start z-40 bg-white justify-end py-0 text-xs text-[#202020]`}
                    >
                      <div className="rounded-[5px] bg-white overflow-hidden flex flex-col items-start justify-start py-2 px-[11px] z-[2] border-[1px] border-solid border-[#E5E2EE]">
                        <div
                          className="w-full h-[20px] hover:bg-[#E5E2EE] cursor-pointer relative inline-block min-w-[87px]"
                          onClick={() => setIsSelecting(true)}
                        >
                          Редактировать
                        </div>
                        <div
                          className="relative h-[20px] w-full hover:bg-[#E5E2EE] cursor-pointer text-firebrick text-[#C13515] inline-block min-w-[78px]"
                          onClick={handleDeleteProfilePicture}
                        >
                          Удалить фото
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="w-[518px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border min-w-[518px] max-w-full text-11xl text-[#202020] mq750:min-w-full mq1050:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[74px] max-w-full mq750:gap-[37px] mq450:gap-[18px]">
                <div className="flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
                  <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
                    <div className="flex flex-row items-start justify-start gap-[9px] max-w-full mq750:flex-wrap">
                      <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit mq1050:text-5xl mq1050:leading-[29px] mq450:text-lg mq450:leading-[22px]">
                        {saveddPayerData.firstName
                          ? saveddPayerData.firstName
                          : "Константин"}
                      </h2>
                      <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq1050:text-5xl mq1050:leading-[29px] mq450:text-lg mq450:leading-[22px]">
                        {saveddPayerData.lastName
                          ? saveddPayerData.lastName
                          : "Константинопольский"}
                      </h2>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[15px]">
                      <NavLink
                        to={payerData.vk ? payerData.vk : "https://vk.com/"}
                      >
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src={Vector}
                        />
                      </NavLink>
                      <NavLink
                        to={
                          payerData.face
                            ? payerData.face
                            : "https://facebook.com/"
                        }
                      >
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src={Vector2}
                        />
                      </NavLink>
                      <NavLink
                        to={
                          payerData.insta
                            ? payerData.insta
                            : "https://www.instagram.com/"
                        }
                      >
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src={Vector3}
                        />
                      </NavLink>
                      <NavLink
                        to={
                          payerData.twit
                            ? payerData.twit
                            : "https://x.com/?lang=ru"
                        }
                      >
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src={Vector4}
                        />
                      </NavLink>
                      <NavLink
                        to={payerData.ok ? payerData.ok : "https://ok.ru/"}
                      >
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src={Vector5}
                        />
                      </NavLink>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="rounded-31xl flex flex-row items-center justify-center py-[9px] px-[19px] whitespace-nowrap text-sm border-[1px] border-solid border-[#D5D1E1]"
                      onClick={handlePayerDataEdit}
                    >
                      <div className="relative font-semibold">
                        Изменить персональную информацию
                      </div>
                    </button>
                    <button
                      className="rounded-31xl flex flex-row items-center justify-center py-[9px] px-[19px] whitespace-nowrap text-sm border-[1px] border-solid border-[#D5D1E1]"
                      onClick={handlePasswordEdit}
                    >
                      <div className="relative font-semibold">
                        Изменить пароль
                      </div>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <div className="flex flex-row items-center justify-start gap-[10px]">
                      <div className="relative leading-[140%] font-medium">
                        {savedPhoneNumber ? savedPhoneNumber : "--"}
                      </div>
                      <img
                        className="h-6 w-6 cursor-pointer relative overflow-hidden shrink-0 min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src={EditImg2}
                        onClick={handlePhoneEdit}
                      />
                    </div>
                    <div className="relative leading-[140%] font-medium text-color5 inline-block min-w-[68px]">
                      Телефон
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <div className="flex flex-row items-center justify-start gap-[10px]">
                      <div className="relative leading-[140%] font-medium inline-block whitespace-nowrap">
                        {user.email}
                      </div>
                      <img
                        className="h-6 w-6 cursor-pointer relative overflow-hidden shrink-0 min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src={EditImg2}
                        onClick={handleEmailEdit}
                      />
                    </div>
                    <div className="relative leading-[140%] font-medium text-color5 inline-block min-w-[41px]">
                      Email
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={isSelecting} onClose={handleCancel}>
          <div className="modal-content w-full h-full flex justify-center items-center">
            <Root3 onCancel={handleCancel} onImageSelect={handleImageSelect} />
          </div>
        </Modal>

        <Modal open={isEditing} onClose={handleCancel}>
          <div className="modal-content flex w-full h-full justify-center items-center">
            <Root4
              imageSrc={selectedImage}
              croppedImage={croppedImage}
              onCancel={handleCancel}
              onApply={handleApply}
            />
          </div>
        </Modal>

        <section
          className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[125px] shrink-0 max-w-full text-left text-lg text-[#202020] font-l1 lg:gap-[62px] mq750:gap-[31px] mq450:gap-[16px]`}
        >
          <div className="relative font-semibold">Данные о плательщике</div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[10px] min-w-[637px] max-w-full mq1050:min-w-full">
            <div className="self-stretch rounded-3xs bg-[white] box-border flex flex-col items-start justify-start py-[23px] px-6 max-w-full border-[1px] border-solid border-[#E5E2EE] mq450:pt-5 mq450:pb-5 mq450:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq1050:gap-[30px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <div className="relative font-semibold">
                      Название компании
                    </div>
                    <div className="relative text-base leading-[140%] font-medium inline-block min-w-[121px]">
                      ИНН 9717039181
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={EditImg2}
                  />
                </div>
                <div className="w-[705px] flex flex-row items-start justify-between gap-[20px] max-w-full text-base text-color5 mq750:flex-wrap">
                  <div className="w-[311px] flex flex-col items-start justify-start gap-[30px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[123px] text-[#7A7687] h-[22px] relative leading-[140%] font-medium flex items-center">
                        Адрес доставки
                      </div>
                      <div className="self-stretch h-[22px] relative leading-[140%] font-medium text-[#202020] flex items-center">
                        Россия, г. Москва, ул. Докукина, 8, стр. 2
                      </div>
                    </div>
                    <div className="w-[93px] flex flex-col items-start justify-start">
                      <div className="w-[39px] text-[#7A7687] h-[22px] relative leading-[140%] font-medium flex items-center">
                        Сайт
                      </div>
                      <div className="self-stretch h-[22px] relative leading-[140%] font-medium text-[#202020] flex items-center">
                        global-mt.ru
                      </div>
                    </div>
                    <div className="w-[95px] flex flex-col items-start justify-start">
                      <div className="w-[41px] text-[#7A7687] h-[22px] relative leading-[140%] font-medium flex items-center">
                        Email
                      </div>
                      <div className="self-stretch h-[22px] relative leading-[140%] font-medium text-[#202020] flex items-center whitespace-nowrap">
                        info@mail.ru
                      </div>
                    </div>
                  </div>
                  <div className="w-[180px] flex flex-col items-start justify-start gap-[30px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[129px] text-[#7A7687] h-[22px] relative leading-[140%] font-medium flex items-center">
                        Ваша должность
                      </div>
                      <div className="self-stretch h-[22px] relative leading-[140%] font-medium text-[#202020] flex items-center">
                        Менеджер по закупкам
                      </div>
                    </div>
                    <div className="w-[149px] flex flex-col items-start justify-start">
                      <div className="w-[132px] text-[#7A7687] h-[22px] relative leading-[140%] font-medium flex items-center">
                        Тип организации
                      </div>
                      <div className="self-stretch h-[22px] relative leading-[140%] font-medium text-[#202020] flex items-center">
                        Юридическое лицо
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[230px] rounded-31xl bg-color1 flex flex-row items-center justify-center py-[11px] px-[19px] box-border text-sm text-color">
              <div className=" flex flex-row items-center justify-center ">
                <div className="h-[19px] relative font-semibold inline-block">
                  Добавить плательщика
                </div>
              </div>
            </div>
          </div>
        </section>

        <Modal
          open={isPhoneModalOpen}
          onClose={() => setIsPhoneModalOpen(false)}
        >
          <div className="modal-content">
            <EditPhoneModal
              currentPhoneNumber={savedPhoneNumber}
              onSave={handlePhoneSave}
            />
          </div>
        </Modal>
        <Modal
          open={isEmailModalOpen}
          onClose={() => setIsEmailModalOpen(false)}
        >
          <div className="modal-content">
            <EditEmailModal currentEmail={email} onSave={handleEmailSave} />
          </div>
        </Modal>
        <Modal
          open={isPasswordModalOpen}
          onClose={() => setIsPasswordModalOpen(false)}
        >
          <div className="modal-content">
            <Root35 onSave={handlePasswordSave} />
          </div>
        </Modal>
        <Modal
          open={isPayerDataModalOpen}
          style={customStyles}
          onClose={() => setIsPayerDataModalOpen(false)}
        >
          <div className="modal-content h-full">
            <EditPayerDataModal
              currentData={payerData}
              style={customStyles}
              onClose={() => setIsPayerDataModalOpen(false)}
              onSave={handlePayerDataSave}
            />
          </div>
        </Modal>
        <div
          className={`w-full flex flex-col items-start justify-start gap-[150px] leading-[normal] tracking-[normal] mq725:gap-[75px] mq450:gap-[37px]`}
        >
          <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[181px] max-w-full text-left text-lg text-[#202020] font-t1 mq725:gap-[90px] mq450:gap-[45px]">
            <div className="relative font-semibold">История заказов</div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[637px] max-w-full text-base text-black mq725:min-w-full">
              <div className="self-stretch rounded-3xs bg-[white] box-border flex flex-col items-end justify-start py-[23px] px-0 gap-[25px] max-w-full border-[1px] border-solid border-color4 mq450:pt-5 mq450:pb-5 mq450:box-border">
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[25px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                    <div className="flex flex-col items-start justify-start gap-[9px] max-w-[calc(100%_-_40px)]">
                      <div className="relative leading-[23px] font-medium z-[1]">
                        Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900
                        000 руб.
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[10px] text-sm text-[#7A7687]">
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[53px] z-[1]">
                            Статус:
                          </a>
                        </div>
                        <div className="rounded-[76px] bg-khaki text-[#855E00] flex flex-row items-start justify-start py-[3px] px-2.5 whitespace-nowrap z-[1] text-darkgoldenrod">
                          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[61px]">
                            В работе
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-5 -rotate-90 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src={DownImage}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative bg-color4 z-[1]" />
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-6 pl-[25px] box-border max-w-full text-[#7A7687]">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq975:flex-wrap">
                    <div className="w-[389px] flex flex-col items-start justify-start gap-[25px] min-w-[389px] max-w-full mq725:min-w-full mq975:flex-1">
                      <div
                        className={`flex flex-row items-start justify-start gap-[40px] max-w-full text-left text-base text-[#202020] font-t1 mq450:flex-wrap mq450:gap-[20px] `}
                      >
                        <img
                          className="h-16 w-16 relative object-cover mix-blend-multiply z-[1]"
                          loading="lazy"
                          alt=""
                          src="/photo@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
                          <div className="relative leading-[140%] font-medium z-[1]">
                            Анализатор мочи MIND UA-66
                          </div>
                        </div>
                      </div>
                      <div
                        className={`flex flex-row items-start justify-start gap-[40px] max-w-full text-left text-base text-[#202020] font-t1 mq450:flex-wrap mq450:gap-[20px] `}
                      >
                        <img
                          className="h-16 w-16 relative object-cover mix-blend-multiply z-[1]"
                          loading="lazy"
                          alt=""
                          src="/photo-1@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
                          <div className="relative leading-[140%] font-medium z-[1]">
                            УЗИ аппарат Chison Qbit5 New Matrix
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[332px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[332px] max-w-full mq975:flex-1">
                      <div className="self-stretch flex flex-col items-end justify-start gap-[66px] max-w-full mq450:gap-[33px]">
                        <div className="w-[212px] flex flex-row items-start justify-between gap-[20px]">
                          <div className="relative leading-[23px] font-medium inline-block min-w-[35px] z-[1]">
                            1 шт.
                          </div>
                          <div className="relative leading-[23px] font-medium text-[#202020] inline-block min-w-[99px] z-[1]">
                            600 000 руб.
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-end justify-start gap-[79px] max-w-full mq450:gap-[39px]">
                          <div className="w-[212px] flex flex-row items-start justify-between gap-[20px]">
                            <div className="relative leading-[23px] font-medium inline-block min-w-[35px] z-[1]">
                              1 шт.
                            </div>
                            <div className="relative leading-[23px] font-medium text-[#202020] inline-block min-w-[98px] z-[1]">
                              300 000 руб.
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full text-lg text-[#202020]">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[55px] max-w-full mq450:flex-wrap mq450:gap-[27px]">
                              <div className="relative font-semibold z-[1]">
                                Товаров на сумму:
                              </div>
                              <div className="relative font-semibold inline-block min-w-[113px] z-[1]">
                                900 000 руб.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-[white] box-border flex flex-row items-start justify-between py-[23px] pr-[26px] pl-6 max-w-full gap-[20px] border-[1px] border-solid border-color4">
                <div className="h-[107px] w-[980px] relative rounded-3xs bg-color3 box-border hidden max-w-full border-[1px] border-solid border-color4" />
                <div className="flex flex-col items-start justify-start gap-[9px] max-w-[calc(100%_-_40px)]">
                  <div className="relative leading-[23px] font-medium z-[1]">
                    Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000
                    руб.
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px] text-sm text-[#7A7687]">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <div className="relative font-semibold inline-block min-w-[53px] z-[1]">
                        Статус:
                      </div>
                    </div>
                    <div className="rounded-[60px] bg-honeydew flex flex-row items-start justify-start py-[3px] px-2.5 z-[1] text-color1">
                      <div className="relative font-semibold inline-block min-w-[84px]">
                        Доставлено
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-5 rotate-90 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src={DownImage}
                  />
                </div>
              </div>
            </div>
          </section>
          <footer className="w-[991px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[100px] max-w-full text-left text-lg text-[#202020] font-t1 mq725:gap-[25px] mq1000:gap-[50px]">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq975:flex-wrap">
              <div className="relative font-semibold inline-block min-w-[96px]">
                Настройки
              </div>
              <div className="w-[641px] flex flex-row items-start justify-start gap-[159px] max-w-full mq725:flex-wrap mq725:gap-[79px] mq450:gap-[40px]">
                <div className="flex flex-col items-start justify-start gap-[20px] min-w-[207px] mq725:flex-1">
                  <div className="relative font-semibold">
                    Показывать в профиле:
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[10px] text-base">
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                      <input
                        className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color1"
                        type="checkbox"
                      />
                      <div className="relative leading-[140%] font-medium inline-block min-w-[32px]">
                        Имя
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                      <input
                        className="m-0 h-5 w-5 rounded-10xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-color1"
                        type="checkbox"
                      />
                      <div className="relative leading-[140%] font-medium inline-block min-w-[69px]">
                        Фамилия
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                      <input className="m-0 h-5 w-5 relative" type="checkbox" />
                      <div className="relative leading-[140%] font-medium inline-block min-w-[68px]">
                        Телефон
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                      <input className="m-0 h-5 w-5 relative" type="checkbox" />
                      <div className="relative leading-[140%] font-medium inline-block min-w-[41px]">
                        Email
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[179px]">
                  <div className="relative font-semibold">
                    Получать рассылку по темам:
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-base">
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                      <input className="m-0 h-5 w-5 relative" type="checkbox" />
                      <div className="relative leading-[140%] font-medium inline-block min-w-[118px]">
                        Скидки и акции
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
                      <input className="m-0 h-5 w-5 relative" type="checkbox" />
                      <div className="relative leading-[140%] font-medium">
                        Снизилась цена на избранное
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[863px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <Button
                className="h-[41px] w-[203px]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#f8f7f3",
                  fontSize: "14",
                  background: "#088269",
                  borderRadius: "50px",
                  "&:hover": { background: "#088269" },
                  width: 203,
                  height: 41,
                }}
              >
                Выйти
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Profile;
