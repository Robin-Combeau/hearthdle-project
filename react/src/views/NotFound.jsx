import { Link } from "react-router-dom";
import PageMainTitle from "./components/PageMainTitle";
import PageTitle from "./components/PageTitle";

export default function NotFound() {
    return (
        <>
            <div className="page">
                <PageMainTitle />
                <PageTitle text="404 - Page not found" />
                <Link to="/"><img src='/images/cards/404/lost.webp' className="scale" alt='404 Image' /></Link>
            </div>
        </>
    )
}
