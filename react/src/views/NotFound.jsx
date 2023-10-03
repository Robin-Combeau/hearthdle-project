import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <Link to="/"><img src='../public/cards/404/lost.png' alt='404 Image' /></Link>
        </div>
    )
}
