import React from 'react'
import "./TicketStyle.css"
import BigjsonData from '../../BigJsonData'
const TicketStyles = () => {
    return (
          
        <div className='Ticket_style_parent'>
              {BigjsonData.ConfirmedTickets.map((ele)=>{
                return(
                    <>
                         <div className='My_Ticket_Micro_Details'>
                <div className='Ticket_styles_Micro_Detais_Parent'>
                    <div className='Ticket_styles_Micro_Detais_heading'>
                        <p>{ele.ConcertName}</p>
                    </div>
                    <div className='My_Ticket_Micro_Detais_Qr_code_timings'>
                        <div>
                            <img src={"/images/TicketStylesimage 86.png"} alt="qr_code" />
                        </div>
                        <div className='My_Ticket_Date_Timings'>
                            <div className='My_Ticket_Date'>{ele.Date}</div>
                            <div className='My_Ticket_Timings'>{ele.Time}</div>
                        </div>
                    </div>
                    <div className='img_line'>
                        <img src={"/images/TicketStylesLine 25.png"} alt="My_Ticket_line" />
                    </div>
                    <div className='My_Ticket_Booking_Id_Place'>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>Booking ID</div>
                            <div className='My_Ticket_Font_Styles2' >{ele.bookingid}</div>
                        </div>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>Pickup</div>
                            <div className='My_Ticket_Font_Styles2'>{ele.Place}</div>
                        </div>
                    </div>
                    <div className='My_Ticket_Booking_Id_Place'>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>Package</div>
                            <div className='My_Ticket_Font_Styles2' >Tour</div>
                        </div>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>Adults</div>
                            <div className='My_Ticket_Font_Styles2'>{ele.Audlts}</div>
                        </div>
                    </div>
                    <div className='My_Ticket_Booking_Id_Place'>
                        <div>
                            <div className='My_Ticket_Font_Styles1'>Mode of Payment</div>
                            <div className='My_Ticket_Font_Styles2' ><img src={"/images/TicketStylesmastercard.png"} alt="master_card" style={{ width: "38px", height: "22px" }} /></div>
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
           
        </div>

    )
}

export default TicketStyles