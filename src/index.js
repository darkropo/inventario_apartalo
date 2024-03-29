import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorView from './Components/utils/error.component.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
  <React.StrictMode>
    <App />      
  </React.StrictMode>
  
</ThemeProvider>
  
);

// Make the ErrorView component globally available
React.Component.prototype.ErrorView = ErrorView;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
