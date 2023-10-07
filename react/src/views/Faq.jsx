import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Button from './components/Button'
import PageMainTitle from './components/PageMainTitle'
import PageTitle from './components/PageTitle'

export default function Faq() {
  return (
    <>
      <div className="text-center page">
      <PageMainTitle />

      <PageTitle text="FAQ"/>

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

        <Button label="Go back" className="medium-button medium-button-margin-top" to="/" />
      </div >
      <Footer />
    </>
  )
}
