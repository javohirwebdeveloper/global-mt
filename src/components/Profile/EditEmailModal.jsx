import React, { useState } from "react";

const EditEmailModal = ({ currentEmail, onSave }) => {
  const [newEmail, setNewEmail] = useState(currentEmail);

  const handleSave = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    user.email = newEmail;
    localStorage.setItem("user", JSON.stringify(user));
    onSave();
  };

  return (
    <div className="modal">
      <h2>Edit Email</h2>
      <input
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onSave}>Cancel</button>
    </div>
  );
};

export default EditEmailModal;
