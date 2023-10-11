import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    const today = new Date();

    return (
        <div className="footer">
            <div>
                <div className="circle-container">
                    <Link to="/patchnotes" className="circle-link scale">
                        <img className="footer-logo" src="../icons/list.svg" alt="Patchnotes" />
                    </Link>
                </div>
                <div className="circle-container">
                    <a href="maybepagekofi" className="circle-link scale">
                        <img className="footer-logo" src="../icons/kofi.svg" alt="Kofi" />
                    </a>
                </div>
                <div className="circle-container">
                    <a href="https://github.com/Robin-Combeau/hearthdle-project" className="circle-link scale">
                        <img className="footer-logo" src="../icons/github.svg" alt="Github" />
                    </a>
                </div>
            </div>
            <p>hearthdle.com - {today.getFullYear()}</p>
        </div>
    )
}
