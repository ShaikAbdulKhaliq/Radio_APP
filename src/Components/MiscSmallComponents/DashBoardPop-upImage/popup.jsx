import React, { useState } from 'react';
import './pop-up.css';
import { useNavigate } from "react-router-dom";

const HoverPopup = () => {
  let navigate = useNavigate();
  const [isHovered, setHovered] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleTogglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="image-container" onMouseEnter={handleMouseEnter}   >
      <img src={"/images/DashBoardpop-upimageEllipse 1218.png"} alt="Hover Image" className="hover-image" onClick={handleTogglePopup}/>

      {isPopupVisible && (
        <div className="popup-content">
          <div
            className="speech-box"
            onClick={() => {
              navigate("/place");
            }}
          >
            <p className="sp1">
              Hey! You are near <span className="span">High Roller</span>
            </p>
            <p className="sp2">click to know more</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverPopup;
