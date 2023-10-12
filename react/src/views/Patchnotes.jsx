import React from 'react'
import PageMainTitle from './components/PageMainTitle'
import PageTitle from './components/PageTitle'
import Button from './components/Button'
import Footer from './components/Footer'

export default function Patchnotes() {
  return (
    <div className="page">
        <PageMainTitle />
        <PageTitle text="Patchnotes" />

        <div className="text-bubble">
          <h3 className="text-align-left">Release (date)</h3>
        </div>

        <div className="text-bubble">
          <h3 className="text-align-left">0.2 - Stats (date)</h3>
          <p className="text-align-left">- Attempts and success are now stored in database.</p>
          <p className="text-align-left">- Various stats are now displayed in the app.</p>
          <p className="text-align-left">- Only gamemodes the player didn't win today are on the list of suggested gamemodes.</p>
        </div>

        <div className="text-bubble">
          <h3 className="text-align-left">0.1 - First version (date)</h3>
          <p className="text-align-left">- Gamemodes : Standard, Wild, Classic, Twist.</p>
          <p className="text-align-left">- Website works for all devices.</p>
          <p className="text-align-left">- A new card is selected every day at XXam GMT+2.</p>
          <p className="text-align-left">- Card bank is also updated once a day.</p>
        </div>

        <Button label="Go back" className="medium-button medium-button-margin-top scale" to="/" />
        <Footer />
      </div >
  )
}
