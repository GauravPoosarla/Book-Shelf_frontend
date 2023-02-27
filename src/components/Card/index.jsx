import React from "react";
import cover_image from "../../assets/cover_image.jpeg";
import heartRed from "../../assets/heart-red.svg";
import heartBlack from "../../assets/heart-black.svg";
import { useState } from "react";

import "./Card.css";

const Card = ({ data, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const colorBackground = index % 2 === 0 ? "orange" : "white";
  const colorFont = index % 2 === 0 ? "black" : "orange";

  return (
    <div className="card">
      <div className="card-image">
        <img src={cover_image} alt="book" />
      </div>
      <div
        className={`card-content card-${colorBackground} card-font-${colorFont}`}
      >
        <div className="card-name">
          <p>{data.Name}</p>
        </div>
        <div className="engagements">
          <p>{data.rating}</p>
          {isLiked ? (
            <img
              src={heartRed}
              alt="heart"
              onClick={() => setIsLiked(!isLiked)}
            />
          ) : (
            <img
              src={heartBlack}
              alt="heart"
              onClick={() => setIsLiked(!isLiked)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
