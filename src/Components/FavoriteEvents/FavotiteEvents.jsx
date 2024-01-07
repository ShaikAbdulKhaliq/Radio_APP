import React from "react";
import "./FavotiteEvents.css";
import CircularNavbar from "../CircularNavbar/CircularNavbar";
// import HoverPopup from "../MiscSmallComponents/DashBoardPop-upImage/popup";

import { useNavigate } from "react-router-dom";
import BigjsonData from "../../BigJsonData";
const Fav = () => {
    let navigate = useNavigate()
    return (
        <div className="fav-container">

            <div className="main1">

                <div className="leftm1">
                    <img src={'/images/Favoriteimage 94.png'} />
                </div>
                <div className="rightm1">
                    <p>Your Favourite Events</p>
                </div>

            </div>

            <div className="main2">

                <div className="left2" onClick={() => navigate("/dashboard")}>
                    <svg className="arrowimg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_1045_16367)">
                            <path d="M15.5 8L0.5 8" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 1L0.5 8L7.5 15" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1045_16367">
                                <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className="right2">
                    <div className="search1">
                        <label htmlFor="showInput"></label>
                        <input
                            type="text"
                            id="showInputs"
                            placeholder="Search Events"

                        />
                    </div>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <g clip-path="url(#clip0_1045_16373)">
                                <path d="M0.981347 9.40524C1.29169 10.1355 1.74282 10.7974 2.30899 11.3533C2.87516 11.9092 3.54528 12.3481 4.28108 12.6451C5.01688 12.942 5.80396 13.091 6.59737 13.0838C7.39079 13.0765 8.175 12.913 8.90524 12.6027C9.63547 12.2923 10.2974 11.8412 10.8533 11.275C11.4092 10.7089 11.8481 10.0388 12.145 9.30295C12.442 8.56715 12.591 7.78007 12.5838 6.98666C12.5765 6.19324 12.413 5.40903 12.1027 4.67879C11.7923 3.94855 11.3412 3.28659 10.775 2.7307C10.2089 2.17481 9.53874 1.73588 8.80294 1.43897C8.06713 1.14206 7.28006 0.992984 6.48664 1.00025C5.69323 1.00752 4.90901 1.171 4.17878 1.48134C3.44854 1.79168 2.78658 2.24282 2.23069 2.80899C1.6748 3.37516 1.23587 4.04528 0.938965 4.78108C0.642056 5.51688 0.492982 6.30396 0.500254 7.09737C0.507526 7.89079 0.671001 8.675 0.981347 9.40524Z" stroke="white" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.8125 11.3125L15.4985 15.9992" stroke="white" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1045_16373">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>


            </div>
            <div>

            </div>
            {BigjsonData.FavouriteEvents.map((faveve, i) => {
                const isDimmed = i === 2 || i === 3; // Check if index is 2 or 3
                const textToShow = i === 2 ? 'Expired' : i === 3 ? 'Sold Out' : ''; // Text for index 2 and 3
                const dimmedTextStyles = {
                    top: i === 3 ? '60%' : 'auto' // Set top to 65vh for index 3
                  };
                return (
                    <div className={`main3 ${isDimmed ? 'dimmed' : ''}`} key={i}>
                        <div className="left3">
                            <img src={faveve.Favimg} alt="Event" />
                        </div>
                        <div className="mid3">
                            <div className="text1">
                                <p className="gp1">{faveve.EventName}</p>
                                <p className="gp2">{faveve.SubName}</p>
                            </div>
                            <div className="text2">
                                <p>{faveve.Date}</p>
                                <p>{faveve.Time}</p>
                            </div>
                        </div>
                        <div className="right3">
                            <p className="p1" id="p10">{faveve.Cost}</p>
                            <p className="p2" id="p20">onwards</p>
                        </div>
                        {isDimmed && <p className="dimmed-text" style={i === 3 ? dimmedTextStyles : {}}>{textToShow}</p>}
                    </div>
                );
            })}


            {/* <p className="exp" id="blur1">Expired</p>
              <p className="soldout" id="blur2">Sold Out</p> */}

            <div className="circ">
                <CircularNavbar />
            </div><div className="swi">
                <p>Swipe to remove from favourites</p>
            </div>

        </div>

    )
}
export default Fav;