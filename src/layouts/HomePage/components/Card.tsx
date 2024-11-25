import React from "react";

interface CardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, price, imageSrc }) => {
  return (
    <div className="card shadow-sm">
      <div
        className="card-img-wrapper"
        style={{
          width: "100%",
          height: "200px", // Fixed height for all cards
          overflow: "hidden",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="fw-bold">{price}</p>
      </div>
    </div>
  );
};

export default Card;
