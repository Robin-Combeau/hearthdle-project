import React from 'react';

export default function CardImage({ imageUrl, altText, imageLoaded = true }) {
    return (
        <div>
            {imageLoaded ? (
                <img src={imageUrl} alt={altText} />
            ) : (
                <img width="375px" height="517px" src="../../public/images/cards/loading.png" alt="Loading Image" />
            )}
        </div>
    );
}