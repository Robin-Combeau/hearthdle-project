import React, { useEffect, useState } from 'react'
import axios from "axios";
import CardNameInput from '../components/CardNameInput';
import SubmitCardNameButton from '../components/SubmitCardNameButton';
import TentativeCounter from '../components/TentativeCounter';
import CardImage from '../components/CardImage';
import PageMainTitle from '../components/PageMainTitle';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import GamemodeTitle from '../components/GamemodeTitle';
import { Link } from 'react-router-dom';

export default function Standard() {
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
    axios.get("http://127.0.0.1:8000/api/gamemode/daily/getLatestDailyCard", { headers })
      .then((response1) => {
        const cardData = response1.data;
        console.log(cardData);
        setCard(cardData);

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
        console.error("Error in loading card:", error1);
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
    <div className="page">
      <PageMainTitle />
      <div className="card-and-infos">
        <CardImage imageUrl={cardImage} altText="Card to Guess" imageLoaded={imageLoaded} />
        <div className="game-infos">
          <GamemodeTitle title="Standard" image="/images/logos/gamemodes/standard.webp" />
          <div className="text-bubble text-bubble-side">
            <p>Attempts</p>
            <div className="tentatives">{tentatives}</div>
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
      {/* <div>{rightGuess.toString()}</div> */}

      <Footer />
    </div>
  );
}
