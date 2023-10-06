import { Link } from "react-router-dom";
import Button from "./components/Button";

export default function Index() {
    return (
        <>
            <div className="text-center main">
                <img className="img-fluid hearthdle-logo-main" src="../images/logos/hearthdle_logo.png" alt="Hearthdle Logo" />
                <h1 className="title" data-text="Hearthdle">Hearthdle</h1>
                <h2 className="subtitle" data-text="Guess Hearthstone cards">Guess Hearthstone cards</h2>
                <div className="row">
                    <Button label="Play" className="play-button" to="/gamemodes" />
                    <div>
                        <Button label="About" className="medium-button medium-button-main" to="/about" />
                        <Button label="FAQ" className="medium-button medium-button-main" to="/faq" />
                    </div>
                </div>
            </div>
            <div className="text-center footer">
                <div className="circle-container">
                    <a href="https://www.github.com" className="circle-link">
                        <img className="img-fluid footer-logo" src="../icons/github.svg" alt="Github" />
                    </a>
                </div>
                <div className="circle-container">
                    <a href="https://www.example.com" className="circle-link">
                        <img className="img-fluid footer-logo" src="../icons/github.svg" alt="Example" />
                    </a>
                </div>
                <p>hearthdle.com - 2023</p>
            </div>
        </>
    )
}
