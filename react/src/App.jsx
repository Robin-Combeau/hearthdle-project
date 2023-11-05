import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './MainRoutes';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cover bg-center z-0 main-background-filter" style={{ backgroundImage: 'url("/images/background/UnitedinStormwind_007.webp")' }}>
      <MainRoutes />
    </div>
  );
}