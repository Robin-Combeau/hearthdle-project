import { Link } from "react-router-dom";

export default function Gamemodes() {
    return (
        <>
            <h1>Hearthdle</h1>
            <h2>Guess Hearthstone Cards</h2>
            <h3>Gamemodes</h3>
            <Link to="/gamemode/daily">Daily</Link> <br />
            <Link to="/gamemode/infinite">Infinite</Link> <br />
            <br />
            <Link to="/about">About</Link> <br />
            <Link to="/faq">FAQ</Link> <br />
            <a href="https://www.github.com/robin-combeau/hearthdle">Github</a> <br />
        </>
    )
}
