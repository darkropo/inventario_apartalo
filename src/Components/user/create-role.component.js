import React, { useState, useEffect } from "react";
import axios from "../axios/axios.js";
import { Container, Table, Form, Button, Stack } from "react-bootstrap";
//import { withAuth } from "../utils/auth-roles.component";


const Role = () => {
  const [roles, setRoles] = useState([]);
  const [roleName, setRoleName] = useState("");
  const [roleDesc, setRoleDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const token = localStorage.getItem("token");


  useEffect(() => {
    const fetchRoles = async () => {
        await axios.get("/apartalo/inventario/auth/role")
        .then(response =>{
          setRoles(response.data);
        });
    };
    fetchRoles();
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
      if (isEditing) {
        await axios.put(`/apartalo/inventario/auth/role/${selectedRole._id}`,{
          role: roleName,
          description: roleDesc,
        }).then(response =>{
          alert("Role updated successfully!");
          setRoles((prevRoles) =>
            prevRoles.map((role) =>
              role._id === selectedRole._id
                ? { ...role, name: roleName, description: roleDesc }
                : role
            )
          );
          setSelectedRole(null);
          setRoleName("");
          setRoleDesc("");      
        });
      } else {
        await axios.post("/apartalo/inventario/auth/role", {
          role: roleName,
          description: roleDesc,
        }).then(response =>{
          alert("Role created successfully");
        setRoles((prevRoles) => [
          ...prevRoles,
          { name: roleName, description: roleDesc },
        ]);
        alert("Role created successfully!");
        setRoleName("");
        setRoleDesc("");
        });
        
      }
    setLoading(false);
  };

  const handleEditClick = (role) => {
    setSelectedRole(role);
    setIsEditing(true);
    setRoleName(role.name);
    setRoleDesc(role.description);
  };

  const handleDeleteClick = async (role) => {
      await axios.delete(`/apartalo/inventario/auth/role/${role._id}`)
        .then(response => {
          alert("Role deleted successfully!");
          setRoles((prevRoles) => prevRoles.filter((prevRole) => prevRole._id !== role._id));
        });
  };

  return (
    <Container>
      <h2>Roles</h2>
      <Stack gap={3} className="mx-auto">
        <div className="form-wrapper">
          <h3>{isEditing ? "Edit Role" : "Create Role"}</h3>
          <Form onSubmit={handleSubmit}>
            <Stack gap={2} className="mx-auto">
              <Form.Group>
                <Form.Label>Role Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="roleName"
                  value={roleName}
                  onChange={(event) => setRoleName(event.target.value)}
                  required
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Role Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="roleDesc"
                  value={roleDesc}
                  onChange={(event) => setRoleDesc(event.target.value)}
                  required
                />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" disabled={loading}>
                {loading
                  ? isEditing
                    ? "Updating Role..."
                    : "Creating Role..."
                  : isEditing
                  ? "Update Role"
                  : "Create Role"}
              </Button>
              {isEditing && (
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setSelectedRole(null);
                    setRoleName("");
                    setRoleDesc("");
                  }}
                >
                  Cancel
                </Button>
              )}
            </Stack>
          </Form>
        </div>
        <div className="table-responsive">
          <Table striped bordered hover size="sm" className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, index) => (
                <tr key={index}>
                  <td>{role.name}</td>
                  <td>{role.description}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleEditClick(role)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteClick(role)}
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Stack>
    </Container>
  );
};

export default Role;