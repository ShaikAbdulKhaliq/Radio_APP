import { useState } from "react";
import "./EventCard.css";
import { useNavigate } from "react-router-dom";

export default function EventCard({ card_item }) {
  let navigate = useNavigate();
  console.log(card_item+"eventcard");
  const [expandedCard, setExpandedCard] = useState(null);
  let [secclick, setsecclick] = useState(0)
  const handleCardClick = (index) => {
    setsecclick(secclick + 2)
    console.log(secclick);
    setExpandedCard(expandedCard === index ? null : index);
    if (secclick === 2) {
      navigate("/events/moredetails")
    }
  };
  return (
    <div className="MainContainer">
      {card_item?.map((card, index) => (
        <div
          key={index}
          className={`all-events-tab-event-cards ${expandedCard !== null ? "expanded" : ""}`}
          style={{
            zIndex: index === 0 && expandedCard === null ? index - 1 : "auto",
            width: expandedCard !== null ? "90%" : `${80 + (index - 1.2) * 12}%`,
            transform: expandedCard !== null ? "none" : `translateY(${index === 0 ? 50 : index === 1 ? 90 : index === 2 ? 160 : 0}px) translateX(${index === 1 ? 10 : index === 2 ? 0 : 46}px) rotate(${index === card_item?.length - 1 ? 0 : (index % 2 === 0 ? 6 : -6)}deg) skewX(${index === card_item?.length - 1 ? 0 : (index % 2 === 0 ? 13 : -13)}deg)`
            ,
          }}
          onClick={() => handleCardClick(index)}
        >
          <div className="all-events-tab-event-cards-row-1">
            {card?.genre}
            {/* Favorite heart svg */}
            <div className="all-events-tab-event-cards-Subrow-1">
              <div> <img src={"/images/Favorite Heart.png"} alt="Favorite Heart"/></div>
              <div> <div className="all-events-tab-event-cards-row-1-price">
              $ {card?.price} onwards
            </div></div>
            </div>
          </div>
          <div className="all-events-tab-event-cards-row-2">
            <span>{card?.artist_name}</span>
            <span>{card?.time}</span>
          </div>
          <div className="all-events-tab-event-cards-row-3">
            <span>{card?.venue}</span>
            <span>{card?.date}</span>
          </div>
          <div className="all-events-tab-event-cards-row-4">
            
            <div className="image image1">
              <img src={`${card?.artist_images[0]}`} alt="img" />
            </div>
            <div className="image image2">
              <img src={`${card?.artist_images[1]}`} alt="img" />
            </div>
            <div className="image image3" id="Artist_img3">
              <img src={`${card?.artist_images[2]}`} alt="img" />
            </div>
          </div>
        </div>
      ))}
    </div>)
}
