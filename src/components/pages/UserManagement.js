import React, { useState } from "react";

const UserManagement = ({ users, setUsers }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [status, setStatus] = useState("active");
  const [activeModal, setActiveModal] = useState(null); // Track which modal is active
  const [errorMessage, setErrorMessage] = useState("");

  const availablePermissions = ["Read", "Write", "Delete", "Update"]; // Example permissions

  // Handle Add User
  const addUser = () => {
    if (username && email) {
      const newUser = {
        username,
        email,
        role,
        permissions,
        status,
      };
      setUsers([...users, newUser]);
      closeModal();
    }
  };

  // Handle Edit User
  const editUser = () => {
    if (username) {
      const userIndex = users.findIndex((user) => user.username === username);
      if (userIndex !== -1) {
        const updatedUsers = [...users];
        updatedUsers[userIndex] = { ...updatedUsers[userIndex], email, role, permissions, status };
        setUsers(updatedUsers);
        closeModal();
      } else {
        setErrorMessage("User does not exist!");
      }
    }
  };

  // Handle Delete User
  const deleteUser = () => {
    if (username) {
      const updatedUsers = users.filter((user) => user.username !== username);
      if (updatedUsers.length === users.length) {
        setErrorMessage("User does not exist!");
      } else {
        setUsers(updatedUsers);
        closeModal();
      }
    }
  };

  // Handle Permission Change
  const handlePermissionChange = (permission) => {
    setPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((p) => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  // Close Modal
  const closeModal = () => {
    setActiveModal(null); // Hide any active modal
    setUsername("");
    setEmail("");
    setRole("");
    setPermissions([]);
    setStatus("active");
    setErrorMessage("");
  };

  return (
    <div style = {{padding: "20px"}}>
      <h1>User Management</h1>
      <p>
        Manage users, their roles, and permissions. Below are the options to:
      </p>
      <ul>
        <li>Add new users to the system</li>
        <li>Edit existing user details</li>
        <li>Delete users from the system</li>
      </ul>

      <div className="button-group">
        <button onClick={() => setActiveModal("add")}>Add User</button>
        <button onClick={() => setActiveModal("edit")}>Edit User</button>
        <button onClick={() => setActiveModal("delete")}>Delete User</button>
      </div>

      {/* Modal for Add User */}
      {activeModal === "add" && (
        <div className="modal">
          <h3>Add New User</h3>
          <div>
            <label>User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter user name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div>
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <div style = {{display:"flex", justifyContent:"start"}}>
            <label>Permissions</label>
            {availablePermissions.map((permission, index) => (

              <div style = {{display:"flex", alignItems:"center", width:"80px"}} key={index}>
                <input
                  style = {{marginRight: "10px" }}
                  type="checkbox"
                  id={permission}
                  checked={permissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                />
                <label>{permission}</label>
              </div>
            ))}
          </div>
          <div>
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <button onClick={addUser}>Add</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      {/* Modal for Edit User */}
      {activeModal === "edit" && (
        <div className="modal">
          <h3>Edit User</h3>
          <div>
            <label>User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter user name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div>
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <div style = {{display:"flex", justifyContent:"start"}}>
            <label>Permissions</label>
            {availablePermissions.map((permission, index) => (

              <div style = {{display:"flex", alignItems:"center", width:"80px"}} key={index}>
                <input
                  style = {{marginRight: "10px" }}
                  type="checkbox"
                  id={permission}
                  checked={permissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                />
                <label>{permission}</label>
              </div>
            ))}
          </div>
          <div>
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <button onClick={editUser}>Save Changes</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      )}

      {/* Modal for Delete User */}
      {activeModal === "delete" && (
        <div className="modal">
          <h3>Delete User</h3>
          <div>
            <label>User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter user name"
            />
          </div>
          <div>
            <button onClick={deleteUser}>Delete</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default UserManagement;
