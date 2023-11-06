import React from 'react'

export default function GamemodeTitle({ title = "Gamemode", image = "/images/logos/hearthdle_logo.webp" }) {
    return (
        <div className="flex flex-col items-center m-4">
            <div className="flex items-center justify-center mt-3">
                <img src={image} />
            </div>
            <h3 className="relative belwe text-3xl tracking-normal text-yellow-gold m-2 mt-[-28px] text-outline-thin z-10 " data-text={title}>{title}</h3>
        </div>
    )
}
