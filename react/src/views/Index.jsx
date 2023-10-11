import { Link } from "react-router-dom";
import Button from "./components/Button";
import Footer from "./components/Footer";

export default function Index() {
    return (
        <>
            <div className="main page">
                <img className="hearthdle-logo-main" src="../images/logos/hearthdle_logo.webp" alt="Hearthdle Logo" />
                <h1 className="title" data-text="Hearthdle">Hearthdle</h1>
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

        </>
    )
}
