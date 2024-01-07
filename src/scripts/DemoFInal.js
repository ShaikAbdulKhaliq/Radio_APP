import {
  wait,
  simulateClick,
  simulateHover,
  simulateVerticalScroll,
  simulateHorizontalScroll,
  addClass,
  removeClass
} from "./helpers";

const QR_Code_id = "QR";
const PhoneInput = "inputPhNo";
const OtpInput = ".entry-page-otp-box";
const PhoneButton=".buttonTag-phone"
const OtpButton = ".buttonTag-otp";
const SaveandNextButton=".save-btn"
const InformationButton=".buttonTag"
const interestCards=".card-img-top"
const interestContainer="scrollable-image-style"
const eventCardContainer=".dashboard-cards-collection"
const expandedEventCard=".dashboard-cards-collection"
const eventCard=".dashboard-cards-collection-front-card"
const radioContainer=".radio-station-container"
const playerContainer=".player-container"
const backarrow=".arrowimg"
const CircularNavbar=".circular-nav-bar-closed"
const fevrateEventsTabIcon=".img"
const allEventsTabIcon=".img3"
const LetsGo=".event-pop"
const PopUpContainer=".dashboard-event-cards-Lets-go-popup"
const showDetailsImg=".showDetails"
const goBackDashboard=".EventDetails-logo"
const showNearByPop=".hover-image"
const NearByPop=".speech-box"
const ToursSlide=".Tours-Ticket"
const AgeCategoryContainer=".sort-container"
const CorouselEventCard=".all-events-tab-event-cards"
const scrollCardsContainer=".all-events-tab"
const ExpadedScrollableCards=".expanded"
const swipe=".swipe"
const selectSeatCount=".StageAreaImg"
const seatCount=".selectNoOfSeat"
const nextSeatButton=".Stage_Area_NumberOfSeats_btn"
const acceptTermsConditionButton=".Stage_Area_Accept_btn"
const NextButtonTermsCondition=".Stage_Area_NumberOfSeats_BackStage_Access_btn"
const seatCircle=".seat"
const chooseSeatConatainer=".choose-seats"
const GotoPaymentButton=".choose-seats-tickets-row-8"
const PaymentContainer="#payment_parent"
const FillPaymentButton=".NextButton"
const DonePaymentButton=".DonePayment"
export async function RunDemo() {


  await wait(2000);
  addClass(document.getElementById(QR_Code_id), "QR_Code_Hover");
  await wait(1000);
  removeClass(document.getElementById(QR_Code_id), "QR_Code_Hover");
  await wait(100);
  simulateClick(document.getElementById(QR_Code_id));



  await wait(3000);
  document.getElementById(PhoneInput).focus();
  await wait(1000);
  document.getElementById(PhoneInput).value = 12345678;
  await wait(1000)
  console.log(document.querySelector(PhoneButton))
  simulateHover(document.querySelector(PhoneButton), "buttonHover");
  await wait(1000)
  simulateClick(document.querySelector(PhoneButton));
  await wait(1000);



  let Otp_inputs = document.querySelectorAll(OtpInput);
  for(let i=0;i<Otp_inputs.length;i++){
    addClass(Otp_inputs[i],"otpboxhover")
    Otp_inputs[i].innerHTML=i
    await wait(1000)
    removeClass(Otp_inputs[i],"otpboxhover")
  }
  await wait(1000)
  simulateHover(document.querySelector(OtpButton), "buttonHover");
  await wait(1000)
  simulateClick(document.querySelector(OtpButton));






  await wait(1000)
 console.log(document.querySelector(InformationButton))
  simulateHover(document.querySelector(InformationButton), "buttonHover");
  await wait(1000)
  simulateClick(document.querySelector(InformationButton));





  await wait(1000)
 let intersts= document.querySelectorAll(interestCards)
  simulateHover(intersts[2], "card-img-top-hover");
  await wait(2000)
  simulateHover(intersts[5],"card-img-top-hover");
  await wait(100)
  simulateVerticalScroll(document.getElementsByClassName(interestContainer)[0],400)
  await wait(1000)
  simulateVerticalScroll(document.getElementsByClassName(interestContainer)[0],0)
  simulateHover(document.querySelector(SaveandNextButton), "buttonHover");
  await wait(2000)
  simulateClick(document.querySelector(SaveandNextButton));
  
  



  await wait(1500)
  simulateHover(document.querySelector(eventCard), "eventcard-hover");
  await wait(1500)
  simulateClick(document.querySelector(eventCardContainer));



  await wait(1500)
  console.log(document.querySelector(expandedEventCard),"eventcard-hover");
  simulateHover(document.querySelector(expandedEventCard), "eventcard-hover");
  await wait(1500)
  simulateClick(document.querySelector(eventCardContainer));
  
//dtopalf
console.log(document.querySelector(".genre-card"));
  // await wait(1000)
  // simulateHover(document.querySelector(dashboardtophalf), "eventcard-hover");

  // await wait(1500)
  // simulateClick(document.querySelector(dashboardtophalf));


  await wait(1000)
  simulateHover(document.querySelector(playerContainer), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(radioContainer));
  await wait(1000)
  




  addClass(document.querySelector(backarrow),"backarrow-scale")
  await wait(1000)
  removeClass(document.querySelector(backarrow),"backarrow-scale")
  await wait(1000)
  simulateClick(document.querySelector(backarrow));
  await wait(1000)
  


  

  simulateHover(document.querySelector(LetsGo), "event-pop-hover");
  await wait(1000)
  simulateClick(document.querySelector(LetsGo));
  




  await wait(1000)
  simulateHover(document.querySelector(PopUpContainer), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(PopUpContainer));
  


  
  
  await wait(1000)
  simulateHover(document.querySelector(showDetailsImg), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(showDetailsImg));
  await wait(1000)




  addClass(document.querySelector(goBackDashboard),"backarrow-scale")
  await wait(1000)
  removeClass(document.querySelector(goBackDashboard),"backarrow-scale")
  await wait(1000)
  simulateClick(document.querySelector(goBackDashboard));
  await wait(1000)



  
  simulateHover(document.querySelector(CircularNavbar), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(CircularNavbar));
  


  


  await wait(1000)
  addClass(document.querySelector(fevrateEventsTabIcon), "circular-nav-bar-open-hover");
  await wait(1000)
  simulateClick(document.querySelector(fevrateEventsTabIcon));
  await wait(1500)





  addClass(document.querySelector(backarrow),"backarrow-scale")
  await wait(1000)
  removeClass(document.querySelector(backarrow),"backarrow-scale")
  await wait(1000)
  simulateClick(document.querySelector(backarrow));
  await wait(1000)






  simulateHover(document.querySelector(CircularNavbar), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(CircularNavbar));
  await wait(1000)




  
  addClass(document.querySelector(allEventsTabIcon), "circular-nav-bar-open-hover");
  await wait(1000)
  removeClass(document.querySelector(allEventsTabIcon), "circular-nav-bar-open-hover");
  await wait(1000)
  simulateClick(document.querySelector(allEventsTabIcon));
  await wait(1500)
  




  simulateHover(document.querySelector(showNearByPop), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(showNearByPop));
  await wait(1000)





  simulateHover(document.querySelector(NearByPop), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(NearByPop));
  await wait(1000)





  simulateHover(document.querySelector(swipe), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(swipe));
  await wait(100)
  





  simulateHover(document.querySelector(ToursSlide), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(ToursSlide));







  addClass(document.querySelector(backarrow),"backarrow-scale")
  await wait(1000)
  removeClass(document.querySelector(backarrow),"backarrow-scale")
  await wait(1000)
  simulateClick(document.querySelector(backarrow));
  await wait(1000)






  await wait(1000)
  simulateHover(document.querySelector(AgeCategoryContainer), "eventcard-hover");
  await wait(1000)
  simulateHorizontalScroll(document.querySelector(AgeCategoryContainer),200)
  await wait(1000)
  simulateHorizontalScroll(document.querySelector(AgeCategoryContainer),0)
  
  




  await wait(1000)
  simulateHover(document.querySelector(CorouselEventCard), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(CorouselEventCard));
  await wait(1000)






  simulateVerticalScroll(document.querySelector(scrollCardsContainer),500)
  await wait(1000)
  simulateHover(document.querySelectorAll(ExpadedScrollableCards)[2], "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(ExpadedScrollableCards));
  simulateClick(document.querySelector(ExpadedScrollableCards));






  await wait(1000)
  simulateHover(document.querySelector(swipe), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(swipe));
  await wait(100)






  simulateHover(document.querySelector(selectSeatCount), "eventcard-hover");
  await wait(1000)
  addClass(document.querySelector(selectSeatCount),"selected")
  await wait(1000)
  removeClass(document.querySelector(selectSeatCount),"selected")
  simulateClick(document.querySelector(selectSeatCount));

  await wait(1000)
  simulateHover(document.querySelector(seatCount), "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelector(seatCount));


  await wait(1000)
  simulateHover(document.querySelector(nextSeatButton), "buttonHover");
  await wait(1000)
  simulateClick(document.querySelector(nextSeatButton));
  await wait(1000)

  simulateHover(document.querySelector(acceptTermsConditionButton), "buttonHover");
  await wait(1000)
  simulateClick(document.querySelector(acceptTermsConditionButton));
  await wait(1000)

  simulateHover(document.querySelector(NextButtonTermsCondition), "buttonHover");
  await wait(1000)
  simulateClick(document.querySelector(NextButtonTermsCondition));
  await wait(1000)

  simulateHover(document.querySelectorAll(seatCircle)[6], "eventcard-hover");
  await wait(1000)
  simulateClick(document.querySelectorAll(seatCircle)[6]);
  await wait(1000)

  simulateVerticalScroll(document.querySelector(chooseSeatConatainer),200)
  await wait(1000)

  simulateHover(document.querySelector(GotoPaymentButton), "buttonHover");
  await wait(1000)
  simulateClick(document.querySelector(GotoPaymentButton));
  await wait(1000)





  simulateVerticalScroll(document.querySelector(PaymentContainer),100)
  await wait(1000)
  simulateHover(document.querySelector(FillPaymentButton), "buttonHover");
  await wait(1000)
  simulateClick(document.querySelector(FillPaymentButton));





  await wait(1000)
  simulateHover(document.querySelector(DonePaymentButton), "buttonHover");
  await wait(1000)
  simulateClick(document.querySelector(DonePaymentButton));
}
