import "./EventMoreDetails.css";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import BigjsonData from "../../../BigJsonData";
export default function EventMoreDetails() {
  let navigate = useNavigate();
  const [{ x }, set] = useSpring(() => ({
    x: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  let card_item = BigjsonData.concerts[2]
  console.log(card_item);
  const handleSwipeEnd = () => {
    // Add logic for booking tickets or any other action
    console.log('Book tickets!');
    navigate("/seats/stage")
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
    <div className="event-more-details-parent">
      <div className="event-more-details-logo-header">
        <div className="event-more-details-logo" onClick={()=>navigate("/events/all")}><img src={"/svg/ChooseSeatsarrow.svg"} alt="event-more-details-arrow" /></div>

        <div className="event-more-details-searchimg">
          <label htmlFor="showInput"></label>
          <input
            type="text"
            id="showInput"
            placeholder="Have a show in mind?"

          />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <g clip-path="url(#clip0_1045_13503)">
              <path d="M0.981347 9.40524C1.29169 10.1355 1.74282 10.7974 2.30899 11.3533C2.87516 11.9092 3.54528 12.3481 4.28108 12.6451C5.01688 12.942 5.80396 13.091 6.59737 13.0838C7.39079 13.0765 8.175 12.913 8.90524 12.6027C9.63547 12.2923 10.2974 11.8412 10.8533 11.275C11.4092 10.7089 11.8481 10.0388 12.145 9.30295C12.442 8.56715 12.591 7.78007 12.5838 6.98666C12.5765 6.19324 12.413 5.40903 12.1027 4.67879C11.7923 3.94855 11.3412 3.28659 10.775 2.7307C10.2089 2.17481 9.53874 1.73588 8.80294 1.43897C8.06713 1.14206 7.28006 0.992984 6.48664 1.00025C5.69323 1.00752 4.90901 1.171 4.17878 1.48134C3.44854 1.79168 2.78658 2.24282 2.23069 2.80899C1.6748 3.37516 1.23587 4.04528 0.938965 4.78108C0.642056 5.51688 0.492982 6.30396 0.500254 7.09737C0.507526 7.89079 0.671001 8.675 0.981347 9.40524Z" stroke="white" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.8125 11.3125L15.4985 15.9992" stroke="white" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1045_13503">
                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="event-more-details">
        <div className="all-events-tab-event-cards-row-1">
          {card_item?.genre}
          {/* Favorite heart svg */}
          {/* Include your heart SVG here */}
          <div className="all-events-tab-event-cards-row-1-price">
            $ {card_item?.price} onwards
          </div>
        </div>
        <div className="all-events-tab-event-cards-row-2">
          <span>{card_item?.artist_name}</span>
          <span>{card_item?.time}</span>
        </div>
        <div className="all-events-tab-event-cards-row-3">
          <span>{card_item?.venue}</span>
          <span>{card_item?.date}</span>
        </div>
        <div className="all-events-tab-event-cards-row-4">
          <div className="image image1">
            <img src={`${card_item?.artist_images[0]}`} alt="img" />
          </div>
          <div className="image image2">
            <img src={`${card_item?.artist_images[1]}`} alt="img" />
          </div>
          <div className="image image3">
            <img src={`${card_item?.artist_images[2]}`} alt="img" />
          </div>
        </div>
        <div className="artist-details">
          Fourteen-time Grammy-Award winner and 30-time Grammy Award nominee Bruno
          Mars is a celebrated singer, songwriter, producer, and musician who has
          sold over 200 million singles worldwide, making him one of the
          best-selling artists of all time.
        </div>
        <div className="event-more-details-row-1">
          <div className="event-more-details-row-part">
            {/* svg to render logo of people  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M6.33398 10.1667C6.33398 10.6087 6.50958 11.0326 6.82214 11.3452C7.1347 11.6577 7.55862 11.8333 8.00065 11.8333C8.44268 11.8333 8.8666 11.6577 9.17916 11.3452C9.49172 11.0326 9.66732 10.6087 9.66732 10.1667C9.66732 9.72464 9.49172 9.30072 9.17916 8.98816C8.8666 8.67559 8.44268 8.5 8.00065 8.5C7.55862 8.5 7.1347 8.67559 6.82214 8.98816C6.50958 9.30072 6.33398 9.72464 6.33398 10.1667Z"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M4.66797 15.8307V13.7774C5.7322 13.3708 6.86203 13.1629 8.0013 13.1641C9.17597 13.1641 10.2993 13.3807 11.3346 13.7774V15.8307"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M9.66797 3.4987C9.66797 3.94073 9.84356 4.36465 10.1561 4.67721C10.4687 4.98977 10.8926 5.16536 11.3346 5.16536C11.7767 5.16536 12.2006 4.98977 12.5131 4.67721C12.8257 4.36465 13.0013 3.94073 13.0013 3.4987C13.0013 3.27983 12.9582 3.0631 12.8744 2.86089C12.7907 2.65868 12.6679 2.47495 12.5131 2.32019C12.3584 2.16542 12.1747 2.04266 11.9724 1.9589C11.7702 1.87514 11.5535 1.83203 11.3346 1.83203C11.1158 1.83203 10.899 1.87514 10.6968 1.9589C10.4946 2.04266 10.3109 2.16542 10.1561 2.32019C10.0014 2.47495 9.87859 2.65868 9.79484 2.86089C9.71108 3.0631 9.66797 3.27983 9.66797 3.4987Z"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M14.6673 9.16667V7.11334C13.6031 6.70669 12.4733 6.49881 11.334 6.50001C10.6473 6.50001 9.97798 6.57401 9.33398 6.71467"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M3 3.4987C3 3.94073 3.17559 4.36465 3.48816 4.67721C3.80072 4.98977 4.22464 5.16536 4.66667 5.16536C5.10869 5.16536 5.53262 4.98977 5.84518 4.67721C6.15774 4.36465 6.33333 3.94073 6.33333 3.4987C6.33333 3.05667 6.15774 2.63275 5.84518 2.32019C5.53262 2.00763 5.10869 1.83203 4.66667 1.83203C4.22464 1.83203 3.80072 2.00763 3.48816 2.32019C3.17559 2.63275 3 3.05667 3 3.4987Z"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M1.33398 9.16667V7.11334C2.39822 6.70669 3.52804 6.49881 4.66732 6.50001C5.35398 6.50001 6.02332 6.57401 6.66732 6.71467"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            Age {card_item?.minimum_age}+
          </div>
        </div>
        <div className="event-more-details-row-2">
          <div className="event-more-details-row-part">
            {/* svg to render logo of car  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clip-path="url(#clip0_1045_13691)">
                <path
                  d="M3 14.832V15.832C3 15.9204 2.96488 16.0052 2.90237 16.0677C2.83986 16.1302 2.75507 16.1654 2.66667 16.1654H1.33333C1.24493 16.1654 1.16014 16.1302 1.09763 16.0677C1.03512 16.0052 1 15.9204 1 15.832V14.832"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.334 14.832V15.832C12.334 15.8758 12.3254 15.9192 12.3086 15.9596C12.2919 16 12.2673 16.0368 12.2364 16.0677C12.2054 16.0987 12.1687 16.1232 12.1282 16.14C12.0878 16.1567 12.0444 16.1654 12.0007 16.1654H10.6673C10.5789 16.1654 10.4941 16.1302 10.4316 16.0677C10.3691 16.0052 10.334 15.9204 10.334 15.832V14.832"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6673 14.832C12.7111 14.832 12.7544 14.8234 12.7949 14.8067C12.8353 14.7899 12.8721 14.7654 12.903 14.7344C12.934 14.7034 12.9585 14.6667 12.9753 14.6263C12.992 14.5858 13.0007 14.5425 13.0007 14.4987V12.3034C13.0006 12.2151 12.9656 12.1305 12.9033 12.068L11.6673 10.832H1.66732L0.431318 12.068C0.369005 12.1305 0.334003 12.2151 0.333984 12.3034V14.4987C0.333984 14.5871 0.369103 14.6719 0.431615 14.7344C0.494128 14.7969 0.578912 14.832 0.667318 14.832H12.6673Z"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.96668 7.5H3.22535C3.15867 7.49988 3.09348 7.51977 3.03822 7.55709C2.98296 7.5944 2.94015 7.64744 2.91535 7.70933L1.66602 10.8333"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.333984 13.5H3.33398"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 13.5H13"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 5.16536C7 6.31464 7.45655 7.41684 8.2692 8.22949C9.08186 9.04215 10.1841 9.4987 11.3333 9.4987C12.4826 9.4987 13.5848 9.04215 14.3975 8.22949C15.2101 7.41684 15.6667 6.31464 15.6667 5.16536C15.6667 4.01609 15.2101 2.91389 14.3975 2.10124C13.5848 1.28858 12.4826 0.832031 11.3333 0.832031C10.1841 0.832031 9.08186 1.28858 8.2692 2.10124C7.45655 2.91389 7 4.01609 7 5.16536Z"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.334 7.4987V2.83203H11.6673C12.0209 2.83203 12.3601 2.97251 12.6101 3.22256C12.8602 3.4726 13.0007 3.81174 13.0007 4.16536C13.0007 4.51899 12.8602 4.85813 12.6101 5.10817C12.3601 5.35822 12.0209 5.4987 11.6673 5.4987H10.334"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1045_13691">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            {card_item?.parking_available ? "Available" : "Not available"}
          </div>
          <div className="event-more-details-row-part">
            {/* svg to render logo of wheelchair */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clip-path="url(#clip0_1045_13702)">
                <path
                  d="M11.834 8.328V1"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.834 1H13.208C13.8153 1 14.3978 1.24127 14.8273 1.67073C15.2567 2.10018 15.498 2.68265 15.498 3.29C15.498 3.89735 15.2567 4.47982 14.8273 4.90927C14.3978 5.33873 13.8153 5.58 13.208 5.58H11.834"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.00195 2.75C3.00195 2.97981 3.04722 3.20738 3.13516 3.4197C3.22311 3.63202 3.35201 3.82493 3.51452 3.98744C3.67702 4.14994 3.86994 4.27884 4.08226 4.36679C4.29458 4.45473 4.52214 4.5 4.75195 4.5C4.98177 4.5 5.20933 4.45473 5.42165 4.36679C5.63397 4.27884 5.82689 4.14994 5.98939 3.98744C6.15189 3.82493 6.2808 3.63202 6.36874 3.4197C6.45669 3.20738 6.50195 2.97981 6.50195 2.75C6.50195 2.52019 6.45669 2.29262 6.36874 2.0803C6.2808 1.86798 6.15189 1.67507 5.98939 1.51256C5.82689 1.35006 5.63397 1.22116 5.42165 1.13321C5.20933 1.04527 4.98177 1 4.75195 1C4.52214 1 4.29458 1.04527 4.08226 1.13321C3.86994 1.22116 3.67702 1.35006 3.51452 1.51256C3.35201 1.67507 3.22311 1.86798 3.13516 2.0803C3.04722 2.29262 3.00195 2.52019 3.00195 2.75Z"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.57372 14.5608C7.23941 14.9705 6.82721 15.3098 6.36093 15.5591C5.89465 15.8085 5.38357 15.9629 4.85723 16.0135C4.33089 16.0641 3.79975 16.0098 3.29452 15.8538C2.78929 15.6978 2.32001 15.4432 1.91381 15.1047C1.50761 14.7662 1.17255 14.3505 0.928028 13.8816C0.683502 13.4128 0.534354 12.9002 0.489213 12.3733C0.444072 11.8465 0.503832 11.3159 0.665037 10.8124C0.826242 10.3088 1.08569 9.84214 1.42838 9.43945"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.734 14.6407L8.83395 12.3607C8.74066 12.2477 8.62355 12.1568 8.491 12.0945C8.35846 12.0321 8.21376 11.9999 8.06729 12H4.50195C4.23674 12 3.98238 11.8946 3.79485 11.7071C3.60731 11.5196 3.50195 11.2652 3.50195 11V7C3.50195 6.73478 3.60731 6.48043 3.79485 6.29289C3.98238 6.10536 4.23674 6 4.50195 6H7.04129C7.3065 6 7.56086 6.10536 7.74839 6.29289C7.93593 6.48043 8.04129 6.73478 8.04129 7C8.04129 7.26522 7.93593 7.51957 7.74839 7.70711C7.56086 7.89464 7.3065 8 7.04129 8H5.50195V10H8.06729C8.50723 9.99938 8.9419 10.0958 9.34027 10.2825C9.73865 10.4692 10.0909 10.7415 10.372 11.08L12.2726 13.3593C12.3568 13.4604 12.4202 13.577 12.4592 13.7025C12.4983 13.828 12.5123 13.9601 12.5003 14.091C12.4884 14.2219 12.4507 14.3492 12.3896 14.4656C12.3285 14.582 12.245 14.6852 12.144 14.7693C12.0429 14.8535 11.9263 14.9169 11.8008 14.9559C11.6752 14.995 11.5432 15.009 11.4123 14.997C11.2814 14.9851 11.1541 14.9475 11.0377 14.8863C10.9213 14.8252 10.8181 14.7417 10.734 14.6407Z"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1045_13702">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            {card_item?.ramp_accessible ? "Available" : "Not available"}
          </div>
        </div>
        <div className="event-more-details-row-3">
          <div className="event-more-details-row-part">
            {/* svg to render logo of ticket */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M15.6673 10.814C15.6697 10.7351 15.6435 10.6581 15.5937 10.5969C15.5439 10.5356 15.4737 10.4944 15.396 10.4807C14.9163 10.4159 14.4764 10.1793 14.1578 9.8148C13.8393 9.45033 13.6637 8.98273 13.6637 8.49867C13.6637 8.0146 13.8393 7.547 14.1578 7.18253C14.4764 6.81804 14.9163 6.58146 15.396 6.51667C15.4738 6.50307 15.544 6.46187 15.5939 6.40063C15.6437 6.3394 15.6698 6.26225 15.6673 6.18333V3.83333C15.6673 3.74493 15.6322 3.66014 15.5697 3.59763C15.5072 3.53512 15.4224 3.5 15.334 3.5H0.667318C0.578912 3.5 0.494128 3.53512 0.431616 3.59763C0.369103 3.66014 0.333984 3.74493 0.333984 3.83333V6.19067C0.334134 6.27077 0.36312 6.34813 0.41564 6.40861C0.468158 6.46909 0.540698 6.50863 0.619984 6.52C1.09672 6.58793 1.53294 6.82559 1.84852 7.18933C2.1641 7.55307 2.33785 8.01847 2.33785 8.5C2.33785 8.98153 2.1641 9.44693 1.84852 9.81067C1.53294 10.1744 1.09672 10.4121 0.619984 10.48C0.540698 10.4914 0.468158 10.5309 0.41564 10.5914C0.36312 10.6519 0.334134 10.7293 0.333984 10.8093V13.1667C0.333984 13.2551 0.369103 13.3399 0.431616 13.4024C0.494128 13.4649 0.578912 13.5 0.667318 13.5H15.334C15.4224 13.5 15.5072 13.4649 15.5697 13.4024C15.6322 13.3399 15.6673 13.2551 15.6673 13.1667V10.814Z"
                stroke="black"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0007 5.5H4.66732C4.48322 5.5 4.33398 5.64924 4.33398 5.83333V11.1667C4.33398 11.3507 4.48322 11.5 4.66732 11.5H10.0007C10.1847 11.5 10.334 11.3507 10.334 11.1667V5.83333C10.334 5.64924 10.1847 5.5 10.0007 5.5Z"
                stroke="black"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.33398 7.5H8.33398"
                stroke="black"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.33398 9.5H8.33398"
                stroke="black"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5007 5.33333C12.4086 5.33333 12.334 5.25871 12.334 5.16667C12.334 5.07462 12.4086 5 12.5007 5"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M12.5 5.33333C12.5921 5.33333 12.6667 5.25871 12.6667 5.16667C12.6667 5.07462 12.5921 5 12.5 5"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M12.5007 7.33333C12.4086 7.33333 12.334 7.25873 12.334 7.16667C12.334 7.07462 12.4086 7 12.5007 7"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M12.5 7.33333C12.5921 7.33333 12.6667 7.25873 12.6667 7.16667C12.6667 7.07462 12.5921 7 12.5 7"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M12.5007 10.0013C12.4086 10.0013 12.334 9.9267 12.334 9.83463C12.334 9.74257 12.4086 9.66797 12.5007 9.66797"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M12.5 10.0013C12.5921 10.0013 12.6667 9.9267 12.6667 9.83463C12.6667 9.74257 12.5921 9.66797 12.5 9.66797"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M12.5007 12.0013C12.4086 12.0013 12.334 11.9267 12.334 11.8346C12.334 11.7426 12.4086 11.668 12.5007 11.668"
                stroke="black"
                stroke-width="0.5"
              />
              <path
                d="M12.5 12.0013C12.5921 12.0013 12.6667 11.9267 12.6667 11.8346C12.6667 11.7426 12.5921 11.668 12.5 11.668"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            There is an overall {card_item?.ticket_limit} ticket limit for this
            event
          </div>
        </div>
        <div className="event-more-details-row-4">
          <div className="event-more-details-row-part">
            {/* svg to render logo of phone */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clip-path="url(#clip0_1045_13727)">
                <path
                  d="M6.05684 5.43425C6.34568 5.1449 6.50791 4.75276 6.50791 4.34392C6.50791 3.93507 6.34568 3.54294 6.05684 3.25358L4.42084 1.61958C4.13166 1.33042 3.73946 1.16797 3.33051 1.16797C2.92156 1.16797 2.52935 1.33042 2.24018 1.61958L1.34351 2.51692C0.966238 2.89359 0.730955 3.38922 0.677607 3.91966C0.624259 4.45011 0.756134 4.98266 1.05084 5.42692C3.69144 9.40151 7.09892 12.809 11.0735 15.4496C11.5179 15.7439 12.0504 15.8757 12.5808 15.8226C13.1111 15.7695 13.6069 15.5348 13.9842 15.1583L14.8808 14.2609C15.0241 14.1178 15.1377 13.9478 15.2153 13.7607C15.2928 13.5736 15.3327 13.3731 15.3327 13.1706C15.3327 12.9681 15.2928 12.7675 15.2153 12.5805C15.1377 12.3934 15.0241 12.2234 14.8808 12.0803L13.2455 10.4449C13.1024 10.3017 12.9324 10.188 12.7453 10.1105C12.5582 10.0329 12.3577 9.99303 12.1552 9.99303C11.9527 9.99303 11.7521 10.0329 11.565 10.1105C11.378 10.188 11.208 10.3017 11.0648 10.4449L10.5195 10.9903C8.69208 9.48638 7.01489 7.80874 5.51151 5.98092L6.05684 5.43425Z"
                  stroke="black"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1045_13727">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            {card_item?.phone_number}
          </div>
        </div>
        <div className="event-more-details-row-5">
          <div className="event-more-details-row-part">
            <img src={"/images/EventMoreDetailsticketmaster logo.png"} />
            ticketmaster.com
          </div>
        </div>
        <div className="event-more-details-row-6">
          Important - Bring Passport as proof of ID, drinks, backpacks, selfie
          sticks are strictly prohibited
        </div>
        <div className="event-more-details-row-7">
          <span className="venuandlocation">Venue & Location</span>
          {/* <img src={map} alt="map"/> */}
        </div>
        <div
          style={{
            width: '96%',
            height: '57px',
            position: 'absolute',
            top:"80vh",
            left:"1vh",
            overflow: 'hidden',
            borderRadius: '25px', // Half of the rectangle height
            background: 'linear-gradient(#456FB5, #032764)', // Background color of the button
            touchAction: 'none', // Disable browser's touch gestures
            padding: "6px 12px"
          }}
        >
          <animated.div
            style={{
              transform: x.to((val) => `translate3d(${val}px, 0, 0)`),
              width: '14%', // Width of the circle
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
            onClick={()=> navigate("/seats/stage")}
          >
            <img src={"/images/AudioExperience05.png"} alt="Arrow" className="swipe" style={{ width: "90%" }} /> {/* Replace ArrowImg with the actual image source */}
          </animated.div>
          <animated.div
            style={{
              position: 'absolute',
              top: '48%',
              left: '47%',
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(0.32125rem, -0.0002rem + 5.1428vw, 32.1425rem);',
              color: '#FFF',
            }}
          >
            Swipe to book tickets
          </animated.div>
        </div>

      </div>
    </div>

  );
}
