import React from 'react'

export default function PageTitle({text}) {
  return (
    <h2 className="page-subtitle" data-text={text}>{text}</h2>
  )
}
