import "./EntryPageOtp.css";
import { useNavigate } from "react-router-dom";

export default function EntryPageOtp() {
  let navigate = useNavigate();
  return (
    <div className="otpbg">
      <div className="entry-page-phone">
        <div className="logo-mainContainer">
          <div className="img-container">
            <img src={'/images/Screenlogo.png'} alt="Screenlogo" className="logoImg"></img>

          </div>
        </div>
        <div className="entry-page-otp-boxes-row">
          <div className="entry-page-otp-box"></div>
          <div className="entry-page-otp-box"></div>
          <div className="entry-page-otp-box"></div>
          <div className="entry-page-otp-box"></div>
        </div>
        <div className="info-Container-otp">
          <div className="infoTag">
            <p>Didn’t receive the OTP? Resend OTP</p>
          </div>
        </div>
        <div className="buttonContainer">
          <div className="buttonTagContainer">
            <button
              className="buttonTag-otp"
              onClick={() => {
                navigate("/details");
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
