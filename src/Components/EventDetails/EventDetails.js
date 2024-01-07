import "./EventDetails.css";
// import EventDetailsData from "../EventDetailsJsonData/EventDetailsJsonData";
import BigjsonData from "../../BigJsonData";
import { useNavigate } from "react-router-dom";
export default function EventDetails() {
    let EventDetailsData=BigjsonData.activities
    let navigate=useNavigate()
  return (
    <div className="EventDetails_Parent_Container">
      <div className="EventDetails-logo-header">
        <div className="EventDetails-logo" onClick={()=>navigate("/dashboard")}><img src={"/svg/EventDetailsArrow Down.svg"} alt="" /></div>
        <div className="EventDetails-pencilimg">
          <label htmlFor="showInput"></label>
          <input
            type="text"
            id="showInput"
            placeholder="48 hours"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M5.71439 14.4885L0.571533 15.9285L2.01153 10.7856L11.4287 1.41417C11.5351 1.30532 11.6623 1.21883 11.8025 1.15978C11.9428 1.10073 12.0936 1.07031 12.2458 1.07031C12.398 1.07031 12.5488 1.10073 12.6891 1.15978C12.8294 1.21883 12.9566 1.30532 13.063 1.41417L15.0858 3.44846C15.1929 3.5547 15.2779 3.6811 15.336 3.82037C15.394 3.95963 15.4239 4.10902 15.4239 4.25989C15.4239 4.41075 15.394 4.56014 15.336 4.69941C15.2779 4.83866 15.1929 4.96507 15.0858 5.07131L5.71439 14.4885Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div className='EventDetails_DAY_Container'>
        <p className="EventDetails_DAY1">DAY 1</p>
        <p className="EventDetails_DAY2">DAY 2</p>
      </div>
      <div className="EventDetails_Schedule_container">
           <div className="EventDetails_Schedule_Line">
              <img src={'/svg/EventDetailsscheduleLine.svg'} alt="scheduleLine"/>
           </div>
           <div className="EventDetails_Schedule_place_Time">
              {EventDetailsData.map((events,key)=>{
                return(
                  <div className="EventDetails_Schedule_place_Time_Cards_parent">
                     <p className="EventDetails_Schedule_ExactTime">{events.Time}</p>
                     <div className="EventDetails_Cards_header" style={{background: `url(${events.Banner})`}}>
                         <div className="EventDetails_Cards_place_genre">
                           <p className="EventDetails_Cards_place">{events.Place}</p>
                           <p className="EventDetails_Cards_genre">{events.genre}</p>
                         </div>
                         <div className="EventDetails_Cards_threedotscircle">
                          <img src={'/svg/EventDetailsthreedotscircle.svg'} alt="threedotscircle"/>
                         </div>
                     </div>
                  </div>
                )
              })}
           </div>
      </div>
    </div>
  )
}
