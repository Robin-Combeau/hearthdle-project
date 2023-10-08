import React, { useState } from 'react';

export default function CardNameInput({
  allCardNames,
  selectedCardName,
  setSelectedCardName,
}) {
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filterCardNames = () => {
    const inputValueLowerCase = inputValue.toLowerCase();
    return allCardNames.filter((name) =>
      name.toLowerCase().includes(inputValueLowerCase)
    );
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
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter a card name"
        onChange={handleInputChange}
      />
      {inputValue && (
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
