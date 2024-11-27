import React, { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [permissions, setPermissions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, role, permissions: permissions.split(","), active: true });
    setName("");
    setRole("");
    setPermissions("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        type="text"
        placeholder="Permissions (comma-separated)"
        value={permissions}
        onChange={(e) => setPermissions(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
