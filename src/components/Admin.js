// src/components/Admin.js
import React, { useState } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '' });

  const addUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ username: '', password: '' });
  };

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div
        className="bg-[#004e98] p-8 rounded-lg border-4 border-black w-2/6"
        style={{ boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1)' }}
      >
        <h2 className="text-2xl font-bold text-[#edf6f9] text-center mb-6">User Management</h2>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-m font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-m font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
        </div>
        <button
          className="bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105"
          onClick={addUser}
        >
          Add User
        </button>
      </div>

      <div className="ml-8"> {/* Create space between the form and the user list */}
        <h2 className="text-2xl font-bold text-[#edf6f9] mb-4">Users</h2>
        {/* <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.username} - {user.password}
              <button onClick={() => deleteUser(index)}>Delete</button>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Admin;
