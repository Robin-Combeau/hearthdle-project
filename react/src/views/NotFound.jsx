import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <Link to="/"><img src='../public/404/lost.png' /></Link>
        </div>
    )
}
