import React from "react";
import "./stations.css"
import Radio from "../RadioStation/RadioStation";
import { useNavigate } from "react-router-dom";
import BigjsonData from "../../../BigJsonData";
const Station = () => {
  let navigate = useNavigate();
  return (
    <div className="MainStation">
      <div className="mainnav">
        <div className="arrowimg" onClick={() => {
          navigate("/dashboard");
        }} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_1045_16899)">
              <path d="M15.5 8L0.5 8" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.5 1L0.5 8L7.5 15" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1045_16899">
                <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
              </clipPath>
            </defs>
          </svg>

        </div>

        <div className="rightnav">

          <div className="Searchnav">
            <label htmlFor="showInput"></label>
            <input
              type="text"
              id="showInput"
              placeholder="Have a radio station in mind?"

            />
          </div>
          <div className="images2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <g clip-path="url(#clip0_1045_16905)">
                <path d="M0.981347 9.40524C1.29169 10.1355 1.74282 10.7974 2.30899 11.3533C2.87516 11.9092 3.54528 12.3481 4.28108 12.6451C5.01688 12.942 5.80396 13.091 6.59737 13.0838C7.39079 13.0765 8.175 12.913 8.90524 12.6027C9.63547 12.2923 10.2974 11.8412 10.8533 11.275C11.4092 10.7089 11.8481 10.0388 12.145 9.30295C12.442 8.56715 12.591 7.78007 12.5838 6.98666C12.5765 6.19324 12.413 5.40903 12.1027 4.67879C11.7923 3.94855 11.3412 3.28659 10.775 2.7307C10.2089 2.17481 9.53874 1.73588 8.80294 1.43897C8.06713 1.14206 7.28006 0.992984 6.48664 1.00025C5.69323 1.00752 4.90901 1.171 4.17878 1.48134C3.44854 1.79168 2.78658 2.24282 2.23069 2.80899C1.6748 3.37516 1.23587 4.04528 0.938965 4.78108C0.642056 5.51688 0.492982 6.30396 0.500254 7.09737C0.507526 7.89079 0.671001 8.675 0.981347 9.40524Z" stroke="white" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.8125 11.3125L15.4985 15.9992" stroke="white" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1045_16905">
                  <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>

          </div>

        </div>
      </div>

      <div class="mini-container">
        {BigjsonData.RadioGenres.map((gen,i)=>{
          return<p>{gen}</p>
        })}
      </div>
        {
          BigjsonData.RadioStation.map((fm,i)=>{
            return(
              <>
                  <div className="stationdiv">
        <div className="imageleft">
          <img src={fm.Fmimg} className="perfectimg" />
        </div>

        <div className="texts">
          <p className="txt1">{fm.FmAlbum}</p>
          <p className="txt2">{fm.FmName}</p>
        </div>

        <div className="rightdivs">
          <div className="imgtxt">
            <img className="imgdot" src={"/images/RadioChannelsEllipse 829.png"} />
            <p className="livetxt">Live</p>

          </div>
          <div className="imggraph">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_1310_1246)">
                <path d="M1.71484 9.42969V14.5725" stroke="white" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.85742 5.14258V18.8569" stroke="white" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.001 0.857422V23.1431" stroke="white" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.1436 5.14258V18.8569" stroke="white" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.2861 9.42969V14.5725" stroke="white" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1310_1246">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

        </div>

      </div>
      <div className="svgline">
        <svg xmlns="http://www.w3.org/2000/svg" width="360" height="2" viewBox="0 0 358 2" fill="none">
          <path d="M0 1H358" stroke="url(#paint0_linear_1045_16926)" />
          <defs>
            <linearGradient id="paint0_linear_1045_16926" x1="0.000531337" y1="1.49879" x2="283.501" y2="126.499" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

              </>
            )
          })
        }
     
      

      <div className="radlast">
        <Radio />
      </div>
    </div>
  )
}
export default Station;