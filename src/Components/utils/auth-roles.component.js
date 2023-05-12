/*import React from 'react';
//import { withRouter } from 'react-router-dom';
import { decodeJwt } from 'jose';

export const withAuth = (allowedRoles) => (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        userRole: null,
        isAuthenticated: false
      };
    }

    componentDidMount() {
      // Check user role and authentication status
      const token = localStorage.getItem('token');
      const decodedToken = decodeJwt(token);
      const userRole = decodedToken.role; // replace with your own function to get user role
      const isAuthenticated = token ? true : false; // replace with your own function to check authentication status

      this.setState({
        userRole,
        isAuthenticated
      });
    }

    render() {
      const { isAuthenticated, userRole } = this.state;
      const { history } = this.props;

      if (!isAuthenticated || !allowedRoles.includes(userRole)) {
        // Redirect to login page or unauthorized page
        history.push('/login');
        //return <Redirect to="/login" />;
      }

      // Render wrapped component if user is authorized
      return <WrappedComponent {...this.props} />;
    }
  }

  // Wrap the AuthorizedComponent with withRouter to access the history object
  return withRouter(AuthorizedComponent);
};
*/