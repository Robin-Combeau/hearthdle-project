import { Link, useNavigate } from "react-router-dom";
import PageMainTitle from "./components/PageMainTitle";
import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle";

export default function Gamemodes() {
    const navigate = useNavigate();

    return (
        <>
            <div className="page">
                <PageMainTitle />
                <PageTitle text="Gamemodes" />
                <div className="gamemode-buttons-container">
                    <button className="gamemode-bubble scale" onClick={() => navigate('/gamemode/standard')}>
                        <img src="/images/logos/gamemodes/standard.png" />
                        <h3 data-text="Standard">Standard</h3>
                        <p>Only Core and the last 2 years of cards.</p>
                    </button>
                    <button className="gamemode-bubble scale" onClick={() => navigate('/gamemode/wild')}>
                        <img src="/images/logos/gamemodes/wild.png" />
                        <h3 data-text="Wild">Wild</h3>
                        <p>All cards except Classic format cards.</p>
                    </button>
                </div>
                <div className="gamemode-buttons-container">
                    <button className="gamemode-bubble scale" onClick={() => navigate('/gamemode/classic')}>
                        <img src="/images/logos/gamemodes/classic.png" />
                        <h3 data-text="Classic">Classic</h3>
                        <p>Only cards from the original release.</p>
                    </button>
                    <button className="gamemode-bubble scale" onClick={() => navigate('/gamemode/twist')}>
                        <img src="/images/logos/gamemodes/twist.png" />
                        <h3 data-text="Twist">Twist</h3>
                        <p>Only cards in the twist fomat.</p>
                    </button>
                </div>
                <Footer />
            </div>
        </>
    )
}
