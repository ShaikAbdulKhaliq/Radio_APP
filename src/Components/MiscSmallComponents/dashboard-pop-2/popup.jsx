import React, { useState } from 'react';
import './pop-up.css';
import { useNavigate } from "react-router-dom";

const HoverPopup2 = () => {
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
    <div className="image-container1" onMouseEnter={handleMouseEnter}   >
      <img src={"/images/dashboard-pop-2Ellipse 1218.png"} alt="Hover Image" className="hover-image1" onClick={handleTogglePopup}/>

      {isHovered && isPopupVisible && (
        <div className="popup-content">
          <div className="speech-box1">
            <p className='sp1'>Hey! You are near <span className='span'>LAS Vegas</span></p>
            <p className='sp2' onClick={() => {
            navigate("/place");
          }} >click to know more</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverPopup2;
