import React, { useState } from 'react';

export default function CardNameInput({
    allCardNames,
    selectedCardName,
    setSelectedCardName,
    card,
    onRightGuess,
    onWrongGuess,
    tentatives,
    setTentatives
}) {
    const [inputValue, setInputValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [rightGuess, setRightGuess] = useState(false);
    const [wrongGuess, setWrongGuess] = useState(false);

    const filterCardNames = () => {
        const inputValueLowerCase = inputValue.toLowerCase();
        const filteredNames = allCardNames.filter((name) =>
            name.toLowerCase().includes(inputValueLowerCase)
        );
        return filteredNames.length > 0 ? filteredNames : ['No card found'];
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
        if (name === 'No card found') {
            return;
        }
        setSelectedCardName(name);
        setInputValue(name);
        setShowDropdown(false);
    };

    const submitCardName = () => {
        setTentatives((prevTentatives) => prevTentatives + 1);
        if (card.name.toLowerCase() === selectedCardName.toLowerCase()) {
            setWrongGuess(false);
            onRightGuess(true);
            setRightGuess(true);
        }
        else {
            setTentatives((prevTentatives) => prevTentatives + 1);
            setWrongGuess(true);
            onWrongGuess(true);
        }
        setInputValue('');
    };

    return (
        <>
            <div className="flex items-center justify-center text-center mt-12">
                {!rightGuess && (
                    <div className="w-96 flex m-0">
                        <input
                            className="w-full h-12 belwe text-2xl px-3 text-yellow-gold bg-black text-left text-xl focus:outline-none"
                            type="text"
                            value={inputValue}
                            placeholder="Enter a card name"
                            onChange={handleInputChange}
                        />
                        <button
                            className="w-16 h-12 text-1xl bg-black text-xl"
                            onClick={submitCardName}
                        >
                            <img src="/icons/chevron-right.svg" alt="Submit" />
                        </button>
                    </div>
                )}
            </div>
            {showDropdown && inputValue && (
                <div className="w-96 max-h-40 overflow-y-auto cardname-dropdown">
                    {filterCardNames().map((name, index) => (
                        <div
                            key={index}
                            className={`w-full py-2 px-4 text-xl overflow-hidden cursor-pointer bg-black hover:bg-lighter-black text-beige hover:text-yellow-gold ${name === 'No card found' ? 'no-results-found' : ''}`}
                            onClick={() => handleOptionClick(name)}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            )}
            {wrongGuess && <div className="text-lg text-beige m-1">Wrong guess, try again!</div>}
        </>
    );
}