import React from "react";
import "./style.css";

const IconWithText = ({ icon,title, text, reverse, pointer, onClick, className }) => {
  // Define classes to apply to the container div
  const containerClasses = pointer ? "pointer" : ""; // Add pointer class if pointer prop is true
  const combinedClasses = `iconWithText ${className} ${containerClasses}`; // Combine classes

  return (
    <div className={combinedClasses} onClick={onClick}>
      {!reverse ? (
        <div className="iconWithText">
          <span className="_icon"> {icon}</span>
          <div className="text_content">
            {
              title &&
            <div className="iconWithTextHeader">{title}</div>
            }
            <span className="iconWithTextTitle">{text}</span>
          </div>
        </div>
      ) : (
        <div className="iconWithText">
          <span className="iconWithTextTitle">{text}</span>
          <span>{icon}</span>
        </div>
      )}
    </div>
  );
};

export default IconWithText;
