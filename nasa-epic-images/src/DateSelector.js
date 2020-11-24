import React from "react";

function DateSelector({ availableDatesArray }) {
  // Handle date change
  const handleOnchange = () => {
    // Get new date json file
    // Show images for new date
  };

  return (
    <div>
      <select name="" id="" onChange={handleOnchange}>
        {availableDatesArray.map((date) => {
          return <option value={date}>{date}</option>;
        })}
      </select>
    </div>
  );
}

export default DateSelector;
