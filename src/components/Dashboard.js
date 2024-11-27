import React from "react";

const Dashboard = ({ users }) => {
  return (
    <div style={{padding: "20px"}}>
      <h1>Dashboard</h1>
      <div className="card">
        <h3>Users</h3>
        {users.length === 0 ? (
          <p>No users available. Add users using the User Management page.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Permission</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <select>
                      {user.permissions.map((uPermission, index) => (
                        <option key={index} value={uPermission}>
                          {uPermission}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
