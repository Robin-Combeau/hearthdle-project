import { Link } from "react-router-dom";
import Button from "./components/Button";
import Footer from "./components/Footer";

export default function Index() {
    return (
        <>
            <div className="text-center main">
                <img className="img-fluid hearthdle-logo-main" src="../images/logos/hearthdle_logo.png" alt="Hearthdle Logo" />
                <h1 className="title" data-text="Hearthdle">Hearthdle</h1>
                <h2 className="subtitle" data-text="Guess Hearthstone cards">Guess Hearthstone cards</h2>
                <div className="row">
                    <div>
                        <Button label="Play" className="play-button" to="/gamemodes" />
                    </div>
                    <div className="medium-buttons-main">
                        <Button label="About" className="medium-button medium-button-main" to="/about" />
                        <Button label="FAQ" className="medium-button medium-button-main" to="/faq" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
