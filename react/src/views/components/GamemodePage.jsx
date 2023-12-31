import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardNameInput from '../components/CardNameInput';
import CardImage from '../components/CardImage';
import GamemodeTitle from '../components/GamemodeTitle';
import TentativeCounter from '../components/TentativeCounter';
import PageMainTitle from '../components/PageMainTitle';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import GamemodeButton from './GamemodeButton';

function GamemodePage({ gamemode }) {
    const gamemodeList = ['Standard', 'Wild', 'Classic']

    const [card, setCard] = useState({});
    const [cardImage, setCardImage] = useState('');
    const [allCardNames, setAllCardNames] = useState([]);
    const [selectedCardName, setSelectedCardName] = useState('');
    const [lastSubmittedCardName, setLastSubmittedCardName] = useState('');
    const [tentatives, setTentatives] = useState(0);
    const [rightGuess, setRightGuess] = useState(false);
    const [wrongGuess, setWrongGuess] = useState(false);
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
            setWrongGuess(false);
            handleRightGuess();
        }
    }, [rightGuess]);

    useEffect(() => {
        if (wrongGuess) {
            handleWrongGuess();
        }
        setWrongGuess(false);
    }, [wrongGuess]);

    const handleRightGuess = () => {
        // TO DO - store the data from the user
    };

    const handleWrongGuess = () => {
        if (allCardNames.includes(selectedCardName)) {
            setAllCardNames((prevCardNames) => prevCardNames.filter((name) => name !== selectedCardName));
        }
        setLastSubmittedCardName(selectedCardName);
    };

    return (
        <div className="min-h-screen flex flex-col items-center">
            <PageMainTitle />
            <div className="flex">
                <div className="w-56 mt-4">
                    <GamemodeTitle title={gamemode} image={`/images/logos/gamemodes/${gamemode.toLowerCase()}.webp`} />
                    <div className="flex flex-col items-center">
                        <TentativeCounter tentatives={tentatives} />
                        <div className="w-9/12 bg-black-85 rounded-lg text-beige text-center text-xl flex mt-4">
                            <p className="my-2 mx-4 leading-6">XX <br />people already found the card</p>
                        </div>
                        {lastSubmittedCardName && (
                            <div className="w-9/12 bg-black-85 rounded-lg text-beige text-center text-xl mt-4">
                                <p className="my-2 mx-4 leading-6">Your last try :</p>
                                <p className="my-2 mx-4 leading-6 text-yellow-gold">{lastSubmittedCardName}</p>
                            </div>
                        )}

                    </div>
                </div>
                <CardImage imageUrl={cardImage} altText="Card to Guess" imageLoaded={imageLoaded} />
            </div>
            <CardNameInput
                allCardNames={allCardNames}
                selectedCardName={selectedCardName}
                setSelectedCardName={setSelectedCardName}
                card={card}
                onRightGuess={setRightGuess}
                onWrongGuess={setWrongGuess}
                tentatives={tentatives}
                setTentatives={setTentatives}
            />

            {rightGuess && (
                <div className="w-auto bg-black-85 rounded-lg text-beige text-center text-xl my-2">
                    <h3 className="py-1 belwe text-yellow-gold text-3xl tracking-normal mt-2 mx-8 text-outline-thin" data-text={'Well done !'}>Well done !</h3>
                    <p className="py-4 px-8 leading-6">Next {gamemode} card in : XX:XX:XX</p>
                </div>
            )}

            {rightGuess && gamemodeList.includes(gamemode) && (
                <div className="w-auto bg-black-85 rounded-lg text-beige text-center text-xl my-2">
                    <h3 className="py-1 belwe text-yellow-gold text-3xl tracking-normal mt-2 mx-8 text-outline-thin" data-text={'Try out another mode !'} >Try out another mode ?</h3>
                    {gamemodeList.map((otherGamemode) => (
                        otherGamemode !== gamemode && (
                            <GamemodeButton
                                key={otherGamemode}
                                title={otherGamemode}
                                img={`/images/logos/gamemodes/${otherGamemode.toLowerCase()}.webp`}
                                link={`/gamemode/${otherGamemode.toLowerCase()}`}
                                size="small"
                            />
                        )
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
}

export default GamemodePage;