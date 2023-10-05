import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './MainRoutes';

export default function App() {
  return (
    <>
      <div className="background-container">
        <div className="background-filter"></div>
      </div>
      <MainRoutes />
    </>
  );
}