import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Button from './components/Button';
import PageMainTitle from './components/PageMainTitle';
import PageTitle from './components/PageTitle';

export default function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        <PageMainTitle />
        <PageTitle text="About" />

        <div className="mx-10 my-3 max-w-screen-sm flex flex-col items-center">

          <div className="w-full bg-black-85 rounded-lg text-beige text-center text-xl my-3">
            <p className="py-4 px-8 leading-6">Hearthdle is a guessing game about Hearthstone and was created under Blizzard's Legal Informations,
              using assets owned by Blizzard.<br /><br />Blizzard does not endorse this project.</p>
          </div>

          <div className="w-full bg-black-85 rounded-lg text-beige text-center text-xl my-3">
            <p className="py-4 px-8 leading-6">This project is inspired by Wordle, Loldle, and many other great guessing games.
              <br /><br />Created with ReactJS and Laravel.</p>
          </div>

          <div className="w-full bg-black-85 rounded-lg text-beige text-center text-xl my-3">
            <p className="py-4 px-8 leading-6">The website uses cookies to collect statistics and show ads. Click for more info.</p>
          </div>
        </div>

        <Button label="Go back" className="belwe bg-beige text-black text-3xl rounded-lg py-2 px-8 shadow-xl mt-12 mr-6 
          transition duration-300 ease-in-out transform hover:scale-105 hover:bg-darker-beige" to="/" />
        <Footer />
      </div>
    </>
  );
}
