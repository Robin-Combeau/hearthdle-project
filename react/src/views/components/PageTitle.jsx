import React from 'react'

export default function PageTitle({text}) {
  return (
    <h2 className="belwe text-beige shadow-xl text-5xl text-outline-medium tracking-wide m-10" data-text={text}>{text}</h2>
  )
}
