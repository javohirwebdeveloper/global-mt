import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import EditImg from "../assets/Profile/edit.svg";
import EditImg2 from "../assets/Profile/edit2.svg";
import Vector from "../assets/Profile/Vector.svg";
import Vector5 from "../assets/Profile/Vector5.svg";
import Root4 from "../components/Profile/Root4";
import Root3 from "../components/Profile/Root3";
import Vector2 from "../assets/Profile/Vector2.svg";
import Vector3 from "../assets/Profile/Vector3.svg";
import Vector4 from "../assets/Profile/Vector4.svg";
import { Breadcrumbs, Modal, Typography } from "@mui/material";
import Header1 from "../components/Home/Header";
import EditPhoneModal from "../components/Profile/EditPhoneModal";
import EditEmailModal from "../components/Profile/EditEmailModal";
import EditPayerDataModal from "../components/Profile/EditPayerDataModal";
import { useParams, useLocation, Link } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
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

  return (
    <>
      <Header1 />
      <div className="max-w-[1440px] mx-auto w-full relative bg-color overflow-hidden flex flex-col items-start justify-start px-[65px] box-border gap-[150px] leading-[normal] tracking-[normal] text-left text-sm text-color5 font-l1 mq750:gap-[75px] mq750:pl-8 mq750:pr-8 mq750:box-border mq1050:h-auto mq450:gap-[37px]">
        <div className="w-[848px] flex flex-col items-start justify-start gap-[100px] shrink-0 max-w-full mq1050:gap-[50px] mq450:gap-[25px]">
          <Breadcrumbs aria-label="breadcrumb" sx={{ margin: "20px 0px" }}>
            <Link to="/" className="text-decoration-none text-color-inherit">
              Home
            </Link>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {value}
                </Typography>
              ) : (
                <Link
                  to={to}
                  key={to}
                  className="text-decoration-none text-color-inherit"
                >
                  {value}
                </Link>
              );
            })}
          </Breadcrumbs>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-[80px] text-color8 mq1050:flex-wrap">
            {profileImage ? (
              <div>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-full  w-[210px] h-[210px] mq1050:w-[150px] mq1050:h-[150px] mq450:w-[100px] mq450:h-[100px] "
                />
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
                        {firstName}
                      </h2>
                      <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq1050:text-5xl mq1050:leading-[29px] mq450:text-lg mq450:leading-[22px]">
                        {lastName}
                      </h2>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[15px]">
                      <NavLink to="https://vk.com/">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src={Vector}
                        />
                      </NavLink>
                      <NavLink to="https://facebook.com/">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src={Vector2}
                        />
                      </NavLink>
                      <NavLink to="https://www.instagram.com/">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src={Vector3}
                        />
                      </NavLink>
                      <NavLink to="https://x.com/?lang=ru">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src={Vector4}
                        />
                      </NavLink>
                      <NavLink to="https://ok.ru/">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src={Vector5}
                        />
                      </NavLink>
                    </div>
                  </div>
                  <button
                    className="rounded-31xl flex flex-row items-center justify-center py-[9px] px-[19px] whitespace-nowrap text-sm border-[1px] border-solid border-[#D5D1E1]"
                    onClick={() => setIsEditModalOpen(true)}
                  >
                    <div className="relative font-semibold">
                      Изменить персональную информацию
                    </div>
                  </button>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <div className="flex flex-row items-center justify-start gap-[10px]">
                      <div className="relative leading-[140%] font-medium">
                        {savedPhoneNumber}
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
                    onClick={handlePayerDataEdit}
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
              <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative min-h-[20px]"
                  alt=""
                  src="/frame.svg"
                />
                <div className="h-[19px] flex-1 relative font-semibold inline-block">
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
          open={isPayerDataModalOpen}
          onClose={() => setIsPayerDataModalOpen(false)}
        >
          <div className="modal-content">
            <EditPayerDataModal
              currentData={payerData}
              onSave={handlePayerDataSave}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Profile;
