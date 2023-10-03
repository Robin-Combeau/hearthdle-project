import React from 'react';

export default function CardImage({ imageUrl, altText }) {
  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt={altText} />
      ) : (
        <img src={imageUrl} alt="Loading Image" /> // You can replace this with a placeholder or loading indicator
      )}
    </div>
  );
}