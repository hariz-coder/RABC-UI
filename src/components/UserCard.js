import React from "react";

const UserCard = ({ user, onEdit, onDelete, onToggle }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
      <p>Permissions: {user.permissions.join(", ")}</p>
      <p>Status: {user.active ? "Active" : "Inactive"}</p>
      <button onClick={() => onToggle(user.id)}>
        {user.active ? "Deactivate" : "Activate"}
      </button>
      <button onClick={() => onEdit(user.id, { ...user, name: "Edited Name" })}>
        Edit
      </button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
