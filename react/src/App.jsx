import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './MainRoutes';

export default function App() {
  return (
    <div className="relative bg-cover bg-center h-screen z-0 main-background" style={{ backgroundImage: 'url("/images/background/UnitedinStormwind_007.webp")' }}>
      <MainRoutes />
    </div>
  );
}