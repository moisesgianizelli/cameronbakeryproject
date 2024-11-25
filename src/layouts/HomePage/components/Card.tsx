// Card.js
import React from "react";

interface CardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, price, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
