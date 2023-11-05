import React from 'react';

export default function CardImage({ imageUrl, altText, imageLoaded = true }) {
    return (
        <div>
            {imageLoaded ? (
                <div>
                    <img width="375px" height="517px" src={imageUrl} alt={altText} />
                </div>
            ) : (
                <div>
                    <img width="375px" height="517px" src="/images/cards/loading_ajusted.webp" alt="Loading Image" />
                </div>
            )}
        </div>
    );
}