import React, { useState, useEffect } from 'react';
import axios from "../axios/axios.js";
import { Container, Stack, Form, Button, Table } from 'react-bootstrap';
import { errorBoundary } from '../utils/error.component.js';

function User() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState('');
  
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  const handleCreateUser = async (e) => {
    e.preventDefault();
      await axios.post('/apartalo/inventario/auth/user', { username, password, role }).then(response =>{
        console.log(response.data);
        setUsername('');
        setPassword('');
        setRole('');
        alert('User created successfully!');
        fetchUsers();
      });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
      await axios.put(`/apartalo/inventario/auth/user/${userId}`, { username, password, role }).then(response =>{
        console.log(response.data);
        setUsername('');
        setPassword('');
        setRole('');
        setUserId('');
        alert('User updated successfully!');
        fetchUsers();
      });
  };

  const handleDeleteUser = async (userId) => {
    await axios.delete(`/apartalo/inventario/auth/user/${userId}`).then(response =>{
      alert('User deleted successfully!');
      fetchUsers();
    });
  };

  const handleEditUser = (user) => {
    setUsername(user.username);
    setPassword(user.password);
    setRole(user.role_name[0]._id);
    setUserId(user._id);
  };

  const fetchRoles = async () => {
    await axios.get('/apartalo/inventario/auth/role').then(response =>{
      setRoles(response.data);
    });
  };

  const fetchUsers = async () => {
    await axios.get('apartalo/inventario/auth/user').then(response=>{
      setUsers(response.data);      
    });
  };

  useEffect(() => {
    fetchRoles();
    fetchUsers();
  }, [token]);

  return (
    <Container>
      <h1>Users and Roles</h1>
      <Stack gap={3} className="mx-auto">
        <div className="form-wrapper">
          <h2>Create User</h2>
          <Form onSubmit={userId ? handleUpdateUser : handleCreateUser}>
            <Form.Group>
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role:</Form.Label>
              <Form.Control as="select" id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="">Select role...</option>
                {roles.map((role) => (
                  <option key={role.name} value={role._id}>{role.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">{userId ? 'Update User' : 'Create User'}</Button>
          </Form>
        </div>
        <h2>Roles</h2>
        <Table striped bordered hover size="sm" className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr key={index}>
                <td>{role.name}</td>
                <td>{role.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h2>Users</h2>
        <Table striped bordered hover size="sm" className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.role_name[0].name}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleEditUser(user)}>Edit</Button>{" "}
                  <Button variant="danger" size="sm" onClick={() => handleDeleteUser(user._id)}>Delete</Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Stack>
    </Container>
  );
}

export default errorBoundary(User);
