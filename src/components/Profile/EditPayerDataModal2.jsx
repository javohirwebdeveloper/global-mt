import React, { useState, useEffect } from "react";
import { Modal, Button, TextField } from "@mui/material";

const EditPayerDataModal2 = ({ open, onClose, onSave }) => {
  const [payerData, setPayerData] = useState({
    companyName: "",
    inn: "",
    address: "",
    website: "",
    email: "",
    position: "",
    organizationType: "",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("payerData2")) || {};
    setPayerData(storedData);
  }, [open]);

  const handleChange = (e) => {
    setPayerData({ ...payerData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("payerData2", JSON.stringify(payerData));
    onSave(payerData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-content bg-white">
        <h2>Редактировать данные о плательщике</h2>
        <TextField
          name="inn"
          label="ИНН"
          value={payerData.inn}
          onChange={handleChange}
        />
        <TextField
          name="address"
          label="Адрес доставки"
          value={payerData.address}
          onChange={handleChange}
        />
        <TextField
          name="website"
          label="Сайт"
          value={payerData.website}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          value={payerData.email}
          onChange={handleChange}
        />
        <TextField
          name="position"
          label="Ваша должность"
          value={payerData.position}
          onChange={handleChange}
        />
        <TextField
          name="organizationType"
          label="Тип организации"
          value={payerData.organizationType}
          onChange={handleChange}
        />
        <Button onClick={handleSave}>Сохранить</Button>
        <Button onClick={onClose}>Отмена</Button>
      </div>
    </Modal>
  );
};

export default EditPayerDataModal2;
