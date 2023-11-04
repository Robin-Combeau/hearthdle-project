import { Link } from "react-router-dom";
import Button from "./components/Button";
import Footer from "./components/Footer";

export default function Index() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="md:mt-12 mt-6 md:mb-12 mb-6">
                <img className="hearthdle-logo-main md:w-full w-4/5 mx-auto" src="../images/logos/hearthdle_logo_medium.webp" alt="Hearthdle Logo" />
            </div>
            <h1 className="belwe text-yellow-gold text-5xl text-outline-large tracking-wide mt-3 mb-3" data-text="Hearthdle">
                Hearthdle
            </h1>
            <h2 className="belwe text-beige text-3xl text-outline-thin tracking-normal mt-2 mb-2" data-text="Guess Hearthstone cards">
                Guess Hearthstone cards
            </h2>
            <div className="flex flex-col items-center md:mt-24 mt-12">
                <Button label="Play" className="belwe bg-black text-yellow-gold text-4xl border-4 border-yellow-gold rounded-xl py-6 px-32 shadow-xl md:m-4 m-2
                transition duration-300 ease-in-out transform hover:scale-105 hover:border-beige hover:text-beige hover:bg-lighter-black" to="/gamemodes" />
                <div>
                    <Button label="About" className="belwe bg-beige text-black text-3xl rounded-lg py-2 px-8 shadow-xl mt-4 mr-6 w-36
                    transition duration-300 ease-in-out transform hover:scale-105 hover:bg-darker-beige" to="/about" />
                    <Button label="FAQ" className="belwe bg-beige text-black text-3xl rounded-lg py-2 px-8 shadow-xl mt-4 ml-6 w-36
                    transition duration-300 ease-in-out transform hover:scale-105 hover:bg-darker-beige" to="/faq" />
                </div>
            </div>
        </div>

    );
}

// <div className="main page">
// <img className="hearthdle-logo-main" src="../images/logos/hearthdle_logo.webp" alt="Hearthdle Logo" />
// <h1 className="title" data-text="Hearthdle">Hearthdle</h1>
// <h2 className="subtitle" data-text="Guess Hearthstone cards">Guess Hearthstone cards</h2>
// <div>
//     <Button label="Play" className="play-button scale" to="/gamemodes" />
// </div>
// <div className="medium-buttons-main">
//     <Button label="About" className="medium-button medium-button-main scale" to="/about" />
//     <Button label="FAQ" className="medium-button medium-button-main scale" to="/faq" />
// </div>
// <Footer />
// </div>