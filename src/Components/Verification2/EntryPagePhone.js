import "./EntryPagePhone.css";
import { useNavigate } from "react-router-dom";

export default function EntryPage() {
  let navigate = useNavigate();
  return (
    <div className="bg2">
      <div className="entry-page-phone1">
        <div className="logo-mainContainer">
          <div className="img-container">
            <img src={"/images/Screenlogo.png"} alt="Screenlogo" className="logoImg"></img>
          </div>
        </div>
        <div className="inputBox-container">
          <div className="inputTagContainer">
            <input type="number" className="inputPhNo" id="inputPhNo" placeholder="Phone Number" />
          </div>
        </div>
        <div className="info-Container-phone">
          <div className="infoTag">
            <p>We will send you one-time password to your mobile number</p>
          </div>
        </div>
        <div className="buttonContainer">
          <div className="buttonTagContainer">
            <button
              className="buttonTag-phone"
              onClick={() => {
                navigate("/otp");
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
