import React, { useState, useEffect, useRef } from 'react'
import "./MyConfirmedTickets.css"
import TicketStyles from '../TicketStyles/TicketStyles'
import CircularNavbar from '../CircularNavbar/CircularNavbar'
import { useNavigate } from 'react-router-dom'

const MyConfirmedTickets = () => {
  const [showTicket, setShowTicket] = useState(false);
  const dropdownRef = useRef(null);
  let navigate=useNavigate()

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowTicket(false);
    }
  };

  const handleSelectClick = () => {
    setShowTicket(!showTicket);
  };
  return (
    <div className='My_confirmed_Tickets_parent'>
      <div className='My_confirmed_Tickets_parent_header arrowimg' onClick={()=>navigate("/events/all")}>
        <img src={"/images/MyConfirmedTicketsApplogo.png"} alt="applogo" />
        <p className='My_Confirmed_Tickets_content'>Confirmed Tickets</p>
      </div>
      <div className='My_Confirmed_Tickets_Search_Box'>
        <div className="My_Confirmed_Tickets_Payment_arrow_left" onClick={()=>navigate("/place")}>
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
        <div className='My_Confirmed_Tickets_Tag'>
          <input type="text" placeholder='Search Tickets' />
          <img src={"/images/MyConfirmedTicketsSearch.png"} alt="search_icon" />
        </div>
      </div>
      <div className='select-container' >

        <select name="Tours" className='Tours-Ticket' onClick={handleSelectClick}  ref={dropdownRef}>
          <option>Tours</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        {showTicket && <TicketStyles />}
        <select name="Concerts" id="">
          <option>Concerts</option>
          <option></option>
          <option></option>
        </select>

        <select name="Events" id="">
          <option>Events</option>
          <option></option>
          <option></option>
        </select>

        <select name="Dining Reservations" id="">
          <option>Dining Reservations</option>
          <option></option>
          <option></option>
        </select>
      </div>

      <CircularNavbar></CircularNavbar>

    </div>
   
  )
}

export default MyConfirmedTickets