import React from 'react'

export default function TentativeCounter({ tentatives }) {
  return (
    <>
      <div className="w-9/12 bg-black-85 rounded-lg text-beige text-center text-xl flex">
        <p className="my-2 mx-4 leading-6">Attempts :</p>
        <div className="mx-2 my-2 leading-6 belwe text-yellow-gold text-2xl text-outline-small">{tentatives}</div>
      </div>
    </>
  )
}
