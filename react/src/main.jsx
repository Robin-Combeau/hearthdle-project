import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './MainRoutes.jsx'
import { RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Router> {/* Use BrowserRouter */}
    <App />
  </Router>
  // </React.StrictMode>,
)
