import React from 'react'
import { Link } from 'react-router-dom'

export default function PageMainTitle({ title = "Hearthdle", link = "/", image = "/images/logos/hearthdle_logo.webp" }) {
    return (
        <div className="app-title">
            {/* //src="../images/logos/hearthdle_logo.webp */}
            <Link to={link}>
                <img className="hearthdle-logo-page" src={image} alt="Hearthdle Logo" />
            </Link>
            <h1 className="page-title" data-text={title}>
                <Link to={link}>{title}</Link>
            </h1>
        </div>
    )
}
