import React, { useState } from 'react';

export default function CardNameInput({
    allCardNames,
    selectedCardName,
    setSelectedCardName,
    card,
    onRightGuess,
    tentatives,
    setTentatives
}) {
    const [inputValue, setInputValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [rightGuess, setRightGuess] = useState(false);

    const filterCardNames = () => {
        const inputValueLowerCase = inputValue.toLowerCase();
        const filteredNames = allCardNames.filter((name) =>
            name.toLowerCase().includes(inputValueLowerCase)
        );
        return filteredNames.length > 0 ? filteredNames : ['No results found'];
    };

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        if (newValue.length >= 2) {
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleOptionClick = (name) => {
        setSelectedCardName(name);
        setInputValue(name);
        setShowDropdown(false);
    };

    const submitCardName = () => {
        if (card.name.toLowerCase() === selectedCardName.toLowerCase()) {
            onRightGuess(true);
            console.log("Card name found!");
        }
        else {
            setTentatives((prevTentatives) => prevTentatives + 1);
        }
    };

    return (
        <>
            <div className="cardname-input-container">
                <div className="cardname-input">
                    <input
                        type="text"
                        value={inputValue}
                        placeholder="Enter a card name"
                        onChange={handleInputChange}
                    />
                    <button onClick={submitCardName}>
                        <img className="submit-icon" src="/icons/chevron-right.svg" />
                    </button>
                </div>
            </div>
            {showDropdown && inputValue && (
                <div className="cardname-dropdown">
                    {filterCardNames().map((name, index) => (
                        <div
                            key={index}
                            className="cardname-dropdown-option"
                            onClick={() => handleOptionClick(name)}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
