import { Link } from "react-router-dom";
import Button from "./components/Button";

export default function Index() {
    return (
        <>
            <img src="../images/logos/hearthdle_logo.png" alt="Hearthdle Logo"/>
            <h1>Hearthdle</h1>
            <h2>Guess Hearthstone Cards</h2>
            <Button label="Play" className="button" to="/gamemodes"/> <br />
            <Button label="About" className="button" to="/about"/> <br />
            <Button label="FAQ" className="button" to="/faq"/> <br />
        </>
    )
}
