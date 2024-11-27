import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./styles/index.css";
import Dashboard from "./components/Dashboard.js";
import UserManagement from "./components/pages/UserManagement.js";
import RoleManagement from "./components/pages/RoleManagement.js";
import PermissionManagement from "./components/pages/PermissionManagement.js";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <img src="asset/icon.png" alt="Logo" className="sidebar-logo" />
            <h1 className="sidebar-title">RBAC</h1>
          </div>
          <nav className="nav-menu">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Dashboard
            </NavLink>
            <NavLink to="/users" className={({ isActive }) => (isActive ? "active" : "")}>
              User Management
            </NavLink>
            <NavLink to="/roles" className={({ isActive }) => (isActive ? "active" : "")}>
              Role Management
            </NavLink>
            <NavLink to="/permissions" className={({ isActive }) => (isActive ? "active" : "")}>
              Permission Management
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard users={users} />} />
            <Route
              path="/users"
              element={<UserManagement users={users} setUsers={setUsers} />}
            />
            <Route path="/roles" element={<RoleManagement />} />
            <Route path="/permissions" element={<PermissionManagement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
