import React from 'react'
import { Link } from 'react-router-dom'

export default function PageMainTitle() {
    return (
        <div className="app-title">
            <Link to={'/'}>
                <img className="img-fluid hearthdle-logo-page" src="../images/logos/hearthdle_logo.png" alt="Hearthdle Logo" />
            </Link>
            <h1 className="page-title" data-text="Hearthdle">
                <Link to={'/'}>Hearthdle</Link>
            </h1>
        </div>
    )
}
