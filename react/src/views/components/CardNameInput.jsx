import React, { useState } from 'react'

export default function CardNameInput({ allCardNames, selectedCardName, setSelectedCardName }) {
    const [inputValueLength, setInputValueLength] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const filterCardNames = () => {
        const inputValueLowerCase = inputValue.toLowerCase();
        return allCardNames.filter((name) =>
            name.toLowerCase().includes(inputValueLowerCase)
        );
    };

    return (
        <div>
            Card name:
            <input
                type="text"
                list="cardNames"
                value={selectedCardName}
                onChange={(e) => {
                    setSelectedCardName(e.target.value);
                    setInputValueLength(e.target.value.length);
                    setInputValue(e.target.value);
                }}
            />
            {inputValueLength >= 2 && (
                <datalist id="cardNames">
                    {filterCardNames().map((name, index) => (
                        <option key={index} value={name} />
                    ))}
                </datalist>
            )}
        </div>
    );
}