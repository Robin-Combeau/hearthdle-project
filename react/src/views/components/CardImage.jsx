import React from 'react';

export default function CardImage({ imageUrl, altText, imageLoaded = true }) {
    return (
        <div>
            {imageLoaded ? (
                <img className="card-to-guess" src={imageUrl} alt={altText} />
            ) : (
                <img className="card-to-guess" width="375px" height="517px" src="../../public/images/cards/loading.png" alt="Loading Image" />
            )}
        </div>
    );
}