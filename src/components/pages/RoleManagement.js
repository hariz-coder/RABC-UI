import React, { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState(["Admin", "Editor", "Viewer"]);
  const [newRole, setNewRole] = useState("");
  const [editRole, setEditRole] = useState("");
  const [updatedRole, setUpdatedRole] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Add Role
  const handleAddRole = () => {
    if (newRole && !roles.includes(newRole)) {
      setRoles([...roles, newRole]);
      setNewRole("");
    } else {
      alert("Role already exists or is empty.");
    }
  };

  // Edit Role
  const handleEditRole = () => {
    if (editRole && updatedRole && roles.includes(editRole)) {
      setRoles(
        roles.map((role) => (role === editRole ? updatedRole : role))
      );
      setEditRole("");
      setUpdatedRole("");
      setIsEditing(false);
    } else {
      alert("Invalid role or role not found.");
    }
  };

  // Delete Role
  const handleDeleteRole = (roleToDelete) => {
    setRoles(roles.filter((role) => role !== roleToDelete));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Role Management</h1>

      {/* Add Role */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="Add new role"
          style={{ marginRight: "10px"}}
        />
        <button onClick={handleAddRole}>
          Add Role
        </button>
      </div>

      {/* Edit Role */}
      <div style={{ marginBottom: "20px" }}>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
          >
            Edit Role
          </button>
        ) : (
          <div>
            <select
              value={editRole}
              onChange={(e) => setEditRole(e.target.value)}
              style={{ marginRight: "10px"}}
            >
              <option value="">Select role to edit</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={updatedRole}
              onChange={(e) => setUpdatedRole(e.target.value)}
              placeholder="Updated role name"
              style={{ marginRight: "10px"}}
            />
            <button
              onClick={handleEditRole}
            >
              Update Role
            </button>
          </div>
        )}
      </div>

      {/* List Roles */}
      <h2>Existing Roles</h2>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td>{role}</td>
              <td>
                <button
                  onClick={() => handleDeleteRole(role)}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
