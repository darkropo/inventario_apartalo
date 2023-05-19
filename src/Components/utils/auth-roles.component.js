import React, { useState, useEffect } from 'react';
import { decodeJwt } from 'jose';
import { createBrowserHistory } from 'history';

const WithAuth = (allowedRoles) =>(WrappedComponent) => {
  const history = createBrowserHistory(); // Create a new history object

  const AuthorizedComponent = (props) => {
    const [userRole, setUserRole] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // Check user role and authentication status
      const token = localStorage.getItem('token');
      const decodedToken = decodeJwt(token);
      const userRole = decodedToken.role; // replace with your own function to get user role
      const isAuthenticated = token ? true : false; // replace with your own function to check authentication status
      console.log("auth:::::::::::::::::::", decodedToken);
      setUserRole(userRole);
      setIsAuthenticated(isAuthenticated);
    }, []);

    useEffect(() => {
      console.log("entro:::::::::::::::::::::::::::::::::");
      if (!isAuthenticated || !allowedRoles.includes(userRole)) {
        // Redirect to login page or unauthorized page
        
        history.push('/login');
        window.location.reload(); // Reload the page to update the URL in the address bar 
      }
    }, [isAuthenticated, userRole]);

    // Render wrapped component if user is authorized
    return isAuthenticated && allowedRoles.includes(userRole) ? <WrappedComponent {...props} /> : "null";
  };

  return <AuthorizedComponent/>;
};

export default WithAuth;
