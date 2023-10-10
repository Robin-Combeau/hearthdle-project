import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Button from './components/Button'
import PageMainTitle from './components/PageMainTitle'
import PageTitle from './components/PageTitle'

export default function About() {
  return (
    <>

      <div className="page">
        <PageMainTitle />
        <PageTitle text="About" />

        <div className="text-bubble">
          <p>Hearthdle is a guessing game about Hearthstone and was created under Blizzard's Legal Informations,
            using assets owned by Blizzard.<br /><br />Blizzard does not endorse this project.</p>
        </div>

        <div className="text-bubble">
          <p>This project is inspired by Wordle, Loldle and many other great guessing games.
            <br /><br />Created with ReactJS and Laravel.</p>
        </div>

        <div className="text-bubble">
          <p>The website uses cookies to collect statistics and show ads.
            <br /><br />Click for more info.</p>
        </div>

        <Button label="Go back" className="medium-button medium-button-margin-top scale" to="/" />
        <Footer />
      </div >

    </>
  )
}
