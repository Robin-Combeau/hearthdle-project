import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './views/Index';
import Gallery from './views/Gallery';
import NotFound from './views/NotFound';
import Infinite from './views/gamemodes/Infinite';
import Daily from './views/gamemodes/Daily';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/gallery" element={<Gallery />} />
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