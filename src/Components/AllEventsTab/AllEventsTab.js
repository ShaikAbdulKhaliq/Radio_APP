import "./AllEventsTab.css";
import CircularNavbar from "../CircularNavbar/CircularNavbar";
import EventCard from "./EventCard/EventCard";
import BigjsonData from "../../BigJsonData";
import TopHalf from "../MiscSmallComponents/DashboardTopHalf/DashboardTopHalf";
import { useState } from "react";
import Radio from "../MiscSmallComponents/RadioStation/RadioStation";

export default function AllEventsTab() {
  let[top,settop]=useState(false)
  const handleclick=()=>{
      settop(Prev=>!Prev)
      console.log("handleclicked");
  }

  // to control view style of events cards
  let [tilted_view, set_tilted] = useState(true);
  return (
  
    <div className="all-events-Container_PARENT">
    <TopHalf handleclick={handleclick} />
      <Radio top={top}/>
      {tilted_view || (
        <div
          className="all-events-tab"
          onClick={() => {
            set_tilted(false);
          }}
        >
          {BigjsonData.concerts.reverse().map((card_item) => {
            return <EventCard card_item={card_item} />;
          })}
        </div>
      )}

      {!tilted_view || (
        <div
          className="all-events-tab"
          style={top?{top:"-14vh",height:"53vh"}:{top:"0"}}
        >
          <EventCard card_item={BigjsonData.concerts} />;
        </div>
      )}
      <CircularNavbar />
    </div>
      
  );
}
