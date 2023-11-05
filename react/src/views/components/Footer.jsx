import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const today = new Date();

  return (
    <div className="pt-16 flex flex-col justify-center items-center text-yellow-gold text-xs mt-auto">
      <div className="flex space-x-5 m-2">
        <div className="bg-beige shadow-xl rounded-full transition ease-in-out transform hover:scale-110 hover:bg-darker-beige">
          <Link to="/patchnotes" className="w-10 h-10 flex items-center justify-center">
            <img className="footer-logo" src="../icons/list.svg" alt="Patchnotes" />
          </Link>
        </div>
        <div className="bg-beige shadow-xl rounded-full transition ease-in-out transform hover:scale-110 hover:bg-darker-beige">
          <a href="maybepagekofi" className="w-10 h-10 flex items-center justify-center">
            <img className="footer-logo" src="../icons/kofi.svg" alt="Kofi" />
          </a>
        </div>
        <div className="bg-beige shadow-xl rounded-full transition ease-in-out transform hover:scale-110 hover:bg-darker-beige">
          <a href="https://github.com/Robin-Combeau/hearthdle-project" className="w-10 h-10 flex items-center justify-center">
            <img className="footer-logo" src="../icons/github.svg" alt="Github" />
          </a>
        </div>
      </div>
      <p className="text-beige text-sm mb-2">hearthdle.com - {today.getFullYear()}</p>
    </div>
  );
}