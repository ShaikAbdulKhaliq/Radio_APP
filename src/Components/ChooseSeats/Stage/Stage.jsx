import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Stage.css";

const Stage = () => {
  const [state, setState] = useState(true);
  const [showpopup, setShowPopup] = useState(false);
  const [terms, setTerms] = useState(false);
  const [backstage, setBackstage] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState(0); // New state to track selected seats count

  let navigate = useNavigate();

  const handleSwitch = () => {
    setState(prevState => !prevState);
    console.log("ok");
  }

  const handleShowPopup = () => {
    setShowPopup(prevState => !prevState);
    console.log("popup");
  }

  const showTermsCondition = () => {
    setTerms(prevState => !prevState);
    console.log("termsandconditionpopup");
  }

  const showBackstageAccess = () => {
    setBackstage(prevState => !prevState);
    setTerms(prevState => !prevState);
    console.log("backstage popup");
  }

  const handleSeatSelection = (seatCount) => {
    console.log(seatCount);
    setSelectedSeats(seatCount);
  }

  const handleRoute = () => {
    navigate("/seats");
  }

  const handleNextClick = () => {
    if (selectedSeats > 0) {
      showTermsCondition();
    }
  };

  return (
    <div className='Stage_Area_Parent'>
      <div className='Stage_Area_Parent_Sub_Header'>
        <div className='Stage_Area_Parent_Sub_Header_Arrow_Container' onClick={()=>navigate("/events/moredetails")}>
          <img src={"/svg/StageArrow Down.svg"} alt="Stage_left_Arrow" className='Stage_left_Arrow' />
        </div>
        <div className='Stage_Area_Parent_Sub_Header_Content'>
          <p className='Stage_Area_Parent_Sub_Header_Content_Bruno'>Bruno Mars Concert</p>
          <p className='Stage_Area_Parent_Sub_Header_Content_Date'>Dec 31, 2023 11:00PM</p>
        </div>
        <img src={"/svg/StageLine 23.svg"} alt="Big_line" className='Stage_Area_Parent_Sub_Header_big_line' />
      </div>
      <div className='Stage_Area_Parent_Switching_Area' onClick={handleSwitch}>
        <p className='Stage_Area_Parent_Switching_Area_Content'>{state ? "Switch to Map" : "Switch to List"}</p>
      </div>
      <img src={"/svg/StageGroup 484932.svg"} alt="StageAreaImg" className={state ? "StageAreaImg" : "StageAreaImgtop"}
        onClick={handleShowPopup} />
      {state ? (<div className='Stage_Area_Parent_Booking_Overview'>
        <div>
          <span style={{ backgroundColor: "#535353" }}></span>
          <p>Booked</p>
        </div>
        <div>
          <span style={{ backgroundColor: "#FFF" }}></span>
          <p>Available</p>
        </div>
        <div>
          <span style={{ backgroundColor: "#FF7009" }}></span>
          <p>Selected</p>
        </div>
      </div>) : (<div className='Stage_Area_Parent_Booking_Overview_top'>
        <div>
          <span style={{ backgroundColor: "#535353" }}></span>
          <p>Booked</p>
        </div>
        <div>
          <span style={{ backgroundColor: "#FFF" }}></span>
          <p>Available</p>
        </div>
        <div>
          <span style={{ backgroundColor: "#FF7009" }}></span>
          <p>Selected</p>
        </div>
      </div>)}
      {state && (
        <>
          <img src={"/svg/StageEmpty State.svg"} alt="Stage_Area_Parent_emptystate" className='Stage_Area_Parent_emptystate' />
          <p className='Stage_Area_Parent_emptystate_content'>You have not selected any space</p>
        </>
      )}
      {showpopup && (
        <div className='Stage_Area_NumberOfSeats_parent'>
          <p>How many seats?</p>
          <img src={"/svg/Stagecactus.svg"} alt="cactus" className='cactus_img' />
          <div className='Stage_Area_NumberOfSeats_seats_selections' >
            <span onClick={() => handleSeatSelection(1)}>1</span>
            <span className='selectNoOfSeat' onClick={() => handleSeatSelection(2)}>2</span>
            <span onClick={() => handleSeatSelection(3)}>3</span>
            <span onClick={() => handleSeatSelection(4)}>4</span>
            <span onClick={() => handleSeatSelection(5)}>5</span>
            <span onClick={() => handleSeatSelection(6)}>6</span>
          </div>
          <div className={`Stage_Area_NumberOfSeats_btn${selectedSeats > 0 ? '' : ' disabled'}`}
            onClick={handleNextClick}
            disabled={selectedSeats === 0}

          >
            Next
          </div>
        </div>
      )}
      {terms && (
        <div className='Stage_Area_NumberOfSeats_Terms_Condition'>
          <div className='Stage_Area_NumberOfSeats_Terms_Condition_Header'>
            <p>Terms and Conditions</p>
          </div>
          <div className='Stage_Area_NumberOfSeats_Terms_Condition_Rules'>
            <p>By accessing and using this website the user accepts and agrees to be bound by the Terms and Conditions. Users should check for current Terms and Conditions as these can be updated and changed.</p>
            <p>PVR means and includes all the brands working under the head of PVR Limited.</p>
            <p>User means the person accessing the website and availing the online booking facility.</p>
            <p>Customer includes all the patrons of PVR and also includes the user defined above.</p>
            <p>Website means www.pvrcinemas.com.</p>
            <p>Purchasing tickets online</p>
            <p>Children aged 3 years and above will require a separate ticket. Only UP Locations Ticket is compulsory for children of 5 years & above.</p>
            <p>The 3D glasses will be available at the cinema for 3D films and must be returned before you exit the premises. 3D Glasses are chargeable (refundable/non-refundable) as per individual cinema policies.</p>
            <p>Items like laptop, cameras, knives, lighter, matchbox, cigarettes, firearms, and all types of inflammable objects are strictly prohibited.</p>
            <p>Items like carry bags, eatables, helmets, handbags are not allowed inside the theaters are strictly prohibited. Kindly deposit at the baggage counter of mall/ cinema.</p>
            <p>Booking of Tickets</p>
            <p>The user must provide PVR with the correct information pertaining to the cardholder's name, card type, the card number, the card expiry date, and the security code on the back of the card (if any) in order to make payment to PVR Cinemas. The user shall be responsible for the correctness of the information provided and shall not be indemnified if the information is wrongly entered whether intentional or unintentional.</p>
            <p>The user must ensure the correctness of all details of the booking before finally booking their tickets as PVR will accept no responsibility and will not issue a refund for wrong bookings that are the fault of the user. If the user experiences problems with the booking process, they are to call the helpline number of PVR specified on the booking page. The Portal shall not cancel any bookings once the transaction is completed.</p>
            <p>Once the booking has been processed, the user will receive a confirmation e-mail to their e-mail address with all the relevant details of their booking. PVR is not responsible and will not issue a refund to the user for selecting the wrong tickets or if the user does not meet the minimum age requirements for that particular film. The online booking is non-transferable and cannot be further sold.</p>
            <p>To collect the tickets the user must present the credit/debit card that was used to book the tickets in that particular cinema. The user has to carry the print out of the confirmation mail. The user may procure the ticket from the automatic ticket collection points or they can present the print out to the PVR representative at the ticket counter of the concerned Cineplex. The user shall also carry proof of age for movies certified 'A'.</p>
            <p>Unless specified otherwise User is subscribed to PVR & PVR Partner promotions related communication through SMS & Email.</p>
            <p>Outside FnB is not allowed</p>
            <p>Cancellation of tickets</p>
            <p>The booking shall be deemed to be canceled in the following circumstances:-</p>
            <p>The booking is valid only for the viewing of the film at a specified multiplex of PVR. The booking shall become valueless and non-refundable if not used on the date specified on its face.</p>
            <p>If, in the opinion of a representative of the PVR, the user is in breach of these Online Booking Terms or is under the influence of drugs or alcohol, or that it is necessary for the safety or comfort or security of other customers or for the protection of property, the representative reserves the right to refuse the entry or request the Customer to leave the multiplex and may if necessary physically remove the Customer from the multiplex or physically restrain the Customer.</p>
            <p>PVR is required to abide by and enforce the age restrictions as specified by the Law for the time being in force. In the event that an authorized PVR representative is of the opinion that the user does not meet the minimum age requirement and the user cannot provide photographic proof that they are of the required age, PVR will not permit entry to that performance or film.</p>
            <p>The customer has an option to cancel the ticket booked online on www.pvrcinemas.com.., PVR mobile App, in.bookmyshow.com or BookMyShow App on the terms as mentioned herein-below. However, no ticket and F& B cancellation will be entertained once patron enters the cinema premises. This facility is currently only available in all theatres barring PVR Opulent.</p>
            <p>User shall not be allowed to cancel more than 5 booked tickets in one financial quarter. Post that their profile will be blocked from making further cancellations until the start of the next quarter.</p>
            <p>Users can contact PVR customer care for authentication to get their profiles unlocked.</p>
            <p>Unlocking may take up to 7 business days</p>
            <p>Terms of cancellation are as follows:</p>
            <p>Transaction can be canceled only after 10 minutes of booking the ticket/F&B.</p>
            <p>No cancellation will be allowed within 20 minutes and movie start time.</p>
            <p>For tickets canceled 2 hours before show start time, 75% of ticket value and 100% of F&B value will be refunded</p>
            <p>For tickets canceled from 20 mins to 2 hours before show start time, 50% of ticket value, 100% of F&B value will be refunded</p>
            <p>In case of F&B booking (without ticket) through any mode, there is no cancellation available.</p>
            <p>No refund will be given for booking done through or amount paid by M-coupon/Gift card/Star Pass/Voucher/Promo. Also, ticket cancellation cannot be applied/clubbed on a booking done through or an offer given by us or facilitate for business partner.</p>
            <p>No partial cancellation is allowed. The patron will have to cancel the complete transaction.</p>
            <p>Convenience fee and taxes applicable thereon will not be refunded in case of cancellation</p>
            <p>The refund for the canceled ticket will be processed in minimum 7 working days.</p>
            <p>In the event, a Member of the PVR Privilege Program (“Member”) cancels his/her booking whereon the voucher (earned on his/her spends) has been redeemed by the Member, the voucher shall be rolled back upon such cancellation and the voucher value shall be reinstated.</p>
            <p>Member shall be entitled to use the same voucher at any subsequent booking within the validity period of the said voucher in accordance with the PVR Privilege T&Cs.</p>
            <p>For further clarity, the aforesaid voucher roll back shall be subject to the validity of the same i.e. in the event, the voucher so applied is expiring on the day of the booking, the said voucher shall roll back however it’s validity shall reflect as ‘expired’.</p>
          </div>
          <div className='Stage_Area_NumberOfSeats_Terms_Condition_Btns'>
            <div className='Stage_Area_Cancal_btn' onClick={showTermsCondition}>Cancel</div>
            <div className='Stage_Area_Accept_btn' onClick={showBackstageAccess}>Accept</div>
          </div>
        </div>
      )}
      {backstage && (
        <div className='Stage_Area_NumberOfSeats_BackStage_Access'>
          <p className='Stage_Area_Backstage_Access_header'>Back Stage Access</p>
          <p className='Stage_Area_Backstage_Access_Description'>
            The Back Stage offers guests incredible views of the
            performance and meet the artist in an exclusive
            setup at  backstage .
          </p>
          <p className='Stage_Area_Backstage_Access_Queries'>What’s included?</p>
          <ul >
            <li>Elevated grandstand view</li>
            <li>Interactive entertainment</li>
            <li> Giant TV screens</li>
            <li> All-inclusive festival food with artisan traders, BBQ demos and open kitchens (service times apply)</li>
            <li>Huge, elevated deck and open bar serving complimentary beer, wines, cocktails and soft drinks</li>
            <li>WiFi</li>
          </ul>

          <div className='Stage_Area_NumberOfSeats_BackStage_Access_btn' onClick={handleRoute}>Next</div>
        </div>
      )}
    </div>
  );
}

export default Stage;
