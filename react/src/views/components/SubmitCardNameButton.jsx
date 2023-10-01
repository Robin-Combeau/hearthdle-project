import React, { useState } from 'react'

export default function SubmitCardNameButton({ card, selectedCardName, onRightGuess }) {

    const [tentatives, setTentatives] = useState(0);
    const [rightGuess, setRightGuess] = useState(false);

    const submitCardName = () => {
        if (card.name.toLowerCase() === selectedCardName.toLowerCase()) {
            onRightGuess(true);
            console.log("big day");
        }
        else {
            setTentatives((prevTentatives) => prevTentatives + 1);
        }
    };

    return (
        <>
            <button onClick={submitCardName}>Submit card name</button>
        </>
    );
}
