// import { useState } from "react";
import "./App.css";
import MyTicketDetails from "./Components/MyTicketDetails/MyTicketDetails";
import Dashboard from "./Components/Dashboard/Dashboard";
import AllEventsTab from "./Components/AllEventsTab/AllEventsTab";
import ChooseSeats from "./Components/ChooseSeats/ChooseSeats";
import EventDetails from "./Components/EventDetails/EventDetails";
import { Routes, Route } from "react-router-dom";
import PaymentFill from "./Components/PaymentFill/PaymentFill";
import MyConfirmedTickets from "./Components/MyConfirmedTickets/MyConfirmedTickets";
import TicketStyles from "./Components/TicketStyles/TicketStyles";
import AudioExperience from "./Components/AudioExperience/AudioExperience";
import PaymentPage from "./Components/PaymentComponent/PaymentPage";
import FavoriteEvents from "./Components/FavoriteEvents/FavotiteEvents";
import EntryPage from "./Components/Verification2/EntryPagePhone";
import EntryPageOtp from "./Components/Verification2/EntryPageOtp";
import EntryPageDetails from "./Components/Verification2/EntryPageDetails";
import EntryPageInterest from "./Components/Verification2/EntryPageInterest";
import EntryPageQr from "./Components/Verification2/EntryPageQr";
import Fav from "./Components/FavoriteEvents/FavotiteEvents";
import Station from "./Components/MiscSmallComponents/RadioChannels/stations"
import Stage from "./Components/ChooseSeats/Stage/Stage";
import EventMoreDetails from "./Components/EventDetails/EventMoreDetails/EventMoreDetails";
function App() {
  
  return (
    <div className="App">
      <Routes>
        {/* Nirbhay ======================================================  */}
        {/* <Route path="/" element={<NewUser />}></Route>
        <Route path="/otp" element={<OTP />}></Route>
        <Route path="/information" element={<Information />}></Route>
        <Route path="/interest" element={<Interest />}></Route> */}
        {/* Sayo ======================================================  */}
        <Route path="/" element={<EntryPageQr/>}></Route>
        <Route path="/phone" element={<EntryPage />}></Route>
        <Route path="/otp" element={<EntryPageOtp />}></Route>
        <Route path="/details" element={<EntryPageDetails />}></Route>
        <Route path="/interest" element={<EntryPageInterest />}></Route>

        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/events/all" element={<AllEventsTab />}></Route>
        <Route path="/events/details" element={<EventDetails />}></Route>
        <Route path="/events/moredetails" element={<EventMoreDetails />}></Route>
       
               
        <Route path="/seats" element={<ChooseSeats />}></Route>
        <Route path="/seats/stage" element={< Stage/>}></Route>
        {/* Shaik ======================================================  */}
         {/* Button on these will lead to next route: /Payment /FillPayment /TicketDetails  */}
        <Route path="/Payment" element={<PaymentPage />}></Route>
        <Route path="/FillPayment" element={<PaymentFill />}></Route>
        <Route path="/TicketDetails" element={<MyTicketDetails />}></Route>
        <Route
          path="/MyConfirmedTickets"
          element={<MyConfirmedTickets />}
        ></Route>
        <Route path="/TicketStyles" element={<TicketStyles />}></Route>
        <Route path="/AudioExperinence" element={<AudioExperience />}></Route> 
        {/* Chandini ======================================================  */}
        <Route path="/Favorites" element={<FavoriteEvents />}></Route>
        <Route path="/events/favorites" element={<Fav />}></Route>
        <Route path="/radiostations/radio" element={<Station />}></Route>
        <Route path="/place" element={<AudioExperience/>}></Route>

        
      </Routes>
    </div>
  );
}

export default App;
