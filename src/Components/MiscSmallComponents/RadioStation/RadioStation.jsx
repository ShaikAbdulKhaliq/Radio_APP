import "./RadioStation.css"
import React from "react";
// import image1 from "./images/image 90.png"
// import image2 from "./images/Ellipse 829.png"
import { useNavigate } from "react-router-dom";
import BigjsonData from "../../../BigJsonData";
const Radio = ({top}) => {
    let navigate = useNavigate();

    return (
        <div className="radio-station-container" onClick={() => {
            navigate("/radiostations/radio");
        }} >


            <div className={`player-container ${top?"movetoBottom":""}`} >
                <div className="player-left-container">
                    <div className="logoradio"><img src={BigjsonData.RadioStation[0].Fmimg} alt="image" /></div>
                    <div className="live-container">
                        {/* <div className="red-live"><span></span></div> */}
                        <img src={'/images/RadioStationImg2.png'} />
                        <p>Live</p>
                    </div>
                </div>


                <div className="player-right-container">
                    <p>{BigjsonData.RadioStation[0].FmAlbum}
                        <br />
                        <span>{BigjsonData.RadioStation[0].FmName}</span>
                    </p>
                    <div className="player-control-container">

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_1045_13312)">
                                    <path d="M0.857178 23.1426L0.857178 0.856864" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23.1087 4.00951C23.1095 3.70111 23.0271 3.3982 22.8702 3.13265C22.7134 2.86711 22.4878 2.64888 22.2172 2.50094C21.9566 2.35043 21.661 2.27123 21.3601 2.27123C21.0592 2.27123 20.7636 2.35043 20.5029 2.50094L8.17723 10.558C7.93663 10.7134 7.7388 10.9266 7.60183 11.1782C7.46486 11.4297 7.39308 11.7116 7.39308 11.998C7.39308 12.2844 7.46486 12.5663 7.60183 12.8178C7.7388 13.0694 7.93663 13.2826 8.17723 13.438L20.5372 21.4266C20.7978 21.577 21.0934 21.6562 21.3944 21.6562C21.6953 21.6562 21.9909 21.577 22.2515 21.4266C22.522 21.2786 22.7476 21.0603 22.9045 20.7948C23.0614 20.5293 23.1438 20.2264 23.1429 19.918L23.1087 4.00951Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1045_13312">
                                        <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>


                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_2485_5631)">
                                    <path d="M6.85712 0.856934H2.5714C1.62463 0.856934 0.857117 1.62444 0.857117 2.57122V21.4284C0.857117 22.3752 1.62463 23.1426 2.5714 23.1426H6.85712C7.80388 23.1426 8.5714 22.3752 8.5714 21.4284V2.57122C8.5714 1.62444 7.80388 0.856934 6.85712 0.856934Z" fill="white" />
                                    <path d="M21.4285 0.856934H17.1428C16.196 0.856934 15.4285 1.62444 15.4285 2.57122V21.4284C15.4285 22.3752 16.196 23.1426 17.1428 23.1426H21.4285C22.3753 23.1426 23.1428 22.3752 23.1428 21.4284V2.57122C23.1428 1.62444 22.3753 0.856934 21.4285 0.856934Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2485_5631">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>


                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_1045_13319)">
                                    <path d="M23.1428 0.857422V23.1431" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M0.891348 19.9905C0.890506 20.2989 0.972867 20.6018 1.12975 20.8673C1.28664 21.1329 1.51224 21.3511 1.78277 21.4991C2.04338 21.6496 2.339 21.7288 2.63991 21.7288C2.94084 21.7288 3.23645 21.6496 3.49706 21.4991L15.8228 13.442C16.0634 13.2866 16.2612 13.0734 16.3982 12.8218C16.5351 12.5703 16.6069 12.2884 16.6069 12.002C16.6069 11.7156 16.5351 11.4337 16.3982 11.1822C16.2612 10.9306 16.0634 10.7174 15.8228 10.562L3.46277 2.57341C3.20216 2.42295 2.90655 2.34375 2.60563 2.34375C2.30472 2.34375 2.00909 2.42295 1.74848 2.57341C1.47795 2.72144 1.25235 2.9397 1.09547 3.2052C0.938582 3.4707 0.85622 3.7736 0.857062 4.08198L0.891348 19.9905Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1045_13319">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}
export default Radio;