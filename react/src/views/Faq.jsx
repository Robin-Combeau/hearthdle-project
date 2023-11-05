import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Button from './components/Button';
import PageMainTitle from './components/PageMainTitle';
import PageTitle from './components/PageTitle';

export default function Faq() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        <PageMainTitle />

        <PageTitle text="FAQ" />

        <div className="mx-10 my-3 max-w-screen-sm flex flex-col items-center">

          <div className="w-full bg-black-85 rounded-lg text-beige text-center text-xl my-3">
            <h3 className="px-8 py-1 belwe text-beige text-3xl tracking-normal m-2">When is the daily reset ?</h3>
            <p className="py-4 px-8 leading-6">The daily reset occurs at Xpm XXX.</p>
          </div>

          <div className="w-full bg-black-85 rounded-lg text-beige text-center text-xl my-3">
            <h3 className="px-8 py-1 belwe text-beige text-3xl tracking-normal m-2">How to send feedback or report a bug ?</h3>
            <p className="py-4 px-8 leading-6">You can contact me at feedback@hearthdle.xxx.</p>
          </div>

          <div className="w-full bg-black-85 rounded-lg text-beige text-center text-xl my-3">
            <h3 className="px-8 py-1 belwe text-beige text-3xl tracking-normal m-2">Will other gamemodes be added ?</h3>
            <p className="py-4 px-8 leading-6">I have many ideas for gamemodes but development takes time and motivation.
              It will depend a lot on the popularity and support Hearthdle gets.</p>
          </div>
        </div>

        <Button label="Go back" className="belwe bg-beige text-black text-3xl rounded-lg py-2 px-8 shadow-xl mt-12 mr-6 
          transition duration-300 ease-in-out transform hover:scale-105 hover:bg-darker-beige" to="/" />
        <Footer />
      </div >
    </>
  );
}
