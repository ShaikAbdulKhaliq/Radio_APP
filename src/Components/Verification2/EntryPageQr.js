import { RunDemo } from "../../scripts/DemoFInal";
import "./EntryPageQr.css";
import { useNavigate } from "react-router-dom";

export default function EntryPageQr() {
  let navigate = useNavigate();

  return (
    <div className="qrbg">
      <div className="qrbg2">
        <div className="qrbg3">
          <div className="EntryPageQr ">
            <img
              id="QR"
              src={"/images/EntryPageqr.png"}
              alt="EntryPaper"

              onClick={() => {
                navigate("/phone");
              }}
            />
            <br />

            <span>Scan QR for Hear, here experience!</span>
            <div
              className="rundemo"
              onClick={() => {
                RunDemo();
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
