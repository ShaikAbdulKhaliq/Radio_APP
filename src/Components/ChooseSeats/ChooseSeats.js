import "./ChooseSeats.css";
import SeatCircle from "./SeatCircle/SeatCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BigjsonData from "../../BigJsonData";
export default function ChooseSeats() {
  let navigate = useNavigate();

  let seat_rows = 7;
  let seat_columns = 15; // used to render number of seats
  let ticket_price = 24.0;
  let booked_seats = [
    92, 34, 19, 75, 56, 2, 103, 43, 88, 10, 94, 27, 81, 51, 69, 12, 8, 45, 99,
    63,
  ]; // temporarily used to render booked seats

  let color_selection = "circle"; // this is used to choose color of each seat circle
  let [seats, set_seats] = useState(0); // initially seats selected is 0
  let [show_ticket, set_show_ticket] = useState(false);

  return (
    <div className="choose-seats">
      <div className="choose-seats-event" onClick={()=>navigate("/seats/stage")}>
        <img className="choose-seats-event-arrow" src={'/svg/ChooseSeatsarrow.svg'} />
        <div className="choose-seats-event-details">
          {BigjsonData.concerts[2].artist_name} <br />
         {BigjsonData.concerts[2].date}<span>{BigjsonData.concerts[2].time}</span>
        </div>
      </div>
      <div
        className="choose-seats-stage"
        style={{ marginTop: show_ticket ? "60px" : "0px" }}
      >
        {/* svg to render stage line  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="344"
          height="51"
          viewBox="0 0 344 51"
          fill="none"
        >
          <g filter="url(#filter0_d_1045_13829)">
            <path
              d="M7.43609 40.2638C100.258 -9.73305 236.615 -7.50448 337 36.1535"
              stroke="#277CC2"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1045_13829"
              x="0.935547"
              y="0.584579"
              width="342.565"
              height="50.1797"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1045_13829"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1045_13829"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <span>Stage</span>
      </div>
      <div className="choose-seats-seat-map">
        <div className="choose-seats-circles">
          {/* Create array of seat rows * seat column  */}
          {Array.from({ length: seat_rows * seat_columns }).map(
            (num, index) => {
              color_selection = booked_seats.includes(index)
                ? "booked-circle"
                : "circle";
              return (
                <SeatCircle
                  key={index}
                  color_selection={color_selection}
                  set_seats={set_seats}
                />
              );
            }
          )}
        </div>
        <div className="choose-seats-legend">
          <div className="booked-circle"></div> Booked
          <div className="circle"></div> Available
          <div className="selected-circle"></div> Selected
        </div>
      </div>
      {/* ============================================= seat ticket price, details ================================= */}
      {show_ticket || (
        <div className="choose-seats-tickets">
          <div className="choose-seats-tickets-row-1">Available Tickets</div>
          <div className="choose-seats-tickets-row-2">
            <span>Cat 2B South</span>
            <span className="details">Details</span>
          </div>
          <div className="choose-seats-tickets-row-3">
            <img src={"/svg/ChooseSeatsi_icon.svg"} />
            <span>
              Tickets are not reserved yet. To secure your tickets, click,
              "Next."
            </span>
          </div>
          <div className="choose-seats-tickets-row-4">
            <div className="fees">
              Standard Admission
              <br />${ticket_price}+Fees
            </div>
            <div className="ticket-price">
              <img src={"/svg/ChooseSeatsplus.svg"} />
              <span>{seats}</span>
              <img
                src={"/svg/ChooseSeatsminus.svg"}
                onClick={() => {
                  set_seats((prev) => {
                    if (prev === 0) {
                      return 0;
                    } else {
                      return prev - 1;
                    }
                  });
                }}
              />
            </div>
          </div>
          <div className="choose-seats-tickets-row-5">
            <img src={"/svg/ChooseSeatscards_icon.svg"} />
            <span>Buy now, Pay later at checkout</span>
            <img className="i-icon" src={"/svg/ChooseSeatsi_icon.svg"} />
          </div>
          <div className="choose-seats-tickets-row-6">
            <span>Subtotal</span>
            <span>{ticket_price * seats}$</span>
          </div>
          <div className="choose-seats-tickets-row-7">{seats} tickets</div>
          <div
            className="choose-seats-tickets-row-8"
            onClick={() => {
              navigate("/Payment");
            }}
          >
            Next
          </div>
        </div>
      )}

      <div
        className="choose-seats-switch-button"
        onClick={() => {
          set_show_ticket((prev) => !prev);
        }}
      >
        Switch to {show_ticket ? "List" : "Map"}
      </div>
    </div>
  );
}
