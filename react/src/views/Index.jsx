import { Link } from "react-router-dom";
import Button from "./components/Button";

export default function Index() {
    return (
        <>
            <div className="text-center main">
                <img className="img-fluid hearthdle-logo-main" src="../images/logos/hearthdle_logo.png" alt="Hearthdle Logo" />
                <h1 className="title" data-text="Hearthdle">Hearthdle</h1>
                <h2 className="subtitle" data-text="Guess Hearthstone cards">Guess Hearthstone cards</h2>
                <Button label="Play" className="play-button" to="/gamemodes" />
                <div>
                    <Button label="About" className="" to="/about" />
                    <Button label="FAQ" className="" to="/faq" />
                </div>
            </div>
        </>
    )
}
