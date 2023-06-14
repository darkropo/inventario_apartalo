import { Component } from "react";
import "./error.component.css";
 
const ErrorView = ({ error }) => (
  <div className="error-container">
    <h2 className="error-title">Oops! Something went wrong.</h2>
    <div className="error-details">
      {error && error.toString()}
      <br />
      {error && error.message}
      <br />
      {error && error.stack}
    </div>
  </div>
);

export const ErrorPop = (error) => {
  return (
    <div className="error-view">
      <h3>Error</h3>
      <p>{error.message}</p>
    </div>
  );
};
 
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      error: null,
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error,
    };
  }
 
  componentDidCatch(error) {
    // Catch errors in any components below and re-render with error message
    console.log("Error did catch.", error);
    // You can also log error messages to an error reporting service here
  }
 
  render() {
    const { hasError, error} = this.state;
    if (hasError) {
      // Error path
      return <ErrorView {...{ error }} />;
    }
    // Normally, just render children
    return this.props.children;
  }
}
 
export function errorBoundary(WrappedComponent) {
  return class extends ErrorBoundary {
    render() {
      const { error, hasError } = this.state;
      if (hasError) {
        // Error path
        return <ErrorView {...{ error }} />;
      }
      //Normally, just render wrapped component
      return <WrappedComponent {...this.props} />;
    }
  };
}