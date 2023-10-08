import React from 'react'

export default function TentativeCounter({ tentatives }) {
  return (
    <>
      <p>Attempts :</p>
      <div className="tentatives">{tentatives}</div>
    </>
  )
}
