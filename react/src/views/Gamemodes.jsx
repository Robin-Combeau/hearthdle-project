import { Link, useNavigate } from "react-router-dom";
import PageMainTitle from "./components/PageMainTitle";
import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle";
import GamemodeButton from "./components/GamemodeButton";

export default function Gamemodes() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center">
            <PageMainTitle />
            <PageTitle text="Gamemodes" />
            <div className="flex flex-wrap justify-center">
                <GamemodeButton title="Standard" img="/images/logos/gamemodes/standard.webp" link="/gamemode/standard" text="Only Core and the last 2 years of cards." />
                <GamemodeButton title="Wild" img="/images/logos/gamemodes/wild.webp" link="/gamemode/wild" text="All cards except Classic format cards." />
            </div>
            <div className="flex flex-wrap justify-center">
                <GamemodeButton title="Classic" img="/images/logos/gamemodes/classic.webp" link="/gamemode/classic" text="Only cards from the original release." />
            </div>
            <Footer />
        </div>
    )
}
