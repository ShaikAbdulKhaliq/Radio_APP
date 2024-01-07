
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CircularNavbar.css";

export default function CircularNavbar() {
  let [navbarClosed, setNavbarClosed] = useState(false);
  let navigate = useNavigate();

  return (
    <div className="circular-nav-bar ">
      <div
        className="circular-nav-bar-closed"
        onClick={() => {
          setNavbarClosed((prev) => !prev);
        }}
      >
        {/* svg to render 3 lines like hamburger menu  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="white"
          className="circular-nav-bar-hamburger"
        >
          <path
            d="M2 6h20M2 12h20M2 18h20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="circular-nav-bar-open-1 "
        style={{ display: navbarClosed ? "block" : "none" }}
      >

        <img src={"/images/CirCularNavbarFavorite Heart.png"}
          className="img"
          onClick={() => {
            navigate("/events/favorites");
          }}
        />
      </div>
      <div
        className="circular-nav-bar-open-2"
        style={{ display: navbarClosed ? "block" : "none" }}
      >
        <img src={"/images/CirCularNavbarTicket.png"} />
      </div>
      <div
        className="circular-nav-bar-open-3"
        style={{ display: navbarClosed ? "block" : "none" }}
      >
        <img
          src={"/images/CirCularNavbarCalendar Event.png"}
          className="img3"
          onClick={() => {
            navigate("/events/all");
          }}
        />
      </div>
      <div
        className="circular-nav-bar-open-blur"
        style={{ display: navbarClosed ? "block" : "none" }}
      ></div>
    </div>
  );
}

