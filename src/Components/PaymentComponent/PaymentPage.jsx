import { useNavigate } from "react-router-dom"
import "./PaymentPage.css"

const PaymentPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use navigate to go to a different route
    navigate('/FillPayment');
  };
  return (
    <div id="payment_parent">
      <div id="payment_header">
        <div id="Payement_arrow_left" onClick={()=>navigate("/seats")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_1045_15623)">
              <path d="M15.5 8L0.5 8" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" />
              <path d="M7.5 1L0.5 8L7.5 15" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" />
            </g>
            <defs>
              <clipPath id="clip0_1045_15623">
                <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p id="payment_para">Payment</p>
      </div>
      <div className="Card_ticket_div">
        <div className="Card_ticket_header">BRUNO MARS CONCERT</div>
        <div className="Card_ticket_timing">
          <div className="Card_ticket_timing_div-4">Dec 31, 2023</div>
          <div className="Card_ticket_timing_div-5">11:00PM onwards</div>
        </div>
        <div className="Card_people_parent_container" />
        <div className="Card_people">
          <div className="Card_people_deatials">
            <div className="Card_people_deatials_div-9">Adults</div>
            <div className="Card_people_deatials_div-10">2</div>
          </div>
          <div className="Seats">
            <div className="Seats_div-12">Seats</div>
            <div className="Seats_div-13">1A, 1B</div>
          </div>
        </div>
        <div className="Ticket_total">
          <div className="Ticket_total_div-15">Subtotal</div>
          <div className="Ticket_total_div-16">$44</div>
        </div>
      </div>
      <div id="Person_Deatilas">
        <input type="text" placeholder="Full Name" id="Person_name" className="Details" />
        <div id="Sub_Details">
          <input type="text" placeholder="+1" id="country_code" className="Details" />
          <input type="text" placeholder="Phone Number" id="phone_number" className="Details" />
        </div>
        <input type="text" placeholder="Email iD" id="Email" className="Details" />
        <div id="Check_mail">
          <input type="checkbox" name="check" />
          <p>Send ticket info on mail</p>
        </div>
      </div>
      <div id="Add_payment_head">
        <p>Add a Payment Method</p><sup>*</sup>
      </div>
      <div id="Payment_card">
        <p>Credit & Debit Cards</p>
      </div>
      <div id="Add_payment_btn">
        <div id="plus_symbol_img"><img src={"/images/PaymentComponentAdd 2.png"} alt="" /></div>
        <div id="Paymet_btn_content">Add a new card</div>
      </div>
      <div className="Pay_with">
        <p>Pay with</p>
      </div>
      <div className="payment_mode">
        <div className="radio_btn"></div>
        <img src={"/images/PaymentComponentpaypal.png"} alt="paypal_img" />
        <p className="payment_content">Paypal</p>
      </div>
      <div className="Next_btn">
        <button className="NextButton" onClick={handleButtonClick}>Next</button>
      </div>
    </div>
  );
}


export default PaymentPage