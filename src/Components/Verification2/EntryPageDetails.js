import "./EntryPageDetails.css";
import { useNavigate } from "react-router-dom";

export default function EntryPageDetails() {
  let navigate = useNavigate();
  return (
    <div className="bgdet1">
      <div className="bgdetails">
        <div className="entry-page-details">
          <div className="entry-page-details-row1-info">
            <div className="entry-page-details-row1-info-left">
              Enhance your dashboard by giving us this information
            </div>
            <div className="entry-page-details-row1-info-right" onClick={()=>navigate("/interest")}>Skip</div>
          </div>
          <div className="inputBox-container">
            <div className="inputTagContainer">
              <input className="entry-page-input-details" placeholder="Full Name" />
            </div>
          </div>
          <div className="inputBox-container">
            <div className="inputTagContainer">
              <input
                className="entry-page-input-details"
                placeholder="No of days in Vegas"
              />
            </div>
          </div>
          <div className="inputBox-container">
            <div className="inputTagContainer">
              <input
                className="entry-page-input-details"
                placeholder="Purpose of visit"
              />
            </div>
          </div>
          <div className="inputBox-container">
            <div className="inputTagContainer">
              <input
                className="entry-page-input-details"
                placeholder="How many guests?"
              />
            </div>
          </div>
          <div className="buttonContainer">
            <div className="buttonTagContainer-details">
              <button
                className="buttonTag"
                onClick={() => {
                  navigate("/interest");
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
