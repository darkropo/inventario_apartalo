import React, { useState, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../axios/axios.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { decodeJwt } from 'jose';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required.'),
  password: Yup.string().required('Password is required.'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/apartalo/inventario/auth/login', values);
        console.log("data::::::::::::::::", response.data);
        // Save the user's session information
        localStorage.setItem('token', response.data.token);

        // Extract relevant user info from decoded token and save in localStorage
        const decodedToken = decodeJwt(response.data.token);
        //localStorage.setItem('role', decodedToken.role);
        //localStorage.setItem('username', decodedToken.email);

        // Redirect the user to the homepage or dashboard
        window.location.href = '/';
      } catch (error) {
        // Handle authentication errors
        console.error(error);
        setError('Invalid credentials. Please try again.'); // add this line
      }
    },
  });

  const [error, setError] = useState(null); // add this line

  const handleLogout = () => {    
    // Remove user info and token from localStorage
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('token'); 

    // Redirect the user to the login page
    window.location.href = '/login';
  };

  // Check if user is logged in and retrieve user info from localStorage
  const isLoggedIn = localStorage.getItem('token') ? true : false;
  const username = localStorage.getItem('username');

  if (isLoggedIn) {
    return (
      <Fragment>
        <div>Welcome {username}!</div>
        <Button onClick={handleLogout}>Logout</Button>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        {error && <div className="alert alert-warning">{error}</div>} {/* add this line */}
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              name="username" 
              placeholder="Enter username" 
              value={formik.values.username} 
              onChange={formik.handleChange} 
            />
            {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formik.values.password} 
              onChange={formik.handleChange} 
            />
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Fragment>
    );
  }
};

export default Login;
