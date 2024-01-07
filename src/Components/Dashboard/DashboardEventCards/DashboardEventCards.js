import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardEventCards.css";
import CircularNavbar from "../../CircularNavbar/CircularNavbar";
import BigjsonData from "../../../BigJsonData";

export default function DashboardEventCards() {
  let [changesize, setchangesize] = useState(false)
  let [popup, setpopup] = useState(false)
  let Navigate = useNavigate()
  const handlesize = () => {
    console.log("ok");
    setchangesize(rev => !rev)
  }
  const handleletsgopopup = () => {
    setpopup(rev => !rev)
  }
  return (
    <div className="dashboard-event-cards">
      <div className="dashboard-popular-header">
        <div className="dashboard-popular-City_header">
          <p>Popular in Vegas</p>
          <span>
            <img src={"/svg/DashboardEventCardArrowRight.svg"} alt="arrow_right" />
          </span>
        </div>
        <div className="dashboard-popular-Recommendation">
          <p>14 recommendations</p>
        </div>
      </div>

      <div className="dashboard-cards-collection" onClick={handlesize}>
        {BigjsonData.PopularInCities.map((eve, i) => {
          const reversedIndex = BigjsonData.PopularInCities.length - i - 1;
          let zIndexValue = 0;
          let translateXValue = 0;
          let translateYValue = 0;
          let maxHeightValue = 0;
          let boxShadowValue = "";
          let display = ""
          let width

          if (i === 0) {
            zIndexValue = 1;
            translateXValue = "35%";
            translateYValue = "13px";
            maxHeightValue = "43vh";
            display = changesize ? "none" : "block"
            width = "54%"
          } else if (i === 1) {
            zIndexValue = 2;
            translateXValue = "-27%";
            translateYValue = "14px";
            maxHeightValue = "44vh";
            display = changesize ? "none" : "block"
            width = "54%"
          } else if (i === 2) {
            zIndexValue = 3;
            maxHeightValue = changesize ? "28vh" : "47vh";
            translateXValue = changesize ? "-18%" : "0%";
            boxShadowValue = changesize ? "" : "10px 0px 150px black"; // Example box-shadow value
            width = changesize ? "90%" : "54%"
            display = "block";

          }

          return (
            <div
              key={i}
              className={`dashboard-cards-collection-front-card${changesize ? " changesize" : ""}`}
              style={{
                zIndex: zIndexValue,
                transform: `translate(${translateXValue}, ${translateYValue})`,
                maxHeight: maxHeightValue,
                background: `url(${BigjsonData.PopularInCities[reversedIndex].ImageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                boxShadow: boxShadowValue,
                display: display,
                width: width
              }}
            >
              <div className='dashboard-card-mode-setting'>
                <div className="dashboard-card-mode-setting-heart-circle">
                <img src={i === 1 ? "/images/dashboardcardlike.png" : "/images/dashboardcardslove.png"} alt="Favorite Heart1a" />
                </div>
                <div className="dashboard-card-mode-setting-text">

                  <div className="dashboard-card-mode-setting-text-1">{BigjsonData.PopularInCities[reversedIndex]?.Visitplace}</div>
                  <div className="dashboard-card-mode-setting-text-2">
                    {BigjsonData.PopularInCities[reversedIndex]?.ExactTime}
                  </div>
                </div>
              </div>
              <div className={`dashboard-cards-collection-front-card-text${changesize ? "-manipulation" : ""}`}>
                <span>{BigjsonData.PopularInCities[reversedIndex]?.TotalPeriod}</span>
                <p>{BigjsonData.PopularInCities[reversedIndex]?.Name.split(' ').map((word, index) => (
                  <React.Fragment key={index}>
                    {word}
                    {index !== 0 && <br />} {/* Add <br> tag after the first word */}
                  </React.Fragment>
                ))}</p>
              </div>
            </div>
          );
        })}
      </div>
      {changesize && (<div className="dashboard-event-cards-bestbuy" >
        <img src={"/svg/DashboardEventCardsmalldots.svg"} alt="smalldots" className="smalldots" />
        <img src={"/svg/DashboardEventCardbestbuy.svg"} alt="bestbuy" className="bestbuy" />
      </div>)}
      <div className="dashboard-event-cards_letsgo_parent">
        <div className="dashboard-event-cards_letsgo_content1">
          <p className="event-pop" onClick={handleletsgopopup}>Let’s Go</p>
          {/* <img src={"/svg/DashboardEventCardCircle Clock.svg"} alt="circleclock"/> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="showDetails" onClick={() => Navigate("/events/details")}>
            <g clip-path="url(#clip0_2025_15124)">
              <path d="M14 27C21.1798 27 27 21.1798 27 14C27 6.8203 21.1798 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1798 6.8203 27 14 27Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 9V14L19.08 19.92" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_2025_15124">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="dashboard-event-cards_letsgo_content2">
          <p>Happening now in Vegas</p>
        </div>
      </div>
      {/* <DashboardLetsGoPanel /> */}
      <CircularNavbar />
      {popup && (<div className="dashboard-event-cards-Lets-go-popup" onClick={handleletsgopopup}>
        <img
          src={"/svg/DashboardEventCardHome Indicator.svg"}
          alt="HomeIndicator"
          className="HomeIndicatorimg"
        />
        <div className="dashboard-event-cards-Lets-go-popup-header">
          <span >Happening in</span>{" "}
          <span >
            7 Days
          </span>{" "}
          <span>in Vegas</span>
        </div>
        <div className="Lets-go-popup-days1">8</div>
        <div className="Lets-go-popup-leftvector">
          <img
            src={"/svg/DashboardEventCardLeftVector.svg"}
            alt="LeftVector"
            className="leftvectorimg"
          />
          <div className="Lets-go-popup-days2">7</div>
          <div className="Lets-go-popup-nodays">Days</div>
          <img
            src={"/svg/DashboardEventCardRightVector.svg"}
            alt="RightVector"
            className="RightVectorimg"
          />
        </div>
        <div className="Lets-go-popup-footer">
          <div className="Lets-go-popup-footer-days">6</div>
          <div className="Lets-go-popup-footer-hours">Hours</div>
        </div>
      </div>)}
    </div>
  );
}
