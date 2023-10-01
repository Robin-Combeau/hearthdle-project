import { Link } from "react-router-dom";

export default function Index() {
    return (
        <>
        <h1>Hearthdle</h1>
        <h2>Gamemodes</h2>
        <Link to="/gamemode/daily">Daily</Link> <br/>
        <Link to="/gamemode/infinite">Infinite</Link>
        <h4>Socials</h4>
        <a href="https://www.github.com/robin-combeau/hearthdle">Github</a>
        </>
    )
}
