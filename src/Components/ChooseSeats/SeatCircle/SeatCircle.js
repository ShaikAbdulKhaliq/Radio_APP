import { useState } from "react";

export default function SeatCircle({ color_selection, set_seats }) {
  // renders each small circle for each seat
  // changes color based on prop received

  let [seat_color, set_color] = useState(color_selection);

  function handleTouch() {
    set_color((color) => {
      if (color !== "booked-circle") {
        if (color === "circle") {
          set_seats((prev) => prev + 1);
          return "selected-circle";
        } else {
          return "circle";
        }
      }
    });
  }

  return (
    <div
      className={`seat ${seat_color}`}
      onClick={handleTouch}
    // onTouchEnd={handleTouch}
    ></div>
  );
}
