import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './MainRoutes';

export default function App() {
  return (
    <div className="fixed bg-fixed block top-0 left-0 w-full h-screen z-[-10] bg-cover bg-no-repeat bg-left relative"
         style={{ backgroundImage: 'url("/images/background/UnitedinStormwind_007.webp")' }}>
        <MainRoutes />
    </div>
  );
}