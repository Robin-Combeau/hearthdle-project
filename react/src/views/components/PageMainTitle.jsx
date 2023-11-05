import React from 'react'
import { Link } from 'react-router-dom'

export default function PageMainTitle({ title = "Hearthdle", link = "/", image = "/images/logos/hearthdle_logo_small.webp" }) {
    return (
        <div className="flex flex-col items-center m-10 mt-4 transition ease-in-out transform hover:scale-105">
            <Link to={link}>
                <img src={image} alt="Hearthdle Logo" />
            </Link>
            <h1 className="relative belwe mt-[-24px] text-yellow-gold text-3xl tracking-wide text-outline-small z-10" data-text={title}>
                <Link to={link}>{title}</Link>
            </h1>
        </div>
    )
}
