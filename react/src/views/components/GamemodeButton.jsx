import React from 'react';
import { useNavigate } from "react-router-dom";

export default function GamemodeButton({ title, img, link, text = '', size = 'large' }) {
    const navigate = useNavigate();

    return (
        <button className={`w-${size === 'large' ? '80' : '50'} ${size === 'large' && 'bg-black-85'} rounded-lg text-beige text-center text-xl m-4 transition ease-in-out transform hover:scale-105`} onClick={() => navigate(link)}>
            <div className="flex items-center justify-center mt-3">
                <img
                    src={img}
                    className={size === 'large' ? "" : "h-20"}
                />
            </div>
            <h3 className={`relative belwe text-${size === 'large' ? '4xl' : '3xl'} tracking-normal text-yellow-gold m-2 mt-[-28px] text-outline-small z-10`} data-text={title}>
                {title}
            </h3>
            {size === 'large' && (
                <p className="text-xl mx-8 my-4 leading-6">{text}</p>
            )}
        </button>
    );
}