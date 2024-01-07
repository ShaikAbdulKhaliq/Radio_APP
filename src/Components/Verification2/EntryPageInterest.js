import React from "react";
import "./EntryPageInterest.css";
import { useNavigate } from "react-router-dom";
import BigjsonData from "../../BigJsonData";
export default function EntryPageInterest() {
    let navigate=useNavigate()
  return (
    <div className="main-container">
      <p className="para ">
        What are you interested in? <br />
      </p>
      <p className="para-2 ">Pick any 5 to explore in Vegas!</p>
      <div className="skip-container" onClick={()=>navigate("/dashboard")}>Skip</div>
      <div>
        <div className="scrollable-image-style">
          {BigjsonData.Genre.map((image,i) => (
            <div className="my-container" key={i}>
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="card-img-top"
              />
              <span>{image.title}</span>
            </div>
          ))}
        </div>
        <div className="save_btn_Container">
          <button
            className="save-btn"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
}