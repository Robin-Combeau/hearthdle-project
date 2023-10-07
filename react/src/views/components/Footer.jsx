import React from 'react'

export default function Footer() {
    const today = new Date();

    return (
        <div className="text-center footer">
            <div className="circle-container">
                <a href="https://www.github.com" className="circle-link">
                    <img className="img-fluid footer-logo" src="../icons/github.svg" alt="Github" />
                </a>
            </div>
            <div className="circle-container">
                <a href="https://www.github.com" className="circle-link">
                    <img className="img-fluid footer-logo" src="../icons/github.svg" alt="Example" />
                </a>
            </div>
            <p>hearthdle.com - {today.getFullYear()}</p>
        </div>
    )
}
