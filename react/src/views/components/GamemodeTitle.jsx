import React from 'react'

export default function GamemodeTitle({ title = "Gamemode", image = "/images/logos/hearthdle_logo.png" }) {
    return (
        <div className="gamemode-div">
            <img className="hearthdle-logo-page" src={image} alt="Gamemode Logo" />
            <h3 className="gamemode-title" data-text={title}>{title}</h3>
        </div>
    )
}
