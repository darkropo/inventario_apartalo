import React, { Component } from 'react';
import { decodeJwt } from 'jose';
import { createBrowserHistory } from 'history';

export function withAuth(allowedRolesJson, WrappedComponent) {
  const allowedRoles = JSON.stringify(allowedRolesJson);

  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        userRole: null,
        isAuthenticated: false,
        allowedRoles: allowedRoles
      };
    }

    componentDidMount() {
      // Check user role and authentication status
      const token = localStorage.getItem('token');
      const isAuthenticated = token ? true : false; // replace with your own function to check authentication status
      if (isAuthenticated) {
        const decodedToken = decodeJwt(token);
        const userRole = decodedToken.role; // replace with your own function to get user role
        this.setState({ userRole, isAuthenticated });
      }  
      
    }

    checkAuthorization() {
      const { isAuthenticated, userRole, allowedRoles } = this.state;
      if (!isAuthenticated || !allowedRoles.includes(userRole)) {
        // Redirect to login page or unauthorized page
        const history = createBrowserHistory(); // Create a new history object
        console.log("checkauth::::::::::", allowedRoles);
        history.push('/login');
        window.location.reload(); // Reload the page to update the URL in the address bar
      }
    }

    componentDidUpdate() {
      this.checkAuthorization();
    }

    render() {
      const { isAuthenticated, userRole, allowedRoles } = this.state;
      console.log("usernopte::::::::::", allowedRoles);
      // Render wrapped component if user is authorized, otherwise return null
      return isAuthenticated && allowedRoles.includes(userRole) ? <WrappedComponent {...this.props} /> : null;
    }
  };
}
