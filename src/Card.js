import React, { useState, useEffect } from "react";
import "./Card.css";
import calendarIcon from "./images/calendar.png";
const Card = (props) => {
  const { title, content, imageUrl, dateAdded } = props;
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [fontSize, setFontSize] = useState(18);
  const [imageSize, setImageSize] = useState(200);

  const checkWindowSize = () => {
    if (window.innerWidth < 600) {
      setImageSize(130);
      setFontSize(7);
    } else if (window.innerWidth < 900 && window.innerWidth >= 600) {
      setFontSize(12);
      setIsTextVisible(true);
      setImageSize(180);
    } else {
      setFontSize(18);
      setIsTextVisible(true);
      setImageSize(200);
    }
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  });

  return (
    <div className="card">
      {}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="card-image"
          style={{ width: imageSize, height: "100%" }}
        />
      )}

      <div className="card-text">
        {/* Render the title */}
        <h2 className="card-title" style={{ fontSize: fontSize * 2 }}>
          {title}
        </h2>

        {/* Render the content */}
        {isTextVisible && (
          <p className="card-content" style={{ fontSize: fontSize }}>
            {content}
          </p>
        )}

        {/* Render the date added with calendar icon */}
        <div className="date-added">
          <img src={calendarIcon} alt="Calendar" className="calendar-icon" />
          <span className="date-text">{dateAdded}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
