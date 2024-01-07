import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./MyTicketDetails.css"
import BigjsonData from"../../BigJsonData"
const MyTicketDetails = () => {
   const navigate=useNavigate()
    return (
        <div className='My_Ticket_details_parent'>
            <div className="My_Ticket_header">
                <div className="My_Ticket_arrow_left" onClick={()=>navigate("/FillPayment")}>
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
                <p className="My_Ticket_para">My Ticket</p>
            </div>
            {BigjsonData.MyTicketDetails.map((ele,i)=>{
                return(
                    <>
                        <div className='My_Ticket_Micro_Detais' key={i}>
                <div className='My_Ticket_Micro_Detais_Parent'>
                    <div className='My_Ticket_Micro_Detais_heading'>
                        <p>{ele.ConcertName}</p>
                    </div>
                    <div className='My_Ticket_Micro_Detais_Qr_code_timings'>
                        <div>
                            <img src={"/images/MyTicketDetailsimage 86.png"} alt="qr_code" />
                        </div>
                        <div className='My_Ticket_Date_Timings'>
                            <div className='My_Ticket_Date'>{ele.Date}</div>
                            <div className='My_Ticket_Timings'>{ele.Time}</div>
                        </div>
                    </div>
                    <div className='img_line'>
                        <img src={"/images/MyTicketDetailsLine 25.png"} alt="My_Ticket_line" />
                    </div>
                    <div className='My_Ticket_Booking_Id_Place'>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>Booking ID</div>
                            <div className='My_Ticket_Font_Styles2' >{ele.bookingid}</div>
                        </div>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>place</div>
                            <div className='My_Ticket_Font_Styles2'>{ele.Place}</div>
                        </div>
                    </div>
                    <div className='My_Ticket_Booking_Id_Place'>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>Seats</div>
                            <div className='My_Ticket_Font_Styles2' >{ele.seats}</div>
                        </div>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>Adults</div>
                            <div className='My_Ticket_Font_Styles2' id="a22">{ele.Audlts}</div>
                        </div>
                    </div>
                    <div className='My_Ticket_Booking_Id_Place'>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>Mode of Payment</div>
                            <div className='My_Ticket_Font_Styles2' ><img src={"/images/MyTicketDetailsmastercard.png"} alt="master_card" style={{ width: "38px", height: "22px" }} /></div>
                        </div>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>Price</div>
                            <div className='My_Ticket_Font_Styles2'>{ele.price}</div>
                        </div>
                    </div>
                </div>
            </div>
                       
                    </>
                )
            })}
           
            <div className='My_Ticket_Download_btn'>
                <button>Download</button>
            </div>
        </div>
    )
}

export default MyTicketDetails