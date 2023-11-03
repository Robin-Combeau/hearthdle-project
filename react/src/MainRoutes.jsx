import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './views/Index';
import Gallery from './views/Gallery';
import NotFound from './views/NotFound';
import Infinite from './views/gamemodes/Infinite';
import Standard from './views/gamemodes/Standard';
import About from './views/About';
import Faq from './views/Faq';
import Gamemodes from './views/Gamemodes';
import Patchnotes from './views/Patchnotes';
import Wild from './views/gamemodes/Wild';
import Classic from './views/gamemodes/Classic';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/gamemodes" element={<Gamemodes />} />
      <Route path="/patchnotes" element={<Patchnotes />} />
      <Route
        path="gamemode/*"
        element={
          <Routes>
            <Route path="/standard" element={<Standard />} />
            <Route path="/wild" element={<Wild />} />
            <Route path="/classic" element={<Classic />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}