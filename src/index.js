import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from './CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <Router>
      <App />  
    </Router>
  </ContextProvider>
);



/*******
 * ***React features used in this App include***
 * 
 * useState()
 * useEffect()
 * useContext()
 * React Router
 * <Link>
 * Custom Hooks (useHover)
 * useRef
 * useEffect and useRef combined
 * 
 * PropTypes??
*******/