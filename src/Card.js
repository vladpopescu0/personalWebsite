import React from 'react';
import './Card.css';

const Card = (props) => {
  const { title, content, imageUrl } = props;

  return (
    <div className="card">
      {/* Render the title */}
      <h2 className="card-title">{title}</h2>
      
      {/* Render the image if an imageUrl is provided */}
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}

      {/* Render the content */}
      <p className="card-content">{content}</p>
    </div>
  );
}

export default Card;
