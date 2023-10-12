import React from 'react';

export default function CardImage({ imageUrl, altText, imageLoaded = true }) {
    return (
        <div>
            {imageLoaded ? (
                <div className="card-image-container">
                    <img className="card-to-guess" src={imageUrl} alt={altText} />
                </div>
            ) : (
                <div className="card-image-container">
                    <img className="card-to-guess" width="375px" height="517px" src="/images/cards/loading.webp" alt="Loading Image" />
                </div>
            )}
        </div>
    );
}