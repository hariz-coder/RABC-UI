import React, { useState } from "react";

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState(["Read", "Write", "Execute"]);
  const [newPermission, setNewPermission] = useState("");
  const [editPermission, setEditPermission] = useState("");
  const [updatedPermission, setUpdatedPermission] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Add Permission
  const handleAddPermission = () => {
    if (newPermission && !permissions.includes(newPermission)) {
      setPermissions([...permissions, newPermission]);
      setNewPermission("");
    } else {
      alert("Permission already exists or is empty.");
    }
  };

  // Edit Permission
  const handleEditPermission = () => {
    if (
      editPermission &&
      updatedPermission &&
      permissions.includes(editPermission)
    ) {
      setPermissions(
        permissions.map((perm) =>
          perm === editPermission ? updatedPermission : perm
        )
      );
      setEditPermission("");
      setUpdatedPermission("");
      setIsEditing(false);
    } else {
      alert("Invalid permission or permission not found.");
    }
  };

  // Delete Permission
  const handleDeletePermission = (permissionToDelete) => {
    setPermissions(permissions.filter((perm) => perm !== permissionToDelete));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Permission Management</h1>

      {/* Add Permission */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
          placeholder="Add new permission"
          style={{ marginRight: "10px"}}
        />
        <button onClick={handleAddPermission}>
          Add Permission
        </button>
      </div>

      {/* Edit Permission */}
      <div style={{ marginBottom: "20px" }}>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
          >
            Edit Permission
          </button>
        ) : (
          <div>
            <select
              value={editPermission}
              onChange={(e) => setEditPermission(e.target.value)}
              style={{ marginRight: "10px"}}
            >
              <option value="">Select permission to edit</option>
              {permissions.map((perm, index) => (
                <option key={index} value={perm}>
                  {perm}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={updatedPermission}
              onChange={(e) => setUpdatedPermission(e.target.value)}
              placeholder="Updated permission name"
              style={{ marginRight: "10px"}}
            />
            <button
              onClick={handleEditPermission}
            >
              Update Permission
            </button>
          </div>
        )}
      </div>

      {/* List Permissions */}
      <h2>Existing Permissions</h2>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Permission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission, index) => (
            <tr key={index}>
              <td>{permission}</td>
              <td>
                <button
                  onClick={() => handleDeletePermission(permission)}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "red",
                    color: "white"
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

export default PermissionManagement;
