import React, { useState } from "react";

const EditPayerDataModal = ({ currentData, onSave }) => {
  const [newData, setNewData] = useState(currentData);

  const handleSave = () => {
    localStorage.setItem("payerData", JSON.stringify(newData));
    onSave();
  };

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal">
      <h2>Изменить данные плательщика</h2>
      <input
        type="text"
        name="firstName"
        value={newData.firstName}
        onChange={handleChange}
        placeholder="Имя"
      />
      <input
        type="text"
        name="lastName"
        value={newData.lastName}
        onChange={handleChange}
        placeholder="Фамилия"
      />
      <input
        type="text"
        name="vk"
        value={newData.vk}
        onChange={handleChange}
        placeholder="Вконтакте"
      />
      {/* Add more input fields for other data */}
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
};

export default EditPayerDataModal;
