import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Button from './components/Button'

export default function Faq() {
  return (
    <>
      <div className="text-center page">
        <div className="app-title">
          <Link to={'/'}>
            <img className="img-fluid hearthdle-logo-page" src="../images/logos/hearthdle_logo.png" alt="Hearthdle Logo" />
          </Link>
          <h1 className="page-title" data-text="Hearthdle">
            <Link to={'/'}>Hearthdle</Link>
          </h1>
        </div>

        <h2 className="page-subtitle" data-text="FAQ">FAQ</h2>

        <div className="text-bubble">
          <h3>When is the daily reset ?</h3>
          <p>The daily reset occurs at Xpm XXX.</p>
        </div>

        <div className="text-bubble">
          <h3>How to send feedback or report a bug ?</h3>
          <p>You can contact me at feedback@hearthdle.xxx.</p>
        </div>

        <div className="text-bubble">
          <h3>Will other gamemodes be added ?</h3>
          <p>I have many ideas for gamemodes but development takes time and motivation.
            It will depend a lot of the popularity and support Hearthdle gets.</p>
        </div>

        <Button label="Go back" className="medium-button" to="/" />
      </div >
      <Footer />
    </>
  )
}
