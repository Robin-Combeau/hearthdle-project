import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './views/Index';
import Gallery from './views/Gallery';
import NotFound from './views/NotFound';
import Infinite from './views/gamemodes/Infinite';
import Daily from './views/gamemodes/Daily';
import About from './views/About';
import Faq from './views/Faq';
import Gamemodes from './views/Gamemodes';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/gamemodes" element={<Gamemodes />} />
      <Route
        path="gamemode/*"
        element={
          <Routes>
            <Route path="/daily" element={<Daily />} />
            <Route path="/infinite" element={<Infinite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}