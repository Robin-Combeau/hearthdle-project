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
          <h3>0.1</h3>
          <p className="text-align-left">- patch content #1</p>
          <p className="text-align-left">- patch content #2</p>
        </div>

        <Button label="Go back" className="medium-button medium-button-margin-top scale" to="/" />
        <Footer />
      </div >
  )
}
