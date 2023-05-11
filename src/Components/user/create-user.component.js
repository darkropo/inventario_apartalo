import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/create', { username, password, role });
      console.log(response.data);
      setUsername('');
      setPassword('');
      setRole('');
      alert('User created successfully!');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('/api/users/role');
        setRoles(response.data);
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    };
    fetchRoles();

    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users and Roles</h1>
      
      <h2>Create User</h2>
      <form onSubmit={handleCreateUser}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select role...</option>
            {roles.map((role) => (
              <option key={role.name} value={role.name}>{role.name}</option>
            ))}
          </select>
        </div>
        <button type="submit">Create User</button>
      </form>

      <h2>Roles</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.name}>
            {role.name}: {role.description}
          </li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username} ({user.role})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;