import { Link } from "react-router-dom";
import Button from "./components/Button";
import Footer from "./components/Footer";

export default function Index() {
    return (
        <div className="main page flex flex-col items-center min-h-screen justify-center">
            <h1 className="belwe mt-5vh mb-1vh text-yellow-300 text-shadow-lg text-8rem leading-tight tracking-wider relative">
                <span className="relative">
                    Hearthdle
                </span>
                <span className="absolute inset-0 text-black -webkit-text-stroke-[14px] z-[-1]">
                    Hearthdle
                </span>
            </h1>
            <h2 className="subtitle" data-text="Guess Hearthstone cards">Guess Hearthstone cards</h2>
            <div>
                <Button label="Play" className="play-button scale" to="/gamemodes" />
            </div>
            <div className="medium-buttons-main">
                <Button label="About" className="medium-button medium-button-main scale" to="/about" />
                <Button label="FAQ" className="medium-button medium-button-main scale" to="/faq" />
            </div>
            <Footer />
        </div>
    );
}