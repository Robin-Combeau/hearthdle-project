import React, { useEffect, useState } from 'react'
import axios from "axios";
import CardNameInput from '../components/CardNameInput';
import SubmitCardNameButton from '../components/SubmitCardNameButton';
import TentativeCounter from '../components/TentativeCounter';
import CardImage from '../components/CardImage';

export default function Infinite() {
  const [card, setCard] = useState([]);
  const [cardImage, setCardImage] = useState('');
  const [allCardNames, setAllCardNames] = useState([]);
  const [selectedCardName, setSelectedCardName] = useState('');
  const [tentatives, setTentatives] = useState(0);
  const [rightGuess, setRightGuess] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const headers = {
    'X-Api-Key': import.meta.env.VITE_API_KEY,
  };

  useEffect(() => {
    setImageLoaded(false);
    // Fetch random card data
    axios.get("http://127.0.0.1:8000/api/getRandomCard", { headers })
      .then((response1) => {
        const cardData = response1.data;
        setCard(cardData);
        console.log(cardData);

        // Fetch all card names
        axios.get("http://127.0.0.1:8000/api/getAllCardNames", { headers })
          .then((response2) => {
            //Set for unique card
            const cardNames = [...new Set(response2.data.map((card) => card.name))];
            setAllCardNames(cardNames);
          })
          .catch((error2) => {
            console.error("Error loading card names:", error2);
          });

        // Fetch card image
        axios.get(`http://127.0.0.1:8000/api/getCardImageWithoutName/${cardData.cardId}`,
          {
            responseType: 'arraybuffer',
            headers: {
              'X-Api-Key': import.meta.env.VITE_API_KEY,
            }
          })
          .then((response) => {
            const imageBlob = new Blob([response.data], { type: 'image/png' });
            const imageUrl = URL.createObjectURL(imageBlob);
            setCardImage(imageUrl);
            setImageLoaded(true);
          })
          .catch((error) => {
            console.error("Error loading image:", error);
          });
      })
      .catch((error1) => {
        console.error("Error in loading random card:", error1);
      });

  }, []);

  // If we get the right card name
  useEffect(() => {
    if (rightGuess) {
      handleRightGuess();
    }
  }, [rightGuess]);

  const handleRightGuess = () => {
    // TODO : Call axios pour update le nombre de tentatives globales et perso
  };

  return (
    <>
      <h2>Infinite</h2>
      <h3>Guess the card's name</h3>
      <CardImage imageUrl={cardImage} altText="Card to Guess" imageLoaded={imageLoaded} />
      <br />
      <CardNameInput
        allCardNames={allCardNames}
        selectedCardName={selectedCardName}
        setSelectedCardName={setSelectedCardName}
      />
      <SubmitCardNameButton
        selectedCardName={selectedCardName}
        card={card}
        onRightGuess={setRightGuess}
      />
      <TentativeCounter
        tentatives={tentatives}
      />
      <div>{rightGuess.toString()}</div>
    </>
  );
}
