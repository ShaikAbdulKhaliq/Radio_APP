import React from 'react'

import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom'
import "./AudioExperience.css"
const AudioExperience = () => {
  let navigate = useNavigate()
  const [{ x }, set] = useSpring(() => ({
    x: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const handleSwipeEnd = () => {
    // Add logic for booking tickets or any other action
    console.log('Book tickets!');
    navigate("/MyConfirmedTickets")
  };
  function handleMouseMove(e) {
    const mouseX = e.clientX;
    set({ x: mouseX });
  }

  function handleMouseUp() {
    // Remove event listeners when the mouse is released
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    handleSwipeEnd();
  }
  return (
    <div className='Audio_experience_Parent'>
      <div>
        <div className='Audio_experience_header'>
          <p>High Roller</p>
          <img src={"/images/AudioExperience01.png"} alt="expand_window" />
        </div>
        <div className='Audio_experience_body'>
          <p>High Roller is a 550-foot tall,
            520-foot diameter giant Ferris wheel on the Las Vegas Strip in Paradise, Nevada, United States.
            Owned and operated by Caesars Entertainment, it opened to the public on March 31,
            2014 as the world's tallest Ferris wheel.</p>
        </div>
        <div className='big_line'>
          <img src={"/images/AudioExperience02.png"} alt="line" />
        </div>
        <div className='Audio_btn'>
          <p>Audio Guide</p>
          <img src={"/images/AudioExperience03.png"} alt="play_Button" />
        </div>
        <div className='Ellipse_btn'>
          <img src={"/images/AudioExperience01.png"} alt="ellipse" />
          <p>The futuristic entertainment venue</p>
        </div>

      </div>
      <div>
        <div className="Swipe_Book_Ticket_card">
          <div><p className='Repeat_content_style'>Tickets</p></div>
          <div className='Repeat_parent_Styles'>
            <p className='Repeat_content_style'>Daytime </p>
            <p className='Repeat_content_style'>|</p>
            <p className='Repeat_content_style'>Daily 12PM to 4:59PM</p>
          </div>
          <div className='Membersandprice'>
            <div>
              <p className='Repeat_content_style'>Audlt</p>
              <p className='Repeat_content_style'>$23.50</p>
            </div>
            <div>
              <p className='Repeat_content_style'>Youth</p>
              <p className='Repeat_content_style'>$8.50</p>
            </div>
          </div>
          <div className='big_line'>
            <img src={"/images/AudioExperience02.png"} alt="line" />
          </div>
          <div className='Repeat_parent_Styles'>
            <p className='Repeat_content_style'>Night </p>
            <p className='Repeat_content_style'>|</p>
            <p className='Repeat_content_style'>Daily 6AM to 12AM</p>
          </div>
          <div className='Membersandprice'>
            <div>
              <p className='Repeat_content_style'>Audlt</p>
              <p className='Repeat_content_style'>$34.75</p>
            </div>
            <div>
              <p className='Repeat_content_style'>Youth</p>
              <p className='Repeat_content_style'>$24.50</p>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              height: '54px',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '25px', // Half of the rectangle height
              background: 'linear-gradient(#456FB5, #032764)', // Background color of the button
              margin: '2% 0%', // Optional margin
              touchAction: 'none', // Disable browser's touch gestures
              padding: "6px 12px"
            }}
          >
            <animated.div
              style={{
                transform: x.to((val) => `translate3d(${val}px, 0, 0)`),
                width: '13%', // Width of the circle
                height: '75%', // Full height of the rectangle
                borderRadius: '25px', // Half of the rectangle height
                background: '#fff', // Color of the circle
                cursor: 'grab', // Set cursor to grab to indicate it's draggable
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black', // Color of the arrow
                fontSize: '30px', // Font size of the arrow
              }}
              className="swipe"
              onMouseDown={(e) => {
                // On mouse down, start tracking mouse movements
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
                console.log('ok');
              }}
              // Touch events for mobile devices
              onTouchStart={(e) => {
                e.preventDefault(); // Prevent default touch behavior
              }}
              onTouchMove={(e) => {
                const touchX = e.touches[0].clientX;
                set({ x: touchX });
              }}
              onTouchEnd={handleSwipeEnd}
              onClick={handleSwipeEnd}
            >
              <img src={"/images/AudioExperience05.png"} alt="Arrow" style={{ width: "90%" }} /> {/* Replace ArrowImg with the actual image source */}
            </animated.div>
            <animated.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(1rem, 0rem + 1.25vw, 3rem)',
                color: '#FFF',
              }}
            >
              Swipe to book tickets
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioExperience