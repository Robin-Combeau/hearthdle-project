import React from 'react'
import { useNavigate } from "react-router-dom";

export default function GamemodeButton({ title, img, link, text }) {
    const navigate = useNavigate();
    return (
        <button className="w-80 bg-black-85 rounded-lg text-beige text-center text-xl m-4 transition ease-in-out transform hover:scale-105" onClick={() => navigate(link)}>
            <div className="flex items-center justify-center mt-3">
                <img src={img} />
            </div>
            <h3 className="relative belwe text-4xl tracking-normal text-yellow-gold m-2 mt-[-28px] text-outline-small z-10 " data-text={title}>{title}</h3>
            <p className="text-xl mx-8 my-4 leading-6">{text}</p>
        </button>
    )
}
