import React from 'react'

export default function Footer() {
    const today = new Date();

    return (
        <div className="footer">
            <div>
                <div className="circle-container">
                    <a href="https://github.com/Robin-Combeau/hearthdle-project" className="circle-link">
                        <img className="img-fluid footer-logo" src="../icons/github.svg" alt="Github" />
                    </a>
                </div>
                <div className="circle-container">
                    <a href="/patchnotes" className="circle-link">
                        <img className="img-fluid footer-logo" src="../icons/github.svg" alt="Example" />
                    </a>
                </div>
            </div>
            <p>hearthdle.com - {today.getFullYear()}</p>
        </div>
    )
}
