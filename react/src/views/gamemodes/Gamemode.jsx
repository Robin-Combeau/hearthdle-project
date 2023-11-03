import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardNameInput from '../components/CardNameInput';
import CardImage from '../components/CardImage';
import GamemodeTitle from '../components/GamemodeTitle';
import TentativeCounter from '../components/TentativeCounter';
import PageMainTitle from '../components/PageMainTitle';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function GameMode({ gamemode }) {
  const [card, setCard] = useState({});
  const [cardImage, setCardImage] = useState('');
  const [allCardNames, setAllCardNames] = useState([]);
  const [selectedCardName, setSelectedCardName] = useState('');
  const [tentatives, setTentatives] = useState(0);
  const [rightGuess, setRightGuess] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const headers = {
    'X-Api-Key': import.meta.env.VITE_API_KEY,
  };

  const fetchAllCardNames = () => {
    axios.get(`${apiBaseUrl}/getAllCardNames`, { headers })
      .then((response) => {
        const cardNames = [...new Set(response.data.map((card) => card.name))];
        setAllCardNames(cardNames);
      })
      .catch((error) => {
        console.error("Error loading card names:", error);
      });
  };

  const fetchCardData = () => {
    setImageLoaded(false);

    axios.get(`${apiBaseUrl}/gamemode/card/get/${gamemode}`, { headers }) // Use the gamemode prop
      .then((response) => {
        const cardData = response.data.data;
        setCard(cardData);
        setCardImageFromApi(cardData.cardId);
      })
      .catch((error) => {
        console.error("Error loading card:", error);
      });
  };

  const setCardImageFromApi = (cardId) => {
    axios.get(`${apiBaseUrl}/getCardImageWithoutName/${cardId}`, {
      responseType: 'arraybuffer',
      headers,
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
  };

  useEffect(() => {
    fetchAllCardNames();
    fetchCardData();
  }, [gamemode]);

  useEffect(() => {
    if (rightGuess) {
      handleRightGuess();
    }
  }, [rightGuess]);

  const handleRightGuess = () => {
    // TODO: Call an axios function to update the number of attempts globally and personally
  };

  return (
    <div className="page">
      <PageMainTitle />
      <div className="card-and-infos">
        <CardImage imageUrl={cardImage} altText="Card to Guess" imageLoaded={imageLoaded} />
        <div className="game-infos">
          <GamemodeTitle title={gamemode} image={`/images/logos/gamemodes/${gamemode.toLowerCase()}.webp`} />
          <div className="text-bubble text-bubble-side">    
            <TentativeCounter tentatives={tentatives} />
          </div>
          <div className="text-bubble text-bubble-side scale">
            <Link to="/how-to-play">How to play</Link>
          </div>
        </div>
      </div>

      <div className="input-card-name-div">
        <CardNameInput
          allCardNames={allCardNames}
          selectedCardName={selectedCardName}
          setSelectedCardName={setSelectedCardName}
          card={card}
          onRightGuess={setRightGuess}
          tentatives={tentatives}
          setTentatives={setTentatives}
        />
      </div>

      <div className="text-bubble text-bubble-small">
        <p>XX people already found out</p>
      </div>
      <Footer />
    </div>
  );
}

export default GameMode;
