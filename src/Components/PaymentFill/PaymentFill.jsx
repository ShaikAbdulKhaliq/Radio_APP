import { useNavigate } from "react-router-dom";
import "./PaymentFill.css"
const PaymentFill = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use navigate to go to a different route
    navigate('/TicketDetails');
    console.log("ok")
  };

  return (
    <div className="Payment_fill_parent" >
      <div id="payment_header">
        <div id="Payement_arrow_left" onClick={()=>navigate("/Payment")}>
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
      <div className="Card_Deatilas">
        <div className="Card_details_header">
          <p>Add a New Card Method</p>
        </div>
        <input type="text" placeholder="Card Number" id="Card Number" className="paymentfill_details" />
        <div className="payment_fill_Sub_Details">
          <input type="text" placeholder="Valid Through (MM/YY)" id="Valid_Through" className="paymentfill_details" />
          <input type="text" placeholder="CVV" id="CVV" className="paymentfill_details" />
        </div>
        <input type="text" placeholder="Name on the card" id="Name_on_the_card" className="paymentfill_details" />
        <input type="text" placeholder="Card Nickname ( For easy identification )" id="Card_nickname" className="paymentfill_details" />
      </div>
      <div className="Save_Next_btn">
        <button className="DonePayment" onClick={handleButtonClick}>Save & Next</button>
      </div>
    </div>
  )
}

export default PaymentFill